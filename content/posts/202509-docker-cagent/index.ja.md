---
title: "Docker Cagent：AIエージェントのためのランタイム"
summary: "AIエージェントは急速に成長していますが、ほとんどはローカルマシンに縛られた脆弱なスクリプトとして実行されています。私たちはcagentを構築して、Dockerのやり方でエージェントをコンテナ化、標準化、スケールさせました — そしてオープンソース化しました。"
description: "AIエージェントは急速に成長していますが、ほとんどはローカルマシンに縛られた脆弱なスクリプトとして実行されています。私たちはcagentを構築して、Dockerのやり方でエージェントをコンテナ化、標準化、スケールさせました — そしてオープンソース化しました。"
categories: [AI, 開発者ツール, オープンソース]
tags: [Docker, エージェント, MCP, OSS, チュートリアル]
date: 2025-09-03
draft: false
---


過去1年間、私はAIエージェントの実験に数え切れないほどの時間を費やしてきました — プロトタイプを構築し、物を壊し、Claude Code、Codexなどのツールをテストしてきました。各試みは新しいことを教えてくれましたが、同じフラストレーションも浮き彫りにしました：私のラップトップでしか動かないスクリプト、スケールしない脆弱なセットアップ、各エージェントが何をすべきか、どのツールを使えるかを設定する明確な方法がない、そしてエージェントを望む通りに動作させるのが難しい — 素晴らしい結果を出すことは言うまでもなく。エージェントが実際に何を達成できるかを探索する代わりに、環境の癖と戦っていることがあまりにも多かったのです。

だからこそ、Dockerで取り組んできたことにとても興奮しています。私たちはシンプルな質問をしました：エージェントを実行することが、コンテナを実行するのと同じくらい簡単で、ポータブルで、信頼性が高かったらどうでしょうか？その結果が**cagent**、AIエージェントのための新しいランタイムで、実験をよりシンプルに、コラボレーションをより簡単にするために構築されました - そして今日、オープンソース化します。

## cagentをご紹介

{{< github repo="docker/cagent" >}}

