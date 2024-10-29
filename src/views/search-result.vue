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
    <!-- 検索時間の表示 -->
    <!--<div class="response-time">
      検索時間: {{ responseTime }} ms
    </div>-->
  </div>
</template>

<script>
import axios from 'axios';

/* 処理速度改善前コード */
/*export default {
  name: 'SearchResults',
  data() {
    return {
      results: [],
      responseTime: null
    };
  },
  created() {
    const startTime = performance.now();
    
    // 処理速度テスト用のダミーデータを格納したjsonファイル
    // axios.get('search_result_test.json')

    // local環境用
    //axios.get('/search_result.json')

    // GitHub Pages公開用
    //axios.get(`${process.env.BASE_URL}/search_result.json`)
      .then(response => {
        this.results = response.data;
        this.calculateResponseTime(startTime);
      })
      .catch(error => {
        console.error('Error loading results:', error);
      });
  },
  computed: {
    filteredResults() {
      const query = this.$route.query.query;

      //console.log('Search Query:', query);

      if (!query) {
        return [];
      }

      const queryWords = query.toLowerCase().split(/\s+/);
      const startTime = performance.now();

      const results = this.results.filter(result => {
        const title = result.title.toLowerCase();
        const description = result.description.toLowerCase();
        const content = result.content ? result.content.toLowerCase() : '';

        return queryWords.every(word => title.includes(word) || description.includes(word) || content.includes(word));
      });

      // 検索の処理にかかった時間を算出
      this.calculateResponseTime(startTime);
      return results;
    }
  },
  methods: {
    calculateResponseTime(startTime) {
      const endTime = performance.now();
      this.responseTime = (endTime - startTime).toFixed(2); 
    }
  }
};*/

/* 処理高速化のためのコードを記述 */
export default {
  name: 'SearchResults',
  data() {
    return {
      results: [],
      responseTime: null,
      index: {}
    };
  },
  created() {
    const startTime = performance.now();

    // 処理速度改善確認テスト用のデータを格納したjsonファイル
    //axios.get('/search_result_indexed_test.json')

    // local環境用
    //axios.get('/search_result_indexed.json')

    // GitHub Pagesで公開するためのURL
    axios.get(`${process.env.BASE_URL}/search_result_indexed.json`)
      .then(response => {
        this.results = response.data.data;
        this.createIndex();
        this.calculateResponseTime(startTime);
      })
      .catch(error => {
        console.error('Error loading results:', error);
      });
  },
  methods: {
    createIndex() {
      this.results.forEach(result => {
        // title、description、content、keywordsから単語を抽出してインデックスを作成
        const words = new Set([
          ...result.title.toLowerCase().split(/\s+/),
          ...result.description.toLowerCase().split(/\s+/),
          ...(result.content ? result.content.toLowerCase().split(/\s+/) : []),
          ...(result.keywords ? result.keywords.map(word => word.toLowerCase()) : [])
        ]);

        // カテゴリをインデックスに追加
        if (result.category) {
          words.add(result.category.toLowerCase());
        }

        // インデックスを更新
        words.forEach(word => {
          if (!this.index[word]) {
            this.index[word] = [];
          }
          this.index[word].push(result);
        });
      });
    },
    calculateResponseTime(startTime) {
      const endTime = performance.now();
      this.responseTime = (endTime - startTime).toFixed(2);
    }
  },
  computed: {
    filteredResults() {
      const query = this.$route.query.query;
      if (!query) {
        return [];
      }

      const queryWords = query.toLowerCase().split(/\s+/);
      const startTime = performance.now();

      // クエリの各単語に基づいて検索対象を絞り込む
      let resultSets = queryWords.map(word => this.index[word] || []);
      let filteredResults = resultSets.reduce((common, results) =>
        common.filter(result => results.includes(result))
      );

      // 検索時間の計算
      this.calculateResponseTime(startTime);
      return filteredResults;
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