import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const FETCH = 500;

// Match the theme's firebase.js formatting so the numbers on Highlights cards
// look identical to those on Recent.
function formatNumber(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function toggleLoaders(node) {
  const cls = node.className;
  if (!cls) return;
  cls.split(" ").forEach((c) => c && node.classList.toggle(c));
}

(async () => {
  const section = document.getElementById("highlights-section");
  const grid = document.getElementById("highlights-grid");
  const source = document.getElementById("highlights-source");
  if (!section || !grid || !source) return;

  // Critical: remove the source div from the live DOM synchronously, before
  // the theme's firebase.js (which runs its querySelectorAll inside its
  // signInAnonymously().then() callback) can see the duplicate views_* /
  // likes_* span IDs inside it. The `source` reference is still valid as a
  // detached DOM tree we can querySelector against.
  source.remove();

  const popularCount = parseInt(section.dataset.popularCount || "0", 10);
  const trendingCount = parseInt(section.dataset.trendingCount || "0", 10);
  const trendingSince = section.dataset.trendingSince || null;

  const removeSkeletons = () => {
    grid.querySelectorAll(".highlights-skeleton").forEach((el) => el.remove());
  };

  const failClose = () => {
    section.remove();
  };

  const configEl = document.getElementById("firebase-config");
  if (!configEl || !configEl.textContent) {
    failClose();
    return;
  }

  let app;
  try {
    const data = JSON.parse(configEl.textContent);
    app = getApps().length ? getApp() : initializeApp(data.config);
  } catch (e) {
    console.error("Highlights: Firebase init failed:", e);
    failClose();
    return;
  }

  const db = getFirestore(app);
  const auth = getAuth(app);

  try {
    await signInAnonymously(auth);
  } catch (e) {
    console.error("Highlights: anonymous sign-in failed:", e);
    failClose();
    return;
  }

  // Single Firestore query: pull every view-count doc once, ordered by views.
  // The result feeds both the ranking (which docs to show) AND the per-card
  // view-count display — no per-card onSnapshot listeners needed.
  let ranked;
  const viewsByDocId = new Map();
  try {
    const q = query(collection(db, "views"), orderBy("views", "desc"), limit(FETCH));
    const snap = await getDocs(q);
    ranked = [];
    snap.forEach((docSnap) => {
      const v = docSnap.data() || {};
      viewsByDocId.set(docSnap.id, typeof v.views === "number" ? v.views : 0);
      ranked.push(docSnap.id);
    });
  } catch (e) {
    console.error("Highlights: Firestore query failed:", e);
    failClose();
    return;
  }

  const placedIds = new Set();

  const placeFromRanked = (count, sinceDate) => {
    if (count <= 0) return 0;
    let placed = 0;
    for (const docId of ranked) {
      if (placed >= count) break;
      if (placedIds.has(docId)) continue;
      const card = source.querySelector('[data-doc-id="' + CSS.escape(docId) + '"]');
      if (!card) continue;
      if (sinceDate && card.dataset.date && card.dataset.date < sinceDate) continue;

      const clone = card.cloneNode(true);

      // Populate view counts on the clone directly from our pre-fetched data.
      // The span IDs in the theme's meta/views.html contain slashes (Hugo's
      // .File.Path is used verbatim), which Firestore would interpret as
      // path separators — but here we don't need to look them up at all.
      const viewCount = viewsByDocId.get(docId);
      clone.querySelectorAll('[id^="views_"]').forEach((span) => {
        span.removeAttribute("id");
        span.innerText = formatNumber(viewCount != null ? viewCount : 0);
        toggleLoaders(span);
      });
      // Strip likes IDs too; the site doesn't display likes on cards, but
      // duplicate IDs in the DOM still hurt accessibility.
      clone.querySelectorAll('[id^="likes_"]').forEach((span) => {
        span.removeAttribute("id");
      });

      grid.appendChild(clone);
      placedIds.add(docId);
      placed += 1;
    }
    return placed;
  };

  // Bucket 1: most viewed all-time
  placeFromRanked(popularCount, null);

  // Bucket 2: most viewed within the trending window, excluding bucket 1
  if (trendingCount > 0 && trendingSince) {
    placeFromRanked(trendingCount, trendingSince);
  }

  if (placedIds.size > 0) {
    removeSkeletons();
  } else {
    section.remove();
  }
})();
