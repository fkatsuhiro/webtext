<template>
  <div class="bg-body-tertiary">
    <h4 class="course-list-title">-- 教材一覧 --</h4>
    <div class="row course-list">
      <div v-for="course in courses" :key="course.id" class="course-item col-md-3">
        <router-link :to="`text/${course.id}`" class="course-component-sidespace d-flex flex-column align-items-center justify-content-center bg-white pointer-cursor">
          <img :src="require(`@/assets/${course.image}`)" alt="Course image" class="course-image course-inner-item">
          <h4 class="course-title">{{ course.title }}</h4>
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
          title: 'HTML5',
          description: '',
          image: 'HTML5_Logo.png'
        },
        {
          id: 2,
          title: 'CSS3',
          description: '',
          image: 'CSS3_logo.png'
        },
        {
          id: 3,
          title: 'JavaScript',
          description: '',
          image: 'JS_Logo.png'
        },
        {
          id: 4,
          title: 'Vue.js',
          description: '',
          image: 'vue-logo.png'
        },
        {
          id: 5,
          title: 'Node.js',
          description: '',
          image: 'Node.js_logo.png'
        },
        {
          id: 6,
          title: 'SQL',
          description: '',
          image: 'sql_logo.jpg'
        }
      ]
    };
  },
};
</script>

<style scoped>
  .course-list-title{
    padding: 20px 0 20px 30px;
    
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
  }
  .course-image {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }
  .course-title {
    text-align: center;
    margin-top: 10px;
  }
  .pointer-cursor {
    cursor: pointer;
  }
</style>
