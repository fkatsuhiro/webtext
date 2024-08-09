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
                    <h3 class="title">演算子を用いて処理をしよう！！</h3>
                    <p>前章で条件に関しての内容を扱いましたが、条件を演算子を用いることでより詳細に取得するデータを指定することができます。さらに、本章では、条件と条件を組み合わせることで、より詳細にデータを取得することを身に着けます。</p>
                    <h4 class="sub-title">AND演算子</h4>
                    <p>AND演算子は「かつ」の内容を表します。例えば、条件①と条件②がANDで結ばれている場合、条件①と条件②の両方を満たす場合、条件の処理が走るというものになります。</p>
                    <pre class="code-block">
<code>
    SELECT *
    FROM テーブル名
    WHERE 条件1 AND 条件2;</code>
                    </pre>
                    <h4 class="sub-title">OR演算子</h4>
                    <p>OR演算子は「または」の意味を表します。例えば、条件①と条件②がORで結ばれている場合、条件①もしくは条件②の少なくともどちらかを満たしているときに処理が走るというものになります。</p>
                    <p>このように、演算子を利用することでより詳細なデータの取得をすることができます。</p>
                    <p>今回の内容はここまでです。次回は並び替えとグルーピングに関しての内容を説明したいと思います。</p>
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
        name: 'SQLChapter3',
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
