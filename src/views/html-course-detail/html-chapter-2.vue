<template>
    <div class="bg-body-tertiary">
        <div class="page-width outside-article">
            <div class="row">
                <div class="bg-white col-md-8 arround-article">
                <div class="article">
                    <h5 style="font-weight: bold; padding:2rem 0;">Chapter2</h5>
                    <h3 class="title" >HTMLの基本構造</h3>
                    <p>Chapter1ではHTMLを構成するものとしてタグ・要素・属性の話をしましたが、本章では、HTMLの基本構造に関して説明します。<br>
                        ここからは主にWebページを作成するためのHTMLの書き方を説明していきます。基本的なHTMLファイルの書き方は以下の通りです。</p>
                    <pre class="code-block">
<code>
    &lt;!doctype html&gt;
    &lt;html lang="ja"&gt;
        &lt;head&gt;
            &lt;meta charset="utf-8"&gt;
            &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
            &lt;title&gt;HTML demo&lt;/title&gt;
            &lt;link href="css/main.css" rel="stylesheet"&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;h1&gt;Hello, world!&lt;/h1&gt;
            &lt;script src="js/main.js"&gt;&lt;/script&gt;
        &lt;/body&gt;
    &lt;/html&gt;</code>
                    </pre>
                    <p>!doctype html はHTMLを書くための呪文だと思って大丈夫です。html タグがHTML全体を包むように位置しており、lang=”ja”は、言語を日本語に指定しています。</p>
                    <h4 class="sub-title">headタグ</h4>
                    <p>headタグはページの表示に影響は与えませんが、ブラウザや検索エンジンなどのページの動作などに影響を与えます。</p>
                    <h5 class="sub-title">meta charset=”utf-8”</h5>
                    <p>このコードは、HTMLの文字エンコーディングを指定するために必要です。UTF-8はUnicode標準の一部であり、世界中のほぼすべての文字を使用することができるため、基本的にはUTF-8を指定することが多いです。</p>
                    <h5 class="sub-title">width=device-width</h5>
                    <p>これは画面幅をデバイスの幅に合わせます。これが設定されていない場合、ページは通常、PC向けの幅（例えば、980pxなど）で表示されるため、モバイルデバイスで縮小された状態になります。<br>
                        この内容はWeb制作という面では非常に重要で、google検索の準位付けのシステム(SEO)に関して影響を与えます。特にレスポンシブ対応のWebページを優先的に検索準位を高く指定するからです。</p>
                    <h5 class="sub-title">initial-scale=1</h5>
                    <p>これは初期ズームレベルを1(100%)として設定します。このように設定することでページがデバイスのネイティブ解像度で表示されます。</p>
                    <h5 class="sub-title">titleタグ</h5>
                    <p>これはWebページのタイトルの部分に表示されるものを指定することができます。</p>
                    <h5 class="sub-title">linkタグ</h5>
                    <p>ここでは主に、このHTMLのWebページに適応するCSSファイルを紐づけます。rel=”stylesheet”は典型文句だと思ってそのまま使うので十分かと思います。<br>
                        これがheadタグの中身になります。</p>
                    <h4 class="sub-title">bodyタグ</h4>
                    <p>このタグの中身が主に、Webページに表示するための要素になります。bodyタグの中で記述する細かいタグに関しては次章で詳しく説明しようと思います。<br>
                        bodyタグの最下部にscriptタグが存在すると思います。このタグは、画面の動きを入れるためのjavaScriptのファイルを読み込むための部分になります。<br>
                        今回の章はここまでです。HTMLの大まかな仕組みに関しては理解できましたでしょうか？<br>
                        次章はbodyタグ内に記述していく様々なタグに関して説明していきたいと思います。</p>
                </div>
                </div>
                <div class="col-md-4"><!--広告埋め込みようスペース現在はまだ埋め込まない、、--></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'HTMLChapter2',
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
