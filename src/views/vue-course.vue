<template>
    <div class="course-list bg-body-tertiary">
      <div class="course-item-width">
        <div class="d-flex top-img-and-text">
          <img :src="require(`@/assets/vue-logo.png`)" class="top-img">
          <h3>Vue.js</h3>
        </div>
        <h6>Vueを用いたフロントエンドの実装の基本を理解しよう</h6>
        <router-link :to="`/text/4/chapter/${chapter.id}`" v-for="chapter in chapters" :key="chapter.id" class="course-item row bg-white">
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
  export default {
    name: 'VueCourse',
    data() {
      return {
        chapters: [
          {
            id: 1,
            title: 'Vueの環境をセットアップしよう',
            description: 'Ubuntuを用いたVueの環境構築を行います',
            image: 'https://via.placeholder.com/150'
          },
          {
            id: 2,
            title: 'Vueの基本構造を理解しよう',
            description: '立ち上げたVueファイルそれぞれの役割を理解します',
            image: 'https://via.placeholder.com/150'
          },
          {
            id: 3,
            title: 'v-if, v-elseを理解しよう',
            description: '基本的な文法の1つであるv-if,v-forに関して理解しましょう',
            image: 'https://via.placeholder.com/150'
          }
        ]
      };
    }
  };
</script>
  
<style scoped>
  .top-img-and-text{
    padding: 20px 0;
  }
  .top-img{
    width: 60px;
    height: 50px;
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