<template>
    <div class="bg-body-tertiary">
        <div class="page-width outside-article">
            <div class="row">
                <div class="bg-white col-md-8 arround-article">
                <div class="article">
                    <h5 style="font-weight: bold; padding:2rem 0;"></h5>
                    <h3 class="title">Vue.jsで作成したWebページをGithubPagesで公開する方法</h3>
                    <p>今回はVue.jsで作成したWebページを無料のサービスであるGitHubPagesで公開するための方法を記載していきたいと思います。前提として、Vue.jsでWebサービスが作成されていることが前提です。</p>
                    <h4 class="sub-title" >初回デプロイの手順</h4>
                    <h6 class="sub-title" >プロジェクトの準備</h6>
                    <p>まず、Vue.jsプロジェクトが正しく動作していることを確認します。</p>
                    <pre class="code-block">
<code>
    npm run serve</code> 
                    </pre>
                    <p>これでローカルでアプリケーションが正しく動作していることを確認します。</p>
                    <h6 class="sub-title">vue.config.js ファイルの作成</h6>
                    <p>プロジェクトのルートディレクトリに `vue.config.js` ファイルを作成し、以下の内容を追加します。</p>
                    <pre class="code-block">
<code>
    module.exports = {

        publicPath: process.env.NODE_ENV === 'production' ? '/リポジトリ名/' : '/'
        
    }</code>
                    </pre>
                    <p>リポジトリ名には、GitHubリポジトリの名前を入力してください。</p>
                    <h6 class="sub-title">リポジトリの初期化</h6>
                    <p>プロジェクトがGitリポジトリとして初期化されていない場合、以下のコマンドを実行して初期化します。</p>
                    <pre class="code-block">
<code>
    git init

    git add -A

    git commit -m "Initial commit"</code>
                    </pre>
                    <h6 class="sub-title">gh-pages パッケージのインストール</h6>
                    <p>GitHub Pagesにデプロイするための `gh-pages` パッケージをインストールします。</p>
                    <pre class="code-block">
<code>
    npm install gh-pages --save-dev</code>
                    </pre>
                    <h6 class="sub-title">package.json の修正</h6>
                    <p>package.json にデプロイスクリプトを追加します。</p>
                    <pre class="code-block">
<code>
    {
        "scripts": {
        "deploy": "npm run build &amp;&amp; gh-pages -d dist"
        }
    }
</code>
                    </pre>
                    <h6 class="sub-title">GitHub リポジトリの作成</h6>
                    <p>GitHubに新しいリポジトリを作成します。リポジトリの名前は先ほどの `vue.config.js` で設定したものと一致させてください。</p>
                    <h6 class="sub-title">初回デプロイ</h6>
                    <p>以下のコマンドを実行して、プロジェクトをGitHub Pagesにデプロイします。</p>
                    <pre class="code-block">
<code>
    npm run deploy</code>
                    </pre>
                    <p>これにより、dist フォルダがビルドされ、GitHub Pages用のブランチ（通常は gh-pages）にプッシュされます。</p>
                    <h4 class="sub-title">ソースコード修正後のデプロイ</h4>
                    <p>ソースコードに修正を加えた後、再度GitHub Pagesにデプロイするには、以下の手順を実行します。</p>
                    <h6 class="sub-title">変更をコミット</h6>
                    <p>まず、ローカルでの変更をGitにコミットします。</p>
                    <pre class="code-block">
<code>
    git add -A

    git commit -m "Update message"</code>
                    </pre>
                    <h6 class="sub-title">再デプロイ</h6>
                    <p>次に、以下のコマンドを実行して再デプロイします。</p>
                    <pre class="code-block">
<code>
    npm run deploy</code>
                    </pre>
                    <p>このコマンドにより、新しいビルドが行われ、GitHub Pagesにプッシュされます。</p>
                    <h4 class="sub-title">補足情報</h4>
                    <ul>
                        <li>GitHub Pagesのデフォルトのブランチは `gh-pages` です。このブランチを使用してサイトが公開されます。</li>
                        <li>- 公開されたサイトは通常 `https://ユーザー名.[github.io/](http://github.io/)リポジトリ名/` のURLでアクセス可能です。</li>
                    </ul>
                    <p>これで、Vue.jsプロジェクトのGitHub Pagesへの公開と、ソースコード修正後の再デプロイが完了します。</p>
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
        name: 'OpenGithubPagesVue',
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
