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
                    <!--<img>-->
                    <!---->
                    <h5 style="font-weight: bold; padding:2rem 0;">Chapter1</h5>
                    <h3 class="title" >データベース(DB)とは？</h3>
                    <p>主にWebアプリなどのデータを管理するものです。Webアプリの開発体系は主にフロントエンド/バックエンドに分かれて作成されることが多く、バックエンドを担当する人はデータベースからデータを取得するための実装を行ったりします。SQLとは、データベースから特定のデータを取得するためのコードを書くのに必要不可欠です。</p>
                    <img >
                    <p>データベースはテーブルというものを用いて管理します。テーブルの縦の列をカラム、横の列をレコードといいます。テーブルは必要なデータに応じで作成する必要があり、設計の際には使いやすさなども考えて作成しないといけないため、その際は別途学習が必要になります。下の図は、テーブルのイメージ図です。赤の縦ラインで協調されたものが、カラムになります。</p>
                    <img style="width: 80%; margin: 0 auto;" v-bind:src="TableImage" />
                    <p>本記事では、簡単なクエリ処理のために必要な知識を入れることを目的とした初歩的な内容となっています。</p>
                    <p>ではまず、テーブルからクエリを取得してみましょう。</p>
                    <p></p>
                    <pre class="code-block">
<code>  
    SELECT カラム名
    FROM テーブル名;</code>
                    </pre>
                    <p>イメージとしては、FROMで指定したテーブルの中の、SELECTで指定したカラム(列)のデータを取得する感じです。</p>
                    <h4 class="sub-title">複数のカラムを取得する</h4>
                    <p>複数のカラムを取得する際には、以下のようにSELECTのタイミングで複数のカラム名を指定します。</p>
                    <pre class="code-block">
<code>
    SELECT カラム名1, カラム名2
    FROM テーブル名;</code>
                    </pre>
                    <h4 class="sub-title">すべてのカラムを選択する場合</h4>
                    <p>すべてのカラムを選択する場合、(*)で指定することですべてのカラムを取得して表示することができます。</p>
                    <pre class="code-block">
<code>
    SELECT *
    FROM テーブル名;</code>
                    </pre>
                    <h4 class="sub-title">取得後のカラムの表示名を変更する</h4>
                    <p>DB内のテーブルから取得して表示するときのカラム名を変更したいときはASを用います。</p>
                    <pre class="code-block">
<code>
    SELECT カラム名_old AS カラム名_new
    FROM テーブル名;</code>
                    </pre>
                    <p>今回の内容はここまでです。次回は取得するデータを条件を付けて取得する内容になります。</p>
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
        name: 'SQLChapter1',
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
</style>