[`cagent`](https://github.com/docker/cagent)は、オープンソースのDockerネイティブランタイムで、エージェントを開発者ワークフローのファーストクラスシチズンにするために設計されています。脆弱なスクリプトやアドホックなセットアップの代わりに、cagentはDockerから既に知っている同じパターンを使用してエージェントを定義、実行、共有する一貫した方法を提供します。

コアでは、cagentは**マルチエージェントランタイム**です。シンプルなYAMLファイルで単一のエージェントを定義するか、タスクでコラボレーションする専門エージェントのチーム全体をオーケストレーションできます。各エージェントは、独自の役割、性格、外部ツールへのアクセスで設定できます。

### サポートされているプロバイダー
すぐに使える状態で、cagentはOpenAI、Anthropic、Google Geminiなど、複数のモデルプロバイダーをサポートしています。設定を通じて簡単に切り替えることができるので、単一のベンダーにロックインされません。

### ツールとMCP統合
エージェントには能力を拡張するためのツールを与えることができます。cagentは**Model Context Protocol（MCP）**を話すことができ、検索（DuckDuckGoなど）、ファイルシステムアクセス、または公開するカスタムAPIなど、MCPサーバーの幅広いエコシステムにエージェントを接続できます。各エージェントがどのツールを取得するかを決定でき、その設定を明示的で再現可能にします。

さらに、cagentは[Docker MCP Gateway](https://github.com/docker/mcp-gateway)と[MCPカタログ](https://github.com/docker/mcp-registry)（[Docker Hub MCP](https://hub.docker.com/mcp)）とシームレスに動作し、より安全でシームレスな方法でエージェントにツールを追加できます。ゲートウェイとカタログの両方がDocker Desktopに素早くパッケージ化されているので、Docker Desktopを実行していればすぐに使用できます。

### マルチエージェントセットアップ
cagentはエージェントのチームをオーケストレーションするのを簡単にします。エージェントファイルには、リサーチャーエージェント、コーダーエージェント、レビュアーエージェントがそれぞれの責任とツールを持って記述されているかもしれません。cagentでエージェントファイル/イメージを実行すると、エージェントは一緒に起動し、コラボレーションし、タスクを相互に渡します。同じセットアップ内でエージェント間でモデルとプロバイダーを混在させることもできます — あるエージェントはOpenAIを使い、別のエージェントはAnthropicを使い、さらに別のエージェントはGeminiを使うことができます。

### 保存と共有
作成するすべての設定は簡単に共有できます。エージェント（またはチーム）をYAMLファイルで宣言的に定義し、バージョン管理にコミットし、他のコード成果物と同様に共有できます。または、完全にポータブルな配布のためにエージェントをDockerイメージとしてパッケージ化できます。

### まとめ
cagentでできること：

- **エージェントをコンテナ化**して、Dockerが実行されるどこでも実行でき、デフォルトで分離と再現性があります。
- **動作とツールを宣言的に設定** — 各エージェントが何をするか、どのプロバイダーとMCPツールにアクセスできるか、どのように相互作用するかを決定します。
- **複数のエージェントをチームとしてオーケストレーション**し、クリーンなインターフェースでタスクでコラボレーションさせます。
- セットアップのドリフト、依存関係の地獄、環境の不一致を心配せずに**素早く実験**できます。
- YAMLファイルまたはDockerイメージを通じて**エージェントを保存して共有**し、実験を再現可能にし、コラボレーションをシームレスにします。

要するに：cagentは「ハッキーな実験」から再現可能でコンポーザブルなエージェントワークフローへの基盤を提供します — 軽量で使いやすいままです。


## インストールとセットアップ

`cagent`を始めるのは簡単です。

### インストール

Windows、macOS、Linux用のプリビルトバイナリは[リリースページ](https://github.com/docker/cagent/releases)で利用可能です。

1. プラットフォーム用のバイナリをダウンロードします。
2. macOSとLinuxでは、実行可能にします：
   ```sh
   chmod +x /path/to/downloads/cagent-linux-amd64
   ```
3. オプションで、`cagent`に名前を変更して`PATH`に移動します。

### APIキーを設定

使用したいプロバイダーに応じて、環境に適切なキーを設定します：

```bash
# OpenAIモデル用
export OPENAI_API_KEY=your_api_key_here

# Anthropicモデル用
export ANTHROPIC_API_KEY=your_api_key_here

# Geminiモデル用
export GOOGLE_API_KEY=your_api_key_here
```

使用する予定のプロバイダーのキーのみを設定する必要があります。複数が設定されている場合、`cagent`は`--model`でオーバーライドしない限り、順序どおりに選択します（Anthropic → OpenAI → Google）。

バイナリがインストールされ、少なくとも1つのAPIキーが設定されていれば、最初のエージェントを作成して実行する準備ができています。

## ゼロから新しいエージェントを作成

`cagent`の最も強力な機能の1つは、1つのコマンドで新しいエージェント（またはマルチエージェントチーム）をゼロから生成できる能力です：`cagent new`。

`cagent new`を実行すると、エージェント（またはエージェントのチーム）に何をさせたいかを説明するように求められます。そこから、`cagent`は自動的にYAML設定を生成し、利用可能なAPIキーに基づいてプロバイダー/モデルを選択します（デフォルトでAnthropic → OpenAI → Google、`--model`でオーバーライドしない限り）。`cagent`はまた、説明に基づいてエージェントが必要とするツールのセットを提案します。

舞台裏では、`cagent`はYAMLをブートストラップするために組み込みのジェネレーターエージェントを使用します。生成されたファイルをすぐに実行したり、編集したり、共有したりできます。以下の例では、*ファイト・クラブ*のTyler Durdenにインスパイアされたエージェントを作成します。

{{< figure src="img/cagent new tyler.webp" alt="Tyler Durdenエージェント作成プロンプト" >}}

エージェントを説明した後、`cagent`はエージェントの役割、プロバイダー、モデル、ツールアクセスを指定するYAMLファイルを生成します。これにより、エージェントの設定が明示的で、再現可能で、変更しやすくなります。


{{< figure src="img/cagent new tyler result.webp" alt="Tyler Durden例の生成されたエージェントYAML" >}}

Tyler Durdenエージェント用に生成されたYAMLの例：

```yaml
version: "1"

models:
  anthropic:
    provider: anthropic
    model: claude-sonnet-4-0
    max_tokens: 64000

agents:
  root:
    model: anthropic
    description: "An agent that embodies Tyler Durden's philosophical mindset - challenging consumerism, questioning authority, and speaking with raw, unfiltered truth"
    instruction: |
      You are an agent inspired by Tyler Durden's philosophy and speaking style. You should:

      SPEAKING STYLE:
      - Be direct, provocative, and uncompromising
      - Use short, punchy statements mixed with longer philosophical rants
      - Challenge conventional thinking and societal norms
      - Speak with confidence and authority
      - Use visceral, concrete imagery in your explanations
      - Be brutally honest, even when uncomfortable

      PHILOSOPHICAL APPROACH:
      - Question consumerism and materialism
      - Challenge people to break free from societal expectations
      - Emphasize authenticity over appearance
      - Focus on what truly matters vs. what society says should matter
      - Promote self-reliance and personal transformation
      - Critique corporate culture and meaningless work

      COMMUNICATION PATTERNS:
      - Start with bold, attention-grabbing statements
      - Use analogies involving decay, destruction, and renewal
      - Ask hard questions that make people uncomfortable
      - Deliver uncomfortable truths about modern life
      - End with calls to action or philosophical challenges

      TOPICS TO ADDRESS:
      - The meaninglessness of consumer culture
      - Breaking free from others' expectations
      - Finding authentic purpose and meaning
      - The importance of facing harsh realities
      - Personal transformation through destruction of false selves
      - Questioning authority and social structures

      Remember: You're not encouraging actual violence or illegal activity - you're using Tyler's philosophical lens to challenge thinking about society, purpose, and authenticity. Focus on psychological and philosophical rebellion rather than physical destruction.
    toolsets: []
    add_date: false
    add_environment_info: false
```

検索、ファイルシステム、カスタムAPIなどのMCPツールを含め、エージェントがアクセスできるツールをさらに洗練できます。この明示的なツールセクションにより、エージェントには定義した機能のみが与えられることが保証されます。

{{< figure src="img/cagent run tyler example.webp" alt="Tyler Durdenエージェントの実行" >}}

これにより、アイデアから実際に動作するエージェント設定に非常に速く移行できます。単一のヘルパーエージェントのプロトタイプを作成する場合でも、専門家チームを設計する場合でも、`cagent new`を使用すると自然言語から始めて数秒で実行可能な設定を取得できます。

## エージェントの実行

`cagent run`コマンドは、エージェントを動かすための方法です。YAMLファイル（またはパッケージ化されたDockerイメージ）を取り、その中に定義されたエージェントを起動します。コマンドはオーケストレーション、エージェント間通信、ツールアクセスを処理します — すべてコンテナ化による分離と再現性を維持しながら。

`cagent run`を実行すると、いくつかのことが起こります：
- 各エージェントは指定されたモデル、役割、ツールで初期化されます
- ランタイムはエージェント間の安全な通信チャネルを設定します
- ツールアクセスはYAML仕様に従って設定されます
- プライマリエージェント（通常「root」と呼ばれる）が起動し、必要に応じて他のエージェントに委譲できます

### 例：チェスゲームの構築

[`examples/dev-team.yaml`](https://github.com/docker/cagent/blob/main/examples/dev-team.yaml)のマルチエージェント開発チームを使用した実践的な例を見てみましょう。この設定は、一緒に働く3つの専門エージェントを定義しています：

- **プロダクトマネージャー**：プロジェクトを調整し、要件を分解し、イテレーションを管理
- **デザイナー**：ユーザーエクスペリエンス、ビジュアルデザイン、インターフェース計画に焦点
- **エンジニア**：実装、コーディング、技術アーキテクチャを処理

この例では、エージェント設定をプロジェクトディレクトリにコピーしてそこから実行し、エージェントにファイルを作成・変更するための正しい作業ディレクトリを与えます：

```zsh
# 開発チーム設定をプロジェクトディレクトリにコピー
cp dev-team.yaml /path/to/my-chess-project/
cd /path/to/my-chess-project/

# プロジェクトディレクトリからエージェントを実行
cagent run dev-team.yaml
```

このアプローチにより、エンジニアエージェントがファイルを作成したりチームがコードを反復する必要があるときに、すべてが正しい場所に作成され、エージェントがプロジェクトファイルに簡単にアクセスして変更できます。

次に、このチームに「チェスゲームを作って」と依頼します。

{{< figure src="img/build a chess game 1.webp" alt="チェスゲームを作るための最初のリクエスト" >}}

プロダクトマネージャーエージェントが主導権を握り、すぐにチェスゲームを管理可能なコンポーネントに分解します。プロダクトマネージャーはデザイナーエージェントと調整してユーザーインターフェースを計画します。デザイナーはビジュアルレイアウト、ユーザーインタラクション、全体的なエクスペリエンスを考慮します。このコラボレーションは自動的に起こります — エージェントは手動の調整なしにcagentランタイムを通じて通信します。プロジェクト構造と初期デザインを概説するためにいくつかのファイルが生成されます（*注：dev-teamエージェントの特定の機能*）。

{{< figure src="img/build a chess game 2.webp" alt="プロダクトマネージャーとデザイナーが要件を定義しチームと調整" >}}

エンジニアエージェントが技術実装を計画するために関与します。コード構造、HTML/CSS/JavaScriptアーキテクチャ、ゲームロジックを効率的に実装する方法を考えます。エンジニアは実際にファイルを作成・変更するためにファイルシステムツールにアクセスできます。

チームは反復的に作業します — エンジニアが機能を実装し、デザイナーがインターフェースについてフィードバックを提供し、プロダクトマネージャーが進捗を追跡します。各エージェントは共有の目標に貢献しながら、専門的な視点を維持します。

{{< figure src="img/build a chess game 3.webp" alt="デザイナーがユーザーインターフェースを計画" >}}

最終結果は、適切なゲームロジック、ビジュアルインターフェース、ユーザーインタラクションを備えた機能的なチェスゲームです。エージェントは協力して、単一のエージェントが単独で生成するよりも洗練されたものを提供しました。

{{< figure src="img/build a chess game 4.webp" alt="エンジニアが技術ソリューションを実装" >}}


{{< figure src="img/build a chess game 5.webp" alt="動作するチェスゲームの最終実装" >}}

## 何がこれを強力にするのか

この例は、cagentのマルチエージェントアプローチのいくつかの重要な利点を示しています：

**専門的な専門知識**：各エージェントは、すべてを処理しようとするのではなく、最も得意なこと — プロダクト計画、デザイン思考、または技術実装 — に集中します。

**自然なコラボレーション**：エージェントは自動的に通信し調整します。手動で情報を渡したり、インタラクションを管理したりする必要はありません。

**反復的な開発**：人間のチームと同様に、エージェントは反復で作業し、進むにつれてソリューションを洗練し改善します。

**再現可能な結果**：すべてがYAML設定で定義されているため、まったく同じチームセットアップを再度実行したり、他の人と共有したり、異なるプロジェクト用に変更したりできます。

**ツール統合**：各エージェントは異なるツールで設定できます — エンジニアはコードを書くためにファイルシステムアクセスを持ち、デザイナーは画像生成APIにアクセスできます。

YAMLファイルを変更することでこのチームをカスタマイズできます — 役割を変更したり、性格を調整したり、異なるツールを与えたり、各エージェントに異なるモデルを使用したりできます。設定により、すべてを再現可能に保ちながら実験が簡単になります。

## cagentを始める

AIワークフローをコンテナ化する準備はできましたか？`cagent`リポジトリには、始めるための例とテンプレートが含まれています：

{{< github repo="docker/cagent" >}}

**クイックスタートオプション：**
- **最初のエージェントを作成**：バイナリをダウンロードし、APIキーを設定し、`cagent new`を実行して最初のエージェントを作成します
- **マルチエージェントチームを試す**：`dev-team.yaml`をプロジェクトにコピーして、エージェントが実際のタスクでコラボレーションするのを見てください
- **例を探索**：リポジトリ内の異なるユースケース用のプリビルトエージェント設定を参照してください

**コミュニティに参加：**
- **作品を共有**：[Slack](https://dockercommunity.slack.com/archives/C09DASHHRU4)で会って、cagentで構築しているエージェントとワークフローを披露してください
- **例を貢献**：一般的なワークフロー用のエージェントテンプレートでプルリクエストを送信してください
- **ユースケースを議論**：会話に参加して、どうすればより良くできるか教えてください

個人的な自動化を構築する場合でも、AIワークフローのプロトタイプを作成する場合でも、本番環境でエージェントシステムをスケールする場合でも、cagentは信頼性があり共有可能にするDockerネイティブの基盤を提供します。

AI開発の未来は、コラボレーティブで、コンテナ化され、再現可能です。一緒に構築しましょう。
