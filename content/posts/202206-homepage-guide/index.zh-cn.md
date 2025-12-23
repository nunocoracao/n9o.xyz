---
title: "如何使用 Docker、Hugo 和 Firebase 免费创建我的个人主页"
description: "目前，有多种解决方案可以构建和托管您的个人网站。我想挑战自己，看看能否以与一些付费解决方案相同的功能集来实现，而且是免费的。以下是结果。"
summary: "目前，有多种解决方案可以构建和托管您的个人网站。我想挑战自己，看看能否以与一些付费解决方案相同的功能集来实现，而且是免费的。以下是结果。"
categories: ["开发", "教程"]
tags: ["Hugo", "Congo", "Docker", "VSCode"]
#externalUrl: ""
date: 2022-06-27
draft: false
---

## 简述

目前，有多种解决方案可以构建和托管您的个人网站。我想挑战自己，看看能否以与一些付费解决方案相同的功能集来实现，而且是免费的。以下是结果。

## 为什么产品经理要从头开始构建自己的主页…

几个月前，我决定要开始更多地写作，目的是：a）锻炼我的写作技能，b）获取对我一些想法的反馈。带着这个目标，我开始研究能够帮助我发布内容的工具/平台，同时不会给我或想要阅读我内容的人造成太多障碍，例如需要付费。最终我决定创建自己的网站。

我有几个想要尝试这样做的原因：

- 挑战自己，看看我这个曾经的软件工程学生是否还能拼凑出能用的东西，并为没有忘记所学的编程知识而感到欣慰，

- 找到一个灵活的免费解决方案，让我能够启动网站而无需立即投入资金，即避免那些会在未来束缚我的平台和服务的运营成本，

- 将我的内容托管在一个不需要人们付费阅读的地方，

- 体验 <a target="_blank" href="https://docs.docker.com/desktop/dev-environments/">Docker 的开发环境</a>和 <a target="_blank" href="https://github.com/microsoft/vscode-dev-containers">Microsoft 的开发容器</a>，以熟悉这两种解决方案。

## 让我们开始吧…

经过一些研究，我决定选择一个网站生成框架和一个免费托管服务。对于网站框架，我选择了 <a target="_blank" href="https://gohugo.io">Hugo</a> 并使用 <a target="_blank" href="https://github.com/jpanther/congoand">Congo</a> 作为主题，托管服务选择了 <a target="_blank" href="https://firebase.google.com">Firebase</a>。出于显而易见的原因，我决定使用 <a target="_blank" href="https://www.docker.com">Docker</a> 来设置我的开发环境，以便在这次实验中站在用户的角度。

我没有深入分析哪个框架最适合我的问题，因为我想快速推出一个 MVP，所以我浏览了几个选项并选择了第一个我喜欢的。还有其他几个选项具有与我选择的不同的功能和方法。如果你想探索其他选项，可以研究以下这些：<a target="_blank" href="https://docusaurus.io/">Docussaurus</a>、<a target="_blank" href="https://www.gatsbyjs.com/">Gatsby</a>、<a target="_blank" href="https://jekyllrb.com/">Jekyll</a>、<a target="_blank" href="https://ghost.org/">Ghost</a>，甚至 <a target="_blank" href="https://wordpress.com/">WordPress</a>。托管部分也是如此，虽然我选择了 <a target="_blank" href="https://firebase.google.com/">Firebase</a>，但还有其他解决方案如 <a target="_blank" href="https://pages.cloudflare.com/">Cloudflare Pages</a>、<a target="_blank" href="https://pages.github.com/">GitHub Pages</a>、<a target="_blank" href="https://www.digitalocean.com/">Digital Ocean</a>、<a target="_blank" href="https://www.netlify.com/">Netlify</a>、<a target="_blank" href="https://vercel.com/">Vercel</a> 等，你可以考虑探索。如果你对这个指南有任何建议，请随时联系我，我总是很高兴聊天和学习。


## 工具

在本指南中，我将使用以下工具，这些工具应该已安装在你的机器上。这里简要说明每个组件的用途以及安装说明的链接。

