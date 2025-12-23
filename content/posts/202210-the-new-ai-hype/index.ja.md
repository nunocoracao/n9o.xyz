---
title: "新しい人工知能の熱狂"
summary: "過去数年間、人工知能に対する熱狂が（再び）高まっています。そのほとんどは、この分野での真に画期的な研究と革新的なショーケースによるものです。囲碁やDota 2のような複雑なゲームに勝つ機械から、様々なコンテンツ生成技術まで、これらの技術は私たちの未来に影響を与えるでしょう。"
categories: ["プロダクト","戦略","テクノロジー"]
tags: ["Stable Diffusion","Midjourney","Dall-e","AI", "機械学習"]
# externalUrl: ""
date: 2022-10-25
draft: false
series: ["The New AI Hype"]
series_order: 1
---

過去数年間、人工知能に対する熱狂が（再び）高まっています。そのほとんどは、[OpenAI][1]、[Google][2]、[DeepMind][3]（Googleの子会社）、[Meta][4]などの企業が、この分野で真に画期的な研究と革新的なショーケースを生み出していることによるものです。[囲碁][5]や[Dota 2][6]のような複雑なゲームに勝つ機械から、テキスト、画像、音声、そして今やビデオを生成するさまざまなコンテンツ生成技術まで、これらの技術は私たちの未来に影響を与えるでしょう。

過去にAIに対するこの熱狂を経験したことがあるように感じますが、それは私たちの生活に関連するものには実際には実現しませんでした。IBMのWatsonがヘルスケアを革命化しようとした試みから、自動運転車の_予言_まで、AIが私たちの社会をどのように改善するかについて言われてきましたが、そこに到達するのを妨げる何かが常にあるようです。一方では、いくつかの高度な問題に対しては技術がまだそこにないかもしれませんし、他方では、人間は機械が自分たちの専門分野のいくつかを引き継ぐことに懐疑的になる傾向があります（スカイネットはここで助けになりませんでした）。

しかし、今回は違うように感じます。まず、ユースケースは過去よりもはるかに野心的ではなく、具体的で実用的な（そして楽しい）アプリケーションがあります。第二に、過去5〜10年の研究は、機械学習とディープラーニングの分野でこれまでで最大の飛躍のいくつかを遂げました。[敵対的生成ネットワーク（GAN）][7]、[拡散モデル][8]、[トランスフォーマーモデル][9]は、そのようなブレークスルーの良い例です。第三に、今回は必要な技術と処理能力がこれらの大規模なネットワークを実行し訓練することを可能にしています。

{{< alert >}}
OpenAIはGPT-3テキストtoテキストモデルの訓練に約1,000万〜2,000万ドルを費やしたと推定されています。画像を扱うモデルではコストがより高くなるはずです。
{{</ alert >}}

## 私たちはどこにいて、どうやってここに来たのか？

では、今私たちはどこにいるのでしょうか？過去5〜7年間で、いくつかの具体的なイノベーションとAIの実用的なアプリケーションが、この技術（およびその影響）を公の議論に持ち込みました。すでに可能なことに入る前に、過去数年間のより関連性の高い発表を見ていきましょう。

**2015年 - GoogleがDeepDreamを作成 - [詳細を読む][10]**

Googleは、[畳み込みネットワーク][11]を使用して訓練セットに基づいて新しい画像を_夢見る_ことができる新しい手法をリリースしました。このネットワークは、例えば、大量の実際の猫の画像から学習した後、猫の**新しい**画像を生成できました。

**2016年 - GoogleがAlphaGoを構築し、囲碁の世界チャンピオンを破る - [詳細を読む][12]**

AlphaGoは、[教師なし学習][13]技術を使用して訓練され、ネットワークが自分自身と数百万回対戦して、各反復でゲームが上達するようにしました。AlphaGoは囲碁チャンピオンを破り、これまで見られなかった囲碁の手を披露することさえでき、他のゲームからの手を_学習_するだけでなく、独自のプレイを発見していたことを示しました。

