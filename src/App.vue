<template>
  <div id="app">
    <PageHeaderComponent class="sticky-top fixed-header" />
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
  .fixed-header {
    width: 100%;
    z-index: 1000; /* ヘッダーが他の要素の上に表示されるようにする */
    background-color: #fff; /* ヘッダーの背景色 */
  }
</style>
