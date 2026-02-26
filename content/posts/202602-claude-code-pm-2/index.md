---
title: "PMing with Claude Code: Chapter 2 - Data"
summary: "How adding the Snowflake CLI to Claude Code turned it into a PM data analyst - running SQL queries, comparing retention across product versions, and making sense of messy data fast."
description: "How adding the Snowflake CLI to Claude Code turned it into a PM data analyst - running SQL queries, comparing retention across product versions, and making sense of messy data fast."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow", "Snowflake", "data analysis"]
series: ["PMing with Claude Code"]
series_order: 2
date: 2026-02-26
draft: false
---

In chapter one, I wrote about setting up Claude Code as a PM command center - GitHub issues, Notion docs, local strategy files, all connected through one terminal. The biggest gap I called out? Data. I was manually exporting CSVs from Looker or Sigma and dropping them in a folder. It worked, but it was friction. That gap is closed now.

## The Missing Piece: SQL Access

The problem was never that Claude couldn't analyze data. Give it a CSV and it'll find patterns, summarize trends, draft observations. The problem was getting the data to Claude in the first place. Every time I needed fresh numbers, I had to open a browser, navigate to a dashboard, export a file, move it to the workspace. By the time Claude had the data, I'd already spent five minutes on something that should take five seconds.

The fix was obvious in hindsight: give Claude direct access to the data warehouse. Our analytics live in Snowflake, and Snowflake has a CLI. (Thanks for this Abhi!)

## Setting Up the Snowflake CLI

The [Snowflake CLI](https://docs.snowflake.com/en/developer-guide/snowflake-cli/index) (`snow`) is a command-line tool for interacting with Snowflake. Install it, configure a connection, and you can run SQL queries directly from the terminal. Which means Claude can run them too.

The connection config lives in `~/.snowflake/connections.toml`:

```toml
[my_org]
account = "your-account"
user = "your-user"
authenticator = "externalbrowser"
role = "ROLE_READONLY"
warehouse = "your-warehouse"
```

A few things worth noting. The `externalbrowser` authenticator means auth goes through your company's SSO. You authenticate once in the browser and the session persists. No API keys or passwords sitting in config files. And the role is read-only. Claude can query data but can't modify anything. Same philosophy as the GitHub permissions from chapter one: give the tool exactly the access it needs, nothing more.

Once the connection is set up, running a query is one command:

```bash
snow sql -c my_org -q "SELECT COUNT(*) FROM my_table" --format json
```

And then I asked claude to explore and document in `CLAUDE.md` some of the tables, schemas, and common query patterns. Once that was done, I've discuss some details on some computed values so that it factors that in in SQL. Claude happened to document something like this:

```markdown
## Snowflake Access
- CLI: `snow sql -c my_org -q "..." --format json`
- Role: read-only
- Key tables:
  - `MARTY.ENTITIES.L3_DIM_MOBIULE>__USER` - User dimension
  - `PREP.AI_SERVICE.L1_AI_TRACE` - API event traces
- The ATTRIBUTES column is a JSON variant with: username,
  planName, model, origin, gordonTag, token counts, cost, etc.
```

This is the same pattern from chapter one. `CLAUDE.md` gives Claude the context it needs to write correct queries without me having to explain the schema every time. And you don't need to write it, you can ask claude to capture whatever information you want.

## The Retention Analysis

Here's where it got interesting. I needed to understand week-one retention for our AI assistant across five different product versions. Each version had shipped with different features, different UX, different onboarding flows. The question was simple: which version retained users best in the first seven days?

In the old workflow, this would have been days of work and dependencies with other teams. Open Snowflake, figure out which version tags map to which releases, write the cohort query, run it, export it, stare at a spreadsheet, try to spot the pattern. Or ask a data analyst and wait for their queue to clear.

With Claude, I described what I needed in plain English:

> "Compare week 1 retention for Gordon across the last 5 major versions."

Claude already knew the schema from `CLAUDE.md`. It knew that `gordonTag` identifies the product version, that `EVENT_TIMESTAMP` tracks when events happened, and it knew how to identify users. It wrote the SQL, ran it through the Snowflake CLI, got the results, and formatted them into a comparison table.

And in less than 5min I had my results...

## What It's Good At (and What It's Not)

Let me be clear about what this does and doesn't replace.

**It does not build dashboards.** If you need a persistent, shareable visualization that updates daily, you still want Looker or Sigma or whatever your team uses. Claude answers questions. It doesn't create monitoring infrastructure.

**It does not replace your data team.** Complex data modeling, pipeline work, warehouse optimization - that's engineering work. Claude is running ad-hoc queries against existing tables, not building new data models.

**What it does is collapse the time between question and answer.** The PM workflow has always had this bottleneck: you think of a question, you figure out where the data lives, you write or request a query, you wait for results, you interpret them, you think of a follow-up question, and the cycle repeats. Each cycle might take minutes or days depending on whether you can self-serve.

With Claude + Snowflake CLI, the cycle is conversational. Question, query, result, follow-up - all in the same terminal session, all in seconds. The speed changes how you work. You ask more questions. You explore more hypotheses. You catch things you would have missed because the cost of checking is so low.

## The Compound Effect

The real power isn't any single integration. It's the combination. In one conversation, Claude can:

1. Pull the latest GitHub issues to see what shipped in each version
2. Query Snowflake to get retention data for those versions
3. Search Notion for the product decisions behind each release
4. Cross-reference everything and draft a summary

That's four tools, four different data sources, synthesized in one conversation. The context carries through. When Claude finds that version X had a retention dip, it can immediately check the GitHub issues to see what changed in that release, then look up the Notion doc to understand the reasoning. No tab switching, no copying data between tools.

This is what I meant in chapter one about Claude being a workflow hub, not just an AI assistant. Each new integration multiplies the value of every existing one.

## Updated Setup

For reference, here's what the workspace looks like now:

```
pm-workspace/
├── CLAUDE.md                # Workflow conventions, templates, Snowflake schemas
├── .claude/
│   └── settings.local.json  # Permissions: gh, snow sql, MCP servers
├── docs/                    # Strategy docs, analysis, specs
├── data_reports/            # Exported data (still useful for large datasets)
└── roadmap.md               # Living roadmap document
```

And the permissions have grown:

```json
{
  "permissions": {
    "allow": [
      "Bash(gh issue list*)",
      "Bash(gh issue view*)",
      "Bash(gh issue create*)",
      "Bash(gh project*)",
      "Bash(gh api*)",
      "Bash(snow sql*)"
    ]
  }
}
```

One new line. That's all it took to go from "manually export CSVs" to "ask Claude to query the warehouse directly."

## What's Next

The `data_reports/` folder isn't obsolete. For large datasets or complex visualizations, exporting still makes sense. But for the daily PM questions - "how's retention trending?", "what's the usage split by plan?", "how many users hit this feature last week?" - I never open a browser anymore.

The remaining gaps from chapter one are shrinking. Notion is connected via MCP. GitHub is connected via CLI. Snowflake is connected via CLI. The ones still missing: Google Docs (no MCP yet), Slack (MCP exists but I haven't set it up), and calendar integrations. Each one I add makes the whole system more useful.

If you're a PM sitting on a data warehouse with CLI access, this is the highest-leverage thing you can add to your Claude Code setup. The queries Claude writes aren't always perfect on the first try. But the iteration loop is so fast that it doesn't matter. Three imperfect queries in thirty seconds beats one perfect query that takes an hour to write.

The point isn't perfection. It's speed to insight.
