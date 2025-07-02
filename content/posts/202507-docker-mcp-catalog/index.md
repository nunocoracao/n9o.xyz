---
title: "The Docker MCP Catalog: the Secure Way to Discover and Run MCP Servers"
summary: "The Model Context Protocol (MCP) ecosystem is exploding. In just weeks, our Docker MCP Catalog has surpassed 1 million pulls, validating that developers are hungry for a secure way to run MCP servers. Today, we’re excited to share major updates to the Docker MCP Catalog, including enhanced discovery features and our new open submission process. With hundreds of developers already requesting to publish their MCP servers through Docker, we’re accelerating our mission to make containerized MCP servers the standard for secure AI tool distribution."
categories: ["External"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-mcp-catalog-secure-way-to-discover-and-run-mcp-servers/"
date: 2025-07-01
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

The Model Context Protocol (MCP) ecosystem is exploding. In just weeks, our Docker MCP Catalog has surpassed 1 million pulls, validating that developers are hungry for a secure way to run MCP servers. Today, we’re excited to share major updates to the Docker MCP Catalog, including enhanced discovery features and our new open submission process. With hundreds of developers already requesting to publish their MCP servers through Docker, we’re accelerating our mission to make containerized MCP servers the standard for secure AI tool distribution.

The rapid adoption of MCP servers also highlights a critical problem — the current practice of running them via npx or uvx commands exposes systems to unverified code with full host access, not to mention dependency management friction. In this post, we’ll explain why Docker is investing in the MCP ecosystem, showcase the new catalog capabilities, and share how you can contribute to building a more secure foundation for AI applications.

## Why Docker is building the MCP Catalog
### The security issues in MCP distribution
Every time a developer runs npx -y @untrusted/mcp-server or uvx some-mcp-tool, they’re making a dangerous trade-off: convenience over security. These commands execute arbitrary code directly on the host system with full access to:

- The entire file system
- Network connections
- Environment variables and secrets
- System resources

Some MCP clients limit environment variable access, but even that is not a universal practice. This isn’t sustainable. As MCP moves from experimentation to production, we need a fundamentally different approach.

### Docker’s unique position
Docker has spent over a decade solving exactly these problems for cloud-native applications. We’ve built the infrastructure, tools, and trust that developers rely on to run billions of containers in production. Now, we’re applying these same principles to the MCP ecosystem.

When you run an MCP server from our Catalog, you get:

- Cryptographic signatures verifying the image hasn’t been tampered with
- Software Bill of Materials (SBOMs) documenting every component
- Complete isolation from your host system
- Controlled access to only what the server actually needs

This isn’t about making life harder for developers—it’s about making security the path of least resistance.

## Introducing the enhanced MCP Catalog
### Built for MCP discovery
We’ve reimagined the MCP Catalog to make it more accessible and easier to navigate. You can still access the MCP Catalog from Docker Hub and the MCP Toolkit in Docker Desktop just like before, or go straight to the MCP catalog. We’ve gone beyond generic container image listings by building features that help you quickly find the right MCP servers for your AI applications.  

Browse by Use Case: MCP servers are organized by what they actually do:

- Data Integration (databases, APIs, file systems)
- Development Tools (IDEs, code analysis, testing)
- Communication (email, Slack, messaging platforms)
- Productivity (task management, calendars, note-taking)
- Analytics (data processing, visualization, reporting)

**Enhanced Search**: Find servers by capability, tools, GitHub tags, and categories — not just by name.

**Security Transparency**: Every catalog entry clearly shows whether it’s Docker-built (with transparent build signing and verification) or community-built (containerized and maintained by the publisher).

### How we classify MCP Servers: Built by Docker vs. community-built
**Docker-Built Servers**: When you see “Built by Docker,” you’re getting our complete security treatment. We control the entire build pipeline, providing cryptographic signatures, SBOMs, provenance attestations, and continuous vulnerability scanning.

**Community-Built Servers**: These servers are packaged as Docker images by their developers. While we don’t control their build process, they still benefit from container isolation, which is a massive security improvement over direct execution.

Tiers serve important roles: Docker-built servers demonstrate the gold standard for security, while community-built servers ensure we can scale rapidly to meet developer demand. Developers can change their mind after submitting a community-built server and opt to resubmit it as a Docker-built server.

Screenshot 2025-06-26 105434
Figure 3: An example of Built by Docker MCP Server.

## Open for MCP server submission: Join the secure MCP movement

{{< github repo="docker/mcp-registry" >}}


Starting today, we’re opening our submission process to the community. Whether you’re an individual developer or an enterprise team, you can feature your MCP servers on the Docker MCP Catalog. By publishing through our catalog, you’re not just distributing your MCP server — you’re helping establish a new security standard for the entire ecosystem while getting your MCP tools available to millions of developers already using Docker via Docker Hub and Docker Desktop. Your containerized server becomes part of the solution, demonstrating that production-ready AI tools don’t require compromising on security. 


Continue reading the original post on the [Docker Blog](https://www.docker.com/blog/docker-mcp-catalog-secure-way-to-discover-and-run-mcp-servers/).