<template>
    <div class="bg-body-tertiary">
        <div class="page-width outside-article">
            <div class="row">
                <div class="bg-white col-md-8 arround-article">
                <div class="article">
                    <h5 style="font-weight: bold; padding:2rem 0;"></h5>
                    <h3 class="title">Bootstrapのcolって何？</h3>
                    <h4 class="sub-title">Bootstrapのcol</h4>
                    <p>Bootstrapのクラスには、とても使いやすいクラスがいくつか存在します。今回は、その中のcolに関して説明します。</p>
                    <h4 class="sub-title">colとは</h4>
                    <p>colとは、画面を12分割したものを1として、最大12が画面全体幅として、1~12まで選択することができます。例えば以下のように、色を付けて表示してみます。</p>
                    <pre class="code-block">
<code>
    &lt;div class="col-12" style="background-color: gray; margin: 15px;"&gt;text&lt;/div&gt;</code>                        
                    </pre>
                    <h4 class="sub-title">rowとcolの組み合わせ</h4>
                    <p>rowとcolを組み合わせることで、横並びのデザインを可能にすることができます。colは12で最大幅なので、col-7とcol-5で組み合わせることで画面幅7:5のスペースを並べることができます。例えば以下のようなコードを書いてみましょう。</p>
                    <pre class="code-block">
<code>
    &lt;div class="row"&gt;
        &lt;div class="col-7" style="background-color: gray; padding: 100px 0;"&gt;text&lt;/div&gt;
        &lt;div class="col-5" style="background-color: blue; padding: 100px 0;"&gt;text&lt;/div&gt;
    &lt;/div&gt;</code>                        
                    </pre>
                    <img :src="require(`@/assets/blog_image/bootstrap-col-7to5.png`)" alt="Course image" class="image-width">
                    <p>この添付画像を見て下さい。このような実装を行うことで、グレーの領域は7,ブルーの領域は5の比率で分割して実装することができます。</p>
                    <h4 class="sub-title">レスポンシブ対応を含めた利用</h4>
                    <p>bootstrapにはこのcolのクラスに対して、レスポンシブ対応を含めたクラスが存在します。</p>
                    <pre class="code-block">
<code>
    col-sm : 480px

    col-md : 768px

    col-lg : 1024px</code>
                    </pre>
                    <p>これはどういうものかというと、画面幅がこのブレークポイントよりも小さい場合、横並びではなく、縦並びになります。例えば以下のような場合を考えてみましょう。</p>
                    <pre class="code-block">
<code>
    &lt;div class="row"&gt;
        &lt;div class="col-md-7" style="background-color: gray; padding: 20px 0;"&gt;text&lt;/div&gt;
        &lt;div class="col-md-5" style="background-color: blue; padding: 20px 0;"&gt;text&lt;/div&gt;
    &lt;/div&gt;</code>                        
                    </pre>
                    <p>これを開発者ツールで画面幅を768px以下にして検証してみるとこのようになります。</p>
                    <img :src="require(`@/assets/blog_image/bootstrap-col-md-7to5.png`)" alt="Course image" class="image-width">
                    <p>このように、mdを用いると、画面幅が786px以上の場合は横並びになり、以下の場合は縦並びになります。もともとrowで横並びの時に左側にあったmのが上にくるように縦並びに変更されます。このクラスの特性を用いることで、レスポンシブなサイトを作成することができます。</p>
                    <p>本来であれば、レスポンシブ対応を含めたWebサイトを作成する際にはメディアクエリというCSSに備わる機能を利用するのですが、簡易的なものでなおかつ、Bootstrapのクラスを意識してデザインを作成した場合、メディアクエリを用いずにレスポンシブ対応のWebサイトを作成することができます。</p>
                    <p>今回はBootstrapのcolという使い勝手のいいクラスの紹介をさせていただきました。何かお役に立てましたでしょうか？有益な情報になっていれば非常にうれしいです。</p>
                    <p>本日はここまでです。また別の記事で会いましょう！！</p>
                </div>
                </div>
                <div class="col-md-4">
                    <!--広告埋め込みようスペース現在はまだ埋め込まない、、-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'BootstrapCol',
        data() {
        return {
        };
    }
    }
</script>

<style>
    .article{
        font-size: 1rem;
        text-align: left;
        margin: 3rem;
    }
    .arround-article{
        border-radius: 15px;
    }
    .title{
        text-align: center;
        padding: 1em 0;
    }
    .sub-title {
        text-align: left;
        padding: 10px 0;
        text-decoration:underline;
        text-decoration-color: #90ee90;
    }
    .image-width {
        width: 90%;
        margin: 0 auto;
    }
    .page-width{
        width: 85%;
        margin: 0 auto;
    }
    .outside-article{
        padding: 50px 0;
    }
    /*code block*/
    .code-block {
        background-color:black;
        padding: 0;
        border-radius: 5px;
        overflow-x: auto;
        width: 95%;
        margin: 3rem auto;
    }
    .code-block code {
        font-family: 'Courier New', Courier, monospace;
        /*white-space: pre;*/
        color: white;
    }
</style>
