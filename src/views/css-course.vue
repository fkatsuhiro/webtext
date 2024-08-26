<template>
  <div class="course-list bg-body-tertiary">
    <div class="course-item-width">
      <div class="under-space"></div>
      <h3>CSSを理解してBootstrapを有効活用しよう</h3>
      <router-link :to="`/text/2/chapter/${chapter.id}`" v-for="chapter in chapters" :key="chapter.id" class="course-item row bg-white">
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
    name: 'CSSCourse',
    data() {
      return {
        chapters: [
          {
            id: 1,
            title: 'CSSとは？',
            description: 'CSSの概要に関して学習します',
            image: 'undraw_chapter1.png'
          },
          {
            id: 2,
            title: '基本的なCSSのスタイルに関してⅠ',
            description: '基本的なCSSの提供するスタイルを学習しましょう。',
            image: 'undraw_chapter2.png'
          },
          {
            id: 3,
            title: '基本的なCSSのスタイルに関してⅡ',
            description: 'カラーやz-indexに関して学習しましょう。',
            image: 'undraw_chapter3.png'
          },
          {
            id: 4,
            title: 'メディアクエリに関して',
            description: 'レスポンシブ化のためによく用いられるメディアクエリに関して学習しましょう',
            image: 'undraw_chapter4.png'
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