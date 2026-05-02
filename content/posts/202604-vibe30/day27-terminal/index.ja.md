---
title: "30 Days of Vibe Coding - Day 27 - Terminal"
description: "Tauri 2とRustで構築したネイティブターミナルエミュレータ。タブ、分割ペイン、カスタマイズ可能なテーマ、スマート機能を搭載。"
summary: "Tauri 2とRustで構築したネイティブターミナルエミュレータ。タブ、分割ペイン、カスタマイズ可能なテーマ、スマート機能を搭載。"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-27", "rust", "tauri", "terminal"]
series: ["30 Days of Vibe Coding"]
series_order: 27
seriesOpened: false
date: 2026-05-02
draft: false
#type: "hidden"
---

27日目。残り4日。もう安全策を取っている場合じゃない。

このチャレンジの終盤は、1日では到底無理そうなものに挑みたかった。ターミナルエミュレータはまさにそういうやつだ。ターミナルのふりをするWebのおもちゃじゃない。実際のシェルセッションを起動し、60fpsでレンダリングし、vimからhtopまで何でもこなす、本物のネイティブデスクトップアプリだ。

## プロンプト

> "Tauri 2とRustを使ってターミナルエミュレータを作って"

これがコアの依頼。それ以外はイテレーションの中で生まれた。

