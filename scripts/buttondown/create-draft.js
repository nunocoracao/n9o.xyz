#!/usr/bin/env node

import { resolve } from "path";
import { statSync } from "fs";
import { parsePost, buildEmailPayload } from "./lib/post-parser.js";
import { createEmail } from "./lib/buttondown-client.js";

const arg = process.argv[2];

if (!arg) {
  console.error(
    "Usage: node create-draft.js <path-to-post-directory-or-index.md>"
  );
  process.exit(1);
}

// Resolve to index.md if a directory was given
let filePath = resolve(arg);
try {
  if (statSync(filePath).isDirectory()) {
    filePath = resolve(filePath, "index.md");
  }
} catch {
  console.error(`Error: path not found: ${arg}`);
  process.exit(1);
}

try {
  statSync(filePath);
} catch {
  console.error(`Error: file not found: ${filePath}`);
  process.exit(1);
}

const post = parsePost(filePath);

if (post.draft) {
  console.warn(`Skipping "${post.title}" — it is marked as draft.`);
  process.exit(0);
}

const payload = buildEmailPayload(post);

console.log(`Creating draft email for: "${post.title}"`);
console.log(`Slug: ${post.slug}`);
console.log(`Date: ${post.date}`);
console.log("---");

try {
  const result = await createEmail(payload);
  console.log(`Draft created successfully!`);
  console.log(`Buttondown email ID: ${result.id}`);
} catch (err) {
  console.error(`Failed to create draft: ${err.message}`);
  process.exit(1);
}
