---
title: "Claude CodeでPM業務：第4章 - セカンドブレイン"
summary: "Claude Codeはあらゆるものにアクセスできたが、何も記憶していなかった。Obsidianに接続したことで、散在するファイルがナレッジグラフに変わった - エンティティ、タスク抽出、ミーティング議事録が互いに連携する仕組みだ。"
description: "Claude Codeはあらゆるものにアクセスできたが、何も記憶していなかった。Obsidianに接続したことで、散在するファイルがナレッジグラフに変わった - エンティティ、タスク抽出、ミーティング議事録が互いに連携する仕組みだ。"
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow", "Obsidian", "Granola", "knowledge management"]
series: ["PMing with Claude Code"]
series_order: 4
date: 2026-03-18
draft: false
---

第3章の最後で、このセットアップを「ゴッドモード」と呼んだ。Claude CodeはGitHub、Notion、Snowflake、Google Workspace、Slackに手が届く - すべて1つのターミナルから。5つの統合、5つのデータソース、数時間かかっていた回答が数秒で得られる。あらゆるものへのアクセス。

しかし、すべての会話がゼロから始まっていた。

あるセッションでClaudeが見出したインサイトは、次のセッションに引き継がれなかった。Slackのスレッドと価格ドキュメントの間で見つけた関連性は、会話が終わると消えた。Claudeに何でも見つけさせることはできたが、既に見つけたものを記憶することはできなかった。足りなかったのはツールではない。知識を蓄積させること - すべての新しい情報がそれ以前のすべてとつながるレイヤーを構築することだった。

この章はそれについてだ。新しい統合ではない。セカンドブレインだ。

## なぜObsidianか

Obsidianはプレーンなmarkdownファイルで構築されたノートアプリだ。プロプライエタリなフォーマットも、クラウドデータベースも、ベンダーロックインもない。Vaultはディスク上の単なるフォルダだ - 任意のテキストエディタで開けば、すべてがそこにある。

このユースケースで面白いのは、それらのファイルの上に載っている機能の組み合わせだ。wikilinks（`[[こんな風に]]`）を使えば、摩擦ゼロで任意のノートを他のノートに接続できる。グラフビューでその接続を可視化できる。YAML frontmatterですべてのノートに構造化メタデータを付与できる。プラグインエコシステムがkanbanボードからデータベースビューまであらゆるものを追加する。そしてiCloud同期により、Vault全体がスマートフォンからアクセス可能だ。

決定的に重要なのは：設定すべきAPIがないことだ。OAuthの手続きも、MCPサーバーも、認証トークンもない。ローカルファイルシステム上のmarkdownファイルのフォルダだ。Claude Codeは既にファイルシステムアクセスを持っている。それが統合のすべてだ。

## 最もシンプルな統合

macOSでiCloud同期を使う場合、ObsidianのVaultは以下の場所にある：

```
~/Library/Mobile Documents/iCloud~md~obsidian/Documents/<vault-name>/
```

MCPサーバーは不要。プラグインも不要。Claudeは既にファイルの読み書きを知っている。`CLAUDE.md`に「Knowledge Base」セクションを追加し、Vaultのパスと、そこがすべての永続ファイルの主要な保存場所であるというメモを記載した。次に`/sync`スキルを更新し、ロードマップをObsidian Vaultとgitリポジトリの両方に書き込むようにした - Vaultをプライマリに、リポジトリをバージョン管理されたバックアップとして。

それだけだ。その時点から、すべての会話がどこにファイルを探し、保存すべきかを知っていた。機械的な部分は5分で済んだ。

## Vaultの構造

接続が整った状態で、フォルダ構造をセットアップした：

| フォルダ | 目的 |
|--------|---------|
| `roadmap/` | GitHubから同期されるロードマップファイル |
| `meetings/` | 検索とコンテキストのためのミーティング議事録 |
| `tasks/` | 個人タスクとTo-Do |
| `docs/` | 戦略ドキュメント、分析、リサーチ |
| `blogs/` | ブログ記事の下書き |
| `entities/` | 再利用可能なナレッジエンティティ - 人、プロジェクト、プロダクト、イニシアチブ |

gitリポジトリに保管していた`docs/`と`blogs/`フォルダをVaultに移動した。同じファイルだが、Obsidianで検索可能になり、wikilinksでリンクでき、iCloud経由でスマートフォンからアクセスできるようになった。2つの情報源ではなく、1つの信頼できる情報源だ。

## Obsidian CLI

