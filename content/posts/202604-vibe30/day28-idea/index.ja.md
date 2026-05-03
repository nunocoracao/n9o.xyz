---
title: "30 Days of Vibe Coding - Day 28 - ideA"
description: "Wails、Go、React、Monaco Editorで作ったネイティブデスクトップコードエディタ。"
summary: "Wails、Go、React、Monaco Editorで作ったネイティブデスクトップコードエディタ。"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-28", "go", "wails", "react", "monaco", "desktop"]
series: ["30 Days of Vibe Coding"]
series_order: 28
seriesOpened: false
date: 2026-05-03
draft: false
#type: "hidden"
---

28日目。残り3日。昨日はターミナルエミュレータだった。今日は？コードエディタ。

Webアプリじゃない。ブラウザのタブで動くものでもない。マシンにインストールするネイティブデスクトップアプリケーション。チームが何年もかけて作るようなやつ。

## プロンプト

{{< alert icon="fire">}}
[最新リリース](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest)からダウンロードできます
{{< /alert >}}

> 「Wails v2を使って、GoバックエンドとReactフロントエンド＋Monaco Editorでネイティブデスクトップコードエディタを作れ。ファイルツリーサイドバー、タブ、シンタックスハイライト。macOS、Linux、Windows向けのマルチプラットフォームビルド。」

## どうやって作ったか

