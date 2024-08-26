<template>
    <div class="bg-body-tertiary">
        <div class="page-width outside-article">
            <div class="row">
                <div class="bg-white col-md-8 arround-article">
                <div class="article">
                    <h5 style="font-weight: bold; padding:2rem 0;"></h5>
                    <h3 class="title">Comming Soon .....</h3>
                    
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
        name: 'GithubConnectUbuntu',
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
