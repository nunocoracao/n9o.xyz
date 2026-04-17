---
title: "30 Days of Vibe Coding - Day 8 - NotesTUI"
description: "ターミナルベースのMarkdownノートアプリ。全文検索、カテゴリ、テーマ、AI連携用MCPサーバーを搭載。"
summary: "ターミナルベースのMarkdownノートアプリ。全文検索、カテゴリ、テーマ、AI連携用MCPサーバーを搭載。"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-08", "go", "tui", "terminal", "notes", "mcp"]
series: ["30 Days of Vibe Coding"]
series_order: 8
seriesOpened: false
date: 2026-04-13
draft: false
#type: "hidden"
---

Day 8。昨日はgitリポジトリ用のTUIを作った。今日は自分の頭の中のためのTUIを作った。

## プロンプト

> "GoでMarkdownサポートとMCPサーバー付きのターミナルノートアプリを作って。"

これがスタート地点だった。短くて、曖昧で、仕様と呼べるようなものじゃなかった。これを[Watchfire](https://watchfire.io)に投げ込んで、完全なプロダクト定義に膨らませてもらった。Glamourを使ったアプリ内エディティングとMarkdownプレビュー、SQLite FTS5による全文検索、カテゴリ、タグ、複数のカラーテーマ、vimキーバインド、MCPサーバーモード、GoReleaser、GitHub Actions CI、インストールスクリプト。これら全部が、Watchfireが自分の一行を36個のタスクに変換してくれた結果だ。

## どうやって作ったか

最初の30個ほどのタスクでコアのノートアプリを構築した。ターミナルでノートを作成・編集し、Glamourでのmarkdownレンダリング、SQLite FTS5による全文検索、カテゴリ、タグ、複数テーマ、vimスタイルのキーバインド。すべてのデータは `~/.notestui/` にSQLiteデータベースとYAML設定ファイルで保存される。

そして最後のタスク群がディストリビューション側を担当した。クロスプラットフォームビルド用のGoReleaserの設定、GitHub Actions CI、OSとアーキテクチャを自動検出するインストールスクリプト、そしてすべてをクリーンアップするアンインストールスクリプト。最終的にはちゃんとしたREADMEも付いて、スタンドアロンバイナリとしてシップする準備ができた。

MCPサーバーモードが面白い部分だった。`notestui serve` を実行するとModel Context Protocolサーバーが起動し、ノートをAIツールに公開する。ノートの一覧表示、検索、作成、更新、削除、すべてMCP経由で行える。つまりClaude Codeやその他のMCP互換AIアシスタントが、あなたのノートに直接アクセスできるということだ。

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## 出来上がったもの

![NotesTUI empty state with welcome screen](images/screenshot-01.png)

**空の状態がフレンドリー。** 初回起動時は、`n` を押して最初のノートを作成するよう伝えるクリーンなウェルカム画面が表示される。下のバーにはキーバインドが一覧表示される。

![Creating a new note with title, tags, and content](images/screenshot-02.png)

**エディタが内蔵されている。** `n` を押すとタイトル、タグ、コンテンツのフィールドが表示される。Tabでフィールド間を移動、Ctrl+Sで保存。外部エディタを起動する必要なし、すべてTUI内で完結する。

![Notes list with preview panel](images/screenshot-03.png)

**スプリットペインレイアウト。** 左にノート一覧、右にプレビュー。タグはタイトルの下にカラーバッジとして表示される。上部のステータスバーには「Your markdown notes, beautifully organized」と表示されている。AIが自分で追加したちょっとした気の利いた演出だ。

![Editing a longer note with markdown content](images/screenshot-04.png)

**Markdownエディティングはリアルなコンテンツにも対応。** 長めのノートを貼り付けてみたが、エディタは問題なく処理した。コンテンツエリアはスクロールでき、保存するとプレビューパネルがGlamourでmarkdownをレンダリングする。

![Full-text search results with preview](images/screenshot-05.png)

**検索は高速で実用的。** `/` を押して検索すると、SQLite FTS5を使ってすべてのノートを全文検索する。結果は左パネルに表示され、マッチしたノートのプレビューが右に出る。検索クエリがプレビュー内でハイライトされる。

![MCP settings screen - not connected](images/screenshot-06.png)

**MCP連携には専用の設定画面がある。** `m` を押すとMCP設定が開く。接続状態、利用可能なツール、セットアップ手順が表示される。未接続時は、設定方法をステップバイステップで案内してくれる。

![MCP settings screen - connected to Claude Code](images/screenshot-07.png)

**接続されると、ステータスが表示される。** 設定画面が更新され、NotesTUIがClaude Codeに接続されていることが表示される。切断ボタンとステータス更新オプションも付いている。

![Claude Code creating notes through MCP](images/screenshot-08.png)

**ここからがヤバい。** Claude Codeに「マーベルのキャラクター全員について、一人ずつノートを書いて」と頼んだ。するとMCP経由で `notestui - create_note` を呼び出し始め、詳細なキャラクタープロフィールを生成してそのままノートデータベースに書き込んでいった。

![Claude Code bulk-creating Marvel character notes](images/screenshot-09.png)

**止まらなかった。** Claudeはソー、ハルク、ブラック・ウィドウ、ホークアイ、キャプテン・アメリカ、アイアンマンのノートを作成。それぞれにパワー、アビリティ、主要な事実、演じた俳優の情報が含まれていた。すべてClaude CodeからNotesTUIへのMCPツール呼び出しで行われた。

![More Marvel notes being created via MCP](images/screenshot-10.png)

**ノートは流れ続けた。** Claudeが作成するにつれて左側のノート一覧が増えていくのが見える。それぞれに「marvel」「avengers」「mcu」などの適切なタグが付いている。AIは最初の6人のアベンジャーズを超えて、スカーレット・ウィッチ、ヴィジョンなども追加することにした。

![Search results for "spiderman" across all notes](images/screenshot-11.png)

**16個のノートが作成され、すべて検索可能。** AIが終わった後、「spiderman」で検索すると本名、パワー、主要な事実、MCU出演作を含む完全なキャラクタープロフィールが表示された。スプリットペインビューで右側にレンダリングされたmarkdownプレビューが表示される。

![Note detail view with markdown rendering](images/screenshot-12.png)

**Markdownレンダリングはしっかりしている。** Glamourはヘッダー、太字、箇条書き、引用ブロックを処理する。右パネルのノートプレビューはクリーンで読みやすい。

![Side-by-side NotesTUI and Claude Code](images/screenshot-13.png)

**Claude Codeと並べて表示。** 左にNotesTUI、右にClaude Codeを起動。ClaudeがMCP経由でノートを作成すると、リアルタイムでTUIに表示される。新しいノートが到着するとリストがスクロールしていく。

![Claude Code querying notes through MCP](images/screenshot-14.png)

**AIはノートを読むこともできる。** Claudeに「自分のノートに基づいて、スパイダーマンの名前は？」と聞いたところ、MCP経由で `notestui - get_note` を呼び出して答えを調べた。ノートからデータを取得し、正確に回答：ピーター・ベンジャミン・パーカー。AIは個人のノートデータベースに書き込むことも読み込むこともできる。

## 数字

- **36個のWatchfireタスク**で空のリポジトリからバイナリのシップまで
- **Pure Go**、CGO依存なし（Pure Go SQLiteを使用）
- **6つのMCPツール**：一覧表示、検索、取得、作成、更新、削除
- **複数テーマ**とvimキーバインド
- **GoReleaser + GitHub Actions**で自動クロスプラットフォームビルド
- **インストール・アンインストールスクリプト**同梱
- **実際の作業時間：** テスト、プロンプト入力、MCP連携の検証に約25分

## 試してみて

{{< github repo="nunocoracao/Vibe30-day08-notestui" showThumbnail=true >}}

ワンライナーでインストール：

```bash
curl -sSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day08-notestui/main/scripts/install.sh | bash
```

ソースからインストール：

```bash
go install github.com/nunocoracao/Vibe30-day08-notestui@latest
```

あとは `notestui` を実行してノートを取り始めるか、`notestui serve` でMCPサーバーを起動するだけ。

## Day 8の総評

ノートアプリ自体はしっかりしている。クリーンなTUI、高速な検索、きれいなMarkdownレンダリング。もしObsidianに移行していなかったら、これは実際に毎日使いたくなるようなツールだ。しかしMCPサーバーこそが、このチャレンジでこれまでに作ったものとは一線を画す部分だ。

マーベルキャラクターのデモは楽しかったが、MCPサーバーが実際に何を可能にするか考えてみてほしい。これは単にAIがトリビアを流し込めるノートアプリではない。MCPに対応したAIエージェントが読み書きできる永続的なナレッジストアだ。エージェントのメモリを支えるために使えるだろう。会議のメモ、プロジェクトのコンテキスト、リサーチの結果を入れておけば、MCP互換のアシスタントがそのナレッジをオンデマンドで照会できる。「ノートアプリ」と「エージェントのナレッジベース」の境界線は、結局MCPサーバーだったということだ。

Claudeが隣のターミナルでタイピングしている間に、TUIにリアルタイムでノートが表示されるのを見ていると、Vibe Codingというもの全体がカチッとはまる瞬間だった。ツールを作って、AIインターフェースを与えると、頼んでもいなかったことまでできるようになる。

36個のWatchfireタスク。MCPサーバー、ディストリビューションスクリプト、CIパイプラインのために複雑さが増した。しかし結果は、一つのcurlコマンドでインストールでき、すぐにAIアシスタントと連携する本格的なGoツールになった。

---

*これは[30 Days of Vibe Coding](/series/30-days-of-vibe-coding/)の8日目です。AI支援コーディングで30日間に30個のプロジェクトをシップする様子をフォローしてください。*
