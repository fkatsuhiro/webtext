<template>
    <div class="course-list">
      <h4>Vue.js</h4>
      <h6>Vueを用いたフロントエンドの実装の基本を理解しよう</h6>
      <ul>
        <router-link :to="`/text/5/chapter/${chapter.id}`" v-for="chapter in chapters" :key="chapter.id" class="course-item">
          <img :src="chapter.image" alt="Course image" class="course-image">
          <h3>{{ chapter.title }}</h3>
          <p>{{ chapter.description }}</p>
        </router-link>
      </ul>
    </div>
</template>
  
<script>
  export default {
    name: 'NodeCourse',
    data() {
      return {
        chapters: [
          {
            id: 1,
            title: 'Vueの環境をセットアップしよう!!',
            description: 'Ubuntuを用いたVueの環境構築を行います',
            image: 'https://via.placeholder.com/150'
          },
          {
            id: 2,
            title: 'Vueの基本構造を理解しよう!!',
            description: 'Master the basics of web development.',
            image: 'https://via.placeholder.com/150'
          },
          {
            id: 3,
            title: 'v-if, v-elseを理解しよう!!',
            description: 'Get started with Vue.js framework.',
            image: 'https://via.placeholder.com/150'
          }
        ]
      };
    }
  };
</script>
  
<style scoped>
  .course-list {
    padding: 20px;
  }
  .course-item {
    list-style: none;
    margin: 20px 0;
    display: flex;
    align-items: center;
  }
  .course-image {
    width: 150px;
    height: 150px;
    margin-right: 20px;
  }
</style>