---
title: "Linux FoundationがAIのトークノミクスに乗り出す。ただしラボ抜きで"
summary: "Linux Foundationが今週、AIのコストとROIの測定方法を標準化するためにTokenomics Foundationを立ち上げた。創設メンバーは29社、そのいずれもトークン価格を決めていない。何が発表され、誰がいないのか、そして供給側が署名していない測定標準が抱える緊張について。"
description: "Linux Foundationが今週、AIのコストとROIの測定方法を標準化するためにTokenomics Foundationを立ち上げた。創設メンバーは29社、そのいずれもトークン価格を決めていない。何が発表され、誰がいないのか、そして供給側が署名していない測定標準が抱える緊張について。"
categories: ["AI", "テック", "意見"]
tags: ["AI", "トークン", "finops", "標準", "経済"]
date: 2026-08-05
draft: false
---

前回「トークノミクス」という言葉を聞いたとき、私は暗号通貨の創業者と向かい合って座り、彼の会社が開発者にどう報酬を払っているかの説明を受けていた。単純だと思う質問をした。要するに、それが誰かの口座に着金した日にいくらの価値があるのか、どうやって分かるのか、と。返ってきた答えは「それは君がトークノミクスを理解していないからだ」だった。何も意味しないうえに、同時に会話を終わらせる文章である。

だから今週、その言葉がLinux Foundationの新しい組織の名前に現れたとき、続きを読む前に少しひるんだ。トークンの種類は違う。だが問いは同じだ。請求書が届いた日にそれがいくらの価値だったのか、どうやって分かるのか。

こちらにも、まだ良い答えは誰も持っていない。

> [!info] TL;DR
> - Linux Foundationが8月4日に**Tokenomics Foundation**を設立。AIのコストとROIを測るためのベンダー中立の標準化団体である。
> - 創設メンバーは29社。銀行、インテグレーター、エンタープライズソフトウェア、そして十数社のFinOpsツールベンダー。
> - **フロンティアラボは一社も入っていない。** OpenAIもAnthropicもGoogleもMicrosoftもAWSもNVIDIAもいない。
> - Google Cloud、Microsoft、Salesforce、KPMGは6月に支持を表明していたが、8月の名簿には入らなかった。
> - 最も近い成功例であるFOCUSは、ハイパースケーラーが参加して初めて機能した。今回その条件は満たされていない。

## 何が発表されたか

