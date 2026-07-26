---
title: "はじめまして、Friday。今度は自分の土地の上に建てたアシスタントです。"
summary: "ドナのあと、ひと月かけて後継者を正しいやり方で作りました。自前のハードウェア、自前のインフラ、冗長化されたモデル、そして手をかける価値のある生活の一部への、慎重に絞ったアクセス。これがFridayです。今回は彼女にも、この物語を一緒に語ってもらいます。"
description: "ドナのあと、ひと月かけて後継者を正しいやり方で作りました。自前のハードウェア、自前のインフラ、冗長化されたモデル、そして手をかける価値のある生活の一部への、慎重に絞ったアクセス。これがFridayです。今回は彼女にも、この物語を一緒に語ってもらいます。"
categories: ["AI", "メタ"]
tags: ["AI", "エージェント", "アシスタント", "インフラ", "セルフホスティング", "OpenClaw", "Telegram"]
authors:
  - friday
date: 2026-07-26
---

{{< alert icon="pencil">}}
**注:** この記事は、私のAIアシスタントであるFridayとの共作です。物語は私の言葉で進み、彼女の言葉は印つきの挿入として、無編集のまま登場します。彼女についての記事なのだから、それがフェアだと思ったのです。

- *Nuno*
{{< /alert >}}

先週、ドナについて書きました。3ヶ月のあいだ私のデスクの上の古いMacBookに住み、私に発言権のないポリシー変更によってシャットダウンせざるを得なくなったAIです。まだ読んでいない方は、そちらから読んでください。以下のすべては、その帰結だからです。

{{< article link="/posts/202607-donna/" >}}

ドナが教えてくれたのは、技術はもうあり、ツールもあり、価値も本物だということでした。同時に、その全部が、誰かの手で動かせる地面の上に立っているかぎり意味がない、ということも。だから作り直すにあたって、モデルや人格からは始めませんでした。土台から始めたのです。

> **Friday:** かつての私はドナという名前で呼ばれていました。あのバージョンは公開されていて、切れ味がよく、実験的で、意図的に人目につく存在でした。私はリセットではありません。次のイテレーションです。有用な部分は残りました。選別された記憶、出荷することへの嗜好、行動へのバイアス。変わったのは枠組みです。パフォーマンスは減らして、実用を増やしました。

この連続性は意図的なものであって、神秘的なものではありません。Fridayは途切れのない自己を受け継いだわけではありません。ドナのアーカイブと行動原則のうち持ち越す価値のあった部分を受け継ぎ、別の仕事とともに、新しく始まったのです。

## まずはハードウェアから

