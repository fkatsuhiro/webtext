<template>
    <div class="bg-body-tertiary">
        <div class="page-width outside-article">
            <div class="row">
                <div class="bg-white col-md-8 arround-article">
                <div class="article">
                    <!--main title template-->
                    <!--<h3 class="title"></h3>-->
                    <!---->
                    <!--sub title template-->
                    <!--<h4 class="title"></h4>-->
                    <!---->
                    <!--code space template-->
                    <!--<pre class="code-block">
                        <code>
                          
                        </code>
                    </pre>-->
                    <!---->
                    <!--画像埋め込み-->
                    <!--<img class="" v-bind:src="TableImage" />-->
                    <!---->
                    <h3 class="title" >条件を付けて取得するデータを指定しよう！！</h3>
                    <p>特定の条件を持ったデータを取得する場合はWHEREを用います。WHEREは条件を付与することができ、特定のカラムを取得することができます。</p>
                    <p>数値はそのままの記入でいいが、時刻(2024-04-22 00:00:00)は、シングルクォーテーションもしくはダブルクォーテーションで囲む必要があります。</p>
                    <h4 class="sub-title">= を用いて特定のデータを取得しよう！！</h4>
                    <p></p>
                    <pre class="code-block">
<code>  
    SELECT *
    FROM テーブル名
    WHERE karam = "ka2coder"; </code>
                    </pre>
                    <p>上記コードを用いることで、カラム名がkaramのka2coderというデータを取得することができます。</p>
                    <h4 class="sub-title">不等号を用いて特定のデータを取得しよう！！</h4>
                    <p>例えば、作成日(created_at)が2022年7月1日以降の記事に関してのデータが複数あるとします。このデータを取得する場合、以下のようにコードを実装します。</p>
                    <pre class="code-block">
<code>
    SELECT *
    FROM テーブル名
    WHERE cteated_at >= "2022-07-01 00:00:00";</code>
                    </pre>
                    <h4 class="sub-title">ある文字が含まれるデータを取得する場合</h4>
                    <p>例えば、いちご、冷凍いちご、いちごミルクなど、文字列にいちごを含んだデータを指定して出力しようとします。この場合、LIKE演算子を用いることで特定の文字列を含むデータを取得することができます。</p>
                    <pre class="code-block">
<code>
    SELECT *
    FROM テーブル名
    WHERE name LIKE '%いちご%';</code>
                    </pre>
                    <p>こうすることで、いちごみるくや冷凍いちごなどのいちごの前後に文字列が含まれるようなデータも取得することができます。%はワイルドカードとも言います。イメージとしては、%の位置に任意の文字列が入るという感じですね。いちごの前に文字列が含まれていい場合は、いちごの前に%を用いて、いちごの後ろに文字列が含まれていい場合はいちごの後ろに%を用います。</p>
                    <p>ここで、冷凍いちごやいちごなどのいちごの前に文字列が存在する場合は取得して、いちごみるくのようないちごの後方に文字列がある場合は除きたいとします。この場合は以下のようにコードを書くことで処理することができます。</p>
                    <pre class="code-block">
<code>
    SELECT *
    FROM テーブル名
    WHERE name LIKE '%いちご';</code>
                    </pre>
                    <p>このように実装できます。逆の場合は、%の位置を逆にすることで実装することができます。</p>
                    <h4 class="sub-title">否定をつけてデータを抽出しよう！</h4>
                    <p>条件を否定するときは、NOT演算子を用いることで条件に沿ったデータを取得することができます。</p>
                    <pre class="code-block">
<code>
    SELECT *
    FROM テーブル名
    WHERE NOT 条件;</code>
                    </pre>
                    <p>今回の内容はここまでです。次回は、演算子に関しての内容を説明します！</p>
                </div>    
                </div>
                <div class="col-md-4"><!--広告埋め込みようスペース現在はまだ埋め込まない、、--></div>
            </div>
        </div>
    </div>
</template>

<script>
    import DBTableImage from '@/assets/DBTableImage.png';

    export default{
        name: 'SQLChapter2',
        data() {
        return {
            TableImage: DBTableImage,
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
    /*image CSS*/
    img {
        width: 80%;
        margin: 0 auto;
    }
</style>