{{< alert icon="fire">}}
[最新リリース](https://github.com/nunocoracao/Vibe30-day27-terminal/releases/latest)からダウンロードできます
{{< /alert >}}

## どう作ったか

これは大物だった。[Watchfire](https://watchfire.io)が作業を19個のタスクに分解してくれて、そのすべてが必要だった。ターミナルエミュレータの構築は簡単じゃない。PTY管理、シェル統合、入力処理、レンダリングパフォーマンス、他にも考えもしなかったことが山ほどある。

タスクリストはこんな感じだった：

1. 基本的なPTYサポート付きのTauri 2 + Viteプロジェクトをスキャフォールド
2. タブの開閉、リネーム対応の複数タブ機能
3. 水平・垂直の分割ペイン
4. テーマ、フォント、シェル設定の設定パネル
5. UIの磨き込み、スクロールバック、シェルの修正
6. 自動リリースのためのGitHub Actions
7. インラインAIコマンド提案
8. 透明度、ブラー、ウィンドウクロームのビジュアル調整
9. ターミナル出力内のクリッカブルリンクとスマート検出
10. シェルプロファイルとクイックアクション
11. 確認ダイアログ付きの危険なコマンド警告
12. 長時間実行コマンドの通知
13. リッチなCtrl+Rオーバーレイによるファジー履歴検索
14. 履歴ファイルからのインラインゴースト提案
15. クイックフィックスアクション付きのインテリジェントエラー検出
16. 自然言語からコマンドへの変換
17. コマンド説明とAI出力要約
18. 折りたたみ可能なセクションによるブロックベースの出力グルーピング
19. スマート機能の設定パネルと統合テスト

その後、CI/CDの修正が待っていた。TauriをmacOS、Linux、Windows向けにGitHub Actionsでビルド・署名させるのは、それだけで一つの冒険だ。3プラットフォームすべてのインストールスクリプトも。

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## 出来上がったもの

![複数の機能が表示されたTerminal](images/screenshot-01.png)

**本物のターミナルだ。** シミュレーションじゃない。RustのポータブルPTYクレートを使って実際のシェルセッションを起動する。bash、zsh、fish、設定してあるものなら何でも。フルPTYサポートなので、vim、htop、対話型プロンプト、すべて動く。

![複数タブでhtopを実行](images/screenshot-11.png)

**WebGLアクセラレーション付きxterm.js。** レンダリングが速い。体感できるレベルで速い。スクロールバックは10,000行まで対応していて、もたつかない。WebGLレンダラーは標準のキャンバスアプローチと比べて本当に違いが出る。

**タブと分割ペイン。** Cmd+Tで新しいタブ、Cmd+Dで垂直分割、Cmd+Shift+Dで水平分割。タブのリネームもできる。ペイン管理はモダンなターミナルから期待する通りに動く。

![Claude Codeが動作している分割ペイン](images/screenshot-12.png)

**スマート機能ツアー付き。** アプリを初めて開くと、ガイドツアーでインテリジェント機能を紹介してくれる。

![スマート機能ツアー](images/screenshot-02.png)

スマート機能には、コマンド履歴からのゴースト提案、Ctrl+Rでのファジー履歴検索、`rm -rf`や`git push --force`のような危険なコマンド警告、自然言語からコマンドへの変換が含まれる。

![ゴースト提案](images/screenshot-03.png)

![ファジー履歴検索](images/screenshot-04.png)

![危険なコマンド警告](images/screenshot-05.png)

![自然言語とAI機能](images/screenshot-06.png)

**フル設定パネル。** フォントファミリー、フォントサイズ、カーソルスタイル、カラーテーマ。Dracula、Solarized、Monokaiなどが同梱されている。背景ブラー、透明度、シェル引数も設定できる。

![設定パネル](images/screenshot-14.png)

**スクロールバック内のコマンド検索。** Ctrl+Fで検索オーバーレイが開き、ファジーマッチングでターミナル履歴を検索できる。

![検索オーバーレイ](images/screenshot-13.png)

**ブロックベースの出力グルーピング。** 長いコマンド出力は折りたたみ可能なブロックにグループ化される。コマンドが2,000行を吐き出して要点だけ知りたい時のための「出力を要約」ボタンもある。

![出力の要約](images/screenshot-07.png)

**picoも動く。** vimも動く。ターミナルが実行すべきものはすべて動く。なぜならこれはターミナルだから。

![Terminal内で動作するpicoテキストエディタ](images/screenshot-08.png)

**DockerのAIアシスタントも動く。** フルインタラクティブなTUIアプリケーションも問題なく動作する。

![Terminal内で動作するDocker AIアシスタント](images/screenshot-09.png)

![Docker AIアシスタント拡大表示](images/screenshot-10.png)

**Claude Codeもこの中で動く。** このターミナルでClaude Codeを実行して、ターミナル自体のさらなる機能を構築した。これはかなり特殊なインセプション感があった。

![Watchfireタスクリストが見えるTerminal内で動作するClaude Code](images/screenshot-12.png)

## インストール方法

これはネイティブアプリであって、ウェブサイトじゃない。Vercelデプロイはなし。GitHubリリースページから最新版を取得するか、インストールスクリプトを使おう：

```bash
# macOS / Linux
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day27-terminal/main/install.sh | bash
```

```powershell
# Windows (PowerShell)
irm https://raw.githubusercontent.com/nunocoracao/Vibe30-day27-terminal/main/install.ps1 | iex
```

ソースからビルドしたい場合はこちら：

```bash
git clone https://github.com/nunocoracao/Vibe30-day27-terminal.git
cd Vibe30-day27-terminal
npm install
npm run tauri dev
```

Rust 1.77.2以上とNode.js 20以上が必要。

{{< github repo="nunocoracao/Vibe30-day27-terminal" showThumbnail=true >}}

## 数字で見る

- **19個のWatchfireタスク** スキャフォールドからスマート機能統合まで
- **Tauri 2 + Rustバックエンド** ポータブルPTYで本物のシェルセッション
- **WebGL付きxterm.js** 高速レンダリング
- **6種類以上のカラーテーマ** Dracula、Solarized、Monokaiなど
- **CI/CDパイプライン** GitHub ActionsでmacOS、Linux、Windows向けビルド
- **インストールスクリプト** 3プラットフォーム全対応

## 27日目の所感

ターミナルエミュレータは本当に多くのレイヤーに触れる。RustでのPTY管理。Tauriを通じたRustバックエンドとJavaScriptフロントエンド間のIPC。パフォーマンスのためのWebGLレンダリング。CI/CDによるクロスプラットフォームビルドとコード署名。OSとアーキテクチャを検出するインストールスクリプト。

そしてその上にスマート機能を追加した。ゴースト提案、ファジー検索、危険なコマンド警告、AI統合。これらはギミックじゃない。テスト中にうっかり破壊的なコマンドを打った時、危険なコマンド警告が実際に役立った。

これがそもそも動くこと自体がすごい。Claude Codeを実行して自分自身のさらなる機能を構築できるほどうまく動くのは、また別次元の話だ。明日すぐにiTermを置き換えるつもりはないけど、「バイブコーディングしたターミナル」と「プロダクションターミナル」の差は、予想より小さかった。

30日中27日目。あと3日。

---

*これは[30 Days of Vibe Coding](/series/30-days-of-vibe-coding/)の27日目です。AI支援コーディングで30日間に30個のプロジェクトを出荷する挑戦をフォローしてください。*