これはかなりの大物だった。[Watchfire](https://watchfire.io)がタスクを43個に分解してくれて、このチャレンジの中でダントツ最多のタスク数。しかもその多くがCIの修正で、3つのプラットフォーム向けにネイティブデスクトップアプリをビルドするのは...一筋縄ではいかないということがわかった。

スタックはネイティブラッパーにWails v2、バックエンドのファイルシステム操作にGo、UIにReact、実際のコード編集にMonaco Editor（VS Codeと同じエディタエンジン）。GoバックエンドがすべてのファイルI/Oを処理する。ディレクトリの読み取り、ファイルのオープン、変更の保存。それらをWailsバインディングを通じてReactフロントエンドから呼び出せる関数として公開している。

CIパイプラインが本当の苦痛だった。LinuxのWebKit依存関係、正確に設定する必要があるビルドタグ、Wailsバインディングの生成、クロスプラットフォームパッケージング。「CI修正」コミットが何回あったか数えきれない。gitログはそれで埋まっている。でもこれがネイティブアプリをシッピングする現実。自分のマシンでは完璧に動くのに、GitHub Actionsランナーでは盛大に失敗する。

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## できたもの

![ウェルカム画面](images/screenshot-01.png)

**ちゃんとしたウェルカム画面。** フォルダやファイルを開くクイックアクション、最近のプロジェクト一覧、キーボードショートカットのリファレンス。本物のIDEのウェルカムページみたい。

![プロジェクトを開いたファイルツリー](images/screenshot-02.png)

**ちゃんと動くファイルツリー。** フォルダを開くとサイドバーに完全なディレクトリツリーが表示される。展開・折りたたみ、ファイルアイコン、全部揃ってる。下部にはファイル構造の鳥瞰図を示すミニマップもある。

![シンタックスハイライト付きコード編集](images/screenshot-03.png)

**Monaco Editorが本領発揮。** フルシンタックスハイライト、行番号、右側のミニマップ。VS Codeと同じ編集体験、なぜなら文字通り同じエディタコンポーネントだから。JavaScript、Go、TypeScript、JSON、何を開いても適切なハイライトが付く。

![コマンドパレット](images/screenshot-04.png)

**コマンドパレット。** 最近のエディタには必ずあるファジー検索オーバーレイ。コマンドを検索したり、ファイルにジャンプしたり。ちゃんと動く。

![統合ターミナル](images/screenshot-05.png)

**統合ターミナル。** エディタの下部にターミナルパネルがある。ビルドを実行したり、git statusを確認したり、アプリを離れずに何でもできる。

![ファイル検索](images/screenshot-07.png)

**ファジーマッチ付きファイル検索。** プロジェクト内のファイル間をジャンプするクイックオープンオーバーレイ。数文字入力するだけで絞り込める。

## CI戦争

ここはビルドの大半を占めたので、独立したセクションにする価値がある。WailsをGitHub ActionsでmacOS、Linux、Windows向けに同時に正しくコンパイル・パッケージングするのは、何コミットにもわたる戦いだった。ハイライトをいくつか：

- LinuxのWebKit依存関係に特定のパッケージが必要だった（`libgtk-3-dev`、`libwebkit2gtk-4.0-dev`）
- 各プラットフォームに対してビルドタグを正しく設定する必要があった
- ビルド前にWailsバインディングの生成を行う必要があった
- リリースワークフローはmacOS用の`.app`バンドル、Linux用のtarball、Windows用の`.exe`を生成する必要があった
- 修正、テスト、また修正の繰り返し

最終的にはタグをプッシュすると3プラットフォーム全てに対して自動的にビルド・リリースするGitHub Actionsワークフローができた。動く。たどり着くまでに時間がかかっただけ。

## インストール方法

これはネイティブアプリなので、今回はVercelリンクはない。マシンにインストールする。

**クイックインストール（macOSとLinux）：**

```bash
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day28-idea/main/install.sh | bash
```

または[リリースページ](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest)からバイナリを取得：

| プラットフォーム | アーキテクチャ | ダウンロード |
|----------|-------------|----------|
| macOS | Intel (x86_64) | [VibEdit-macos-amd64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-macos-amd64.zip) |
| macOS | Apple Silicon (arm64) | [VibEdit-macos-arm64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-macos-arm64.zip) |
| Linux | x86_64 | [VibEdit-linux-amd64.tar.gz](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-linux-amd64.tar.gz) |
| Windows | x86_64 | [VibEdit-windows-amd64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-windows-amd64.zip) |

**ソースからビルド**したい場合（Go 1.23+、Node.js 20+、Wails CLI v2が必要）：

```bash
go install github.com/wailsapp/wails/v2/cmd/wails@latest
git clone https://github.com/nunocoracao/Vibe30-day28-idea.git
cd Vibe30-day28-idea
cd frontend && npm install && cd ..
wails build
```

## 試してみて

{{< github repo="nunocoracao/Vibe30-day28-idea" showThumbnail=true >}}

## 数字で見る

- **Watchfireタスク43個** セットアップから最終CI修正まで
- **ターゲットプラットフォーム3つ**（macOS、Linux、Windows）
- **Wails v2 + Go**バックエンドとReact + Monaco Editorフロントエンド
- **GitHub Actions**による自動マルチプラットフォームビルドのリリースワークフロー

## Day 28の総評

エディタ自体はそこそこ早くできあがった。Monaco Editorが重い部分をかなり担ってくれるし、WailsがGoとReactのブリッジを驚くほどクリーンに作ってくれる。大変だったのはコードの周りのすべて：CIで3つのOSのネイティブアプリをビルドすること、プラットフォーム固有の依存関係の処理、各ターゲット向けの正しいパッケージング。

これがVS Codeの代わりになるか？当然ならない。でもファイルツリー、タブ、シンタックスハイライト、コマンドパレット、統合ターミナル、マルチプラットフォームリリースを備えた動くネイティブコードエディタだ。1日で作った。VS Codeの中核であるMonaco EditorがReactコンポーネントとして使えるということは、本格的な編集体験がタダで手に入るということ。あとはプラミングだけで、それこそAIが得意な仕事。

43タスクは多い。このチャレンジのほとんどの日は15〜25の範囲だった。でもCIパイプライン付きのネイティブデスクトップアプリは別物。プラットフォームごとにクセがあり、ビルドシステムごとに主張があり、お互い意見が合わない。残り2日。

---

*これは[30 Days of Vibe Coding](/series/30-days-of-vibe-coding/)の28日目です。AIアシストコーディングで30日間に30プロジェクトをシッピングする様子をフォローしてください。*
