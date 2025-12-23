---
title: "ノートパソコンでStable Diffusionを実行する方法"
description: "昨年、テキストの説明から画像を生成するいくつかの機械学習モデルが一般に公開されました。これはAI分野での興味深い発展でした。しかし、この技術が誰でも試せるようになったのはつい最近のことです。"
summary: "昨年、テキストの説明から画像を生成するいくつかの機械学習モデルが一般に公開されました。これはAI分野での興味深い発展でした。しかし、この技術が誰でも試せるようになったのはつい最近のことです。"
categories: ["テクノロジー","チュートリアル"]
tags: ["AI","Stable Diffusion","ニューラルネットワーク"]
#externalUrl: ""
date: 2022-10-06
draft: false
series: ["The New AI Hype"]
series_order: 3
---

昨年、テキストの説明から画像を生成するいくつかの機械学習モデルが一般に公開されました。これはAI分野での興味深い発展でした。しかし、これらのモデルのほとんどは、有効な倫理的理由からクローズドソースのままでした。そのため、何らかのインターフェースを通じてそれらとやり取りできますが、テストできることの数は限られていました。今までは...

これらのモデルの最新版はStable Diffusionで、<a href="https://stability.ai/" target="_blank">Stability AI</a>によって開発された、自然言語の説明からデジタル画像を生成するオープンな機械学習モデルです。このモデルは非常に人気があり、主にオープンソースで公開された最初のモデルだったからです。

私はすでに<a href="https://openai.com/dall-e-2/" target="_blank">Dall-E</a>と<a href="https://www.midjourney.com/home/" target="_blank">Midjourney</a>で遊んでいましたが、モデルをローカルで実行して、いろいろと自由に試してみたいと思いました。M1 ProとWindowsデスクトップの両方でモデルを正常にインストールして実行することができました。このガイドでは、Macですべてを動作させるために私がたどったステップを詳しく説明します。


## 初期ノート
始める前にいくつかのメモ。オンラインでいくつかのガイドを試しましたが、どれもスムーズな体験を得ることができませんでした。多くのリポジトリやソリューションなどを試す必要がありました。このガイドの主な目的は、M1でStable Diffusionを実行する方法の手順を提供することです。これは私が最も多くの課題を発見したものです。Windowsへのインストールははるかに簡単でした。

そうは言っても、私が最終的に使用したリポジトリにはすべてのプラットフォーム向けの詳細なガイドがあります：<a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_WINDOWS.md" target="_blank">Windows</a>、<a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_MAC.md" target="_blank">Mac</a>、<a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_LINUX.md" target="_blank">Linux</a>。別のプラットフォームを使用している場合や、このガイドがMacで機能しない場合は、それらを使用することをためらわないでください。

{{< alert >}}
*注：私は上記のMacガイドを試していません。このリポジトリを見つけたとき、モデルを動作させるために必要なワークアラウンドのほとんどをすでに把握していたからです。*
{{< /alert >}}


## コードを取得する

まず、コードを取得することから始めましょう。私は<a href="https://github.com/invoke-ai/InvokeAI" target="_blank">InvokeAIのStable Diffusionのフォーク</a>を使用しており、<a href="https://github.com/nunocoracao/InvokeAI" target="_blank">ここ</a>でフォークしました。お好みであれば、InvokeAIのオリジナルリポジトリを使用しても構いません。ガイドが時間を経ても更新され、動作し続けることを確保するために、私のフォークを使用します。このリポジトリを選んだ理由は、1) これが最初に動作させることができたもので、2) 全体とのやり取りをはるかに簡単にするWeb UIを持ついくつかのフォークの一部だったからです。

始めるには、リポジトリをローカルマシンにクローンします。

```bash
git clone https://github.com/nunocoracao/InvokeAI
```

## モデルを取得する

次に、ネットワークの重みを含む実際のモデルを取得する必要があります。これは、平均的なハードウェアを持つ普通のユーザーが競争することさえできない巨大なデータセットでの大規模な訓練サイクルの結果です。モデルはそのサイズ（約7.5 GB）のためにコードと一緒に配布されておらず、ユーザーがそのライセンスに準拠する必要があることを確保するためです。そこでHugging Faceが登場します。

