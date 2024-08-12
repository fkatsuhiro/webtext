<template>
    <div class="bg-body-tertiary">
        <div class="page-width outside-article">
            <div class="row">
                <div class="bg-white col-md-8 arround-article">
                <div class="article">
                    <h5 style="font-weight: bold; padding:2rem 0;">Chapter1</h5>
                    <h3 class="title" >HTMLとは？</h3>
                    <p>HTMLとはHypertext Markup Languageといい、Webページを作成するためのマークアップ言語です。コンピュータはこのHTMLを介して、テキストを読み込みます。</p>
                    <p>HTMLは主にテキストを読み込むためのもので、CSSと組み合わせて、画面の構成を作っていくことができます。HTMLには複数種のタグが存在し、その特徴に応じて使い分けることができます。</p>

                    <p>主にHTMLはタグ・要素・属性から構成されています。</p>
                    <h4 class="sub-title">タグ</h4>
                    <p>タグは、HTML文書の構造と内容を定義するための基本的な構成要素です。タグは通常、角括弧 &lt; &gt; で囲まれており、開始タグと終了タグのペアで使用されます。タグは要素の種類や機能を示し、内容を指定するために使用されます。
                        例えば、&lt; a &gt; /a &gt;アンカータグの場合、基本的には、リンクを与えるために用いられます。また、&lt; p &gt;&lt; /p &gt;pタグの場合、テキストを表示するために用いられるなど、タグによってそのタグに挟まれるテキストに役割を与えます。</p>
                    <h4 class="sub-title">要素</h4>
                    <p>要素（element）は、HTML文書の基本的な構成単位であり、開始タグ、終了タグ、タグの間に配置されるコンテンツで構成されています。要素は、ウェブページの構造や内容を形づくり、ブラウザがそれをどのように表示するかを指定します。</p>
                    <h4 class="sub-title">属性</h4>
                    <p>HTMLにおける属性（attribute）は、要素に追加の情報を提供し、その動作や表示方法を指定するために使用されます。属性は開始タグ内に書かれ、名前と値のペアとして指定されます。属性は、要素に対して具体的な設定やデータを与えることができます。</p>
                    <p>属性は開始タグ内に指定され、名前と等号（=）、そして引用符で囲まれた値から成ります。複数の属性を持つことも可能です。</p>
                    <p>例: 属性の書き方</p>
                    <pre class="code-block">
<code>  
    &lt;a href="./sample.html"&gt;&lt;/a&gt;</code>
                    </pre>
                    <p>この時、href属性に”./sample.html”という属性値を与えます。このhref属性は主にアンカータグ&lt;a&gt;で用いられることが基本的です。</p>
                    <p>このようにWebページを構成する基本的なものがHTMLによって形づくられます。</p>
                    <p>今回の章はここまでです。次回はタグの紹介をします。</p>
                </div>
                </div>
                <div class="col-md-4"><!--広告埋め込みようスペース現在はまだ埋め込まない、、--></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'HTMLChapter1',
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
