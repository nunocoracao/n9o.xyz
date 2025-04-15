---
title: "Docker Desktop 4.18"
summary: "We’re always looking for ways to enhance your experience with Docker, whether you’re using an integration, extension, or directly in product. Docker Desktop 4.18 focuses on improvements in the command line and in Docker Desktop. "
categories: ["External"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-desktop-4-18/"
date: 2023-04-05
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

We’re always looking for ways to enhance your experience with Docker, whether you’re using an integration, extension, or directly in product. Docker Desktop 4.18 focuses on improvements in the command line and in Docker Desktop. 

Read on to learn about new CLI features in Docker Scout, and find out about Docker init, an exciting CLI Beta feature to help you quickly add Docker to any project. We also review new features to help you get up and running with Docker faster: Container File Explorer, adminless macOS install, and a new experimental feature in Docker Compose.

## Docker Scout CLI
In Docker Desktop 4.17, we introduced Docker Scout, a tool that provides visibility into image vulnerabilities and recommendations for quick remediation. We are delighted to announce the release of several new features into the Docker Scout command line, which ships with Docker Desktop 4.18. These updates come after receiving an overwhelming amount of community feedback. 

The 4.18 release of Docker Scout includes a vulnerability quickview, image recommendations directly on the command line, improved remediation guidance with BuildKit SBOM utilization, and a preview feature comparing images (imagine using diff, but for container images).

## Quickview 
Suppose that you have created a new container image and would like to assess its security posture. You can now run docker scout quickview for an instant, high-level security insight into your image. If any issues are found, Docker Scout will guide you on what to do next.

## Command-line recommendations
If you’ve previously used docker scout cves to understand which CVEs exist in your images, you may have wondered what course of action to take next. With the new docker scout recommendations command, you receive a list of recommendations that directly suggest available updates for the base image. 

The docker scout recommendations command analyzes the image and displays recommendations to refresh or update the base image, along with a list of benefits, including opportunities to reduce vulnerabilities or how to achieve smaller image sizes.

## BuildKit provenance and SBOM attestations 
In January 2023, BuildKit was extended to support building images with attestations. These images can now use the docker scout command line to process this information and determine relevant next steps. We can support this as the docker scout command-line tool knows exactly what base image you built with and can provide more accurate recommendations.

If an image was built and pushed with an attached SBOM attestation, docker scout reads the package information from the SBOM attestation instead of creating a new local SBOM.

To learn how to build images with attestations using BuildKit, read “Generating SBOMs for Your Image with BuildKit.” 

## Compare images
Note: This is an experimental Docker Scout feature and may change and evolve over time. 

Retrospectively documenting the changes made to address a security issue after completing a vulnerability remediation is considered a good practice. Docker Desktop 4.18 introduces an early preview of image comparison. 

This feature highlights the vulnerability differences between two images and how packages compare. These details include the package version, environment variables in each image, and more. Additionally, the command-line output can be set up in a markdown format. This information can then be used to generate diff previews in pull requests through GitHub Actions. 

We’d love to know what scenarios you could imagine using this diff feature in. You can do this by opening up Docker Desktop, navigating to the Images tab, and selecting Give feedback.

Read the documentation to learn more about these features. 

## Container File Explorer 
Another feature we’re happy to announce is the GA release of Container File Explorer. When you need to check or quickly replace files within a container, Container File Explorer will help you do this — and much more — straight from Docker Desktop’s UI. 

You won’t need to remember long CLI commands, fiddle with long path parameters on the docker cp command, or get frustrated that your container has no shell at all to check the files. Container File Explorer provides a simple UI that allows you to:

- Check a container file system
- Copy files and folders between host and containers
- Easily drag and drop files to a container
- Quickly edit files with syntax highlighting
- Delete files

With Container File Explorer, you can view your containers’ files at any state (stopped/running/paused/…) and for any container type, including slim-containers/slim-images (containers without a shell). Open the dashboard, go to the Containers tab, open the container action menu, and check your files:

## Adminless install on macOS
We’ve adjusted our macOS install flow to make it super easy for developers to install Docker Desktop without granting them admin privileges. Some developers work in environments with elevated security requirements where local admin access may be prohibited on their machines. We wanted to make sure that users in these environments are able to opt out of Docker Desktop functionality that requires admin privileges.

The default install flow on macOS will still ask for admin privileges, as we believe this allows us to provide an optimized experience for the vast majority of developer use cases. Upon granting admin privileges, Docker Desktop automatically installs the Docker CLI tools, enabling third-party libraries to seamlessly integrate with Docker (by enabling the default Docker socket) and allowing users to bind to privileged ports between 1 and 1024. 

If you want to change the settings you configured at install, you can do so easily within the Advanced tab of Docker Desktop’s Settings.

## Docker init (Beta)
Another exciting feature we’re releasing in Beta is docker init. This is a new CLI command that lets you quickly add Docker to your project by automatically creating the required assets: Dockerfiles, Compose files, and .dockerignore. Using this feature, you can easily update existing projects to run using containers or set up new projects even if you’re not familiar with Docker.

You can try docker init by updating to the latest version of Docker Desktop (4.18.0) and typing docker init in the command line while inside a target project folder. docker init will create all the required files to run your project in Docker. 

Refer to the docker init documentation to learn more.

The Beta version of docker init ships with Go support, and the Docker team is already working on adding more languages and frameworks, including Node.js, Python, Java, Rust, and .Net, plus other features in the coming months. If there is a specific language or framework you would like us to support, let us know. Submit other feedback and suggestions in our public roadmap.

Note: Please be aware that docker init should not be confused with the internally-used docker-init executable, which is invoked by Docker when utilizing the –init flag with the docker run command. Refer to the docs to learn more. 

## Docker Compose File Watch (Experimental)
Docker Compose has a new trick! Docker Compose File Watch is available now as an Experimental feature to automatically keep all your service containers up-to-date while you work.

(...)

Once configured, the new docker compose alpha watch command will start monitoring for file edits within your project:

On a change to ./web/App.jsx, for example, Compose will automatically synchronize it to /src/web/App.jsx inside the container.
Meanwhile, if you modify package.json (such as by installing a new npm package), Compose will rebuild the image and replace the existing service with an updated version.
Compose File Watch mode is just the start. With nearly 100 commits since the last Docker Compose release, we’ve squashed bugs and made a lot of quality-of-life improvements. (A special shout-out to all our recent first-time contributors!)

We’re excited about Docker Compose File Watch and are actively working on the underlying mechanics and configuration format.

## Conclusion
That’s a wrap for our Docker Desktop 4.18 update. This release includes many cool, new features, including some that you can help shape! We also updated the Docker Engine to address some CVEs. As always, we love hearing your feedback. Please leave any feedback on our public GitHub roadmap and let us know what else you’d like to see. 

Check out the release notes for a full breakdown of what’s new in Docker Desktop 4.18.



{{< alert >}}
**Note:** this post was originally posted externally please go to [Docker's blog](https://www.docker.com/blog/docker-desktop-4-18/) to read the full post
{{< /alert >}}