ここから面白くなった。Obsidianには`/Applications/Obsidian.app/Contents/MacOS/obsidian`にビルトインCLIが同梱されている。今やすべての新しいツールで行っていることと同じことをした - 前章までのステップゼロパターン：Claudeにそれを指し示して「これを探索して、見つけたことを`CLAUDE.md`に記録して」と言うだけだ。

Claudeはコマンドツリーを辿り、サブコマンドをテストし、機能をマッピングした。結果：Vaultと対話する2つの補完的な方法が判明した。

**ダイレクトファイルアクセス**は読み書きを処理する - 高速でシンプルだ。しかしCLIは、ファイルシステム操作では実現できない構造化クエリを追加する：

```bash
# Full-text search across the vault
obsidian search "launch plan" --vault nexus

# Find what links to any note
obsidian backlinks "Project Alpha" --vault nexus

# Read/write YAML frontmatter programmatically
obsidian properties get "tasks/review-api.md" --vault nexus

# List and query tags across all notes
obsidian tags --vault nexus

# List and filter tasks
obsidian tasks --vault nexus --status open
```

ファイルシステムはスピードのために、CLIはリレーションシップのために。この組み合わせにより、Claudeはファイルのコンテンツを読むだけでなく、より広いナレッジグラフの中でのその位置づけを理解できる。

## エンティティ：ナレッジグラフ

これがセットアップ全体のコンセプト的な中核だ。

`entities/`フォルダはシンプルな規約を使う：各エンティティがそれぞれのmarkdownファイルを持ち、メタデータ用のYAML frontmatterと接続用のwikilinksを備える。エンティティタイプには人、プロダクト、プロジェクト、チーム、イニシアチブ、コンセプトがある。各タイプがそれぞれのサブフォルダを持つ。

エンティティはこのような形になる：

```yaml
---
type: product
tags: [platform, ai, agents]
---
# Project Alpha

Internal AI assistant. Started as a CLI tool,
expanding to web and desktop surfaces.

Related: [[Platform Team]], [[Desktop App]], [[MCP]]
```

シンプルだが、パワーはネットワーク効果にある。すべてのwikilinkは双方向の接続だ。`[[Project Alpha]]`に言及するミーティングノートを作成すると、それは自動的にProject Alphaのバックリンクに表示される。タスクが`[[Platform Team]]`を参照すると、チームのエンティティページから発見可能になる。グラフは自ら構築される。

抽出を自動化するために`/entities`スキルを作成した。Vaultのコンテンツ - `CLAUDE.md`（チームリスト）、`roadmap.md`（エピック、担当者）、ミーティング議事録（参照される人物）、タスク（エンティティ参照） - をスキャンし、見つけたものに対して構造化されたエンティティファイルを作成する。

最初の抽出で、6つのサブフォルダに**39のエンティティ**が生成された：

```
entities/
  _index.md              # Master index
  people/                # 20 people
  products/              # 10 products
  projects/              # 2 active projects
  teams/                 # 1 team
  initiatives/           # 2 strategic initiatives
  concepts/              # 3 technical concepts
```

Obsidianのグラフビューを開くと、即座に接続が現れた - 誰がどのプロダクトに取り組んでいるか、どのイニシアチブがどのチームにまたがっているか、どのコンセプトがどのプロジェクトを支えているか。ドキュメントの中に常に暗黙的に存在していた情報が、明示的でナビゲート可能になった。

Vaultに入るすべての新しいドキュメントがwikilinksを使えば、自動的にこのネットワークに参加する。グラフはメンテナンスの手間なく、時間とともにより密に、より有用になっていく。

## タスク管理とKanban

第1章で課題を指摘していた：「すべてがロードマップのエピックではない。個人的なToDoがある...これらはGitHub Issueに属さない。」3章を経て、ようやくそれを解決した。

システムは1ファイル1タスクで、構造化されたfrontmatterを持つ：

```yaml
---
status: todo
priority: high
source: slack
due: 2026-03-20
entities: ["[[Project Alpha]]", "[[Sarah Chen]]"]
---
# Review launch plan feedback

## Description
Review and address Sarah's feedback on the Project Alpha launch plan.

## Output
Updated launch plan with resolved comments.

## Context
From 1:1 with [[Sarah Chen]] on 2026-03-17.
```

各タスクファイルにはステータス、優先度、ソース（アクションアイテムの発生元）、期限、リンクされたエンティティがある。フォーマットには「完了」の定義とタスクの起源が含まれる - 有用な程度の構造で、タスク作成がオーバーヘッドにならない程度だ。

可視化のために、CLI経由でObsidian Kanbanコミュニティプラグインをインストールした：

```bash
obsidian plugin:install id=obsidian-kanban enable
```

