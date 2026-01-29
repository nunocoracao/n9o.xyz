---
title: "Claude CodeでPM業務をこなす"
summary: "Claude CodeをPMのコマンドセンターとして設定した方法 - GitHub issues、Notionドキュメント、AIアシスタントを1つのワークフローに統合。"
description: "Claude CodeをPMのコマンドセンターとして設定した方法 - GitHub issues、Notionドキュメント、AIアシスタントを1つのワークフローに統合。"
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow"]
date: 2026-01-28
draft: false
---

ほとんどのAIツールは開発者向けに作られています。コードを自動補完するCopilot、テストを書くエージェント、エラーをデバッグするアシスタント。しかし、PM業務 - ロードマップの追跡、仕様書の作成、issueの検索、会議メモの整理 - もAI支援に適した分野です。課題は、PM業務が非常に多くのツールにまたがっていることです：issueにはGitHub、ドキュメントにはNotion、優先順位付けにはスプレッドシート、コンテキストにはSlack。これらすべてを接続する単一のAIツールはありませんでした。

Claude Codeで PM業務を始めるまでは。

## なぜPM業務にClaude Codeなのか？

Claude CodeはAnthropicのCLIベースのAIコーディングアシスタントです。ターミナルで動作するため、PMにとっては奇妙な選択に思えるかもしれません。でも、聞いてください。まず、私が多くの時間を過ごす場所にあります。私は常にターミナルにいます - gitコマンドを実行したり、デプロイを確認したり、エンジニアとデバッグする際にログを追跡したり。同じコンテキストでClaudeが利用できることは、いくつかのユースケースでツール間のコンテキストスイッチが不要になることを意味します。