**2019年 - OpenAI FiveがDota 2のチャンピオンを破る - [詳細を読む][14]**

OpenAI FiveはAlphaGoと同様の技術を使用して訓練され、このネットワークは自分自身と数百万回のゲームを行い、どんどん上達しました。Dota 2のようなマルチプレイヤーオンライン3Dゲームをプレイする際の課題は、プレイヤーが利用できる膨大な_アクションスペース_でした。OpenAIは、そのモデルと新しい訓練技術を使用することで、これらの問題を成功裏に解決できることを証明しました。

**2020年 - OpenAIがGPT-3を発表 - [詳細を読む][15]**

**Generative Pre-trained Transformer 3（GPT-3）**は、ディープラーニングを使用して人間のようなテキストを生成する自己回帰言語モデルです。このネットワークは、巨大なテキスト訓練セットから4,000億以上のテキストトークンで訓練されました。このモデルは、初期プロンプトが与えられると、テキストを書き続けることができます。印象的なのは、文法的・構文的に正しいだけでなく、語られている物語が文を超えて一貫していることです。何ができるかの例を見たい場合は、以下のビデオをご覧ください。何が起こっているかのより詳細な説明については、ネットワークが南アメリカでユニコーンを発見した科学者についての非常に_信じられる_物語を思いつく[このビデオ][16]をチェックできます。

{{< youtube TfVYxnhuEdU >}}

**2021/22年 - OpenAIがDall-EとDall-E 2を発表 - [詳細を読む][17]と[こちら][18]**

Dall-EとDall-E 2は、テキストプロンプトから画像を生成できるように拡散モデルを使用して訓練されたネットワークです。文章を書くと、AIが短時間でその画像を思いついてくれます。このモデルはさまざまなスタイルを出力でき、以前の画像を使用して新しい画像の作成をガイドすることができます。

**2022年 - Leap MotionがMidjourneyをリリース - [詳細を読む][19]**

Midjourneyもtext-to-imageモデルです。できることはDall-Eとほぼ同じですが、異なる訓練セットのため、提供される出力に顕著な違いがあります。必ずしも一方が他方より優れているわけではなく、単に異なるだけです。

**2022年 - Stability AI、CompVis LMU、RunwayのコラボレーションによりStable Diffusionがリリース（EleutherAIとLAIONのサポートあり） - [詳細を読む][20]**

Dall-EやMidjourneyと同様に、Stable Diffusionもテキストプロンプトから画像を生成する別のモデルです。主な違いは、このモデルを作成したエンティティがオープンソースにしたことで、誰でも遊ぶことができます。以前のモデルは当時プロプライエタリだったため、これは多くの話題を生みました。

現時点では、これらの技術のほとんどをローカルまたはサービス（例：OpenAI API）を通じて使用して、テキストと画像を生成することが可能です。テキストの小さなプロンプトから本の章全体を生成することが可能で、_リリース準備完了_の出力ではないかもしれませんが、少なくともライターズブロックの助けにはなるでしょう。また、テキストから画像を生成したり、画像から画像を生成したり、既存の画像をインペイント・アウトペイントすることも可能です。さらに、持っている画像の一部を消去し、これらのモデルの1つに別の画像またはテキストプロンプトを使用して完成させることも可能です。加えて、同じ技術を使用して既存の画像を拡張することも可能です（下の例）。

{{< youtube 6AmdZoSgTeE >}}

## これは魔法なのか？

これらの最近の進歩はすべて、主にディープラーニング研究における3つの大きなマイルストーンに起因しています：[敵対的生成ネットワーク（GAN）][21]、[拡散モデル][22]、[トランスフォーマーモデル][23]。

**GAN**は、完全なデータセットがなくても大規模なネットワークを訓練するための革命的なフレームワークでした。高レベルでは、この方法は2つの異なるネットワークが1つだけが勝てるゲームで互いに競争し、各インタラクションで学習して上達することを定義しています。[ディープフェイク][24]は、例えば、通常この方法を使用して生成されます。1つのネットワークが誰かの_偽の_画像を生成しようとし、もう1つがそれが偽物か本物かを推測しようとします。この方法はAlphaGOとOpenAI Fiveの開発にも使用されました。