<a href="https://huggingface.co/" target="_blank">Hugging Faceのサイト</a>に移動してログインするか、アカウントがない場合は作成してください。設定が完了したら、<a href="https://huggingface.co/CompVis/stable-diffusion-v-1-4-original" target="_blank">ここ</a>をクリックし、モデルカードの条件に同意して、`sd-v1-4-full-ema.ckpt`というファイルをダウンロードします。モデルをダウンロードした後、コードフォルダに移動し、`models/ldm/stable-diffusion-v1/`内に`model.ckpt`という名前で配置します。フォルダ`stable-diffusion-v1`は存在しないため、作成する必要があります。


{{< alert >}}
*注：探索できるモデルの他のバリアントがありますが、これは私が見たほとんどのリポジトリで推奨されているものです。*
{{< /alert >}}

## 環境のセットアップ

コードとモデルの準備ができたら、次のステップはすべてを実行するためのローカル環境をセットアップすることです。

### Xcodeをインストールする

最初のステップはXcodeをインストールすることです。これは開発者がAppleプラットフォーム向けのアプリを構築するために使用するツールのスイートです。XcodeはApp Storeからインストールするか、AppleのDeveloperサイトからダウンロードできます。

ドキュメントで定義されているように、コマンドラインツールパッケージは、Xcodeとは別にダウンロードできる小さな自己完結型のパッケージで、macOSでコマンドライン開発を行うことができます。

新規インストールの場合、または必要なものがすべてあることを確認するために、このコマンドで十分です：

```bash
xcode-select --install
```

### Condaをインストールする

私が見たほとんどのソリューションは、ソリューションを実行するために必要なパッケージと環境を管理するために<a href="https://docs.conda.io/projects/conda/en/latest/#" target="_blank">Conda</a>を使用しています。任意のプラットフォームにインストールするためのCondaのガイドは非常に明確なので、<a href="https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html#regular-installation" target="_blank">ここ</a>の指示に従うことをお勧めします。ソフトウェアには2つの_フレーバー_があります：AnacondaとMiniconda。Minicondaは成功しませんでした。最終的にAnacondaを使用し、これで経験していた問題のいくつかが解決されました。さらに、<a href="https://docs.conda.io/projects/conda/en/latest/user-guide/install/macos.html" target="_blank">このガイド</a>に従いました。設定が完了したら、このコマンドを使用してインストールを確認できます（_注：ターミナルアプリケーションを再起動することを忘れないでください_）：

```bash
conda
```

インストールプロセスが成功した場合、下の画像のようなものが表示されるはずです。

<img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/conda_result.webp"/>

{{< alert >}}
*注：`conda`は、次のステップで環境を作成するときに`python`と`pip`の両方のコマンドがターミナルで使用可能であることを要求します。Macではデフォルトがpython3とpip3であるため、おそらくエイリアスを作成する必要があります。*
{{</ alert >}}


### Rustをインストールする

他のガイドに従っているとき、プロセスの次の部分である環境の構築で常に問題が発生していました。多くの試行の後、システムにRustコンパイラが欠けていることがわかりました。<a href="https://www.rust-lang.org/tools/install" target="_blank">ここ</a>のRustインストールガイドに従いましたが、これは次のコマンドを実行することになります：

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

{{< alert >}}
*注：私が使用しているリポジトリのすべてのガイドに戻って、これが彼らの方法で必要かどうかを確認していません。Rustをインストールせずに次のステップを試して、問題が発生した場合は戻ってくることをためらわないでください。*
{{< /alert >}}

### 環境を構築してオンにする

もう少しです。次に、`ldm`環境を作成し、画像の生成を開始する前にアクティブ化します。これを達成するために、このガイドの最初にクローンしたリポジトリのルートに`cd`し、次のコマンドを使用して環境を作成します：

```bash
PIP_EXISTS_ACTION=w CONDA_SUBDIR=osx-arm64 conda env create -f environment-mac.yml
```

このステップで問題が発生し、環境を再構築する必要がある場合、2つのオプションがあります：1) 以下のコマンドを使用する：

```bash
PIP_EXISTS_ACTION=w CONDA_SUBDIR=osx-arm64 conda env update -f environment-mac.yml
```

*Intel Macの場合、コマンドは次のようになります：*
```bash
PIP_EXISTS_ACTION=w CONDA_SUBDIR=osx-64 conda env create -f environment-mac.yml
```