次に、[MCP (Model Context Protocol)](https://modelcontextprotocol.io)システムにより、Claude Codeは外部ツールに接続できます。GitHub、Notion、Linear、Slack - MCPサーバーがあれば、Claude Codeはそれをクエリできます。これにより、シンプルなAIアシスタントが実際のワークフローハブに変わります。

3つ目に、MCPサーバーがない場合でも、CLIを持つ任意のツールにシェルコマンドで接続できます。GitHub CLI (`gh`)はPM業務に最適です。Claudeは`gh`コマンドを実行してissueの一覧表示、詳細の確認、新規アイテムの作成などができます。これにより、ClaudeからGitHub issuesへの直接的な読み書きアクセスが可能になります。

4つ目に、`CLAUDE.md`ファイルはClaudeに私の作業方法に関する永続的なコンテキストを与えます。私の規約、テンプレート、好み。すべての会話は、Claudeが既に私のワークフローを知っている状態から始まります。

そして最後に、パーミッションシステムがすべてを安全に保ちます。Claudeが実行できるコマンド、呼び出せるAPIを正確に制御できます。予期せぬことは起こりません。

## セットアップ

私のPMワークスペースはシンプルなリポジトリ構造です：

```
pm-workspace/
├── CLAUDE.md                # ワークフローの規約とテンプレート
├── .claude/
│   └── settings.local.json  # パーミッションとMCP設定
├── docs/                    # 戦略ドキュメント、分析、仕様書
├── data_reports/            # 手動でエクスポートした分析データ
└── roadmap.md               # 生きているロードマップドキュメント
```

哲学はドキュメントファースト、実行の信頼できる情報源としてGitHubを使用することです - これは私のチームが作業追跡に使用しているもので、Jira、Notion、Linearなどでもあまり変わらないでしょう。リポジトリには私の作業ドキュメント - 戦略ドキュメント、分析のまとめ、Claudeにコンテキストとして持たせたいもの - が含まれています。GitHubには実際のissueとプロジェクト追跡があります。Notionにはより長文のナレッジベースがあります。そして分析のコンテキストが必要な場合、エクスポートされたデータは`data_reports/`にあります。

`CLAUDE.md`ファイルが魔法の場所です。私の規約が含まれています：

```markdown
# PM Workflow

## Source of Truth
- **GitHub:** All epics and issues live in the main repo
- **Notion:** PRDs, meeting notes, decision logs
- **Local docs:** Strategy documents in `/docs/`
- **Data:** Exported analytics in `/data_reports/`

## Conventions
- Epics use the `Epic` issue type
- Streams are tracked via labels
- Quarterly goals tagged with `Q1-2026`, `Q2-2026`, etc.

## Useful Commands
- List open epics: `gh api graphql -f query='...'` (full query below)
- View epic details: `gh issue view <number>`
- Sync roadmap: Pull latest epic status and update roadmap.md

## Templates
When creating roadmap items, use this structure:
- Problem: What user problem are we solving?
- Solution: High-level approach
- Success metrics: How do we know it worked?
- Dependencies: What blocks this?

## Documentation Index
| File | Description |
|------|-------------|
| `docs/strategy.md` | Product strategy and vision |
| `docs/analysis.md` | Research and data analysis |
```

このファイルは、このディレクトリでClaude Codeを起動するたびに自動的に読み込まれます。Claudeは既に私がどのように名前を付けるか、どこで情報を見つけるか、どのフォーマットを期待するかを知っています。

## ツールの接続

### GitHub CLI統合

GitHub CLI (`gh`)は私のセットアップのバックボーンです。Claude Codeはシェルコマンドを実行できるので、特定のGitHub操作を許可するようにパーミッションを設定します：

```json
{
  "permissions": {
    "allow": [
      "Bash(gh issue list*)",
      "Bash(gh issue view*)",
      "Bash(gh issue create*)",
      "Bash(gh project*)",
      "Bash(gh api*)"
    ]
  }
}
```

これにより、Claudeはissueとプロジェクトへの読み書きアクセスを得ますが、それ以外は何もできません。コードのプッシュ、リリースの管理、PMワークフロー外のものへのアクセスはありません。

このセットアップで、Claudeに次のようなことを聞けます：

- 「Q1のオープン中のエピックをすべて表示して」
- 「認証エピックのステータスは？」
- 「ダッシュボードのリデザイン用に新しいissueを作成して」
- 「モバイルリリースをブロックしているすべてのissueをリストして」
- 「対応が必要なチームからのオープンコメントはある？」

Claudeは私の自然言語を適切な`gh`コマンドに変換し、実行して、結果を要約します。より複雑なクエリには、GitHub GraphQL APIを使用できます：

```bash
gh api graphql -f query='
  query {
    repository(owner: "myorg", name: "myrepo") {
      projectV2(number: 1) {
        items(first: 50) {
          nodes {
            content { ... on Issue { title state } }
            fieldValues(first: 10) { nodes { ... on ProjectV2ItemFieldSingleSelectValue { name } } }
          }
        }
      }
    }
  }
'
```

この構文を覚える必要はありません。「Q1のプロジェクトボードには何がある？」と聞くだけで、Claudeがクエリを考えてくれます。

### Notion MCP

より長文のドキュメント - PRD、会議メモ、決定ログ - にはNotionを使用しています。Claude CodeはMCPサーバーをサポートしており、これは機能を拡張する外部サービスです。Notion MCPサーバーはClaudeに私のワークスペースへの読み取りアクセスを与えます：

```json
{
  "mcpServers": {
    "notion": {
      "type": "url",
      "url": "https://mcp.notion.com/sse"
    }
  }
}
```

これを接続すると、Claudeに私のNotionワークスペースでコンテキストを検索するよう頼めます。「価格モデルについて何を決めた？」や「ユーザー通知のPRDを見つけて」や「最後の3回のプロダクトシンクを要約して」などです。

パワーは組み合わせにあります。ClaudeはGitHubでissueのステータスをクエリし、次にNotionドキュメントでコンテキストを相互参照し、そして両方を参照する更新のドラフトを手伝ってくれます。1つのツール、複数のソース。

## 実践でのワークフロー

典型的な1日はこんな感じです：

**朝の準備。** Claude Codeを開いて聞きます：「昨日クローズされたissueは？新しいバグは報告された？」ClaudeはGitHubをクエリし、アクティビティを要約し、30秒でスタンドアップの話題ポイントが得られます。

**ロードマップの同期。** 「GitHubからロードマップを同期して - すべてのオープンエピックの最新ステータスを取得して。」Claudeは私の`CLAUDE.md`からGraphQLクエリを実行し、現在の状態、担当者、マイルストーンを取得して、`roadmap.md`を最新データで更新します。ロードマップドキュメントは、各issueを手動でチェックすることなくGitHubと同期されます。

**戦略のコンテキスト。** 「プラットフォームインフラ作業へのアプローチは？」Claudeは私の`docs/`フォルダから関連する戦略ドキュメントを読み、要点を要約します。決定を参照したり、方向性の背後にある理由を思い出す必要があるとき、それは瞬時です。

**データ分析。** CSVをエクスポートして - 過去四半期のユーザーエンゲージメント指標 - `data_reports/`にドロップします。「エンゲージメントデータを分析してトレンドを要約して。」Claudeはファイルを読み、パターンを特定し、所見のドラフトを作成します。直接統合ほどシームレスではありませんが、機能します。

**仕様書の作成。** 大まかなアイデアから始めます：「新しいオンボーディングフロー用のロードマップアイテムが必要。」Claudeは`CLAUDE.md`から私のテンプレートを知っているので、適切な質問をします - 問題は何か、誰が影響を受けるか、スコープは何か - そして構造化されたドキュメントをドラフトします。私が編集、洗練し、準備ができたら、ClaudeにGitHubエピックを作成するよう伝えます。

**コンテキストの検索。** 「レート制限について何を決めた？」ClaudeはNotionで会議メモと決定ドキュメントを検索し、関連する議論を見つけ、結果を要約します。もう何ヶ月分ものメモを掘り返す必要はありません。

**週末。** 「今週出荷されたもののステークホルダー更新用サマリーをドラフトして。」Claudeはクローズされたissueをクエリし、ストリームごとにグループ化し、読みやすいサマリーをドラフトします。私がレビューし、フレーミングを調整して、送信します。

`CLAUDE.md`のテンプレートは一貫した出力を保証します。ロードマップアイテムを求めると、常に同じ構造に従います。週次サマリーを求めると、常に同じセクションが含まれます。面倒なく一貫性を保てます。

## まだ足りないもの

セットアップは完全ではありません。現在回避策を講じているいくつかのギャップがあります：

**データツール。** 私は分析にLookerとSigmaを使っています - 使用状況の指標、ファネルデータ、コホート分析。どちらにもMCPはありません。Claudeにデータ分析を手伝ってもらったり、指標を含むサマリーを書いてもらう必要があるとき、ワークスペースの`data_reports/`フォルダにCSVを手動でエクスポートします。機能しますが、摩擦があります。新鮮なデータが欲しいたびに、ブラウザに戻ってエクスポートボタンをクリックしています。

**Google Docs。** 多くの部門横断的な作業はGoogle Docsで行われます - 共有仕様、協調PRD、ステークホルダーからのコメント。ここにもMCPはありません。同じ回避策：markdownまたはPDFにエクスポートし、ワークスペースにドロップします。Claudeはそれを読めますが、ライブ接続ではなくスナップショットです。

**タスク管理。** すべてがロードマップエピックではありません。個人的なtodoがあります - 「モックアップについてデザインにフォローアップ」「API提案をレビュー」「顧客との電話用の質問を準備」。これらはGitHub issuesに属しません。これらを追跡する適切な方法をまだ模索中です。現在はシンプルなmarkdownファイルにありますが、より緊密な統合が欲しいです - おそらくClaudeがクエリおよび更新できるLinearまたはTodoist MCPです。

MCPエコシステムは急速に成長しています。Slack、Linear、カレンダー統合がすべて登場しています。しかし今のところ、手動エクスポートワークフローは、まだネイティブ接続を持たないツールのための必要な橋渡しです。

## うまくいっていること

読み取り中心のワークフローはClaudeが輝くところです。issueのクエリ、ドキュメントの検索、ステータスの要約 - これらは以前10分のクリック作業でしたが、今では30秒で済みます。書き込み中心のワークフローはより多くの人間の判断が必要です。Claudeは仕様書をドラフトできますが、戦略を考え抜く必要があるのは私です。

GitHub + Notion + ローカルドキュメントの組み合わせは、私の日常業務のほとんどをカバーしています。分析のコンテキストが必要なとき、手動エクスポートは1ステップ追加しますが、データがワークスペースに入れば、Claudeはうまく処理します。

より大きな視点では、AIはPMの代替ではなく、コパイロットです。Claudeはプロダクトの決定を下しません。顧客と話したり、ステークホルダーと交渉したり、何かがおかしいという直感を感じたりしません。しかし、仕事の機械的な部分 - クエリ、フォーマット、検索、ドラフト作成 - を処理してくれるので、私は実際に人間の判断が必要な部分に集中できます。

AIツールに興味があるPMの方は、Claude Codeを試してみてください。シンプルなワークスペースをセットアップし、GitHubを接続し、`CLAUDE.md`に規約を追加して、ワークフローにどうフィットするか見てください。既存のツールを置き換えることではありません。それらを一緒に接続するインテリジェンスの層を追加することです。

そして、何か面白いものを作ったら、セットアップを共有してください。他のPMがこれをどのように使っているか見てみたいです。
