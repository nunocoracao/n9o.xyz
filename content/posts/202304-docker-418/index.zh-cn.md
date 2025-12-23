---
title: "Docker Desktop 4.18"
summary: "我们一直在寻找改善您Docker体验的方法，无论您使用的是集成、扩展还是直接在产品中使用。Docker Desktop 4.18专注于命令行和Docker Desktop的改进。"
categories: ["外部"]
tags: ["docker","博客","发布"]
externalUrl: "https://www.docker.com/blog/docker-desktop-4-18/"
date: 2023-04-05
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

我们一直在寻找改善您Docker体验的方法，无论您使用的是集成、扩展还是直接在产品中使用。Docker Desktop 4.18专注于命令行和Docker Desktop的改进。

继续阅读了解Docker Scout中的新CLI功能，并了解Docker init，这是一个令人兴奋的CLI Beta功能，可帮助您快速将Docker添加到任何项目中。我们还回顾了帮助您更快开始使用Docker的新功能：Container File Explorer、无管理员权限macOS安装以及Docker Compose中的新实验性功能。

## Docker Scout CLI
在Docker Desktop 4.17中，我们引入了Docker Scout，这是一个提供镜像漏洞可见性和快速修复建议的工具。我们很高兴地宣布Docker Scout命令行中发布了几个新功能，它随Docker Desktop 4.18一起发布。这些更新是在收到大量社区反馈后推出的。

Docker Scout的4.18版本包括漏洞快速查看、直接在命令行上的镜像建议、使用BuildKit SBOM改进的修复指导，以及比较镜像的预览功能（想象使用diff，但用于容器镜像）。

## Quickview
假设您已经创建了一个新的容器镜像，并且想要评估其安全状态。您现在可以运行docker scout quickview来获得对镜像的即时、高级别安全洞察。如果发现任何问题，Docker Scout将指导您下一步该做什么。

## 命令行建议
如果您之前使用docker scout cves来了解镜像中存在哪些CVE，您可能想知道接下来该采取什么行动。通过新的docker scout recommendations命令，您会收到一个建议列表，直接建议基础镜像的可用更新。

docker scout recommendations命令分析镜像并显示刷新或更新基础镜像的建议，以及好处列表，包括减少漏洞的机会或如何实现更小的镜像大小。

## BuildKit来源和SBOM证明
2023年1月，BuildKit被扩展以支持使用证明构建镜像。这些镜像现在可以使用docker scout命令行来处理此信息并确定相关的后续步骤。我们可以支持这一点，因为docker scout命令行工具确切地知道您使用哪个基础镜像构建的，并可以提供更准确的建议。

如果镜像是使用附加的SBOM证明构建和推送的，docker scout会从SBOM证明中读取包信息，而不是创建新的本地SBOM。

要了解如何使用BuildKit构建带有证明的镜像，请阅读"Generating SBOMs for Your Image with BuildKit。"

## 比较镜像
注意：这是Docker Scout的实验性功能，可能会随时间变化和发展。

在完成漏洞修复后回顾性地记录为解决安全问题所做的更改被认为是一种良好的做法。Docker Desktop 4.18引入了镜像比较的早期预览。

此功能突出显示两个镜像之间的漏洞差异以及包的比较情况。这些详细信息包括包版本、每个镜像中的环境变量等。此外，命令行输出可以设置为markdown格式。然后可以使用这些信息通过GitHub Actions在拉取请求中生成diff预览。

我们想知道您可以想象在什么场景中使用此diff功能。您可以通过打开Docker Desktop、导航到Images选项卡并选择"提供反馈"来做到这一点。

阅读文档以了解有关这些功能的更多信息。

## Container File Explorer
我们很高兴宣布的另一个功能是Container File Explorer的GA发布。当您需要检查或快速替换容器内的文件时，Container File Explorer将帮助您做到这一点——以及更多——直接从Docker Desktop的UI。

