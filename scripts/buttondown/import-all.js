#!/usr/bin/env node

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { getAllPosts, buildEmailPayload } from "./lib/post-parser.js";
import { listEmails, createEmail, updateEmail, sleep } from "./lib/buttondown-client.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = resolve(__dirname, "../../content/posts");
const DRY_RUN = process.argv.includes("--dry-run");

if (DRY_RUN) {
  console.log("=== DRY RUN — no API calls will be made ===\n");
}

// 1. Get all published posts
const posts = getAllPosts(CONTENT_DIR);
console.log(`Found ${posts.length} published posts.\n`);

// 2. Get existing Buttondown emails for dedup
let existingSubjects = new Set();
if (!DRY_RUN) {
  console.log("Fetching existing Buttondown emails...");
  const existing = await listEmails();
  existingSubjects = new Set(existing.map((e) => e.subject));
  console.log(`Found ${existing.length} existing emails in Buttondown.\n`);
}

// 3. Create emails
let created = 0;
let skipped = 0;
let failed = 0;
const errors = [];

for (let i = 0; i < posts.length; i++) {
  const post = posts[i];
  const progress = `[${i + 1}/${posts.length}]`;

  if (existingSubjects.has(post.title)) {
    console.log(`${progress} Skipped (exists): "${post.title}"`);
    skipped++;
    continue;
  }

  if (DRY_RUN) {
    console.log(`${progress} Would create: "${post.title}" (${post.date})`);
    created++;
    continue;
  }

  try {
    const payload = buildEmailPayload(post, { status: "imported" });
    const email = await createEmail(payload);
    // Set the publish date to the original post date via PATCH
    if (post.date) {
      await updateEmail(email.id, {
        publish_date: `${post.date}T00:00:00Z`,
      });
    }
    console.log(`${progress} Created: "${post.title}" (${post.date})`);
    created++;
    await sleep(500);
  } catch (err) {
    console.error(`${progress} FAILED: "${post.title}" — ${err.message}`);
    errors.push({ title: post.title, error: err.message });
    failed++;
  }
}

// 4. Summary
console.log("\n=== Summary ===");
console.log(`Created: ${created}`);
console.log(`Skipped (already exist): ${skipped}`);
console.log(`Failed: ${failed}`);

if (errors.length > 0) {
  console.log("\nFailed posts:");
  for (const e of errors) {
    console.log(`  - "${e.title}": ${e.error}`);
  }
}

if (DRY_RUN) {
  console.log("\n(Dry run — no changes were made)");
}