これらの技術の問題は、訓練が難しく、ネットワークが2番目のネットワークを_騙す_方法を知った後、興味深い新しいことを試すインセンティブがほとんどまたはまったくないことです。

そこで登場するのが**拡散モデル**です。これらのモデルは、有効な画像を生成する問題が1つのステップではなく、_N_ステップかかる_ノイズ除去_プロセスに沿って発生するように作られました。訓練セットは、有効な実際の画像（およびそれぞれのテキスト説明）にさまざまなレベルのノイズを追加することによって構築されます。学習プロセスは、ネットワークが最終画像に到達するために少量のノイズを除去する方法を学習することで構成されます。これにより、学習プロセスに対する制御が増し、以前よりもはるかに多くの出力を生成できるネットワークを生み出すことになります。すべてがどのように機能するかについてもっと知りたい場合は、以下のビデオをお勧めします。

{{< youtube 1CIpzeNxIhU >}}

最後に、**トランスフォーマーモデル**があります。これは機械学習分野で最も重要な進歩の1つであり、間違いなく今日私たちが見ているすべてを可能にする礎石の1つです。これらのモデルは、コンテキストを学習し、したがって順次データから意味を推測できるニューラルネットワークです。

トランスフォーマー以前は、ネットワークは大きなラベル付きデータセットから_学習_するために[畳み込みニューラルネットワーク（CNN）][25]と[再帰型ニューラルネットワーク（RNN）][26]に依存していました。これらは生成に長い時間とお金がかかり、最終モデルの複雑さを増しました。トランスフォーマーは数学的にパターンを見つけることができるため、ラベル付きデータセットを必要としません。これは、インターネットや企業のデータベースにある何兆もの画像やペタバイトのテキストデータで新しいモデルを訓練することが可能になったことを意味します。


## AIの民主化

この_AIハイプの波_と過去のものとの主な違いの1つは、それを試してインタラクションできる人の数がかつてないほど多いことです。インターネットにより、何が可能かを探索し、人々がそれで遊べるようにするサービスを作成することが可能になりました。場合によっては、これらのイノベーションの背後にある企業に新しいビジネスモデルを作成することさえできます。個人的に、何人の人がDall-Eで遊ぶためにOpenAIにお金を払っているのかまだ不思議に思っています。

別の角度から見ると、これらの進歩がオープンソース技術として利用可能になり、人々がダウンロードし、遊び、さらにはそれを基に構築できるようになったことはかつてないほどです。OpenAIは最近[whisper][27]とその[Dall-E 2モデル][28]を一般に公開しました。Stable Diffusionモデルもコミュニティに利用可能であり、その背後にはすでにいくつかの注目すべきプロジェクトがあります。Stable Diffusionをローカルで実行することに興味がある場合は、それについてのチュートリアルを書きましたので、興味があれば試してみてください。

{{< article link="/posts/202210-stable-diffusion-tutorial/" >}}

これらの取り組みを先導している企業の1つが[HuggingFace][29]です。この会社は、ユーザーがオープンソース技術とコードに基づいて機械学習モデルを構築、訓練、デプロイできるようにするツールを提供しています。また、多くの当事者がモデルを共有し、互いに構築するのを支援しています。その例が[BLOOM][30]で、数百万人の研究者の間で協力して作成されたオープンソースの大規模言語モデルです。

このAIの民主化は、世界が経験しているこの新しいハイプの波のユニークな特徴であり、3つの理由から、それが私たちの生活にどのように影響するかの結果を完全に変える可能性があります：

