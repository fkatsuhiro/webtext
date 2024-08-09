<template>
  <div class="course-list bg-body-tertiary">
    <div class="course-item-width">
      <div class="under-space"></div>
      <img :src="require(`@/assets/CSS3_logo.png`)" class="top-img">
      <h3>CSSを理解してBootstrapを有効活用しよう</h3>
      <router-link :to="`/text/2/chapter/${chapter.id}`" v-for="chapter in chapters" :key="chapter.id" class="course-item row bg-white">
        <img :src="chapter.image" alt="chapter image" class="course-image col-3">
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
  import css_course_detail_logo from '@/assets/css_course_logo.png';
  export default {
    name: 'CSSCourse',
    data() {
      return {
        chapters: [
          {
            id: 1,
            title: 'CSSとは？',
            description: 'CSSの概要に関して学習します',
            image: css_course_detail_logo
          },
          {
            id: 2,
            title: 'paddingとmarginの違いとは？',
            description: 'CSSの学習の際に間違えがちなpaddingとmarginの学習と違いに関して理解しよう',
            image: css_course_detail_logo
          },
          {
            id: 3,
            title: 'Bootstrap',
            description: 'CSSのクラスを使いやすくしたライブラリである、Bootstrapの活用方法を学習しましょう！',
            image: css_course_detail_logo
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
    width: 150px;
    height: 150px;
    /*margin-right: 20px;*/
  }
  .text-chapterid{
    font-weight: bold;
  }
</style>