8月4日、[Linux Foundation](https://www.linuxfoundation.org/)はAIの経済に関する標準化団体[Tokenomics Foundation](https://www.tokeneconomics.com/)を[設立した](https://www.linuxfoundation.org/press/linux-foundation-launches-the-tokenomics-foundation-to-define-the-economics-and-roi-of-ai-value)。率いるのは[J.R. Storment](https://www.linkedin.com/in/jrstorment)で、隣の[FinOps Foundation](https://www.finops.org/)を率いているのと同じ人物だ。理事会は7月30日に招集され、技術運営委員会も予定されている。両組織は課金仕様[FOCUS](https://focus.finops.org/)とカンファレンス日程を共有する。

初期ロードマップは判断できる程度には具体的だ。

- トークノミクスとAI価値指標の**定義**文書
- ワークロードのルーティング向けにトークンの複雑さを分類する**Big-Tフレームワーク**
- FOCUS v1.5以降に組み込まれる**トークンコストのテレメトリ**
- 呼び出しあたりの実行作業を測る**コスト・トゥ・サーブ**の方法論
- 支出をビジネス成果に結びつける**AI Value Frameworks**
- 教育と認定、および9月のアムステルダムでのカンファレンス

年末まで毎月のリリースが約束されている。指摘している問題は本物で、誰もが認めるところだ。AIは今や技術予算で最も急速に伸びる項目でありながら、トークンの価値を語る共通の方法がない。

## 部屋にいるのは誰か

創設メンバーの名簿は29社。Accenture、BNY、Broadcom、Calero、Cast.ai、DoiT、Finout、Flexera、GoDaddy、Greenpixie、Hitachi、IBM、JPMorganChase、Kion、Lenovo、Nebius、North Cloud、Oracle、Pay-i、Pointfive、Revenium、SAP、ServiceNow、SHI、Stacklet、Vantage、WWT、XOsphere、Yarken。

この名簿は三つのグループに分かれる。大規模にAIを購入する企業（[JPMorganChase](https://www.jpmorganchase.com/)、[BNY](https://www.bny.com/)、[GoDaddy](https://www.godaddy.com/)、[Lenovo](https://www.lenovo.com/)、[Hitachi](https://www.hitachi.com/)）。インテグレーターとリセラー（[Accenture](https://www.accenture.com/)、[WWT](https://www.wwt.com/)、[SHI](https://www.shi.com/)）。そして十数社のコスト管理ベンダー（[Kion](https://kion.io/)、[Yarken](https://www.yarken.com/)、[Flexera](https://www.flexera.com/)ほか）。

そのいずれもトークン価格を決めていない。

不在が二つある。一つ目はフロンティアラボだ。[OpenAI](https://openai.com/)と[Anthropic](https://www.anthropic.com/)はメンバーではなく、[Google](https://cloud.google.com/)、[Microsoft](https://www.microsoft.com/)、[AWS](https://aws.amazon.com/)、[NVIDIA](https://www.nvidia.com/)、[Mistral](https://mistral.ai/)、[Cohere](https://cohere.com/)も入っていない。フロンティアモデルの価格を決める組織は一つもメンバーになっていない。

二つ目はあまり注目されていない。Linux Foundationが6月3日に財団設立の[意向を発表した](https://www.linuxfoundation.org/press/linux-foundation-announces-the-intent-to-launch-the-tokenomics-foundation-to-establish-open-standards-for-ai-cost-management)とき、「初期の支持を表明した」12組織の名前が挙げられていた。Accenture、[Booking.com](https://www.booking.com/)、Flexera、Google Cloud、[IBM](https://www.ibm.com/)、JPMorganChase、[KPMG](https://kpmg.com/)、Microsoft、[Oracle](https://www.oracle.com/)、[Salesforce](https://www.salesforce.com/)、[SAP](https://www.sap.com/)、[ServiceNow](https://www.servicenow.com/)である。これを8月の名簿と比べてほしい。Google Cloud、Microsoft、Salesforce、KPMG、Booking.comが消えている。表明された支持の2か月が、創設メンバーシップには変わらなかった。

報道はこれを別の形で描いている。[CIO Dive](https://www.ciodive.com/news/foundation-tackle-ai-token-cost-management/822839/)は今回の設立が「企業、ハイパースケーラー、フロンティアモデル開発者」を結集すると書いたが、公表された名簿はそれを示していない。[The New Stack](https://thenewstack.io/tokenomics-foundation/)は、AIコスト危機にようやく番犬ができた、「ただしそれを引き起こしている企業は除いて」という見出しで報じた。

## ラボは何をしたか

今回の設立について公にコメントしたフロンティアラボはない。OpenAI、Anthropic、Google、Microsoftのいずれからも、賛否どちらの声明も見つけられなかった。

比較のために。2025年12月、Linux Foundationは[Agentic AI Foundation](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation)を立ち上げた。こちらはAnthropic、OpenAI、[Block](https://block.xyz/)が共同創設し、Google、AWS、Microsoft、[Cloudflare](https://www.cloudflare.com/)が支援した。Anthropicは[MCP](https://modelcontextprotocol.io/)を寄贈し、[OpenAIはAGENTS.mdを寄贈した](https://openai.com/index/agentic-ai-foundation/)。同じ主催者、8か月前、全面的な参加である。

同じ時期に、両社とも自社製のコスト管理機能を出している。OpenAIは6月18日にChatGPT Enterpriseへ支出管理と月次クレジット上限を追加した。Anthropicはモデル単位の権限設定、支出アラート、Admin APIを備えたClaude Enterprise管理機能を出した。どちらも顧客に実質的な可視性を与える。どちらもそのベンダー自身のコンソールの中にあり、そこで出る数字はベンダーをまたいで比較できない。

## これは過去に機能したのか

測定標準が供給側を拘束することは実際にある。ただし歴史的には、次の三条件のいずれか一つの下でのみだ。

**供給側が自発的に参加する場合**。比較可能であることが競争上有利になるからだ。[SPEC](https://www.spec.org/)と[TPC](https://www.tpc.org/)はいずれも1988年に発足した。SPECはHP、Sun、MIPSを含むワークステーションベンダーの連合から生まれ、TPCはトランザクション処理を測るために作られた。どちらも支配的なプレイヤーのいない市場で定着した。すべてのベンダーが、自分が勝てるスコアボードを求めたからだ。

[FOCUS](https://focus.finops.org/)もそうやって機能した。[FinOps Foundation](https://www.finops.org/about/)は2019年に発足し、2020年にLinux Foundationへ加わった。FOCUSは2023年に発表され、[2024年6月に1.0へ到達](https://www.finops.org/insights/focus-1-0-available/)。AWS、Azure、Google Cloud、Oracle Cloudが同じ日にネイティブのFOCUS課金エクスポートを出した。財団から仕様まで5年、そして実現したのは売り手が部屋にいたからだ。2023年時点でAWSはFinOpsのスポンサーですらなかった。

**規制当局が強制する場合**。燃費表示、栄養成分表示、電話番号ポータビリティ。トークン課金を規制している者はいない。

**買い手が十分な支出を集約し、取引条件にする場合**。2017年1月、P&Gのマーク・プリチャードはIABで、GoogleとFacebookに対し年末までに[MRC](https://mediaratingcouncil.org/)認定の第三者検証を受け入れなければ予算を引き上げると[通告した](https://www.adexchanger.com/advertiser/pritchards-progress-pg-marketing-chief-impact-digital-ultimatums/)。両社とも監査に同意した。ただしFacebookはまず配信インプレッションを監査し、ビューアブルインプレッションにはかなり長い時間をかけた。

逆の結末をたどった二例。2009年3月の[Open Cloud Manifesto](https://www.theregister.com/2009/03/30/open_cloud_manifesto_in_out/)には36の署名者がおりIBMが中心にいたが、Amazon、Google、Microsoft、Salesforceはいずれも署名を拒んだ。何にもつながらなかった。SNIAの[CDMI](https://www.snia.org/cdmi)はクラウドストレージのISO標準になったが、それでもS3が事実上の標準になり、CDMIは後にS3互換を追加した。

つまり最も近い成功例は、この財団が手本にしているまさにそれであり、それは今回の設立が現時点で満たしていない条件を満たしていた。

## 三つの緊張

**買い手側は標準化できる。売り手側はできない。** 配賦、タグ付け、ユニットエコノミクス、コスト・トゥ・サーブ、ROIの定義。これらはラボに何も頼まずに標準化でき、日々の価値の大半を占める。一方的に標準化できないのは比較可能性のほうだ。トークナイザーは各社独自で異なるため、同じプロンプトでもベンダーによってトークン数は同じにならない。価格体系は設計上マルチバケットである。[Anthropic](https://docs.claude.com/en/docs/about-claude/pricing)と[OpenAI](https://platform.openai.com/docs/pricing)の公開レートを比べると、入力、キャッシュ済み入力、TTLによって倍率が変わるキャッシュ書き込み、出力、そして出力として課金される隠れた推論トークンが出てくる。しかもバケットの定義が両者で異なる。スキーマはそのすべてを忠実に記録できるが、それでも二枚の請求書を比較させてはくれない。

**標準はすでに存在するかもしれない。** [OpenTelemetryのGenAIセマンティック規約](https://opentelemetry.io/blog/2026/genai-observability/)は2024年から`gen_ai.usage.input_tokens`などを運んでおり、FOCUSもすでにトークン支出へ拡張しつつある。FinOps実務者の[Dvir Mizrahi](https://www.linkedin.com/pulse/lets-talk-tokenomics-foundation-dvir-mizrahi-uauzf)はこれを直接主張し、FOCUSのワーキンググループになぜ独自の財団と理事会とカンファレンス興行が要るのかと問い、動機は「技術的ではない。商業的だ」と結論づけている。メンバーのうちどれだけがコスト管理ツールを売っているかと突き合わせて考える価値がある。

**レバレッジが逆方向に働く。** 広告のアナロジーは魅力的だが、経済構造が反転している。FacebookとGoogleは広告主の金を必要としており、在庫は余っていた。ラボは供給制約下にあり、最大の収益源は消費者向けサブスクリプションとコーディング席であって、ここに集まったメンバーが持つエンタープライズAPI契約ではない。多くの推計では、AnthropicとOpenAIの二社でエンタープライズのLLM API支出の6割近くを占める。行列がすでに埋まっているとき、予算の引き上げは弱い脅しである。

そして三つすべての下に、そもそも単位が間違っている可能性がある。[Uber](https://www.uber.com/)は約5000人のエンジニアで2026年のAI予算を4月までに使い切り、その後[従業員一人あたり月1500ドルの上限を設けた](https://techcrunch.com/2026/06/02/uber-caps-employee-ai-spending-after-blowing-through-budget-in-four-months/)。トークンを数え損ねたわけではない。きちんと数えていた。エンジニアをClaude Codeの利用量ランキングに乗せていたのであって、これは測定の問題ではなくインセンティブの問題だ。その支出が顧客の感じる何かに結びついていたかについて、UberのCOOアンドリュー・マクドナルドはこう述べている。[「そのつながりはまだない」](https://fortune.com/2026/05/26/uber-coo-ai-spending-tokens-claude-code/)。その間、トークン単価はこの1年でおよそ8割下がり、総支出は増えた。これが[ジェボンズのパラドックス](https://ja.wikipedia.org/wiki/ジェボンズのパラドックス)であり、どんなテレメトリのスキーマもそこには触れない。

## 未解決の問い

1. 供給側が無視する測定標準は何らかの行動を変えるのか、それとも主に認定ビジネスを生むだけなのか。
2. ラボが供給制約下にあることを踏まえて、コンプライアンスを取引条件にできるほど支出を集約した買い手連合はどこかに存在するのか。
3. OTelとFOCUSがすでにスキーマを担っているなら、別個の財団はガバナンスとカンファレンス以外に何を加えるのか。
4. ラボは参加することで正確には何を譲ることになるのか。トークン単位の比較可能性は同品質で最も安い者を利するが、それは動く的だ。拒否は戦略なのか、それとも単にまだ誰も頼んでいないだけなのか。
5. 我々は間違った分母を標準化しているのではないか。トークンあたりのコストは測定可能で、ほぼ解決済みだ。意思決定あたりの価値はそのどちらでもなく、Uberが本当に必要としていたのはその数字だった。

## 私が注視していること

年末までに検証できる指標が三つ。9月のアムステルダムのカンファレンスまでにフロンティアラボが参加するかどうか。FOCUS v1.5のトークンスキーマが約束された毎月のペースで出るかどうか。そしてGoogle CloudとMicrosoftが6月に表明した支持を実際のメンバーシップに変えるのか、それとも6月の名簿が最高到達点のままになるのか。

私はこれがうまくいってほしいと思っている。企業が自社のAI支出で何を買ったのかに本当に答えられないのは事実で、誰かが解決すべきだ。ただ、実際に出てくるバージョンは、あなたの支出を記述するものであって、あなたの供給業者を規律づけるものではないだろうと思う。この二つはまったく別の製品である。
