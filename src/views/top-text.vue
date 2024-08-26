<template>
  <div class="bg-body-tertiary">
    <h4 class="course-list-title">-- ALL TEXTS --</h4>
    <h5 class="course-list-title">HTML/CSS JavaScript で基本的なWeb制作の技術に関して、SQLでデータベースの扱い方に関して学習しましょう！！</h5>
    <div class="row course-list">
      <div v-for="course in courses" :key="course.id" class="course-item col-md-3">
        <router-link :to="`text/${course.id}`" class="course-component-sidespace d-flex flex-column align-items-center justify-content-center bg-white pointer-cursor">
          <img :src="require(`@/assets/course_image/${course.image}`)" alt="Course image" class="course-image course-inner-item">
          <h5 class="course-title">{{ course.title }}</h5>
          <p>{{ course.description }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopText',
  data() {
    return {
      courses: [
        {
          id: 1,
          title: 'HTML',
          description: '',
          image: 'undraw_html.png'
        },
        {
          id: 2,
          title: 'CSS',
          description: '',
          image: 'undraw_css.png'
        },
        {
          id: 3,
          title: 'JavaScript',
          description: '',
          image: 'undraw_javascript.png'
        },/*
        {
          id: 4,
          title: 'Vue.js',
          description: '',
          image: 'vue-logo.png'
        },*//*
        {
          id: 5,
          title: 'Node.js',
          description: '',
          image: 'Node.js_logo.png'
        },*/
        {
          id: 6,
          title: 'SQL',
          description: '',
          image: 'undraw_sql.png'
        }
      ]
    };
  },
};
</script>

<style scoped>
  .course-list-title{
    padding: 20px 0 10px 30px;
    
  }
  .course-list {
    padding-bottom: 40px;
    width: 80%;
    margin: 0 auto;
  }
  .course-item {
    list-style: none;
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }
  .course-inner-item {
    padding: 20px 0;
  }
  .course-component-sidespace {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none
  }
  .course-image {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
  .course-title {
    text-align: center;
    margin-top: 10px;
    color: black;
  }
  .pointer-cursor {
    cursor: pointer;
  }
</style>
