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
  const slug = basename(dir);

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
 * Extract first ~300 words of cleaned content, truncated at paragraph boundary.
 */
function extractExcerpt(content, maxWords = 300) {
  const cleaned = cleanContent(content);
  const words = cleaned.split(/\s+/);
  if (words.length <= maxWords) return cleaned;

  const rough = words.slice(0, maxWords).join(" ");
  const lastParagraph = rough.lastIndexOf("\n\n");

  if (lastParagraph > rough.length * 0.4) {
    return rough.slice(0, lastParagraph).trim();
  }

  const lastSentence = rough.search(/[.!?]\s+[^.!?]*$/);
  if (lastSentence > rough.length * 0.4) {
    return rough.slice(0, lastSentence + 1).trim();
  }

  return rough.trim() + "...";
}

/**
 * Build the email body as a clean newsletter email.
 */
export function buildEmailBody(post) {
  const articleUrl = `https://n9o.xyz/posts/${post.slug}/`;
  const excerpt = extractExcerpt(post.content);

  const imageBlock = post.featureImage
    ? `<a href="${articleUrl}"><img src="${post.featureImage}" alt="${post.title}" style="width:100%;max-width:600px;border-radius:8px;margin-bottom:24px;" /></a>\n\n`
    : "";

  return `${imageBlock}${excerpt}

---

[Read the full article →](${articleUrl})
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
