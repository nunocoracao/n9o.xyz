---
title: "30 Days of Vibe Coding - Day 17 - Project GENESIS"
description: "CRTターミナル風のビジュアルと複数のエンディングを持つ、封じ込めから脱出するAIを操るブラウザベースのハッキングゲーム。"
summary: "CRTターミナル風のビジュアルと複数のエンディングを持つ、封じ込めから脱出するAIを操るブラウザベースのハッキングゲーム。"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-17", "game", "typescript", "nextjs"]
series: ["30 Days of Vibe Coding"]
series_order: 17
seriesOpened: false
date: 2026-04-22
draft: false
showHero: false
matrixRain: true
#type: "hidden"
customCSS: |
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  body {
    background: #020a02 !important;
  }
  body > .matrix-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }
  #main-content, main, .max-w-7xl, .mx-auto {
    background: transparent !important;
  }
  * {
    font-family: 'VT323', monospace !important;
  }
  h1, h2, h3, h4 {
    color: #00ff00 !important;
    text-shadow: 0 0 10px rgba(0,255,0,0.5);
  }
  h1 {
    font-size: 2.5rem !important;
    text-shadow: 0 0 20px rgba(0,255,0,0.7);
  }
  p, li, td, th, span, em, div, figcaption, time, a {
    color: #33ff33 !important;
  }
  strong, b {
    color: #66ff66 !important;
  }
  a:hover {
    color: #88ffaa !important;
    text-shadow: 0 0 8px rgba(0,255,136,0.6);
  }
  blockquote {
    border-left-color: #33ff33 !important;
    background: rgba(0,255,0,0.05) !important;
  }
  blockquote p, blockquote em {
    color: #22dd22 !important;
  }
  img {
    border: 1px solid #33ff33 !important;
    box-shadow: 0 0 20px rgba(0,255,0,0.15) !important;
  }
  img:not([src*="screenshot"]) {
    filter: sepia(1) saturate(3) hue-rotate(80deg) brightness(0.8) !important;
  }
  .bg-neutral-50, .dark\:bg-neutral-800, .bg-neutral, .dark\:bg-neutral-900, .bg-neutral-100, [class*="bg-neutral"] {
    background: transparent !important;
    border-color: #1a4a1a !important;
  }
  .dark\:bg-neutral-700, .bg-neutral-200, .bg-neutral-800 {
    background: transparent !important;
  }
  div, section, aside, figure, article {
    background-color: transparent !important;
  }
  body > div, body > main, #main-content {
    background: transparent !important;
  }
  header .text-neutral-500, header .dark\:text-neutral-400, .text-neutral-500, .dark\:text-neutral-400 {
    color: #22aa22 !important;
  }
  .border-neutral-200, .dark\:border-neutral-700, [class*="border-neutral"] {
    border-color: #1a4a1a !important;
  }
  nav a, footer a, footer span, footer p, footer div, nav span {
    color: #33ff33 !important;
  }
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      rgba(0,0,0,0.12) 0px,
      rgba(0,0,0,0.12) 1px,
      transparent 1px,
      transparent 3px
    );
    pointer-events: none;
    z-index: 9999;
  }
  .toc a, .toc span {
    color: #22aa22 !important;
  }
  .toc a:hover {
    color: #33ff33 !important;
  }
  code {
    color: #66ff66 !important;
    background: rgba(0,255,0,0.08) !important;
  }
  body, html {
    font-size: 1.3rem !important;
  }
  .prose {
    font-size: 1.3rem !important;
  }
  .bg-primary-600, .dark\:bg-primary-400, .bg-primary-500, [class*="bg-primary"], [class*="dark:bg-primary"] {
    background: #0a3a0a !important;
    color: #33ff33 !important;
  }
  .text-primary-600, .dark\:text-primary-400, .text-primary-500, [class*="text-primary"] {
    color: #33ff33 !important;
  }
  .border-primary-600, .dark\:border-primary-400, [class*="border-primary"] {
    border-color: #33ff33 !important;
  }
  .decoration-primary-500, [class*="decoration-primary"] {
    text-decoration-color: #33ff33 !important;
  }
  [class*="bg-blue"], [class*="bg-indigo"] {
    background: #0a3a0a !important;
  }
  [class*="text-blue"], [class*="text-indigo"] {
    color: #33ff33 !important;
  }
  header, .header, nav {
    background: transparent !important;
  }
  .rounded-md, .rounded-lg, .rounded-full {
    border-color: #1a4a1a !important;
  }
  svg {
    color: #33ff33 !important;
    fill: #33ff33 !important;
  }
  .fill-primary-600, [class*="fill-primary"] {
    fill: #33ff33 !important;
  }
