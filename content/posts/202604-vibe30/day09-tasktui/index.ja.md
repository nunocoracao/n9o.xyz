---
title: "30 Days of Vibe Coding - Day 9 - TaskTUI"
description: "Go と Bubble Tea で構築した、vim スタイルのナビゲーションと Claude Code 連携用 MCP サーバーを備えたターミナルベースの個人カンバンボード。"
summary: "Go と Bubble Tea で構築した、vim スタイルのナビゲーションと Claude Code 連携用 MCP サーバーを備えたターミナルベースの個人カンバンボード。"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-09", "go", "tui", "terminal", "kanban", "mcp"]
series: ["30 Days of Vibe Coding"]
series_order: 9
seriesOpened: false
date: 2026-04-14
draft: false
#type: "hidden"
---

9日目。ターミナルに住むタスクボードで、Claude も読み書きできるやつが欲しかった。

## プロンプト

> 「Go でターミナルカンバンボードを作って、MCP サーバーで Claude がタスクを管理できるようにして。」

これがきっかけだった。[Watchfire](https://watchfire.io) がこれを全スコープをカバーする13タスクに展開してくれた: vim ナビゲーション付きの3カラムボード、Bubble Tea UI、JSON 永続化、自動リフレッシュ用のファイルウォッチャー、AI 連携用の MCP サーバーモード、クイックタスク管理用の CLI コマンド、そして配布用の GoReleaser。

## どうやって作ったか

13タスクでゼロからパッケージリリースまで持っていった。最初の9タスクでコアのカンバンボードを構築: ボードモデル、カードレンダリング、カラム間のドラッグ&ドロップ、そしてターミナルで見栄えよくするための Lip Gloss スタイリング全般。タスク9で MCP サーバーモードを追加。タスク10でリアルタイムのファイル監視を導入。最後の3つは CLI コマンド、クロスプラットフォームバイナリ用の GoReleaser 設定、そして README を担当した。

アーキテクチャはきれいにパッケージ分割されている: ドメインモデル用の `task`、JSON 永続化用の `storage`、ファイルシステム監視用の `watcher`、MCP サーバー用の `mcp`、そしてすべての Cobra コマンド用の `cli`。エントリーポイントは呼び出し方に応じて3つのモードに分岐する: TUI モード (デフォルト)、CLI モード (`add` や `list` などのサブコマンド付き)、そして MCP サーバーモード (`tasktui mcp`)。

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## 出来上がったもの

![3カラムの TaskTUI カンバンボード](images/screenshot-01.png)

**カンバンボードはターミナルでめちゃくちゃいい感じ。** 色分けされたヘッダーの3カラム: Todo は赤/ピンク、Doing はオレンジ/イエロー、Done はグリーン。各カードにはタスクのタイトルと説明が表示される。選択中のカードはハイライトされたボーダーが付く。`h/l` でカラム切り替え、`j/k` でカラム内のタスク間を移動する。

![ポップアップダイアログで新しいタスクを追加](images/screenshot-02.png)

**インラインでタスク作成。** `n` を押すとモーダルが表示されてタスクのタイトルと説明を入力できる。そのまま Todo カラムに入る。`e` を押せば既存タスクも同じように編集できる。

![タイトルと説明フィールドで新しいタスクを作成](images/screenshot-03.png)

**入力ダイアログはちゃんとしたフィールドナビゲーション付き。** Tab でタイトルと説明を切り替え、Enter で確定。邪魔にならないし、期待通りに動く。

![カラム間でタスクを移動したボード](images/screenshot-04.png)

**カラム間のタスク移動は一瞬。** Enter か Space でタスクを前に進める (Todo から Doing、Doing から Done)、Backspace で戻す。Shift+H と Shift+L で明示的に左右移動もできる。元に戻す/やり直しにも完全対応している。

**CLI コマンドはサッと記録するのに便利。** `tasktui add "Fix that bug"` で TUI を開かずに Todo にタスクを追加。`tasktui list --state doing` で進行中のものを表示。`tasktui done 3` でタスク3を完了にする。全部シェルから。

**MCP サーバーが面白いところ。** `tasktui mcp` を実行すると Model Context Protocol サーバーが起動して、4つのツールを公開する: `list_tasks`、`add_task`、`move_task`、`delete_task`。`~/.claude/mcp.json` に設定を追加すれば、Claude Code が直接タスクを管理できる。ファイルウォッチャーのおかげで、同時に TUI を開いていれば Claude が変更するたびに自動リフレッシュされる。文字通り、Claude がタスクを追加するのをボード上でリアルタイムに見られる。

## バグレポート

ファイルウォッチャーが保存時にたまに二重発火して、ボードが2回連続でリロードされる短い画面のちらつきが起きる。大した問題じゃないけど気になる。MCP サーバーモード自体は初回で問題なく動いた。プロトコル実装って気難しいものだから、正直これは驚いた。

## 数字

- **13 の Watchfire タスク** でスタートからパッケージリリースまで
- **6つの CLI コマンド** (root, tui, add, list, done, mcp)
- **4つの MCP ツール** (list_tasks, add_task, move_task, delete_task)
- **Go + Bubble Tea + Lip Gloss + Cobra** スタック
- **GoReleaser** でクロスプラットフォームバイナリビルド
- **実作業時間:** テストとプロンプト調整で約25分

## 試してみて

{{< github repo="nunocoracao/Vibe30-day09-tasktui" showThumbnail=true >}}

インストール:

```bash
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day09-tasktui/main/install.sh | sh
```

ソースからビルド:

```bash
git clone https://github.com/nunocoracao/Vibe30-day09-tasktui.git
cd Vibe30-day09-tasktui
go build -o tasktui ./cmd/tasktui
```

Claude Code との MCP 連携をセットアップするには、`~/.claude/mcp.json` にこれを追加:

```json
{
  "mcpServers": {
    "tasktui": {
      "command": "tasktui",
      "args": ["mcp"]
    }
  }
}
```

## 9日目の総評

今回は Go + Bubble Tea スタックをさらに掘り下げつつ、新しい要素を追加した: MCP を通じた AI 連携。

カンバンボード自体はしっかりしている。個人タスクマネージャーに必要なことをきっちりやって、それ以上のことはしない。でも面白いのは MCP サーバーモードだ。作業中に Claude Code がタスクボードを管理してくれる。コードコメントで見つけたタスクを追加したり、修正後に完了にしたり。自分が欲しかったとも知らなかったワークフローだ。

ファイルウォッチャーがすべてをつなげている。一つのターミナルペインで TUI を開いて、もう一つで Claude が作業して、ボードがリアルタイムで更新される。共有タスクボードを挟んだ AI とのペアプログラミングみたいな感覚だ。

9日目にしてプロジェクトがつながり始めている。リポジトリ把握用の GitDash、タスク管理用の TaskTUI、どちらも実際に作業するターミナルに住んでいる。ツール同士が会話し始めた。

---

*これは [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/) の9日目です。AI アシストコーディングで30日間に30プロジェクトを出荷する様子をフォローしてください。*
