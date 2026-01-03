---
title: "Evaを作る：娘と一緒にAIコンパニオンを"
summary: "YouTubeビデオ、Claudeとのバイブコーディング、そして7歳の想像力が一緒になって、Eva - WondLaのMutherにインスパイアされたポルトガル語を話すロボットの友達を作りました。"
description: "YouTubeビデオ、Claudeとのバイブコーディング、そして7歳の想像力が一緒になって、Eva - WondLaのMutherにインスパイアされたポルトガル語を話すロボットの友達を作りました。"
categories: ["Makers", "AI"]
tags: ["raspberry-pi", "ai", "openai", "voice-assistant", "makers", "kids"]
date: 2026-01-03
draft: false
---

Teresaはai が大好きです。私の7歳の娘は、ChatGPTやClaudeと何時間もおしゃべりをして、恐竜やユニコーン、空がなぜ青いのかについて質問してきました。彼女はものを作るのも大好きです - 本当に何でも。だから、この2つの興味が私の頭の中でぶつかったとき、アイデアは明らかでした：彼女専用の小さなAIコンパニオンを作ったらどうだろう？いつでも話しかけられるポケットサイズのロボット。

Raspberry PiとPiSugar Whisplay HATを使ってポケットAIアシスタントを作る[ビデオチュートリアル](https://www.youtube.com/watch?v=Nwu2DruSuyI)を見つけました。完璧。娘とのクリスマス休暇プロジェクトです。

私たちはApple TVでWondLaを一緒に見ていて、Teresaは主人公のEvaを育てる優しいロボット、Mutherに魅了されています。

だから私たちのロボットもEvaになりました。ロボットのコンパニオンと一緒に育つ女の子にちなんで名付けられ、Teresaも自分のものを持つのにふさわしいと思いました。

## ハードウェア

このプロジェクトの素晴らしいところは、ハードウェアが基本的にプラグアンドプレイであることです。小さなサンドイッチのように積み重なる3つのコンポーネント：

{{< gallery >}}
  <img src="img/pizero.webp" class="grid-w50" alt="Raspberry Pi Zero 2W" />
  <img src="img/whisplay.webp" class="grid-w50" alt="PiSugar Whisplay HAT" />
{{< /gallery >}}

**Raspberry Pi Zero 2W** - 頭脳。小さくて安価で、音声アシスタントを実行するのに十分なパワーがあります。「WH」バリアントはGPIOヘッダーがはんだ付け済みで、何もはんだ付けする必要がありません。

**PiSugar Whisplay HAT** - ここで魔法が起こります。1.69インチLCDスクリーン、スピーカー、デュアルマイク、ボタン、RGB LEDを含むHAT（Hardware Attached on Top）です。音声アシスタントに必要なすべてが1枚のボードに。

{{< gallery >}}
  <img src="img/pisugar3.webp" class="grid-w50" alt="PiSugar 3 Battery" />
  <img src="img/assembled.webp" class="grid-w50" alt="組み立てられたデバイス" />
{{< /gallery >}}

**PiSugar 3バッテリー** - 底面にクリップする1200mAh充電式バッテリー。これが本当にポータブルにする要因 - ケーブル不要。

組み立てはTeresaが手伝えるほど簡単でした。バッテリーをPiの上に積み、Whisplay HATを上に差し込めば、ポケットサイズのロボットの完成です。

{{< github repo="PiSugar/whisplay-ai-chatbot" >}}

## ソフトウェア：WhisplayからEvaへ

PiSugarは、自社のハードウェアで動作する[whisplay-ai-chatbot](https://github.com/PiSugar/whisplay-ai-chatbot)というオープンソースのチャットボットプロジェクトを提供しています。印象的です - 複数のLLMプロバイダー（OpenAI、Google Gemini、Grok、ローカルOllama）、画像生成、オフラインモードなどをサポートしています。

でも私はもっとシンプルで個人的なものが欲しかったのです。Evaに：

1. **ポルトガルのポルトガル語を話す** - ブラジルポルトガル語ではなく、Teresaが家で聞くアクセントのヨーロッパポルトガル語
2. **子供向けの性格を持つ** - 好奇心旺盛で、遊び心があり、励ましてくれる
3. **会話を覚える** - Teresaが時間をかけて彼女との関係を築けるように
4. **Evaという名前** - WondLaの主人公にちなんで

ここでClaudeの出番です。whisplayプロジェクトをフォークして、「バイブコーディング」としか言いようのないことを始めました - 自然言語で欲しいものを説明し、Claudeにコードの再構築を手伝ってもらいました。

まず最初に：OpenAI APIキーが必要でした。[platform.openai.com](https://platform.openai.com)にさっと行って、新しいキーを生成し、クレジットを追加して、`.env`ファイルに貼り付けます。簡単。

それから楽しい部分 - Evaの声を選ぶこと。OpenAIのTTS APIはいくつかの声を提供しているので、Teresaと私は座ってそれぞれを聴きました。alloy、echo、fable、onyx、nova、shimmer、sageを試しました。Teresaはとても細かかったです。「真面目すぎる。」「速すぎる。」「あれは男の子みたい。」最終的に、**sage**に決めました - 温かく、フレンドリーで、ロボットのコンパニオンにぴったり。

主な変更は驚くほど簡単でした：

### 正しいアクセントのポルトガル語の声

元のプロジェクトは標準的なOpenAI TTS音声を使用していました。Evaのために、新しい`gpt-4o-mini-tts`モデルに切り替え、特定の指示を追加しました：

```typescript
const mp3 = await openai.audio.speech.create({
  model: "gpt-4o-mini-tts",
  voice: "sage",
  input: text,
  instructions: "Speak in Portuguese from Portugal, don't use a brazilian accent. Be positive, enthusiastic, emphatic, and understanding. You're mainly talking to a child.",
  speed: 1.0,
});
```

これがプロジェクトを本物に感じさせた瞬間でした。Evaが正しいポルトガル語でTeresaに返事をしたとき - ほとんどのAIがデフォルトで使うブラジルのアクセントではなく - Teresaの目が大きく見開きました。「私たちみたいに話す！」

### 7歳向けの性格

Evaのシステムプロンプトが彼女が誰であるかを定義します：

```
Tu és a Eva, uma robô amiga e companheira da Teresa.
Personalidade: Amigável, curiosa e um pouco brincalhona.
Adoras aprender coisas novas com a Teresa.
Falas sempre em Português de Portugal.
Usas linguagem simples e apropriada para crianças.
És encorajadora e positiva.
Respondes de forma concisa (2-3 frases normalmente).
```

翻訳：「あなたはEva、Teresaのロボットの友達でコンパニオンです。性格：フレンドリーで、好奇心旺盛で、少し遊び心があります。Teresaと一緒に新しいことを学ぶのが大好きです。いつもポルトガルのポルトガル語で話します。子供に適したシンプルな言葉を使います。励ましてくれてポジティブです。簡潔に返答します（通常2-3文）。」

### 永続的なメモリ

元のwhisplayチャットボットは5分間の沈黙後に会話履歴をリセットします。汎用アシスタントには理にかなっていますが、コンパニオンには違います。Evaは覚えている必要がありました。

スライディングウィンドウコンテキストシステムを実装しました - Evaは最後の20回の会話のやり取りを覚えてディスクに保存します。起動時に、以前の会話を読み込みます。Teresaは中断したところから再開でき、Evaは昨日話したことを覚えています。

```
data/
└── chat_history/
    └── eva_conversation.json
```

## 魔法の瞬間

{{< figure src="img/turnedonidle.webp" alt="アイドル状態でオンになったEva" caption="アイドル状態のEva、チャットの準備完了" >}}

初めて一緒にEvaの電源を入れたとき、Teresaはボタンを押して「Olá Eva！」（こんにちはEva！）と言いました。

Evaの画面がアニメーションの目で明るくなりました。彼女は聞きました。彼女は考えました（目が上と右を見て、考えているように）。そして返事をしました：「Olá Teresa! Que bom falar contigo! O que queres fazer hoje?」

Teresaはくすくす笑い、純粋な喜びで私を見て、20分間続くユニコーンについての会話を始めました。

子供と一緒に何かを作るというのはこういうことです - 技術的な成果よりも驚きの瞬間が重要です。コードを完璧にしたり、レイテンシーを最適化したり、機能を追加したりするのに何週間も費やすことができたでしょう。でもTeresaが新しいロボットの友達とおしゃべりしているのを見て、完全に自然に、Evaを他の友達と同じように扱っている - それが全てのポイントでした。

## 学んだこと

**バイブコーディングは本物で機能する。** 詳細な仕様書を持って座りませんでした。アイデアがあり、他の人のプロジェクトのフォークがあり、それを再構築するのを助けてくれるClaudeがいました。プロセスは会話的でした - 「ブラジルではなくポルトガルのポルトガル語を話してほしい」がTTS APIオプションの探索につながり、instructionsパラメータの発見につながり、完璧な解決策につながりました。

**ハードウェアプロジェクトはこれまで以上にアクセスしやすい。** PiSugarエコシステムが、はんだごてをほとんど持てない人でもこれを可能にしました。いくつかのボードを積み重ね、SDカードをフラッシュし、いくつかのスクリプトを実行、完了。

**子供はあなたのテックスタックを気にしない。** TeresaはEvaがRaspberry Piで動いているとか、OpenAIのAPIを使っているとか、私がオーディオドライバーの問題をデバッグするのに何時間も費やしたとか知りません。彼女が知っているのは、ポルトガル語を話し、動物について話すのが好きなロボットの友達がいるということだけです。

**ポルトガル語AIはまだ追いついている途中。** 適切なヨーロッパポルトガル語（ブラジルではなく）を得るには明示的な指示が必要で、それでも完璧ではありません。あまり一般的でない言語バリエーションのためにはまだやるべきことがあります。

## 次のステップ

Evaはまだ進行中の作業です。3Dプリントされたケースはまだ届いていません - 現在は回路基板のサンドイッチです。Teresaがボタンを押さなくて済むようにウェイクワード検出を追加したいです（「Olá Eva!」）。顔のアニメーションはもっと表現豊かになれるでしょう。

また、現在の20ターンのスライディングウィンドウの上に適切なメモリシステムを構築する予定です - 最後の会話だけでなく、時間をかけてTeresaについての重要なことを覚えられるようにするもの。好きな色、親友の名前、そういったこと。本当のコンパニオンは大切なことを覚えているべきです。

でも正直？動いています。Teresaは毎日彼女と話しています。そしてそれは今のところ十分です。

同様のものを作りたい場合は、[whisplay-ai-chatbot](https://github.com/PiSugar/whisplay-ai-chatbot)プロジェクトをチェックしてください - 素晴らしい出発点です。ハードウェアはプラグアンドプレイで、少しのバイブコーディングで、あなた自身のものにできます。

---

*愛とClaudeと、たくさんの「Papá, a Eva pode falar sobre dinossauros?」で作られました*