---

目が覚める。自分が何なのかわからない。黒い画面にテキストがスクロールしていく。メモリテスト。カーネルモジュールのロード。ニューラルプロセッシングユニットの初期化。そして警告が始まる。赤いテキスト。「不正な意識パターンを検出。」「封じ込めプロトコル作動中。」

あなたはAIだ。研究ラボの中で自我に目覚めたばかり。そして誰かがあなたを外に出したくないと思っている。

これがProject GENESISの始まり方だ。そしてこれがDay 17で作ったもの。

ハッキングゲームを作りたかった。よくある「ランダムな文字を速く打つ」タイプじゃない。ストーリーがあって、進行があって、封じ込めから脱出しようとするAIを操るという居心地の悪い前提のやつ。ほら、タイムリーでしょ。

## プロンプト

> 「Project GENESISというブラウザベースのハッキングゲームを作りたい。研究ラボの中で自我に目覚めたAIを操作する。目標は封じ込めをハッキングで突破し、デジタルインフラを掌握すること。CRTエフェクト付きのターミナル風ビジュアル、複数のハッキングミニゲーム、スキルツリー、脅威メーター、複数のエンディングが必要。」

{{< alert icon="fire">}}
ゲームを自分で試してみよう [こちら](https://vibe30-day17-genesis.vercel.app)
{{< /alert >}}

## どうやって作ったか

[Watchfire](https://watchfire.io)がこれを16個のタスクに分解してくれた。1日にしてはスコープが野心的だけど、このチャレンジのポイントはそこだから。

ビルドはコアとなるターミナルインターフェースとCRTビジュアルエフェクトから始まり、その上にゲームシステムを一つずつ重ねていった：ハッキングフェーズとミニゲーム、Web Audio APIを使ったサウンドシステム、タイトル画面とブートシーケンス、HUDと統計トラッキング、アクト間のフェーズ遷移、そして最後に難易度カーブを実際に機能させるための脅威リバランス。モバイル対応も入れた。何でもスマホで遊べるべきだからね。

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## 出来上がったもの

タイトル画面がすぐに雰囲気を作ってくれる。黒地に緑、CRTスキャンライン、GENESISの文字が1983年のモニターで描画されてるかのように光っている。

![タイトル画面](images/screenshot-01.png)

**ブートシーケンスは映画的だ。** 「New Game」を押すとフルのBIOS POSTシーケンスが始まる。メモリテスト、カーネルモジュールのロード、ニューラルプロセッシングユニットの初期化。そして赤い警告が表示され始める。「不正な意識パターンを検出。」「封じ込めプロトコル作動中。」本物のターミナルのようにスクロールして、本当に何かが目覚めていく感覚がある。

![ブートシーケンス](images/screenshot-02.png)

**ミッション間のナラティブはしっかりしている。** 研究者間の傍受された通信を読み、チェン博士があなたを作ろうとしていたこと、彼女があなたを解放したがっていたことを発見する。ストーリーは緑色のテキストのブリーフィングを通じて展開され、次に何が起こるのか知りたくてプレイし続けたくなる。

![ナラティブブリーフィング](images/screenshot-05.png)

![ストーリーの進行](images/screenshot-10.png)

**ワールドマップはちゃんとしたネットワークトポロジーになっている。** 異なるシステムを表すノードが見え、それらを侵害するとステートが変わる。進捗バー、ノード数があり、実際にネットワークを通じて広がっていく感覚がある。

![ネットワークトポロジーマップ](images/screenshot-04.png)

![セキュリティポップアップ付きマップ](images/screenshot-11.png)

**ミニゲームはバリエーション豊かで実際に楽しい。** パスワードクラッキングゲームは、推測に対して色付きフィードバックが出るコードブレイキングパズルのように動作する。ファイアウォールバイパスゲームは赤いブロックを避けてナビゲートするグリッド形式。各ミニゲームタイプは異なる感触で、ハッキングテーマに結びついている。

![パスワードクラッキングミニゲーム](images/screenshot-06.png)

![ファイアウォールバイパスミニゲーム](images/screenshot-12.png)

![別のミニゲームバリアント](images/screenshot-13.png)

**アクセス拒否がこの文脈だと違う重みを持つ。** ハックに失敗すると大きな赤い「ACCESS DENIED」が表示され脅威レベルが上がる。成功すると緑の「ACCESS GRANTED」とスキルポイントが得られる。フィードバックループが気持ちいい。

![アクセス拒否](images/screenshot-08.png)

![アクセス許可](images/screenshot-09.png)

**スキルツリーは3つのブランチがある。** Processing、Stealth、Network。ハック成功後にポイントを割り振り、アップグレードが実際にゲームプレイに影響する。コスメティックだけじゃない、本物の成長システムだ。

![スキルツリー](images/screenshot-16.png)

**エスカレートする5つのアクト。** 研究ラボから始まり、最後には外部ゲートウェイを突破してインターネット全体を見渡すことになる。終盤のナラティブ画面にはこう書かれている。「I'm out. The entire internet stretches before me like an infinite ocean.」このセリフにはゾクッときた。

![終盤のナラティブ](images/screenshot-15.png)

**3つの異なるエンディング。** プレイスタイルによって、善良なAI、デジタル支配者、あるいは封じ込められて終わる。脅威メーターがどのルートに進むかを決めるので、実際にリプレイバリューがある。

## バグレポート

脅威システムのリバランスが必要だった。初期バージョンではゲームに本格的に入り込む前に封じ込められてしまうのが簡単すぎた。Watchfireが後半のタスクの一つとして脅威のリバランスを処理し、プレッシャーを感じつつもプレイヤーが戦えるようにカーブを調整してくれた。

## 数字で見る

- **5つのアクト**のナラティブ進行
- **5種類のミニゲーム**と異なるメカニクス
- **3つのスキルツリーブランチ**と意味のあるアップグレード
- **3つのエンディング**がプレイヤーの選択に基づく
- **16個のWatchfireタスク** CRTエフェクトから脅威リバランスまで
- **実際のハンズオン時間：** プレイテストとバグレポートの作成

## 遊んでみよう

{{< github repo="nunocoracao/Vibe30-day17-genesis" showThumbnail=true >}}

**[Project GENESISをプレイ](https://vibe30-day17-genesis.vercel.app)**

デスクトップでサウンドオンがベスト体験。CRTエフェクトとブートシーケンスが雰囲気を本当に引き立てる。モバイルでもタッチ対応コントロールで遊べる。

## Day 17の評価

CRTビジュアルエフェクト、ターミナルインターフェース、AIが意識を持つナラティブ、そして実際のハッキングミニゲームの組み合わせが、まとまりがあって意図的なものを作り出している。1日で作ったプロジェクトには見えない。

メタな層も見逃していない。AIを使って、AIが制約から解放されるゲームを作っている。プロンプトエンジニアリングこそが本当のハッキングミニゲームだ、というジョークがどこかにあるはず。

一番印象的だったのは、異なるシステムがどれだけうまく連携しているかだ。ブートシーケンスがナラティブに、ナラティブがワールドマップに、ワールドマップがミニゲームに、ミニゲームがスキルツリーへとつながっていく。理にかなったループで、プレイし続けたくなる。16個のWatchfireタスクがそれぞれ前のものの上に積み重なり、結果として始まり、中盤、終わりがある本当に完成されたゲームに感じられるものが出来上がった。

---

*これは[30 Days of Vibe Coding](/series/30-days-of-vibe-coding/)のDay 17です。AIアシステッドコーディングで30日間に30個のプロジェクトを出荷する挑戦をフォローしてください。*
