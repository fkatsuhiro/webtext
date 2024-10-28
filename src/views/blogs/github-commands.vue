<template>
    <div class="bg-body-tertiary">
        <div class="page-width outside-article">
            <div class="row">
                <div class="bg-white col-md-8 arround-article">
                <div class="article">
                    <h5 style="font-weight: bold; padding:2rem 0;"></h5>
                    <h3 class="sub-title" >開発でよく使うGitコマンド</h3>
                    <h4 class="sub-title" >開発でよく使うGitコマンド</h4>
                    <p>開発(チーム開発など全般)で主に使用するコマンドをまとめたいと思います。前提として、Githubとの各種連携は住んでいることを前提にお話しさせていただきます。</p>
                    <h4 class="sub-title">リポジトリを作成した初回に連携させるためのコマンド</h4>
                    <p>例えば、sampleという名前のリポジトリを作成した場合、以下のようなコマンドを打ち込むことで、初期のリポジトリを紐づけることができます。</p>
                    <pre class="code-block">
<code>
    echo "# sample" >> README.md
    git init</code>
                    </pre>
                    <p>1行目のコマンドは、README.mdファイル内に、# sampleという文字列を記載して追加するというものです。2行目のコマンドは、新しいGitリポジトリを初期化します。実行すると、現在のディレクトリに .git フォルダが作成され、Gitがこのディレクトリをリポジトリとして管理できるようになります。</p>
                    <pre class="code-block">
<code>
    git add README.md
    git commit -m "first commit"
    git branch -M main</code>
                    </pre>
                    <p>git addコマンドは、指定したファイルをステージングエリア（インデックス）に追加するために使用します。ステージングエリアは、次のコミットに含めたいファイルのリストを保持する場所です。git commit コマンドは、ステージングエリアにあるファイルのスナップショットを取得し、それをリポジトリにコミットとして保存します。コミットはGitにおける変更の一つの記録です。m オプションはコミットメッセージを指定するためのもので、first commit がそのメッセージです。コミットメッセージは、そのコミットで行った変更の説明として使われます。この場合、最初のコミットであることを示す「first commit」というメッセージを付けています。git branchコマンドは、Gitリポジトリ内のブランチ（分岐）を操作するためのコマンドです。Mオプションは、既存のブランチの名前を強制的に変更するために使われます。通常、新しいリポジトリを初期化すると、Gitはデフォルトで「master」というブランチを作成しますが、Mオプションを使って「main」という名前に変更します。これにより、「main」という名前のブランチがデフォルトブランチとして設定されます。</p>
                    <pre class="code-block">
<code>
    git remote add origin https://github.com/[username]/sample.git
    git push -u origin main</code>
                    </pre>
                    <p style="font-weight: bold;">git remote add origin [https://github.com/[username]/sample.git](https://github.com/[username]/sample.git) コマンド</p>
                    <p>このコマンドは、現在のディレクトリを指定したgithub上のリポジトリと紐づける役割をします。このコマンドを実行することで、今後のファイル追加などを管理することができるようになります。</p>
                    <p style="font-weight: bold;">git push -u origin main コマンド</p>
                    <p>このコマンドは先ほど、追加したREADME.mdファイルを追加することに加え、-uオプションでこのプッシュの際に次回以降のpushコマンドのデフォルトを指定することができます。origin main は、リモートリポジトリのmainブランチを指定するというものです。</p>
                    <p>以上が、リポジトリを初回作成した際の基本的なコマンドになります。</p>
                    <h4 class="sub-title">ファイル変更をプッシュするためのコマンド</h4>
                    <p>ここでは、変更したファイルをgithubのリポジトリ内にプッシュするための手順を説明します。</p>
                    <pre class="code-block">
<code>
    git add .

    git commit -m "commit message"

    git push origin main</code>
                    </pre>
                    <p>git add .コマンドは、編集したファイルすべてをadd します。git commit -m “commit message” コマンドで、コミットメッセージを反映させます。git push origin main コマンドで変更をリポジトリに反映させます。</p>
                    <p>ここでですね、チーム開発など、git add .で変更ファイルをすべて反映してしまうとまずい場面とかが存在するので、別のaddの方法を説明します。</p>
                    <pre class="code-block">
<code>
    git status

    git add [ファイル名]</code>
                    </pre>
                    <p>git status コマンドで、変更したファイル一覧が赤文字で表記されます。その中で対応するタスクに即したファイル名がある場合、その赤字で表示されたファイル名をgit add [ファイル名]で指定して指定したファイルのみをadd していくこともできます。これはチーム開発など、個の開発環境に即したファイルなども存在するので(yarn-lockファイルなど)チーム開発の際はこのあたりを注意するといいかもしてないですね。</p>
                    <h4 class="sub-title">ブランチを切るためのコマンド</h4>
                    <pre class="code-block">
<code>
    git branch

    git checkout -b branch-name 

    git checkout branch-name</code>
                    </pre>
                    <p>git branchコマンドで、現在のリモートブランチとほかになんのブランチが切ってあるかを確認することができます。git checkout -b branch-name コマンドでは、branch-name という名前のブランチを新しく切り、そのブランチ先に移動するということができます。git checkout branch-name コマンドでは、すでに存在するブランチ名のブランチに移動することができます。</p>
                    <p>これらのコマンドは開発の際に頻繁に使用するので、しっかり理解して使えるようになりましょう！！</p>
                    <p>今回の内容はここまでです。少しはお役に立てる内容がありましたでしょうか？次回以降もまた有益な内容をどんどん配信していきたいと思いますので、楽しみにしていてくださいね！</p>
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
        name: 'GithubCommands',
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
