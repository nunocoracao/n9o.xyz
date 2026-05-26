---
title: "Meet Gordon: Docker's AI Agent for Your Entire Container Workflow"
summary: "Gordon is now generally available — Docker's AI agent, built into Docker Desktop and the CLI, that reads your environment, traces failures, and takes action across your entire container workflow with explicit approval."
categories: ["External"]
tags: ["docker","blog","ai"]
externalUrl: "https://www.docker.com/blog/meet-gordon-dockers-ai-agent-for-your-entire-container-workflow/"
date: 2026-05-19
draft: false
---

Container workflows are full of small frictions that add up: build caches that invalidate at the worst time, services that can't find each other, images that work locally but crash in CI, and error messages that point to resources that no longer exist. General-purpose coding assistants are great at application logic, but they can't see your running containers, your logs, your compose files, or your machine's state. They only know what you paste in.

Gordon was built for exactly this gap. Today, Gordon is generally available — Docker's AI agent, purpose-built for container workflows, integrated into Docker Desktop and the CLI.

## What Gordon Does

Gordon reads your environment before you ask. It looks at logs, images, compose files, and running containers, traces failures back to their actual root cause, proposes a fix, and — with your approval — takes action across the Docker CLI and your filesystem.

A few of the things Gordon collapses from hours to minutes:

- **Debug broken containers** — "My container keeps exiting" → Gordon reads the logs, identifies the missing env var, bad base image, or misconfigured volume, and proposes a fix.
- **Containerize new apps** — "Containerize this app and set up a dev environment with Postgres" → Gordon writes the Dockerfile, the compose stack, and runs it.
- **Optimize Dockerfiles** — Multi-stage builds, layer reordering for better cache hits, slimmer base images, health checks.
- **Routine ops** — "Clean up unused images" → Gordon shows you the commands for approval, no flag lookups required.
- **Context queries** — Ask about running containers, disk usage, or images without memorizing Docker flags.
- **Learning in context** — Get Docker concepts explained against your actual setup, not a stale blog post.

## Where Gordon Lives

Gordon is integrated in two places:

- **Docker Desktop** — a dedicated tab with full environment context, plus contextual surfacing when problems appear.
- **CLI** — run `docker ai` from your terminal.

Available in Docker Desktop 4.74 and above.

## Approval-First by Design

Every action Gordon takes — every shell command, every file modification, every Docker operation — is shown to you for approval before it runs. Permissions are session-scoped and reset when the session closes. You can optionally enable auto-approve for trusted workflows. No code or personal data is stored, and AI providers don't retain your data. The underlying infrastructure is SOC 2 Type 2 attested and ISO 27001 certified.

## Gordon in the Stack

Gordon isn't a replacement for coding assistants like Cursor, Copilot, or Claude Code — it complements them. Those tools own application logic and new code generation. Gordon owns container workflows, infrastructure, debugging, and deployment. Together, they cover the full path from code to production without context switching.

## Pricing

Gordon is free with any Docker account, with usage limits that reset every few hours. For heavier use, Gordon Plus adds 2x capacity for $20/month, with plans scaling up to 20x.

## Get Started

1. Update Docker Desktop to 4.74 or later
2. Click the Gordon icon in the sidebar, or run `docker ai` in your terminal
3. Point it at a project and ask it something — "optimize my Dockerfile" is a good first prompt

Continue reading the original post on the [Docker Blog](https://www.docker.com/blog/meet-gordon-dockers-ai-agent-for-your-entire-container-workflow/).