- **ユースケースが楽しく、誰でも試すことができる** - 自動運転の予言や80年代の_すべてを知る_ヘルスケアAIとは異なり、これらのユースケースははるかにシンプルでユビキタスであり、したがってより多くの人々にアピールします。
- **仕組みを理解していなくても、ほぼ誰でも試すことができる** - オープンソースソフトウェアライセンスまたはウェブサイトを通じて利用可能で、望む人はほぼ誰でもこれらを試して楽しむことができます。
- **コミュニティが簡単にその上に構築できる** - これらの一部が一般に公開されるという事実は、この分野で起こるイノベーションを指数関数的に増加させるでしょう。

最終的に、上記のすべての理由は、AI全体をより広く普及し、よく受け入れられる技術にすることに貢献し、うまくいけば_ターミネーター_や_マトリックス_のような映画のポップカルチャーのビジョンから私たちを遠ざけるでしょう。


## 今日、これで何ができるのか？

これらのモデルと技術は、コンテンツを生成する能力を商品化しており、これは技術によって根本的に破壊されていなかった_アイデア伝播バリューチェーン_の最後のステップでした。インターネットはすでにコンテンツを配布する方法（チェーンの最後の部分）を完全に変えました。ほぼすべてのファイルはデジタルであり、ゼロコストでコピーでき、地球上の誰にでもほぼ瞬時に送信できます。これらの新しい技術は、伝播バリューチェーンの初期段階、つまりアイデアの**創造**と**具体化**を革命化するでしょう。

私が遊ぶ機会があった技術（Dall-e、Midjourney、Stable Diffusion）を考えるだけでも、絵を描いたり、ペイントしたり、3Dコンテンツをモデリング・レンダリングしたりすることを学ぶ前提条件が完全になくなります。誰でも人工エージェントに何を見たいかを伝えることができ、それが作成してくれるようになります。

例として、Stable Diffusionを使用してこの記事のサムネイルを生成しました。私は多かれ少なかれ何が欲しいかを知っていたので、気に入るものが見つかるまで数十のアイデアを試すだけの問題でした。いくつかの例を以下に示します。

<div style="display: flex; flex-wrap: wrap;">

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-the-new-ai-hype/thumbnails/000104.1330334134.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-the-new-ai-hype/thumbnails/000108.1301020889.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-the-new-ai-hype/thumbnails/000121.1119286522.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-the-new-ai-hype/thumbnails/000126.2675941357.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:200px">
    <img class="thumbnailshadow" src="/posts/202210-the-new-ai-hype/thumbnails/000085.2682514393.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:200px">
    <img class="thumbnailshadow" src="/posts/202210-the-new-ai-hype/thumbnails/000145.2404672998.webp"/>
  </div>

</div>

さらに、アイデアが尽きてプロンプトのデザインに助けが必要な場合、他の人が作成したものの例とともに最高のプロンプトをインデックス化して提供することに焦点を当てたサイトがすでにあります。[Lexica][31]と[Prompthero][32]は、私が素晴らしい結果で試した2つの例です。

しかし、画像はほんの始まりに過ぎません...

## 画像を超えて

数週間前にStable Diffusionで遊び始めましたが、それ以来出てきたニュースには驚かされました。AIに画像を生成させることが現在どれほど簡単かに驚いていたところ、それをはるかに超えようとしているプロジェクトがあることに気づきました。

MKBHDからのこのリツイートを見つけたときに始まりました：

{{< tweet user="mkbhd" id="1582772722240999425" >}}

text-to-videoモデルにすでにこれほど良い結果があり、多くの企業がそれに取り組んでいることに驚きました。その週、機械学習のすべてのイノベーションを活用したビデオエディターに取り組んでいる[Runway][33]というスタートアップを発見しました。数日後、Googleの新しいtext-videoネットワーク[Imagen Video][34]と、Metaの[Make-a-Video][35]の発表についての記事を見ました。

テキストやフラットな画像から3Dモデルを生成し、テキストの説明に基づいて3Dモードをアニメーション化するための作業も急速に発見しました。