- **Docker** - 我将使用 Docker 为这个项目配置开发环境，这样我们可以跳过安装运行 Hugo 和 Firebase CLI 所需的所有软件的需要，即 cURL、Go、Hugo、Node、NPM 等。这将使你能够从 git 仓库开始，启动环境并直接开始编写代码，而不是花几个小时弄清楚如何为你的 CPU 架构安装特定的编译器。<a target="_blank" href="https://www.docker.com/get-started/">安装 Docker</a>

- **Visual Studio Code** - 我目前使用 Visual Studio Code 作为我的代码编辑器，指南中的所有材料都假设你正在使用它。如果你有不同的偏好，你需要调整本指南的某些部分以达到相同的结果。<a target="_blank" href="https://code.visualstudio.com/">安装 Visual Studio Code</a>

## 设置开发环境

让我们首先使用 <a target="_blank" href="https://www.docker.com">Docker</a> 配置你的开发环境。这将允许你创建一个包含所有所需工具的容器，而无需修改系统配置。此外，当你需要时，这也将更容易删除容器并重新构建它，而不是在个人机器上保留你每天不需要的旧版本软件。

{{< alert >}}
注意：如果你只想克隆一个包含最终骨架的仓库，请随时克隆<a target="_blank" href="https://github.com/nunocoracao/homepage-hugo-congo">这个仓库</a>并跳到部署部分


{{</ alert >}}

我将提供两种设置开发环境的方法，你可以选择你喜欢的一种或两种都尝试以探索它们之间的差异。两种选项都依赖于我构建的 `Dockerfile`，它使用 `klakegg/hugo:0.93.2-ubuntu` 作为基础镜像，虽然这不是 Hugo 的官方镜像（因为目前没有），但它是<a target="_blank" href="https://gohugo.io/getting-started/installing/#docker">他们网站上推荐的</a>。

### 使用 Docker

要启动开发环境，只需打开 Docker Dashboard 并选择左侧的"Dev Environments"标签。如果你没有设置任何开发环境，请选择"Create New Environment"，否则使用右上角的"Create"按钮。继续进行设置步骤。

<img src="/posts/202206-homepage-guide/devenvs/step2.webp"/>


在这里选择"Existing Git repo"选项并使用以下 GitHub URL：

```
https://github.com/nunocoracao/homepage-kickstart
```

{{< alert >}}
**注意：** 如果你在本地克隆了仓库，你也可以从本地文件夹开始
{{< /alert >}}

容器运行后，你应该会看到类似下面图片的内容。

<img style="float: left" width="50%" src="/posts/202206-homepage-guide/devenvs/step4.webp"/>
<img style="float: left" width="50%" src="/posts/202206-homepage-guide/devenvs/step5.webp"/>