您不需要记住长CLI命令、摆弄docker cp命令上的长路径参数，或者因为您的容器根本没有shell来检查文件而感到沮丧。Container File Explorer提供了一个简单的UI，允许您：

- 检查容器文件系统
- 在主机和容器之间复制文件和文件夹
- 轻松拖放文件到容器
- 使用语法高亮快速编辑文件
- 删除文件

使用Container File Explorer，您可以在任何状态（已停止/运行中/已暂停/…）和任何容器类型下查看容器的文件，包括slim-containers/slim-images（没有shell的容器）。打开仪表板，转到Containers选项卡，打开容器操作菜单，检查您的文件：

## macOS无管理员安装
我们调整了macOS安装流程，使开发人员可以非常容易地安装Docker Desktop而无需授予他们管理员权限。一些开发人员在安全要求较高的环境中工作，在这些环境中，他们的机器上可能禁止本地管理员访问。我们希望确保这些环境中的用户能够选择退出需要管理员权限的Docker Desktop功能。

macOS上的默认安装流程仍将请求管理员权限，因为我们认为这使我们能够为绝大多数开发人员用例提供优化的体验。授予管理员权限后，Docker Desktop会自动安装Docker CLI工具，使第三方库能够与Docker无缝集成（通过启用默认Docker套接字），并允许用户绑定到1到1024之间的特权端口。

如果您想更改安装时配置的设置，可以在Docker Desktop设置的高级选项卡中轻松完成。

## Docker init（Beta）
我们发布的另一个令人兴奋的Beta功能是docker init。这是一个新的CLI命令，可让您通过自动创建所需的资源快速将Docker添加到您的项目中：Dockerfile、Compose文件和.dockerignore。使用此功能，您可以轻松更新现有项目以使用容器运行，或者即使您不熟悉Docker也可以设置新项目。

您可以通过更新到最新版本的Docker Desktop（4.18.0）并在目标项目文件夹内的命令行中键入docker init来尝试docker init。docker init将创建在Docker中运行项目所需的所有文件。

请参阅docker init文档以了解更多信息。

docker init的Beta版本附带Go支持，Docker团队已经在努力在未来几个月添加更多语言和框架，包括Node.js、Python、Java、Rust和.Net，以及其他功能。如果您希望我们支持特定的语言或框架，请告诉我们。在我们的公共路线图中提交其他反馈和建议。

注意：请注意docker init不应与内部使用的docker-init可执行文件混淆，后者在使用docker run命令的–init标志时由Docker调用。请参阅文档以了解更多信息。

## Docker Compose File Watch（实验性）
Docker Compose有了新技巧！Docker Compose File Watch现在作为实验性功能提供，可在您工作时自动保持所有服务容器的最新状态。

(...)

配置后，新的docker compose alpha watch命令将开始监视项目中的文件编辑：

例如，对./web/App.jsx的更改，Compose将自动将其同步到容器内的/src/web/App.jsx。
同时，如果您修改package.json（例如通过安装新的npm包），Compose将重建镜像并用更新的版本替换现有服务。
Compose File Watch模式只是开始。自上次Docker Compose发布以来，我们已经提交了近100个commit，修复了bug并进行了许多生活质量改进。（特别感谢我们最近所有的首次贡献者！）

我们对Docker Compose File Watch感到兴奋，并正在积极开发底层机制和配置格式。

## 结论
这就是我们Docker Desktop 4.18更新的全部内容。此版本包括许多酷炫的新功能，包括一些您可以帮助塑造的功能！我们还更新了Docker Engine以解决一些CVE。一如既往，我们喜欢听到您的反馈。请在我们的公共GitHub路线图上留下任何反馈，并告诉我们您还想看到什么。

查看发行说明，了解Docker Desktop 4.18中新内容的完整分解。



{{< alert >}}
**注意：**此帖子最初是外部发布的，请访问[Docker博客](https://www.docker.com/blog/docker-desktop-4-18/)阅读完整帖子
{{< /alert >}}
