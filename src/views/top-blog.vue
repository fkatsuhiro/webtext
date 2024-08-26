<template>
  <div class="bg-body-tertiary">
    <h4 class="course-list-title">-- All BLOGS --</h4>
    <h5 class="course-list-title">実践的な技術からニッチな技術まで習得しよう！！</h5>
    <div class="row course-list">
    <div v-for="blog in blogs" :key="blog.id" class="course-item col-md-3">
        <router-link :to="`blog/${blog.id}`" class="course-component-sidespace d-flex flex-column align-items-center justify-content-center bg-white pointer-cursor">
          <img :src="require(`@/assets/blog_image/${blog.image}`)" alt="Course image" class="course-image course-inner-item">
          <h5 class="course-title">{{ blog.title }}</h5>
          <p>{{ blog.description }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'TopBlog',
    data() {
    return {
      blogs: [
        {
          id: 1,
          title: 'Bootstrapを利用しよう！',
          description: '',
          image: 'introduce_bootstrap.png'
        },
        {
          id: 2,
          title: 'Bootstrapのcolってなに？',
          description: '',
          image: 'undraw_Designer_girl.png'
        },
        {
          id: 3,
          title: 'Bootstrapを用いて固定されたヘッダーを作成する方法',
          description: '',
          image: 'undraw_fixing_bugs.png'
        },
        {
          id: 4,
          title: 'GitHubとUbuntuの連携',
          description: '',
          image: 'undraw_Online_test.png'
        },
        {
          id: 5,
          title: '開発でよく使うGitコマンド',
          description: '',
          image: 'undraw_Programming.png'
        },
        {
          id: 6,
          title: 'GitHub Pagesを用いて静的なサイトを公開しよう！',
          description: '',
          image: 'undraw_Work_time.png'
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
  