在这两种情况下，你都可以看到并点击"Open in VSCode"按钮，这将打开编辑器并允许你开始工作。从那里打开终端并继续[创建网站骨架](#创建网站骨架)

### 使用 Visual Studio Code

首先克隆包含开发环境配置的 GitHub 仓库。

```
git clone https://github.com/nunocoracao/homepage-kickstart
```

此方法需要安装额外的 VSCode 扩展才能启动容器。请搜索 **Remote - Containers** 并安装扩展以继续本指南。

成功安装扩展后，在 VSCode 中打开你的源代码文件夹，然后打开左侧的"Remote - Containers"扩展面板。选择"Open Folder in Container"来启动一个包含开发环境的容器。

<img src="/posts/202206-homepage-guide/setup/extension.webp"/>

请等待几分钟，镜像正在构建中。Docker 正在创建一个包含网站开发所需所有软件的镜像。这只会在你第一次启动环境时发生。

<img src="/posts/202206-homepage-guide/setup/imagebuild.webp"/>


镜像构建完成后，VSCode 将启动容器并将你的工作环境放入其中（信息显示在窗口左下角）。你现在有了一个包含 Go、Hugo、Firebase CLI 以及本指南所需所有工具的开发环境。只需打开一个新终端，你就可以开始创建你的网站了。

<img src="/posts/202206-homepage-guide/setup/newterminal.webp"/>

### ...但我真的想在本地运行一切

如果你更喜欢或需要在本地运行环境，请按照以下指南安装你设置所需的一切：

- **Homebrew** - <a target="_blank" href="https://brew.sh/">安装 homebrew</a>
- **Hugo** - <a target="_blank" href="https://gohugo.io/getting-started/installing/">安装 Hugo</a>
- **Node.js 和 NPM** - <a target="_blank" href="https://nodejs.org/en/download/">安装 node.js 和 NPM</a>（更容易安装 Firebase CLI）
- **Firebase CLI** - <a target="_blank" href="https://firebase.google.com/docs/cli#install_the_firebase_cli">安装 Firebase CLI</a>

## 创建网站骨架

现在我们有了一个运行的开发环境，第一步是创建网站的基础版本。为此，让我们使用 **Hugo** 通过运行以下命令来生成我们需要的文件夹模板和配置文件（需要 `--force` 参数才能在非空目录中运行 Hugo）：

```
hugo new site . --force
```
这应该会在你的工作区内创建一组文件夹，你现在不需要担心它们。下一步是为 Hugo 安装一个主题。我选择了 <a target="_blank" href="https://github.com/jpanther/congo">Congo</a>，因为它具有我网站所需的所有功能，而且如果需要的话看起来很容易更改。如果你想尝试不同的主题，Hugo 的文档中有几个可用的主题，每个都有文档和示例。

使用 git submodules 安装 Congo，运行以下命令：

```
git submodule add -b stable https://github.com/jpanther/congo.git themes/congo
```

现在我们需要对目录和文件结构进行一些更改，以便 Congo 可以正常工作。我不会在本指南中详细介绍发生了什么（如果你想了解更多，可以查阅 Congo 的文档），主要内容是我们正在创建和配置 <code>config/_default/</code> 文件夹，它将包含 Hugo 和 Congo 的所有重要配置文件。

请按顺序运行以下命令：

```
mkdir -p config/_default
rm config.toml
cp themes/congo/config/_default/*.toml config/_default/
echo 'theme = "congo"' | cat - config/_default/config.toml > temp && mv temp config/_default/config.toml
```

恭喜，你的网站现在应该已经运行了。让我们通过运行 Hugo 的调试服务器来试试：

```
hugo server -D
```

请打开你喜欢的浏览器并导航到 <a target="_blank" href="http://localhost:1313">localhost:1313</a> 来查看你的页面。

<img src="/posts/202206-homepage-guide/theme/vanilla.webp"/>

你应该会看到类似上图的内容。看起来不那么令人兴奋，对吧？让我们在接下来的部分中配置主题并学习如何创建你的第一篇文章。


## 配置主题

现在我将介绍如何更改网站的外观和感觉，添加一些个人信息，并激活暗色模式切换（也就是当今任何网站中最重要的功能）。

{{< alert >}}
注意，我只介绍了这个主题的非常简单的配置，请查看 <a target="_blank" href="https://jpanther.github.io/congo/docs/">Congo 主题文档</a>以了解你可以用这个主题做的所有事情。
{{< /alert >}}

### 个人头像

让我们首先在你的网站上添加一个个人头像。在项目根目录创建一个名为"assets"的文件夹。选择一张个人头像并将其放入 assets 文件夹。本指南的其余部分将假设最终图片名为"profile.webp"，所以请重命名你的图片或在配置其他一些文件时考虑到这一点。

<figure>
 	<img src="/posts/202206-homepage-guide/configure/profile.webp"/>
  <figcaption>如果你还需要为此拍摄一张合适的精彩照片，请随时下载这张来继续教程。</figcaption>
</figure>



### 配置文件

让我们打开几个配置文件并开始更新它们。我们要更改的所有文件都在 <code>config/_default/</code> 文件夹内。

#### config.toml

取消注释 <code>baseURL</code> 参数并将其替换为你网站的最终域名。此值将用于创建 robots.txt 文件，以便任何搜索引擎成功抓取和索引你的网站。

<img src="/posts/202206-homepage-guide/configure/config.webp"/>

{{< alert >}}
注意：如果你想配置 Google Analytics，请在此文件中添加以下行并填入你的 id `googleAnalytics = "G-XXXXXX"`

{{</ alert >}}

#### languages.en.toml

此文件将驱动网站和页面作者（你）的主要信息。将 <code>title</code> 和 <code>description</code> 替换为你想要的页面内容，这些值将驱动 HTML 标题和描述标签。

在 <code>[author]</code> 块中，你可以更新你希望在个人资料中突出显示的详细信息。最基本的是 <code>name</code>、<code>image</code>、<code>headline</code> 和 <code>links</code>。对于 <code>links</code> 参数，不要忘记取消注释文件的最后一行，因为这是一个 json 数组。用你的个人链接更新每个条目。

<img src="/posts/202206-homepage-guide/configure/languages.webp"/>

#### params.toml

此文件定义了整个框架中的大部分整体行为。在本教程中，我更改了一些整体值和一个主页值，如果你想了解更多关于其他可用配置的信息，请查阅 <a target="_blank" href="https://jpanther.github.io/congo/docs/">Congo 主题文档</a>。

我将 <code>colorScheme</code> 更改为"ocean"，这会更改全局 UI 主题。Congo 定义了一个在整个主题中使用的三色调色板。有效值为 congo（默认）、avocado、ocean、fire 和 slate。虽然这些是默认方案，但你也可以创建自己的方案。请参阅主题的主要文档了解如何操作。

激活了 <code>showAppearanceSwitcher</code> 以启用明/暗模式切换。激活了 <code>enableSearch</code>，它在每次构建网站时索引所有未来的文章并提供简单的搜索功能。我还将 <code>[homepage]</code> 内的 <code>layout</code> 值更改为"profile"，这会改变登录页面的呈现方式。最后，这里最后一个有趣的值是 <code>showRecent</code>，打开时会在主页上显示最近的文章。

<img src="/posts/202206-homepage-guide/configure/params.webp"/>

### 最终效果

让我们看看效果如何，再次运行 Hugo：

```
hugo server -D
```

然后导航到 <a target="_blank" href="http://localhost:1313">localhost:1313</a>，你应该会看到类似下面页面的内容。

<img class="thumbnailshadow" src="/posts/202206-homepage-guide/configure/final.webp"/>

恭喜，看起来很棒，让我们学习如何生成你的第一篇文章。

## 如何生成文章

Hugo 提供了一些工具来生成你的文章（<a target="_blank" href="https://www.markdownguide.org/">markdown</a> 文件），其中已经包含一组基本标签。运行以下命令来创建你的第一篇文章

```
hugo new posts/my-first-post.md
```

将文件内容替换为以下内容：

```
---
title: "我的已发布文章"
date: 2022-06-19T20:10:29Z
draft: false
categories: ["已发布", "测试"]
tags: ["第一", "精彩"]
---

这是我的第一篇博客文章
```

这刚刚创建了你的第一篇博客文章。我们添加了几个分类和标签，Hugo 将在构建时对其进行索引。这些标签将用于自动为你创建网站的分类和标签部分。注意我已将 <code>draft</code> 更改为 false 以模拟已发布的文章。

运行以下命令创建你的第二篇文章

```
hugo new posts/my-draft-post.md
```
并将该文件的内容替换为以下内容：

```markdown
---
title: "我的草稿文章"
date: 2022-06-19T20:20:39Z
draft: true
categories: ["草稿", "测试"]
tags: ["第二", "精彩"]
---

这是我的第二篇博客文章
```
对于第二篇文章，我将 <code>draft</code> 参数保留为 true 以模拟草稿文章。

Hugo 自动从最终网站生成中隐藏草稿文章。你可以继续处理文章，将 draft 标签保持为 true，它们将被引擎忽略。如果你想在 DEBUG 模式下运行，只需使用命令：

```
hugo server -D
```

如果你转到网站上的文章，你应该能够看到两个条目。如果你然后在正常模式下运行服务器，草稿文章将消失。你可以使用以下命令来做到这一点：


```
hugo server
```

你可以使用此命令在生成最终构建之前测试网站或文章的最终版本。准备好后，只需使用'Hugo'命令在 /public 文件夹内生成最终网站。

```
hugo
```

所有文件都是用 <a target="_blank" href="https://en.wikipedia.org/wiki/Markdown">Markdown</a> 编写的，Hugo 然后用它来生成最终页面。我不会在本指南中教你如何编写 markdown 文件，但我可以推荐这个<a target="_blank" href="https://www.markdownguide.org/getting-started/">"入门"</a>教程和这个<a target="_blank" href="https://www.markdownguide.org/cheat-sheet/">"速查表"</a>来帮助你开始。

## 部署

好的，你已经配置了你的网站并创建了几篇文章，但我们仍然需要将其部署到某个地方。正如我之前提到的，我为本指南选择了 Firebase，虽然我知道它提供的远不止一个简单的托管服务，但它允许我免费托管我的网站而不用太麻烦。

### 创建 Firebase 项目

让我们首先访问 <a target="_blank" href="https://firebase.google.com">https://firebase.google.com</a> 并创建一个账户。完成后，你可以免费创建一个项目。这个过程应该很简单，完成后你应该在 Firebase 的项目仪表板中。

### 设置 Firebase

现在你可以回到你的环境，它已经安装了 Firebase CLI 工具并准备就绪。让我们首先使用以下命令进行身份验证：

```
firebase login
```
成功登录后，你需要初始化 firebase 的项目配置。为此请使用：

```
firebase init
```

该工具将为你提供多种不同的选项来配置你的 Firebase 项目。现在我们只想配置托管。如果你使用 GitHub，你可能需要考虑配置 GitHub action 部署，它可以在每次向特定分支推送或合并 pull request 时自动构建和部署你的网站。

<img src="/posts/202206-homepage-guide/deploy/firebasehosting.webp"/>

选择之前创建的 Firebase 项目作为托管目标。然后选择你希望的部署过程配置。这里重要的是最终文件将放置到服务器的文件夹，这是 <code>public</code> 文件夹。对于其他参数，你可以尝试最适合你用例的设置，下图显示了我的选择（*注意：在本教程中我没有配置 GitHub actions，但我在实际设置中使用了它*）。

<img src="/posts/202206-homepage-guide/deploy/firebaseconfig.webp"/>

### 部署

好的，现在是漫长而无聊的部署过程……开玩笑！一旦你准备好并且所有文件都由 <code>hugo</code> 命令生成在 public 文件夹中，只需使用以下命令进行部署：

```
firebase deploy
```

<img src="/posts/202206-homepage-guide/deploy/firebasedeploy.webp"/>

这个过程应该需要几秒钟，你的网站就部署好了。CLI 工具的最后一行会给你一个 URL 供你自己查看，否则你可以探索 Firebase 仪表板的托管部分，其中将有关于部署的更多信息。

<img src="/posts/202206-homepage-guide/deploy/final.webp"/>

## 结论

到目前为止，你应该有一个简单版本的网站，你可以根据自己的需要进行配置。这个解决方案的主要优势是它灵活且可扩展以满足各种不同的需求，特别是如果你花时间探索 Hugo 的主题目录。确实，实现复杂功能可能需要一些编码，但我猜这解决了几乎所有人的问题。

最重要的是，如果你正在寻找开始但又不能（或不想）花钱，这是一个完全免费的解决方案。希望本指南对你有帮助，请随时与你的网络分享并给我反馈，以便我随着时间的推移使其变得更好。

## 资源

- <a target="_blank" href="https://github.com/nunocoracao/homepage-kickstart">开发环境的 GitHub 仓库</a>
- <a target="_blank" href="https://github.com/nunocoracao/homepage-hugo-congo">Hugo 和 Congo 基础配置的 GitHub 仓库</a>
- <a target="_blank" href="https://github.com/nunocoracao/homepage-dockerimage">基础镜像的 GitHub 仓库</a>
- <a target="_blank" href="https://hub.docker.com/r/nunocoracao/homepage-dockerimage">Docker Hub 镜像 URL</a>
- <a target="_blank" href="https://gohugo.io/documentation/">Hugo 文档</a>
- <a target="_blank" href="https://github.com/jpanther/congo">Congo 文档</a>
- <a target="_blank" href="https://firebase.google.com/docs">Firebase 文档</a>
- <a target="_blank" href="https://www.markdownguide.org/">Markdown 指南</a>
- <a target="_blank" href="https://www.markdownguide.org/getting-started/">Markdown 入门</a>
- <a target="_blank" href="https://www.markdownguide.org/cheat-sheet/">Markdown 速查表</a>
