---
title: "Building Afterlight with Watchfire"
summary: ""
description: ""
categories: []
tags: []
date: 2026-05-26
draft: true
---

How [Watchfire](/posts/202605-watchfire/) orchestrated the build of [Afterlight](https://afterlight-web.vercel.app) — an anonymous, text-only grief support platform — from empty repo to a deployed Phase 0 landing page collecting waitlist signups.

## Outline

- What Afterlight is and why it needed to exist.
- Why a sensitive product like this benefitted from agent-driven development (focus on shape, not boilerplate).
- The phase plan: Phase 0 landing → MVP (posts, comments, reactions, reports, rooms).
- How tasks were broken down in Watchfire — turborepo scaffolding, Supabase auth, Resend emails, OAuth.
- The bits that needed human judgment (tone, copy, moderation philosophy, reaction types).
- What the dashboard looked like during the build.
- Lessons: AI is great at the "obvious" 80% — the remaining 20% is where Afterlight *is* Afterlight.
