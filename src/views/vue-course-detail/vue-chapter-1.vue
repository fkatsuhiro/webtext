<template>
    <div class="bg-body-tertiary">
        <div class="page-width outside-article">
            <div class="row">
                <div class="bg-white col-md-8 arround-article">
                <div class="article">
                    <h2 class="title" >Article Title</h2>
                    <h4 class="title" > Sub Title</h4>
                    <p>
                        
                    </p>
                </div>
                </div>
                <div class="col-md-4"><!--広告埋め込みようスペース現在はまだ埋め込まない、、--></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'VueChapter1',
    }
</script>

<style>
    .article{
        font-size: 1rem;
        text-align: left;
        margin: 20px;
    }
    .arround-article{
        border-radius: 15px;
    }
    .title{
        text-align: center;
    }
    .page-width{
        width: 85%;
        margin: 0 auto;
    }
    .outside-article{
        padding: 50px 0;
    }
</style>
