<template>
  <div class="bg-body-tertiary">
    <h4 class="course-list-title">-- Search Results --</h4>
    <div class="row course-list">
      <div v-for="result in filteredResults" :key="result.id" class="course-item col-md-3">
        <router-link :to="result.link" class="course-component-sidespace d-flex flex-column align-items-center justify-content-center bg-white pointer-cursor">
          <img :src="require(`@/assets/${result.image}`)" alt="result image" class="course-image course-inner-item">
          <h4 class="course-title">{{ result.title }}</h4>
          <p>{{ result.description }}</p>
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
      results: []
    };
  },
  created() {
    /*axios.get('/searchresult.json')*/
    axios.get(`${process.env.BASE_URL}/searchresult.json`)
      .then(response => {
        this.results = response.data;
      })
      .catch(error => {
        console.error('Error loading results:', error);
      });
  },
  computed: {
    filteredResults() {
      const query = this.$route.query.query; // 修正: クエリパラメータを 'query' に変更

      console.log('Search Query:', query); // デバッグログ: クエリパラメータの確認

      if (!query) {
        return [];
      }

      const queryWords = query.toLowerCase().split(/\s+/);

      return this.results.filter(result => {
        const title = result.title.toLowerCase();
        const description = result.description.toLowerCase();
        const content = result.content ? result.content.toLowerCase() : ''; // content が存在しない場合に備える

        return queryWords.every(word => title.includes(word) || description.includes(word) || content.includes(word));
      });
    }
  }
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
