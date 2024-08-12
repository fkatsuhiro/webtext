<template>
    <div class="bg-body-tertiary">
        <div class="page-width outside-article">
            <div class="row">
                <div class="bg-white col-md-8 arround-article">
                    <div class="article">
                        <h5 style="font-weight: bold; padding:2rem 0;">Chapter3</h5>
                        <h3 class="title" >HTMLタグに関して</h3>
                        <h4 class="sub-title">divタグ</h4>
                        <p>要素をグループ化するためのタグ。タグの中では最も頻繁に使用されるタグ</p>
                        <h4 class="sub-title">pタグ</h4>
                        <p>段落タグ。paragraphの頭文字をとってpタグと名前が付けられています。 pタグを使うことで文章をひとまとめにすることができます。文章を整理するために使われるタグです。</p>
                        <h4 class="sub-title">brタグ</h4>
                        <p>改行タグ。breakの頭文字を用いてbrタグと言われています。改行したいところにbrタグを使うことで文章を改行することができます。</p>
                        <h4 class="sub-title">aタグ</h4>
                        <p>Anchorタグの略称。主に、リンクを付与して、画面遷移のために使用されることが多いです。主に使用する属性はhrefです。簡単な使い方を以下で説明します。<br>
                            aタグ例:</p>
                        <pre class="code-block">
<code>
    &lt;a href="./sample.html"&gt;ここをクリック&lt;/a&gt;</code>
                        </pre>
                        <p>このように記述すると、ここをクリックの文章にsample.htmlのページへ遷移するための実装をすることができます。<br>
                            次によく用いられる属性としてtarget属性を用いられます。特に、**target=”_blank”がよく用いられます。これは、リンクをクリックしてページを遷移する際に、元のページは開いたまま、新しいページに遷移してリンク先のページを開くというものです。例えば、ブログを書く際に、ほかのページを参考にするためにリンクを付与したいのであれば、このような属性を付与させることで外部ページを新たなタブで開くことができるので、自身が公開したもとのページは開いたままで実装することができます。<br>
                            書き方としては以下のように書くことができます。</p>
                        <pre class="code-block">
<code>
    &lt;a href="./sample.html" target="_blank"&gt;ここをクリック&lt;/a&gt;</code>
                        </pre>
                        <h4 class="sub-title">ulタグ、liタグ</h4>
                        <p>ulタグはunordered listの略で、順序がない箇条書きのリストを表示するためのものです。liタグは、list itemの略で、ulタグの中でliタグを用いることで、順序がない箇条書きのリストを表示することができます。<br>
                            例:</p>
                        <pre class="code-block">
<code>
    &lt;ul&gt;
	&lt;li&gt;項目1&lt;/li&gt;
	&lt;li&gt;項目2&lt;/li&gt;
	&lt;li&gt;項目3&lt;/li&gt;
    &lt;/ul&gt;</code>
                        </pre>
                        <p>このように記述することで、以下のように画面上で表示することができます。</p>
                        <ul>
                            <li>項目1</li>
                            <li>項目2</li>
                            <li>項目3</li>
                        </ul>
                        <h4 class="sub-title">olタグ、liタグ</h4>
                        <p>olタグは、ordered listの略で、順序の決まったリストを表示することができます。<br>
                            例:</p>
                        <pre class="code-block">
<code>
    &lt;ol&gt;
		&lt;li&gt;項目1&lt;/li&gt;
		&lt;li&gt;項目2&lt;/li&gt;
		&lt;li&gt;項目3&lt;/li&gt;
    &lt;/ol&gt;</code>
                        </pre>
                        <p>このように記述すると、Webページ上では以下のように表示されます。</p>
                        <ol>
                            <li>項目1</li>
                            <li>項目2</li>
                            <li>項目3</li>
                        </ol>
                        <h4 class="sub-title">imgタグ</h4>
                        <p>imageの略で画像を埋め込むためのタグです。src属性で画像のパスを指定することで指定した画像を埋め込むことができます。GIF形式、JPEG形式、PNG形式の画像形式を指定して埋め込むことができます。<br>
                            例:</p>
                        <pre class="code-block">
<code>
    &lt;img src="./sample.png" width="300" height="300" alt="サンプル画像"&gt;</code>
                        </pre>
                        <p>基本的には、src属性以外に、width属性やheight属性を用いて埋め込む画像のサイズを指定します。これは指定をしなかった場合、元の画像のサイズで表示されてしまうため、かなり大きく表示されたり小さく表示されてしまったりするため、基本的には指定することが多いです。また、alt属性は、画像が読み込めなかった場合にテキストで表示するための属性です。alt属性を指定しておくことで画像が読み込めているかどうかがわかるため、これも基本的には指定しておくといいと思います。</p>
                        <p>以上でHTMLの内容に関しての内容は終了です。HTMLの概要に関しては理解できましたでしょうか？最後まで御覧いただきありがとうございました。</p>
                    </div>
                </div>
                <div class="col-md-4"><!--広告埋め込みようスペース現在はまだ埋め込まない、、--></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'HTMLChapter3',
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
