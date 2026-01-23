---
title: "Product Managing in Claude Code"
summary: "How I set up Claude Code as my PM command center - connecting GitHub issues, Notion docs, and AI assistance in one workflow."
description: "How I set up Claude Code as my PM command center - connecting GitHub issues, Notion docs, and AI assistance in one workflow."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow"]
date: 2027-01-20
draft: true
---

Most AI tools are built for developers. Copilots that autocomplete code, agents that write tests, assistants that debug errors. But PM work - tracking roadmaps, writing specs, querying issues, synthesizing meeting notes - is just as ripe for AI assistance. The challenge is that PM work spans so many tools: GitHub for issues, Notion for docs, spreadsheets for prioritization, Slack for context. No single AI tool connects them all.

Until I started doing my PM work in Claude Code.

## Why Claude Code for PM?

Claude Code is Anthropic's CLI-based AI assistant. It runs in your terminal, which might seem like an odd choice for a PM who spends most of their day in browsers and video calls. But hear me out.

First, it lives where I already work. I'm constantly in the terminal - running git commands, checking deployments, tailing logs when debugging with engineers. Having Claude available in the same context means I don't context-switch between tools.

Second, the MCP (Model Context Protocol) system allows Claude Code to connect to external tools. GitHub, Notion, Linear, Slack - if there's an MCP server for it, Claude Code can query it. This turns a simple AI assistant into an actual workflow hub.

Third, the `CLAUDE.md` file gives Claude persistent context about how I work. My conventions, my templates, my preferences. Every conversation starts with Claude already knowing my workflow.

And finally, the permissions system keeps everything safe. I control exactly which commands Claude can run, which APIs it can call. No surprises.

## The Setup

My PM workspace is a simple repo structure:

```
pm-workspace/
├── CLAUDE.md              # Workflow conventions and templates
├── .claude/
│   └── settings.local.json  # Permissions and MCP config
└── roadmap.md             # Living roadmap document
```

The philosophy is documentation-first, with GitHub as the source of truth for execution. The repo contains my working docs and templates, Claude Code connects to GitHub for the actual issues and projects, and Notion holds the longer-form knowledge base.

The `CLAUDE.md` file is where the magic happens. It contains my conventions:

```markdown
# PM Workflow

## Conventions
- Epics use the `epic` label and follow naming: "[Epic] Feature Name"
- Roadmap items link to GitHub issues via `gh issue view`
- Quarterly goals are tagged with `Q1-2026`, `Q2-2026`, etc.

## Useful Commands
- List open epics: `gh issue list --label epic --state open`
- View project board: `gh project view 1 --owner myorg`
- Filter by quarter: `gh issue list --label Q1-2026`

## Templates
When creating roadmap items, use this structure:
- Problem: What user problem are we solving?
- Solution: High-level approach
- Success metrics: How do we know it worked?
- Dependencies: What blocks this?
```

This file loads automatically every time I start Claude Code in this directory. Claude already knows how I name things, where to find information, and what format I expect.

## Connecting the Tools

### GitHub CLI Integration

The GitHub CLI (`gh`) is the backbone of my setup. Claude Code can run shell commands, so I configure permissions to allow specific GitHub operations:

```json
{
  "permissions": {
    "allow": [
      "Bash(gh issue list*)",
      "Bash(gh issue view*)",
      "Bash(gh issue create*)",
      "Bash(gh project*)",
      "Bash(gh api*)"
    ]
  }
}
```

This grants Claude read and write access to issues and projects, but nothing else. No pushing code, no managing releases, no touching anything outside the PM workflow.

With this setup, I can ask Claude things like:

- "Show me all open epics for Q1"
- "What's the status of the authentication epic?"
- "Create a new issue for the dashboard redesign"
- "List all issues blocking the mobile release"

Claude translates my natural language into the right `gh` commands, runs them, and summarizes the results. For more complex queries, it can use the GitHub GraphQL API:

```bash
gh api graphql -f query='
  query {
    repository(owner: "myorg", name: "myrepo") {
      projectV2(number: 1) {
        items(first: 50) {
          nodes {
            content { ... on Issue { title state } }
            fieldValues(first: 10) { nodes { ... on ProjectV2ItemFieldSingleSelectValue { name } } }
          }
        }
      }
    }
  }
'
```

I don't have to remember this syntax. I just ask "what's in the Q1 project board?" and Claude figures out the query.

### Notion MCP

For longer-form docs - PRDs, meeting notes, decision logs - I use Notion. Claude Code supports MCP servers, which are external services that extend its capabilities. The Notion MCP server gives Claude read access to my workspace:

```json
{
  "mcpServers": {
    "notion": {
      "type": "url",
      "url": "https://mcp.notion.com/sse"
    }
  }
}
```

With this connected, I can ask Claude to search my Notion workspace for context. "What did we decide about the pricing model?" or "Find the PRD for user notifications" or "Summarize the last three product syncs."

The power is in the combination. Claude can query GitHub for issue status, then cross-reference with Notion docs for context, then help me draft an update that references both. One tool, multiple sources.

## The Workflow in Practice

Here's what a typical day looks like:

**Morning standup prep.** I open Claude Code and ask: "What issues were closed yesterday? Any new bugs filed?" Claude queries GitHub, summarizes the activity, and I've got my standup talking points in thirty seconds.

**Roadmap review.** "Show me all Q1 epics with their completion percentage." Claude pulls the project board data, calculates progress based on linked issues, and gives me a summary. If something looks off, I ask follow-up questions: "Why is the payments epic at 30%? What's blocking it?"

**Writing specs.** I start with a rough idea: "I need a roadmap item for adding two-factor authentication." Claude knows my template from `CLAUDE.md`, so it asks the right questions - what's the problem, who's affected, what's the scope - and drafts a structured doc. I edit, refine, and when it's ready, tell Claude to create the GitHub issue.

**Searching for context.** "What did we decide about rate limiting in the API?" Claude searches Notion for meeting notes and decision docs, finds the relevant discussion, and summarizes the outcome. No more digging through months of notes.

**End of day.** "Draft a summary of what shipped this week for the stakeholder update." Claude queries closed issues, groups them by epic, and drafts a readable summary. I review, tweak the framing, and send.

The templates in `CLAUDE.md` ensure consistent output. When I ask for a roadmap item, it always follows the same structure. When I ask for a weekly summary, it always includes the same sections. Consistency without the tedium.

## What's Next

This is still early days. I'm experimenting with what works and what doesn't. Some observations so far:

The read-heavy workflows are where Claude shines. Querying issues, searching docs, summarizing status - these used to take me ten minutes of clicking around, now they take thirty seconds. The write-heavy workflows need more human judgment. Claude can draft a spec, but I still need to think through the strategy.

There's potential for more integrations. Slack MCP for searching channel history. Linear MCP for teams that use it instead of GitHub. Calendar integration for scheduling context. The MCP ecosystem is growing, and each new server adds another data source Claude can tap.

The bigger picture is AI as PM co-pilot, not replacement. Claude doesn't make product decisions. It doesn't talk to customers or negotiate with stakeholders or feel the intuition that something is off. But it handles the mechanical parts of the job - the querying, the formatting, the searching, the drafting - so I can focus on the parts that actually require human judgment.

If you're a PM curious about AI tools, give Claude Code a try. Set up a simple workspace, connect GitHub, add your conventions to `CLAUDE.md`, and see how it fits your workflow. It's not about replacing your existing tools. It's about adding a layer of intelligence that connects them together.

And if you build something interesting, share your setup. I'd love to see how other PMs are using this.

---

*Written in Claude Code, of course.*
