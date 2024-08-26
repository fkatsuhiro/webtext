<template>
    <div class="bg-body-tertiary">
        <div class="page-width outside-article">
            <div class="row">
                <div class="bg-white col-md-8 arround-article">
                <div class="article">
                    <h5 style="font-weight: bold; padding:2rem 0;">Chapter3</h5>
                    <h3 class="title" >CSSの基本的な内容に関してⅡ</h3>
                    <h4 class="sub-title">カラー</h4>
                    <p>カラーは主に、文字色のためのカラーと背景色のカラーがあります。スタイル名としては</p>
                    <ul>
                        <li>color</li>
                        <li>background-color</li>
                    </ul>
                    <p>カラーの指定の方法はカラーコードで指定する方法と、代表的なカラー名を打ち込む方法があります。</p>
                    <p>カラーコードに関しては#(ハッシュタグ)から始まる6つの数字やアルファベットの組み合わせによって表現されています。また、ほかのWebページのカラーを取得したい場合、カラーピッカーなどを用いて3原色からカラーコードを検索することができます。</p>
                    <h4 class="sub-title">z-indexに関して</h4>
                    <p>画面の表示の際に、最前面、最背面などを指定することができます。このスタイルはz-indexで指定することができます。指定の仕方は、z-index: 1; で指定することができます。これは数値で指定することができます。z-indexの値が大きいほど最前面に近く、z-indexの値が小さいほど、最背面に近いです。これは、ヘッダーを固定するときなどに有効に使うことができます。</p>
                    <p>今回の内容は短いですが、ここまでにしたいと思います。次回は、メディアクエリの使用法に関して説明したいと思います。</p>

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
        name: 'CSSChapter3',
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
