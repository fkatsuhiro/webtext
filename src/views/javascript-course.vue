<template>
  <div class="course-list bg-body-tertiary">
    <div class="course-item-width">
      <div class="under-space"></div>
      <h3>Webアプリ開発の核となるJavaScriptに関して学習しよう！</h3>
      <router-link :to="`/text/3/chapter/${chapter.id}`" v-for="chapter in chapters" :key="chapter.id" class="course-item row bg-white">
        <img :src="require(`@/assets/course_image/chapter_image/${chapter.image}`)" alt="chapter image" class="course-image col-3">
        <div class="col-9">
          <p class="text-chapterid">Chapter {{ chapter.id }}</p>
          <h4>{{ chapter.title }}</h4>
          <p>{{ chapter.description }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'JavaScriptCourse',
    data() {
      return {
        chapters: [
          {
            id: 1,
            title: 'console.log()で出力しよう！！',
            description: '基本文法である、console.log()を用いて簡単な出力を行います',
            image: 'undraw_chapter1.png'
          },
          {
            id: 2,
            title: '繰り返し処理、条件分岐を習得しよう！',
            description: 'for文,if文の書き方を習得しよう',
            image: 'undraw_chapter2.png'
          },
          {
            id: 3,
            title: 'イベントハンドラーを習得しよう！！',
            description: 'Get started with Vue.js framework.',
            image: 'undraw_chapter3.png'
          }
        ]
      };
    }
  };
</script>
  
<style scoped>
  .top-img{
    width: 60px;
    height: 50px;
  }
  .under-space {
    padding-bottom: 1rem;
  }
  .course-list {
    padding: 20px;
  }
  .course-item-width{
    width: 80%;
    margin: 0 auto;
  }
  .course-item {
    list-style: none;
    margin: 40px 0;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
  }
  .course-image {
    width: 200px;
    height: 150px;
    /*margin-right: 20px;*/
  }
  .text-chapterid{
    font-weight: bold;
  }
</style>