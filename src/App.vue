<template>
  <div id="app">
    <PageHeaderComponent />
    <main>
      <router-view v-slot="{ Component }">
        <!--debug-->
        <component :is="Component" v-if="Component" />
        <p v-else>No component matched the route.</p>
      </router-view>
    </main>
    <PageFooterComponent />
  </div>
</template>

<script>
  import PageHeaderComponent from './components/page-header-component.vue';
  import PageFooterComponent from './components/page-footer-component.vue';

  export default {
    name: 'App',
    components: {
      PageHeaderComponent,
      PageFooterComponent
    }
  }
</script>

<style>
  .main-content {
    padding: 2rem;
  }
</style>
