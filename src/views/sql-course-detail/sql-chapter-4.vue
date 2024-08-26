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
                    <h5 style="font-weight: bold; padding:2rem 0;">Chapter4</h5>
                    <h3 class="title">並び替えとグルーピングLIMITを用いて取得するデータを制限しよう！</h3>
                    本章では、データの並び替えに関して学習します。
                    <h4 class="sub-title">並び替え</h4>
                    <p>並び替えの時はODER BYを用います。前提として並び替えを行う際は、数値があるものに対して並び替えを行います。</p>
                    <p>基本的に並び変えるときは、数値や時刻を昇順、降順で並び替えることが多いかと思います。昇順の場合は、ASC降順の場合はDESCを用いて並び替えをします。</p>
                    <p>例えばデータが作成された時刻で並び替えをする場合、以下のように実装します。</p>
                    <pre class="code-block">
<code>
    SELECT *
    FROM テーブル名
    ORDER BY 処理;</code>
                    </pre>
                    <p>基本的に並び変えるときは、数値や時刻を昇順、降順で並び替えることが多いかと思います。昇順の場合は、ASC降順の場合はDESCを用いて並び替えをします。</p>
                    <p>例えばデータが作成された時刻で並び替えをする場合、以下のように実装します。</p>
                    <pre class="code-block">
<code>
    SELECT *
    FROM テーブル名
    ORDER BY created_at ASC;</code>
                    </pre>
                    <p>降順の場合は以下のように記述することで並び替えることができます。</p>
                    <pre class="code-block">
<code>
    SELECT *
    FROM テーブル名
    ORDER BY created_at DESC;</code>
                    </pre>
                    <h4 class="sub-title">LIMITを用いて取得するデータの件数を制限する</h4>
                    <p>取得する件数を制限する際は、LIMITを用いて件数を制限します。LIMITはクエリの最後に処理を記述します。</p>
                    <pre class="code-block">
<code>
    SELECT *
    FROM テーブル名
    WHERE 条件処理
    LIMIT 10;</code>
                    </pre>
                    <p>このように実装することで、最大10件のデータを取得することができます。なぜ最大なのかというと、そもそものテーブル内に条件に該当するデータが10件に満たない場合は10件未満の件数を取得するので最大という言い回しになります。</p>
                    <h4 class="sub-title">重複したデータを削除しよう！</h4>
                    <p>アプリケーションを作成しているときに、テーブルの結合の関係で同じデータが複数作成されることがあります。その際に、重複したデータを一つにしたいとき、以下の方法を用います。DISTINCTを用いて特定のカラムを一意にすることが可能です。使い方としてはSELECTの後にカラム名を指定すると思いますが、そのカラム名の指定の際にDISTINCTを用います。</p>
                    <pre class="code-block">
<code>
    SELECT DISTINCT(カラム名)
    FROM テーブル名;</code>
                    </pre>
                    <p>これで指定したカラム名の重複取得が行われず、一意に取得することができます。</p>
                    <p>今回の内容はここまでです！次回はテーブルの結合に関しての内容になります。</p>
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
        name: 'SQLChapter4',
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
        text-decoration:underline;
        text-decoration-color: #90ee90;
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