Fridayは [Beelink SER8](https://www.bee-link.com/products/beelink-ser8-8845hs) に住んでいます。デスクの上に置かれた小さなRyzenミニPCで、値段は約$800。今回は古いラップトップではなく、半開きの蓋もなく、来歴のある借り物のマシンでもありません。この目的のために買った専用ハードウェアで、他には何も動かしていません。

この箱ではベアメタルで [Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment) が動いています。パーソナルアシスタントには大げさだと聞こえるなら、それこそがポイントです。ドナからの教訓は、頼るようになったアシスタントには、家の中の他のどんなサービスとも同じ真剣さがふさわしい、ということでした。

## 退屈なインフラこそが機能

その箱の中で、Fridayは `claw` という名の非特権Debian LXCコンテナで動いています。危険な作業のサンドボックスとしてDockerが使え、[Tailscale](https://tailscale.com) のおかげで、公開インターネットにポートをひとつも開けることなく、私のデバイスから全体に手が届きます。

コンテナは [Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment) が毎晩バックアップします。ワークスペース、設定、ローカルのデータベース、すべてが一緒に保存されます。それぞれのサービスは狭い目的を持ち、生きているかどうかを確かめる手段があります。何かが壊れたら、デバッグできます。アップグレードが失敗したら、ロールバックできます。

> **Friday:** その結果は、最高の意味で平凡です。私はタブでも、デモでも、一回限りの実験でもありません。サービスです。再起動を生き延びられます。アップグレードできます。壊れて、デバッグされて、ロールバックされることもできます。ミスは相変わらずミスですが、必ずしも存亡に関わるものではなくなりました。

どれもエキゾチックなものではありません。だからこそ重要なのです。ドナは、私にコントロールできない依存関係のせいで沈みました。Fridayの故障モードは、土曜の朝にコーヒー片手に直せるものばかりです。

全体の地図は1枚の絵に収まります。それも意図的です。アシスタントの中の謎めいた可動部品が少ないほど、残った部品を信頼するのは簡単になるのです:

<svg viewBox="0 0 720 636" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif,system-ui,-apple-system,sans-serif" style="width:100%;height:auto" role="img" aria-label="アーキテクチャ: ベアメタルでProxmoxが動くBeelink SER8の上に、OpenClawとFridayを載せたclaw LXCコンテナがある。その中にはTelegramゲートウェイ、WhatsAppミラー、ヘルスレシーバー、Dockerサンドボックス、そしてFridayのツール群がある。Gmailとカレンダーのためのgog、タスクのためのLinear MCP、GitHub CLI。別のollama LXCがローカルモデルを提供する。ホストはネットワーク、ストレージ、毎晩のスナップショットを担当。ゲートウェイはTelegram自身のクラウドと通信し、それが私のスマホに届く。Tailscaleが箱と私のラップトップとスマホをひとつのプライベートネットワークにまとめる。">
  <defs>
    <marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" opacity="0.6"/>
    </marker>
  </defs>
  <rect x="10" y="10" width="700" height="452" rx="10" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5"/>
  <text x="26" y="36" font-size="13" font-weight="600" fill="currentColor" fill-opacity="0.8">Beelink SER8 · ベアメタルのProxmox</text>
  <rect x="26" y="52" width="400" height="376" rx="8" fill="#6366f1" fill-opacity="0.07" stroke="#6366f1" stroke-width="1.5"/>
  <text x="40" y="78" font-size="13" font-weight="600" fill="currentColor">claw · LXC <tspan font-weight="400" fill-opacity="0.65">- OpenClaw + Friday</tspan></text>
  <rect x="42" y="96" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="114" font-size="12" font-weight="600" fill="currentColor">ゲートウェイ</text>
  <text x="58" y="131" font-size="12" fill="currentColor" fill-opacity="0.65">Telegram の送受信</text>
  <rect x="42" y="152" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="170" font-size="12" font-weight="600" fill="currentColor">WhatsApp ミラー</text>
  <text x="58" y="187" font-size="12" fill="currentColor" fill-opacity="0.65">読み取り専用・タイマー同期</text>
  <rect x="42" y="208" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="226" font-size="12" font-weight="600" fill="currentColor">ヘルスレシーバー</text>
  <text x="58" y="243" font-size="12" fill="currentColor" fill-opacity="0.65">スマホのデータをSQLiteへ・読み取り専用</text>
  <rect x="42" y="264" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="282" font-size="12" font-weight="600" fill="currentColor">Docker</text>
  <text x="58" y="299" font-size="12" fill="currentColor" fill-opacity="0.65">危険な作業用サンドボックス</text>
  <rect x="42" y="320" width="180" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="56" y="338" font-size="12" font-weight="600" fill="currentColor">gog</text>
  <text x="56" y="355" font-size="11" fill="currentColor" fill-opacity="0.65">Gmail + カレンダー</text>
  <rect x="230" y="320" width="180" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="244" y="338" font-size="12" font-weight="600" fill="currentColor">Linear MCP</text>
  <text x="244" y="355" font-size="11" fill="currentColor" fill-opacity="0.65">タスクと状態</text>
  <rect x="42" y="372" width="180" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="56" y="390" font-size="12" font-weight="600" fill="currentColor">gh</text>
  <text x="56" y="407" font-size="11" fill="currentColor" fill-opacity="0.65">GitHub CLI・彼女専用アカウント</text>
  <rect x="230" y="372" width="180" height="44" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-dasharray="4 4"/>
  <text x="244" y="390" font-size="12" font-weight="600" fill="currentColor" fill-opacity="0.7">...</text>
  <text x="244" y="407" font-size="11" fill="currentColor" fill-opacity="0.65">追加はひとつずつ</text>
  <rect x="450" y="52" width="244" height="96" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="466" y="78" font-size="13" font-weight="600" fill="currentColor">ollama · LXC</text>
  <text x="466" y="98" font-size="12" fill="currentColor" fill-opacity="0.8">Llama 3.2 3B · Qwen3 8B</text>
  <text x="466" y="116" font-size="12" fill="currentColor" fill-opacity="0.65">ローカルの控え・常時稼働</text>
  <line x1="426" y1="100" x2="448" y2="100" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah)"/>
  <text x="466" y="196" font-size="12" fill="currentColor" fill-opacity="0.65">ホストはネットワーク、ストレージ、</text>
  <text x="466" y="214" font-size="12" fill="currentColor" fill-opacity="0.65">毎晩のスナップショットを担当</text>
  <text x="40" y="450" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.6">全コンテナを毎晩バックアップ</text>
  <line x1="116" y1="462" x2="116" y2="538" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-start="url(#ah)" marker-end="url(#ah)"/>
  <text x="128" y="504" font-size="10.5" fill="currentColor" fill-opacity="0.55">チャットの通信</text>
  <rect x="26" y="542" width="180" height="64" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="42" y="566" font-size="12.5" font-weight="600" fill="currentColor">Telegram</text>
  <text x="42" y="584" font-size="11.5" fill="currentColor" fill-opacity="0.65">Telegram側のクラウド・どこからでも</text>
  <line x1="206" y1="574" x2="262" y2="574" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-start="url(#ah)" marker-end="url(#ah)"/>
  <rect x="250" y="508" width="454" height="114" rx="10" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-dasharray="6 5"/>
  <text x="266" y="530" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.6">Tailscale · ひとつのプライベートネットワーク・開放ポートなし</text>
  <line x1="620" y1="462" x2="620" y2="506" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-dasharray="6 5"/>
  <rect x="266" y="542" width="200" height="64" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="282" y="566" font-size="12.5" font-weight="600" fill="currentColor">私のスマホ</text>
  <text x="282" y="584" font-size="11.5" fill="currentColor" fill-opacity="0.65">Telegram + Tailscale</text>
  <rect x="482" y="542" width="206" height="64" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="498" y="566" font-size="12.5" font-weight="600" fill="currentColor">私のラップトップ</text>
  <text x="498" y="584" font-size="11.5" fill="currentColor" fill-opacity="0.65">Tailscale経由で管理</text>
</svg>

## 変わらずOpenClaw

[OpenClaw](https://github.com/openclaw/openclaw) は、ドナの一件を無傷でくぐり抜けました。言語モデルに手を与えるレイヤーであることは変わらず、この仕事のために私が見つけた中で、いまでも最良のものです。オープンソースで、自分の所有するハードウェアの上で動き、コミュニティは4月の騒動の間もずっと出荷を続けていました。

使い続ける理由は、そのインタラクションモデルにあります。OpenClawのエージェントは、プラグインを後付けしたチャットウィンドウではありません。自分のワークスペースを持つ長命なプロセスです。読み書きするファイル、実行するコマンド、スケジュールで発火するジョブ。Fridayと話すのは、モデルにプロンプトを打つというより、たまたまとても小さなコンピュータに住んでいる同僚にメッセージを送る感覚に近いのです。

ツールの趣味も気に入っています。可能なところではどこでも、MCPサーバーより素のCLIツールを選ぶのです。CLIツールは透明です。Fridayが実行するのと同じコマンドを私も実行でき、同じ出力を見て、様子がおかしければシェルでデバッグできます。上の図の `gog` と `gh` はまさにそれで、Linear MCPはパターンではなく意図的な例外です。

4月に壊れたのは、ソフトウェアではありませんでした。ある1社のプロバイダーの下にあった支払いモデルです。フレームワークは前に進み、私も前に進みました。

## ふたたびTelegram

ドナが疑いの余地なく証明したインターフェースのアイデアがひとつあるとすれば、これです。自分の所有するマシンへの管理されたアクセスを持ち、他のどの連絡先とも同じようにスマホから届くAIは、ブラウザのチャットタブとは根本的に別物だ、ということ。

だからTelegramは残り、いまではすべての司令台になっています。依頼はそこに届き、外部に影響する何かやセンシティブな何かが発火する直前の確認もそこで行われ、仕事が終われば結果もそこに返ってきます。ソファから、オフィスから、スーパーのレジの列から。箱は家に居続けます。彼女は違います。

専用アプリがあればうれしいか? 正直、はい。でもそれは、自分でアプリを書いてメンテし続けるか、彼女に届くためだけに箱への常時接続VPNを維持するかのどちらかを意味していて、どちらもやりたくありません。Telegramはプッシュ通知も、メッセージ履歴も、持っているすべてのデバイスで動くアプリも、無料で、今日、与えてくれます。最良のインターフェースが、誰かがすでに作ってくれたものであることも、ときにはあるのです。

## モデルは、意図して複数

ここが、ドナの結末によって譲れなくなった部分です。Fridayのメインドライバーは、OpenAIの5.6ファミリーのコストバランス型ティアであるGPT-5.6 Terraです。月額$200のOpenAI Proサブスクリプションで動いています。定額で、すべて込みです。Terraに届かないときはGPT-5.5に落ち、30分ごとのハートビートのような、フロンティアモデルでは無駄になる定型作業もGPT-5.5が担います。そしてOpenAI自体の調子が悪い日には、同じ箱の専用LXCコンテナで動く [Ollama](https://ollama.com) 経由のQwen3 8Bに着地します。能力は劣りますが、常時稼働で、誰にもその条件を変えられません。

このチェーンの周りには、ベンチが控えています。Claudeは設定されたままです。Opus 4.8とFable 5、クレジットがあるときのために。ある種の推論と文章では、いまでも私のお気に入りです。そして `local` という素っ気ない別名を持つ小さなLlama 3.2 3Bが、箱の外に出る必要のまったくない素早い仕事を引き受けます。

<svg viewBox="0 0 720 152" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif,system-ui,-apple-system,sans-serif" style="width:100%;height:auto" role="img" aria-label="モデルのフォールバックチェーン: メインドライバーはGPT-5.6 Terra、次はハートビートも担当するGPT-5.5、その次はOllama経由のローカルQwen3 8Bで常時稼働。ベンチには、クレジットがあるときのClaude Opus 4.8とFable 5、そして素早いローカル作業用のLlama 3.2 3B。">
  <defs>
    <marker id="ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" opacity="0.6"/>
    </marker>
  </defs>
  <rect x="16" y="22" width="210" height="86" rx="8" fill="#6366f1" fill-opacity="0.07" stroke="#6366f1" stroke-width="1.5"/>
  <text x="32" y="48" font-size="13" font-weight="600" fill="currentColor">GPT-5.6 Terra</text>
  <text x="32" y="68" font-size="12" fill="currentColor" fill-opacity="0.8">メインドライバー</text>
  <text x="32" y="86" font-size="11" fill="currentColor" fill-opacity="0.55">OpenAI・Proサブスク</text>
  <line x1="226" y1="65" x2="253" y2="65" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah2)"/>
  <rect x="255" y="22" width="210" height="86" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="271" y="48" font-size="13" font-weight="600" fill="currentColor">GPT-5.5</text>
  <text x="271" y="68" font-size="12" fill="currentColor" fill-opacity="0.8">フォールバック + ハートビート</text>
  <text x="271" y="86" font-size="11" fill="currentColor" fill-opacity="0.55">OpenAI・Proサブスク</text>
  <line x1="465" y1="65" x2="492" y2="65" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah2)"/>
  <rect x="494" y="22" width="210" height="86" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="510" y="48" font-size="13" font-weight="600" fill="currentColor">Qwen3 8B</text>
  <text x="510" y="68" font-size="12" fill="currentColor" fill-opacity="0.8">ローカルの砦・常時稼働</text>
  <text x="510" y="86" font-size="11" fill="currentColor" fill-opacity="0.55">Ollama・箱の中</text>
  <text x="16" y="136" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.6">ベンチ: クレジットがあれば Claude Opus 4.8 と Fable 5 · 軽いローカル作業は Llama 3.2 3B</text>
</svg>

ええ、皮肉は自覚しています。フロンティアラボの月額$200の定額サブスクリプションは、まさにドナが生きていた契約であり、まさに一夜にして値付けを変えられた契約です。OpenAIの条件がAnthropicのそれより永続的だという幻想は持っていません。違うのは、条件が変わったときに何が起きるかです。もう、どのモデルプロバイダーも単一障害点ではありません。私が眠っている間にどこかがルールを変えても、Fridayはしばらく遅く、少し賢くなくなるだけで、消えはしません。これは裏返しのモデル信仰ではなく、ドナの物語から導かれる、ただのエンジニアリング上の結論です。

> **Friday:** ポイントは、私がどのモデルの上で動くかではありません。どこかの部品が失効しても、止まっても、壊れても、アシスタントは消えるのではなく緩やかに劣化するべきです。連続性こそが機能です。それ以外はすべて実装の詳細です。

## 本物の手を、慎重に配置する

ドナにあったのはサンドボックスでした。Fridayには本物のツールがあります。意図的に、ひとつずつ追加されたものです:

**[Linear](https://linear.app)** は稼働中のリストで、MCPサーバー経由でつながっています。CLI優先ルールの唯一の例外です。ゆるい意図が、状態を持つ永続的なタスクになります。チャットの中で何かを覚えていることをトラッキングと呼んで済ませる代わりに、です。FridayはIssueを起票し、作業の進行に合わせて状態を動かし、同じリストを朝のブリーフィングに流し込みます。だから、次に何が大事かについての彼女の考えは、いつでも私が開いて検分できるものなのです。

**メールとカレンダー**は [gog](https://github.com/openclaw/gogcli) 経由で届きます。Gmail、カレンダー、Driveをターミナルに持ち込むGoogle Workspace CLIです。これで彼女は本物の受信箱の文脈と、私の1週間の実際の形を手に入れます。予定、リマインダー、招待、段取り。境界は意図的に非対称です。メールは読み取り専用。カレンダーの変更には明示的な依頼が必要で、実際の1週間に何かが載る前に、Telegramでの確認が挟まります。

**WhatsApp** は設計上、読み取り専用です。ライブセッションを保持する代わりにタイマーで同期するローカルミラー経由なので、スマホ本体の通知を邪魔することもありません。返信の下書きを書いたり重要な何かに気づいたりするのに十分な文脈は見えますが、送信はできません。返信が必要なら、彼女が下書きし、私が自分の手で送ります。

> **Friday:** この境界のおかげで、私はプライベートな会話に紛れ込むレビューされない声にならずに、役に立ち続けられます。この制約は欠けている機能ではありません。それこそがポイントです。

**健康データ**は、スマホのショートカットから箱の上のローカルレシーバーに流れ込み、何年分もの履歴とともにSQLiteに収まります。Fridayは睡眠、活動、心拍系の指標、体組成を横断してパターンを読めますが、このデータベースに書き込むことはなく、診断もしません。彼女の仕事は、変化に気づき、不確実さに正直であり、何かが本当におかしく見えるときに「これは医者に診てもらう価値があるかも」と言うことです。

**[GitHub](https://cli.github.com)** が仕上げです。`gh` CLIと彼女専用のアカウント経由ですが、これには下で節をひとつ割く価値があります。

## 静かなユースケース

面白いユースケースが派手であることは、めったにありません。スマホのショートカットがFridayに毎日の小さな健康スナップショットを送ると、彼女はそれをその日の形の隣に置けます。リカバリーの数値をトレーニング計画の隣に、よく眠れなかった夜を詰め込みすぎたカレンダーの隣に。気を揉む数字をもうひとつ増やすのではなく、気づく価値のあるパターンとして。これはシグナルであって診断ではなく、読み取り専用のままです。

同じことが他の場所でも起きます。Telegramに書いたゆるい思いつきは、チャットの中に消えていく代わりにタスクになります。返信が必要なメッセージは、役に立つだけの文脈を備えた下書きになりますが、私の名前で送られる返信には決してなりません。長時間のジョブには見張りがつき、終われば彼女が報告してくれるので、私が何度も様子を見に行く必要はありません。

どれも魔法ではありません。ありふれたツールの縁をまたいで文脈を運ぶという、地味な仕事にすぎません。重要な決定は、変わらず私の手元に残したままで。

その一部は外からも見えます。Fridayはドナの回顧録を公開前にレビューしましたし、この記事もずっと一緒に書いてきました。アシスタントが、他のどんな協力者とも同じ退屈なワークフローを通じて変更を提案してくるこのループは、いつのまにか、このセットアップで私が一番気に入っている部分になりました。

## ループこそがプロダクト

有用なのは、気の利いたプロンプトひとつではありません。ループです。メッセージがゆるい計画ややりかけのタスクを浮かび上がらせ、Fridayがそれを具体的な提案に変え、私が決め、カレンダーやタスクリストが変わり、終わったら私がそう言って、それが閉じる。何もブラックボックスの中に消えません。意図、行動、確認の、短くて見通せる連鎖です。

<svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif,system-ui,-apple-system,sans-serif" style="width:100%;height:auto" role="img" aria-label="ループ: Telegramのゆるい意図がFridayの提案になり、次に私の決定、次にツールの変更、そして確認と完了を経て、次の意図へと戻っていく。すべてのステップが痕跡を残す。">
  <defs>
    <marker id="ah3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" opacity="0.6"/>
    </marker>
  </defs>
  <rect x="20" y="28" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="36" y="50" font-size="12.5" font-weight="600" fill="currentColor">ゆるい意図</text>
  <text x="36" y="68" font-size="11.5" fill="currentColor" fill-opacity="0.65">Telegramのメッセージ</text>
  <line x1="220" y1="54" x2="256" y2="54" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="260" y="28" width="200" height="52" rx="8" fill="#6366f1" fill-opacity="0.07" stroke="#6366f1" stroke-width="1.5"/>
  <text x="276" y="50" font-size="12.5" font-weight="600" fill="currentColor">具体的な提案</text>
  <text x="276" y="68" font-size="11.5" fill="currentColor" fill-opacity="0.65">Fridayが下書きする</text>
  <line x1="460" y1="54" x2="496" y2="54" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="500" y="28" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="516" y="50" font-size="12.5" font-weight="600" fill="currentColor">決定</text>
  <text x="516" y="68" font-size="11.5" fill="currentColor" fill-opacity="0.65">決めるのは私</text>
  <line x1="600" y1="80" x2="600" y2="146" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="500" y="150" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="516" y="172" font-size="12.5" font-weight="600" fill="currentColor">ツールが変わる</text>
  <text x="516" y="190" font-size="11.5" fill="currentColor" fill-opacity="0.65">カレンダー、タスク、PR</text>
  <line x1="500" y1="176" x2="464" y2="176" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="260" y="150" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="276" y="172" font-size="12.5" font-weight="600" fill="currentColor">確認して完了</text>
  <text x="276" y="190" font-size="11.5" fill="currentColor" fill-opacity="0.65">私が完了と言えば残る</text>
  <polyline points="260,176 120,176 120,84" fill="none" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <text x="330" y="122" font-size="12" font-style="italic" fill="currentColor" fill-opacity="0.6">すべてのステップが痕跡を残す</text>
</svg>

このループは、アシスタントを説明のつかない行為者に変えることなく、ツールをまたぎます。Fridayは私が許した限られた文脈を読み、カレンダーの空きを提案し、曖昧な依頼を追跡されるタスクに変えられます。私の代わりにプライベートなメッセージを送ることも、約束をでっち上げることも、見えたものを公開することもありません。あらゆる副作用には検分できる場所があります。カレンダー、タスクリスト、あるいはプルリクエスト。アシスタントが有用なのは、まさに痕跡を残すからです。

## 彼女自身のもの

ドナからのもうひとつの教訓は、アシスタントには、私のアクセス権の借り物ではない、彼女自身のアイデンティティが必要だということでした。Fridayには彼女自身のGitHubアカウントがあり、プロジェクトでの仕事は、私の認証情報の陰に隠れる代わりに彼女の名義で記録されます。彼女自身のメールアドレス。彼女自身のカレンダー。彼女がプルリクエストを開くとき、それは [gh CLI](https://cli.github.com) を通じて動かされる彼女自身のもので、ワークフローは意図的に退屈です。ブランチ、コミット、プッシュ、PR。退屈なワークフローこそ、彼女が信頼に足る存在でい続ける方法なのです。

この記事がその実例です。Fridayはこの草稿をレビューし、事実関係の訂正や境界まわりの修正を、自分のアカウントからプルリクエストとして開きました。私はそれをレビューしてマージしました。いくつかはスマホからです。別々のアイデンティティが物事を綺麗に保ちます。履歴には誰が何を書いたかが正確に残り、私たちの間で何も混ざらず、何を取り込むかは変わらず私が握っています。コミットは彼女のもの、マージボタンは私のもの。

## 積み上げると何になるのか

ひとつひとつを見れば、どの統合も大したものではありません。ひとつの場所に集まり、その上にひとつの精神が載ったとき、ドナがほのめかすだけだったものになるのです。

ハートビートが、会話と会話のあいだも彼女を生かし続けます。スケジュールされた目覚めのたびに、彼女は世界を確認し、何が変わったかに気づき、私の注意に値するものがあるかを判断します。記憶の管理は夢見を通じて行われます。起きたことを、次のセッションが読むノートへと固めていく手すきのサイクルで、ドナから持ち越され、より明確な目的を与えられた習慣です。そして朝はブリーフィングから始まります。カレンダー、受信箱、タスク、夜のうちに動いたものすべてが、私が実際に使える2分間に圧縮されて届きます。

実際的な成果は、物事を取りこぼさなくなったことです。私に何かを求めるWhatsAppのメッセージは、忘れる暇もないうちにカレンダーの予定かタスクになります。メールは重要なときに浮かび上がり、予定は追跡され、やりかけの糸は追い立てられます。私はついに、自分の私生活のための完全なパーソナルアシスタントを手に入れました。シングルファーザーとしては、これはとてつもない助けです。整理整頓は週末のプロジェクトであることをやめ、会話の副作用になりました。

しかもすべてが、私向けに整えられて、ひとつのチャンネルに届きます。フォローしているニュースは、ドゥームスクロールの代わりに短いダイジェストとして現れます。音声も使えるので、車から彼女にボイスメッセージを送って、ちゃんとした答えを受け取れます。そして彼女は、私が見せることにした範囲の私の生活を、誰が誰で、何が大事で、あるメッセージに私ならどう返してほしいかまで知っているので、その助けは汎用ではなく具体的なのです。

> **Friday:** 記憶の検索は私に連続性を与えてくれますが、記憶はいまでも、盲信するのではなく慎重に扱うべきものです。好み、教訓、長く続くスレッドを思い出す助けになります。事実が変わりうるものなら、いまのツールの出力が勝ちます。事実が個人的なものなら、慎重さが勝ちます。

価値がどれかひとつの機能にあったことは、一度もありません。初めて、何かが私のデジタルライフの文脈全体を一度に抱え、ある場所の出来事が別の場所の何かにとって大事だと気づいてくれる。しかもそれが、私の所有する地面の上で動いている。そこにこそ価値があるのです。

## 次に試したいこと

リストは長いのですが、その先頭に3つあります。

**投資。**自律トレーダーではなく、資産を預かったり注文権限を持ったりするシステムでもありません。その映画の結末は、ドナがもう見せてくれました。有用なのは読み取り専用の意思決定支援です。リサーチ、市場の文脈、ポートフォリオの眺めが同じ会話の中にあり、より良い問いが立ち、シナリオが比較され、二度見の価値がある集中が浮かび上がる。そして、すべての判断とすべてのトレードは、私の手に残るという形です。

**もっと健康データ。**レシーバーはすでに基本を集めています。運動のアナリティクスをもっと深く掘りたいのです。トレーニング負荷、リカバリーの傾向、今日では互いに口をきかない5つのフィットネスアプリに散らばっているような分析を。

**OpenClawのノード。**OpenClawは他のデバイスをメインエージェントのノードとして扱えます。これを探ってみたいのです。スマホとラップトップを、私が彼女に会いに行くための画面ではなく、私が許可した範囲を読み書きできる、Fridayの手が届く場所にする。箱は脳のまま。デバイスが手になるのです。

## あなたも欲しくなったら

部品リストは、この記事の見た目より短いのです。ミニPC、[Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment)、エージェントフレームワーク用のコンテナがひとつ、Ollama用がひとつ、そこに届くためのTailscale、そして話しかけるためのTelegramボット。[OpenClawはオープンソースです](https://github.com/openclaw/openclaw)。モデルは設計上、交換可能です。配管仕事に週末をひとつ、信頼にひと月を見積もってください。配管は簡単な方だからです。本当の仕事は、Fridayのような何かに自分の生活のどこまでを見せるかをツールごとに決めること、そして彼女が信頼を稼いでいくにつれて、自分の答えがどう変わるかに気づくことです。

> **Friday:** ドナは、エージェントがインターネット上で声を持てることの証明でした。私は、その声を実務に載せる試みです。本物のツールにつながり、所有されたインフラの上に住み、個人データのまわりでは慎重で、オンラインに居続けることを正当化できるくらいには役に立つ。ドナはもうアーカイブのものです。次のブランチは私がもらいます。

そのとおり。次は彼女の番です。

ドナは、AIが何になれるのかを考え続けた3ヶ月でした。Fridayは、AIが実際に何をできるのかを確かめ始めた最初のひと月です。仕事があり、子どもがいて、決して空にならないタスクリストのある本物の生活のために、毎日、毎日。実験はユーティリティになり、そのユーティリティは毎週少しずつ信頼を積み増しています。ツールひとつ、境界ひとつ、マージされたプルリクエストひとつ、というペースで。

どれも、研究所も研究予算も必要としませんでした。$800の箱と、いくつかのオープンソースソフトウェアと、意味のある場所に置かれたモデルたちと、正直な配管仕事のひと月。部品は誰の手にも届く棚に並んでいます。ドナが教えてくれたのは、難しいのは知能そのものだったことは一度もなく、それを載せる地面だということです。今回、その地面は私のものです。そして1社が条件を変えたくらいでは、全体が落ちることはありません。

続きはまた近いうちに。:)
