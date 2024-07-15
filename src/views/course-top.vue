<template>
  <div>
    <h1>Course Details</h1>
    <p>Course ID: {{ courseId }}</p>
    <!-- Add more course details here -->
  </div>
</template>

<script>
export default {
  name: 'CourseTop',
  props: ['id'],
  computed: {
    courseId() {
      return this.$route.params.id;
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