または2) Anacondaのフォルダに移動し、環境を削除して、このセクションの元のコマンドで環境を作成します。いくつかのリポジトリを試した後、クラッタをクリーンアップするために2)に頼る必要がありました。

次に、環境をアクティブ化する時間です：

```bash
conda activate invokeai
```

最後のステップは、コマンドを使用してモデルをプリロードすることです：

```bash
python scripts/preload_models.py
```


## 楽しんで...

これでStable Diffusionで遊び始める時間です。実行します：

```bash
python scripts/invoke.py --full_precision --web
```

そして`localhost:9090`でブラウザを開きます。

下のようなWebインターフェースが表示されるはずです。

<img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/webui_new.webp"/>


最初のプロンプトを選んでモデルを試してみてください。すべての画像は`output/img-samples`に保存されます。可能なさまざまなモデルと設定を探索してください。私は`512x512`の画像で、最終画像には約`100`サイクル（初期バリアントには`5`）、config scaleは`7.5`で実行しています。サンプラーとしては`DDIM`を使用した結果を好みます。サンプラー間の違いといくつかの例については<a href="https://www.reddit.com/r/StableDiffusion/comments/x4zs1r/comparison\_between\_different\_samplers\_in\_stable/" target="_blank">このRedditスレッド</a>で見つけることができます。

この記事を最初に書いて以来、InvokeAIのStable Diffusion実装には新しいバージョンがあります。上で説明したこと以外にも、探索できる多くの新機能があります。詳細は[こちら](https://github.com/invoke-ai/InvokeAI/releases/tag/v2.0.0)。

## いくつかの例

これらは私のモデルの最初の実行からの画像のいくつかの例です。これらを機能させるにはある種の_アート_があると言わなければなりません。`プロンプト`の設計を始めるためのアイデアを得るためのリンクをいくつか残しておきます。

- <a href="https://decentralizedcreator.com/10-best-text-to-image-prompts-for-ai-art-generator-disco-diffusion-a-visual-treat-inside/" target="_blank">AIアートジェネレーターのためのベストテキストto画像プロンプト10選</a>
- <a href="https://prompthero.com/" target="_blank">Prompthero</a>


<div style="display: flex; flex-wrap: wrap;">

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000008.2887160172.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000023.4136023390.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000024.2854274560.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000028.4255152621.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000031.1604394908.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000036.1662843642.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000043.2287582219.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000045.234321637.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000057.107659121.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000058.157499426.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000063.2383238266.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000067.2841883613.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000102.4159217524.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000116.829934269.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000145.2404672998.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000149.811067720.webp"/>
  </div>

</div>

## 免責事項とその他のオプション

締めくくる前にいくつかのこと。MacとWindowsの両方にこれをインストールしましたが、M1 ProでのMac体験は全く悪くありませんでしたが、Nvidia RTX 2070を搭載したWindowsマシンでのパフォーマンスははるかに良かったです。このガイドで見る画像のほとんどはそのシステムから生成されました。バリアントをより速く試して、気に入ったサンプルからより多くの品質を得ることができたからです。

私が持っていた最初の目標の1つは、追加の訓練でモデルを拡張すること、つまり自分の顔をモデルに入れて遊ぶことでした。残念ながら、Macで訓練方法を実行できず、WindowsのGPUにはモデルを訓練するための適切な要件がなかったため、それは不可能でした。現在、そうするには少なくとも16GbのVRAMが必要なようです。

最終的に、Stable Diffusionモデルを実行するための多くのオプションがあります。ローカルのものもあれば、クラウド（例：Google Colab）のものもあります。これを試したいが実行できるマシンにアクセスできない場合は、イライラしないでください。おそらく使用できる他のソリューションがあります。

これが動作したら、ソーシャルメディアであなたの作品にタグ付けしてください：

<div style="display: flex; flex-wrap: wrap;">

  <div style="flex: 1; margin:10px; min-width:256px">
    {{< button href="https://twitter.com/nunocoracao" target="_blank" >}}
    {{< icon "twitter" >}}&nbsp;
    Twitterでフォロー
    {{< /button >}}
  </div>

  <div style="flex: 1; margin:10px; min-width:256px">
    {{< button href="https://www.instagram.com/nunocoracao/" target="_blank" >}}
    {{< icon "instagram" >}}&nbsp;
    Instagramでフォロー
    {{< /button >}}
  </div>

</div>
