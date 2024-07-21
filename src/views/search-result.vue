<template>
  <div class="search-results">
    <h4>-- 検索結果 --</h4>
    <div class="row">
      <div v-for="course in filteredCourses" :key="course.id" class="course-item col-md-3">
        <router-link :to="`/course/${course.id}`" class="course-component-sidespace d-flex flex-column align-items-center justify-content-center bg-white pointer-cursor">
          <img :src="course.image" alt="Course image" class="course-image course-inner-item">
          <h4 class="course-title">{{ course.title }}</h4>
          <p>{{ course.description }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SearchResults',
  data() {
    return {
      courses: []
    };
  },
  created() {
    axios.get('/searchresult.json')
      .then(response => {
        this.courses = response.data;
      })
      .catch(error => {
        console.error('Error loading courses:', error);
      });
  },
  computed: {
    filteredCourses() {
      const query = this.$route.query.query; // 修正: クエリパラメータを 'query' に変更

      console.log('Search Query:', query); // デバッグログ: クエリパラメータの確認

      if (!query) {
        return [];
      }

      const queryWords = query.toLowerCase().split(/\s+/);

      return this.courses.filter(course => {
        const title = course.title.toLowerCase();
        const description = course.description.toLowerCase();
        const content = course.content ? course.content.toLowerCase() : ''; // content が存在しない場合に備える

        return queryWords.every(word => title.includes(word) || description.includes(word) || content.includes(word));
      });
    }
  }
};
</script>

<style scoped>
.search-results {
  padding: 20px;
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