しかし、最も驚くべきもの（そして潜在的な影響のために少し不安になるもの）は、[podcast.ai][36]によって作成されたジョー・ローガンがスティーブ・ジョブズにインタビューするポッドキャストでした。ご存知ない方のために説明すると、ジョー・ローガンは何年も続く非常に成功したポッドキャスト番組を持っており、スティーブ・ジョブズは、まあ、亡くなっています。この二人の男性は同じ部屋にいる機会がありませんでしたが、おそらく彼らの許可なく、会話が行われたかのような20分の音声があります。

<iframe width="100%" height="180" frameborder="no" scrolling="no" seamless src="https://share.transistor.fm/e/22f16c7f"></iframe>

もう私たちの中にいない人々を_エミュレート_するためにこれらの技術を使用することの影響について考えている間に、[この記事][37]を見つけました。つまり、有名人でこれを行っている人々の例があるだけでなく、DeepBrain AIのような企業がすでにそのようなサービスを収益化し、亡くなった愛する人のデジタルアバターを作成できるのです。

## 潜在的な落とし穴

種としての私たちの歴史を通じて、新しい発明が登場した後に解決しなければならない問題や課題が常にありました。

### 法的・倫理的

潜在的な落とし穴の1つは、これらの新しいAIシステムの法的および倫理的影響とその社会への影響です。例えば、この記事のtext-to-imageモデルの1つを使用して画像を生成する場合、最終製品は誰のものでしょうか？プロンプトを考えた人？モデルを構築したチーム？訓練セットを構築したチーム？そのセットに画像があったアーティスト？全員？誰でもない？この段階では何も解決されておらず、すでに大きな懸念事項です。

このトピックに関して現在行われている関連する議論の1つは、GitHubのCopilot製品の著作権問題に関するものです。Copilotは、例えばコメントをコードに変換することで、開発者がより速くコーディングできるようにするために、GitHubで利用可能なすべてのコードリポジトリを使用して訓練されたAIです。自分のコードが、一銭も得ることなく、民間企業に潜在的に数百万ドルを生み出すために使用されていると知ったら、どう感じますか？興味があれば[こちら][38]に詳細があります。

アーティストもまた、自分のアートがこれらのモデルの訓練に使用された方法を発見しており、[それに満足していません][39]。これらのソリューションのいずれかを使用または作成している場合、企業やスタートアップもIP[侵害について心配][40]する必要があります。

最後に、この技術が悪意のある人々によって使用される可能性を考慮すると、さらに大きな問題があります。人々が決してしなかったことをしている画像を生成したり、決して言わなかったことを言っている画像を生成したりすることです。これはディープフェイクと同じ問題であり、すでにいくつかの研究イニシアチブが進行中ですが、まだ現実の懸念です。価値があることに、この記事のいくつかのツールは、サービスに安全フィルターを追加することで、そのタイプのコンテンツを生成できないようにする素晴らしい仕事をしました。しかし、すべてのオープンソースのものについては、誰でもそれらの安全対策を無効にする力を持っています。

これらはすべて、業界内で可能な限り早く対処されるべき非常に有効な法的懸念であり、そうでなければ、すべてが何年も後退させる法的嵐になるリスクがあります。法的側面だけでなく、この技術は誰かの人生を破壊する非常に現実的な可能性を持っているため、時間をかけて間違いに対する許容度を低くして考えるべきです。

### 知覚価値と反発

当初、この技術は誰もが良いアーティストになれると思っていましたが、それで遊んでから、もはやそうではないと確信しています。良いアーティストを作るのは、彼らの生の実行能力だけではありません。創造性、実際に何を作りたいか、芸術的知識などの要素は、良い最終製品を持つために非常に重要です。この段階では、これらの技術は普通の人々が何かを_作成_できるようにすると思いますが、現在のプロのアーティストに**スーパーパワー**を与え、彼らの作品を別のレベルに引き上げることができるでしょう。

そうは言っても、これらのモデルが社会としてより多く、より速く、より低コストで生産できるようにするという事実は、その出力の知覚価値に影響を与えるでしょう。例として、約20人のデザイン部門を持つ特定のニュースメディア出版物を想像してください。現在の技術が主流になれば、おそらくその同じ部門は20人を必要としなくなるでしょう。

