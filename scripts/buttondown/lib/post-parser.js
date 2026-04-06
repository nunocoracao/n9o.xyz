import { readFileSync, readdirSync, statSync } from "fs";
import { join, basename, resolve, dirname } from "path";
import matter from "gray-matter";

/**
 * Parse a single Hugo post index.md file.
 * @param {string} filePath - Absolute path to the index.md file
 * @returns {{ title: string, description: string, summary: string, date: string, draft: boolean, slug: string, content: string }}
 */
export function parsePost(filePath) {
  const raw = readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const dir = dirname(filePath);

  // Calculate the slug as the relative path from content/posts/ to the post directory.
  // This handles nested folders like 202604-vibe30/announcement correctly.
  const postsDir = filePath.replace(/^(.*)\/content\/posts\/(.*)\/index(?:\.[a-z-]+)?\.md$/, "$1/content/posts");
  const slug = dir.startsWith(postsDir + "/") ? dir.slice(postsDir.length + 1) : basename(dir);

  const summaryText =
    data.summary || data.description || content.slice(0, 200).trim() + "...";

  // Find feature image in the post directory
  let featureImage = null;
  try {
    const files = readdirSync(dir);
    const match = files.find((f) => /^feature\./i.test(f));
    if (match) {
      featureImage = `https://n9o.xyz/posts/${slug}/${match}`;
    }
  } catch {
    // no feature image
  }

  return {
    title: data.title || slug,
    description: data.description || "",
    summary: summaryText,
    date: data.date ? new Date(data.date).toISOString().split("T")[0] : "",
    draft: data.draft === true,
    slug,
    content,
    featureImage,
  };
}

/**
 * Get all published (non-draft) posts from the content directory.
 * @param {string} contentDir - Absolute path to content/posts/
 * @returns {Array} Sorted array of parsed posts (oldest first)
 */
export function getAllPosts(contentDir) {
  const postsDir = resolve(contentDir);
  const entries = readdirSync(postsDir);

  const posts = [];

  for (const entry of entries) {
    if (entry === "_index.md") continue;

    const entryPath = join(postsDir, entry);
    if (!statSync(entryPath).isDirectory()) continue;

    const indexFile = join(entryPath, "index.md");
    try {
      statSync(indexFile);
    } catch {
      continue;
    }

    const post = parsePost(indexFile);
    if (post.draft) continue;

    posts.push(post);
  }

  posts.sort((a, b) => (a.date || "").localeCompare(b.date || ""));
  return posts;
}

/**
 * Clean raw markdown/HTML content into plain readable paragraphs.
 * Strips HTML tags, markdown formatting, images, and links syntax.
 */
function cleanContent(content) {
  return (
    content
      // Remove Hugo shortcodes
      .replace(/\{\{[<|%].*?[>|%]\}\}/gs, "")
      // Remove HTML tags entirely
      .replace(/<[^>]+>/g, "")
      // Remove markdown images
      .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
      // Remove footnote references [^ref-1] and footnote definitions [^ref-1]:
      .replace(/\[\^[^\]]+\]:?/g, "")
      // Convert markdown links to just text: [text](url) → text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      // Remove markdown headings (## Title → Title)
      .replace(/^#{1,6}\s+/gm, "")
      // Remove bold/italic markers
      .replace(/\*{1,3}([^*]+)\*{1,3}/g, "$1")
      .replace(/_{1,3}([^_]+)_{1,3}/g, "$1")
      // Collapse multiple blank lines
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  );
}

/**
 * Extract body content as proper paragraphs, deduplicating against the summary.
 * Returns an array of paragraph strings.
 */
function extractParagraphs(content, summary, maxWords = 400) {
  const cleaned = cleanContent(content);

  // Split into paragraphs and filter empties
  const paragraphs = cleaned
    .split(/\n\n+/)
    .map((p) => p.replace(/\n/g, "<br>").trim())
    .filter((p) => p.length > 0);

  // Remove paragraphs that overlap significantly with the summary
  const summaryLower = (summary || "").toLowerCase();
  const filtered = paragraphs.filter((p) => {
    const pLower = p.toLowerCase();
    // Skip if the paragraph is mostly contained in the summary
    if (summaryLower.length > 20 && summaryLower.includes(pLower.slice(0, 60))) return false;
    if (pLower.length > 20 && pLower.includes(summaryLower.slice(0, 60))) return false;
    return true;
  });

  // Take paragraphs up to the word limit
  const result = [];
  let wordCount = 0;
  for (const p of filtered) {
    const pWords = p.split(/\s+/).length;
    if (wordCount + pWords > maxWords && result.length > 0) break;
    result.push(p);
    wordCount += pWords;
  }

  return result;
}

/**
 * Build the email body as a clean newsletter email with proper paragraphs.
 */
export function buildEmailBody(post) {
  const articleUrl = `https://n9o.xyz/posts/${post.slug}/`;
  const paragraphs = extractParagraphs(post.content, post.summary);

  const imageBlock = post.featureImage
    ? `<a href="${articleUrl}"><img src="${post.featureImage}" alt="${post.title}" style="width:100%;max-width:600px;border-radius:8px;margin-bottom:24px;" /></a>\n\n`
    : "";

  const summaryBlock = post.summary ? `*${post.summary}*\n\n` : "";

  const bodyParagraphs = paragraphs.join("<br><br>");

  return `${imageBlock}${summaryBlock}${bodyParagraphs}<br><br>...<br><br>---<br><br>[Read the full article →](${articleUrl})
`;
}

/**
 * Build the full Buttondown API payload for a post.
 * Used by both import-all.js and create-draft.js.
 */
export function buildEmailPayload(post, { status = "draft" } = {}) {
  return {
    subject: post.title,
    body: buildEmailBody(post),
    description: post.summary,
    image: post.featureImage || "",
    status,
  };
}
