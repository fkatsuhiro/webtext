<template>
  <div id="app">
    <PageHeaderComponent />
    <PageFooterComponent />
  </div>
</template>

<script>
  import PageHeaderComponent from './components/page-header-component.vue';
  import PageFooterComponent from './components/page-footer-component.vue';

  export default {
    name: 'PageTopComponent',
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