4つのカラム：**Todo**、**Doing**、**Done**、**Dropped**。カードはタスクファイルへのwikilinksなので、カードをクリックすると詳細全体が開く。kanbanボードは今まで持っていなかったデイリーダッシュボードになった - やるべきことすべてを一覧できる単一のビュー、あらゆる作業場所から集約されたものだ。

## Granola：ミーティング議事録

最後のインプットソースはミーティングだった。Granola - ミーティング文字起こしツール - とgranola-to-obsidianプラグインをインストールした。パイプラインはシンプルだ：Granolaがミーティングを録音・文字起こしし、プラグインが自動的にトランスクリプトをVaultの`meetings/`フォルダにエクスポートする。

これですべてのミーティングが検索可能になった。Claudeはトランスクリプトを読み、アクションアイテムを抽出し、誰が何を言ったかを見つけ、既存のエンティティとディスカッションをクロスリファレンスできる。1on1でのプロダクトローンチに関する会話は、プロダクトエンティティと人物エンティティに自然にリンクされる。トランスクリプトはVaultに到着した瞬間にナレッジグラフの一部になる。

実際のパイプラインはこうなる：**トランスクリプト > エンティティ > タスク > kanban**。ミーティングが行われ、トランスクリプトがVaultに現れ、エンティティ参照がグラフに接続し、アクションアイテムがタスクファイルに抽出され、タスクファイルがkanbanボードに表示される。すべてのステップが自動化されているか、1コマンドで実行できる。

## /pm-taskを実際に実行する

ここですべてが結実した。

`/pm-task`スキルは4つのソースからアクションアイテムをスキャンする：Slack、Email、Calendar、Granolaのミーティングノート。最近のアクティビティを読み取り、タスクやコミットメントに見えるものを特定し、レビュー用の候補を提示し、確認後にタスクファイルとkanbanカードを作成する。

通常の1日分のアクティビティに対して実行した - 最近のSlackメッセージ、未読メール、今日のカレンダー、いくつかのGranolaトランスクリプト。**8つのタスク**を抽出し、kanbanボードに追加した。それぞれが適切なエンティティリンク、ソースコンテキスト、優先度を持っていた。ノイズは正しくスキップされた - FYIメッセージ、解決済みスレッド、マーケティングメール、情報提供のみのカレンダー招待。シグナルが入り、ノイズが除外される。

4つのインプットソースが1つのスキルを通じて、エンティティリンクとkanban可視化を備えた構造化タスクファイルに集約された。30分の手動スキャンが必要だったクロスソースのタスク抽出が、約20秒で完了した。

## 何が変わったか

統合一覧はこのようになった：

| ツール | 方法 | 機能 |
|------|--------|-------------|
| GitHub | `gh` CLI | Issue、エピック、プロジェクト管理 |
| Notion | MCP | プロダクト仕様とドキュメンテーション |
| Snowflake | `snow` CLI | データウェアハウスクエリ |
| Google Workspace | `gws` CLI | Calendar、Docs、Sheets、Gmail |
| Slack | MCP Plugin | メッセージの検索、閲覧、送信 |
| **Obsidian** | **ファイルシステム + CLI** | **ナレッジグラフ、タスク、エンティティ、Vault** |
| **Granola** | **Obsidianプラグイン** | **ミーティング議事録** |

統合は7つになった。しかしこの章は、テーブルにもう2行追加することが本題ではなかった。

実際に変わったこと：`CLAUDE.md`にVaultパスを追加した。2つの新スキル - `/pm-task`と`/entities`。39のエンティティが抽出され接続された。4つの異なるソースから8つのタスクが取り出された。以前は存在しなかったkanbanボード。そしてそのすべての下に、ClaudeがVaultに触れるたびにより密になるナレッジグラフがある。

## 次のステップ

Obsidianは最近Basesをリリースした - frontmatterプロパティを使ってノート全体をクエリする構造化データベースビューだ。これによりエンティティシステムが本格的なリレーショナルデータベースに近いものに変わる可能性がある。また、Claude Code自体のメモリファイルをVaultにルーティングし、永続メモリとナレッジグラフを1つのシステムに統合したいとも考えている。そしてkanbanボードのトップ項目：AIネイティブなロードマッププロトタイプの構築だ。

しかし、この章のテーゼは次に何をするかではない。ギャップはより多くのインプットではなく、すべてのインプットを蓄積させるレイヤーを構築することだったということだ。第1章から第3章でClaude Codeを世界に接続した。この章では、見つけたものを記憶する場所を与えた。

アクセスと記憶。それが真の複合効果だ。