それほど前ではない話で、The Atlanticのジャーナリストがミッドジャーニーを使用して記事用の画像を生成し、Twitterで大規模な反発を受けました。彼の考えは[ここ][41]で読めます。これらのアーティストの一部が働いているすでに困難で競争の激しい環境を考えると、これらのツールに対する潜在的な反発は理解できます。雇用市場への潜在的な実際の影響があります。短期的には一部の人々にとって悪いことになるとしても、本当の問題は長期的に良いのか悪いのかということです。この現象は大きな技術革新ではかなり一般的であり、歴史を通じて何度も起こっています。

_注：すでに[プロンプトエンジニアリング][42]という新しい分野があり、他の分野もすぐに現れるかもしれません。_

興味深いことに、**法的懸念**と**人間の反発**は、過去のAIシステムの採用における主要な落とし穴であり、一般的な技術以上にそうでした。


## 次は何か？

既存の技術の現在のアプリケーションは大規模になると思うので、どんな予測でも高い不確実性を持つでしょう。これらの技術は現在の_アイデア伝播バリューチェーン_に影響を与え、特にこれまで触れられていなかったチェーンの部分、つまり_**創造**_と_**具体化**_に影響を与えます。この事実だけで、_**複製**_と_**配布**_部分を変えたインターネット以上に私たちに影響を与える可能性があります。それらの影響だけでも、本のシリーズ全体のページとページの議論になる可能性があります。このトピックのこの部分に興味がある場合は、ベン・トンプソンの[記事][43]を強くお勧めします。

上記の免責事項を踏まえて、今後2〜5年でこの分野で何が起こるかについて私が思うことを述べます。

- **所有権に関する法的問題は、良い解決策が出てくるまで増加する** - この記事ですでにいくつかの潜在的な法的問題について議論しましたが、それらが解決されなければ、この分野で起こっているすべてを脱線させるリスクがあります。著作権のものについては、法的訴訟の根拠は控えめに言っても曖昧であり、イノベーションに実際に影響を与える前に、これらの議論は何年も引きずられる可能性があります。
- **これらの問題に取り組む企業への資金調達の劇的な増加** – ハイプは通常FOMOを意味し、これはその分野の問題を解決したい人により多くのお金を意味します（はい、現在のマクロ経済状況でさえ）。一部の企業が歴史上最大のシードラウンドのいくつかを調達するなど、これに関する初期の信号がすでに見られています：
	- [Stable Diffusionの作成者であるStabilityAIは、ポストマネー評価10億ドルで1億100万ドルのシードを調達しました][44]。
	- [マーケター向けコンテンツプラットフォームの作成者であるJasperは、15億ドルの評価で1億2,500万ドルを調達しました][45]
- **技術は既存の製品の機能として製品化され始める** - この技術の一部は、今日の画像およびビデオ編集ソフトウェアに入る可能性があります。[Runway][46]のような企業は、この技術を核心とするまったく新しい製品をすでに作成しています。Adobeのような既存企業もすでに[ソフトウェアにこれらのツールを含め始めています][47]、つまり、Dall-EをAdobe Creative Cloudに直接組み込むなど。
- **これらすべての分野が一貫した結果で統合し始める** - 今後12〜18か月でこれに関して何かが起こると予想しています。少なくとも、これらの分野の最低2つを何か新しいものに統合するある種のPoCが見られるでしょう。ビデオ+オーディオ、または3D+アニメーションなど。
- **ゲーム、VR、メタバース** - この技術の最大の可能性は、コンテンツ作成をどれだけ加速できるかにあると感じています（品質が一定になったら、まだそうではありませんが）。ゲームと3Dコンテンツは、これらのモデルが解決できる最大の問題があると思う分野です。コンセプト化、モデリング、リギング、アニメーションなど、ゲームのキャラクターを作成するために費やされる時間、リソース、お金の量を考えてみてください。AIツールは、これらの巨大なゲームワールドの作成をより効果的かつ効率的にすることができます。

