import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, "../../../.env") });

const API_BASE = "https://api.buttondown.com/v1";
const API_KEY = process.env.BUTTONDOWN_API_KEY;

if (!API_KEY) {
  console.error(
    "Error: BUTTONDOWN_API_KEY not set. Add it to .env in the project root."
  );
  process.exit(1);
}

const headers = {
  Authorization: `Token ${API_KEY}`,
  "Content-Type": "application/json",
  "X-Buttondown-Live-Dangerously": "true",
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Fetch all emails from Buttondown (handles pagination).
 * @returns {Promise<Array>} All email objects
 */
export async function listEmails() {
  const all = [];
  let url = `${API_BASE}/emails`;

  while (url) {
    const res = await fetch(url, { headers });
    if (!res.ok) {
      throw new Error(`listEmails failed: ${res.status} ${await res.text()}`);
    }
    const data = await res.json();
    all.push(...data.results);
    url = data.next;
  }

  return all;
}

/**
 * Create a draft email in Buttondown.
 * @param {{ subject: string, body: string }} params
 * @returns {Promise<object>} Created email object
 */
export async function createEmail(fields) {
  const res = await fetch(`${API_BASE}/emails`, {
    method: "POST",
    headers,
    body: JSON.stringify({ status: "draft", ...fields }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`createEmail failed: ${res.status} ${text}`);
  }

  return res.json();
}

/**
 * Update an existing email in Buttondown (e.g. to set publish_date).
 * @param {string} id - Buttondown email ID
 * @param {object} fields - Fields to update
 * @returns {Promise<object>} Updated email object
 */
export async function updateEmail(id, fields) {
  const res = await fetch(`${API_BASE}/emails/${id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify(fields),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`updateEmail failed: ${res.status} ${text}`);
  }

  return res.json();
}

/**
 * Wait between API calls to respect rate limits.
 */
export { sleep };
