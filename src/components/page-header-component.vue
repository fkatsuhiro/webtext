<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand logo">
        <img src="@/assets/top_logo.png" alt="Logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">TEXT</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blog" class="nav-link">BLOG</router-link>
          </li>
        </ul>
      </div>
      <form class="d-flex" role="search" @submit.prevent="search">
        <input class="form-control me-2" type="search" v-model="query" placeholder="Search" aria-label="Search">
        <button class="btn btn-secondary" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'PageHeaderComponent',
    data() {
      return {
        query: ''
      };
    },
    methods: {
      search() {
        if (this.query) {
          // 検索結果ページにリダイレクトし、クエリをURLに渡す
          this.$router.push({ name: 'SearchResults', query: { query: this.query } });
        }
      }
    }
  };
</script>

<style scoped>
  .logo img {
    height: 40px;
  }
</style>