このエキサイティングな分野で何が起こるかを待つ間、私はできる限りこれらの技術を研究し、遊び続けます。これらのシステムで何を作成しますか？大規模に展開することの影響は何だと思いますか？連絡して教えてください。


{{< alert >}}
注：その間、Stable Diffusionの作品をウェブで共有するためにInstagramアカウントを作成しました 😬
{{</ alert >}}

</br>

<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">\<svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"\><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CkCIqTZMUZT/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Art by a Ghost (@artbyaghost)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>

[1]:	https://openai.com/about/
[2]:	https://about.google
[3]:	https://www.deepmind.com
[4]:	https://about.meta.com/company-info/
[5]:	https://www.deepmind.com/research/highlighted-research/alphago
[6]:	https://openai.com/five/
[7]:	https://en.wikipedia.org/wiki/Generative_adversarial_network
[8]:	https://en.wikipedia.org/wiki/Diffusion_model
[9]:	https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)
[10]:	https://en.wikipedia.org/wiki/DeepDream
[11]:	https://en.wikipedia.org/wiki/Convolutional_neural_network
[12]:	https://artsandculture.google.com/story/the-story-of-alphago-barbican-centre/kQXBk0X1qEe5KA?hl=en
[13]:	https://en.wikipedia.org/wiki/Unsupervised_learning
[14]:	https://openai.com/blog/openai-five-defeats-dota-2-world-champions/
[15]:	https://en.wikipedia.org/wiki/GPT-3
[16]:	https://www.youtube.com/watch?v=89A4jGvaaKk
[17]:	https://en.wikipedia.org/wiki/DALL-E
[18]:	https://en.wikipedia.org/wiki/DALL-E
[19]:	https://en.wikipedia.org/wiki/Midjourney
[20]:	https://en.wikipedia.org/wiki/Stable_Diffusion
[21]:	https://en.wikipedia.org/wiki/Generative_adversarial_network
[22]:	https://en.wikipedia.org/wiki/Diffusion_model
[23]:	https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)
[24]:	https://en.wikipedia.org/wiki/Deepfake
[25]:	https://en.wikipedia.org/wiki/Convolutional_neural_network
[26]:	https://en.wikipedia.org/wiki/Recurrent_neural_network
[27]:	https://openai.com/blog/whisper/
[28]:	https://www.openculture.com/2022/10/dall-e-the-new-ai-art-generator-is-now-open-for-everyone-to-use.html
[29]:	https://huggingface.co
[30]:	https://huggingface.co/bigscience/bloom?text=Poor+English%3A+She+no+went+to+the+market.+Corrected+English%3A
[31]:	https://lexica.art/
[32]:	https://prompthero.com/
[33]:	https://runwayml.com
[34]:	https://imagen.research.google/video/
[35]:	https://ai.facebook.com/blog/generative-ai-text-to-video/%0A
[36]:	https://podcast.ai/
[37]:	https://technode.global/2022/10/21/this-startup-allows-you-to-reunite-with-deceased-loved-ones-using-ai-technology/
[38]:	https://githubcopilotinvestigation.com/
[39]:	https://edition.cnn.com/2022/10/21/tech/artists-ai-images
[40]:	https://techcrunch.com/2022/10/07/5-key-ip-considerations-for-ai-startups/
[41]:	https://newsletters.theatlantic.com/galaxy-brain/62fc502abcbd490021afea1e/twitter-viral-outrage-ai-art/
[42]:	https://en.wikipedia.org/wiki/Prompt_engineering
[43]:	https://stratechery.com/2022/the-ai-unbundling/
[44]:	https://techcrunch.com/2022/10/17/stability-ai-the-startup-behind-stable-diffusion-raises-101m/
[45]:	https://techcrunch.com/2022/10/18/ai-content-platform-jasper-raises-125m-at-a-1-7b-valuation/
[46]:	https://runwayml.com
[47]:	https://blog.adobe.com/en/publish/2022/10/18/bringing-next-wave-ai-creative-cloud
