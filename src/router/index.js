import { createRouter, createWebHistory } from 'vue-router';
import TopText from '@/views/top-text.vue';
import TopPractice from '@/views/top-practice.vue';
import HTMLCourse from '@/views/html-course.vue';
import CSSCourse from '@/views/css-course.vue';
import JavaScriptCourse from '@/views/javascript-course.vue';
import VueCourse from '@/views/vue-course.vue';
import NodeCourse from '@/views/node-course.vue';
import SQLCourse from '@/views/sql-course.vue';

const routes = [
  {
    path: '/Practice-Top',
    name: 'Practice-Top',
    component: TopPractice
  },
  {
    path: '/text',
    name: 'TopText',
    component: TopText
  },
  {
    path: '/text/1',
    name: 'HTMLCourse',
    component: HTMLCourse
  },
  {
    path: '/text/2',
    name: 'CSSCourse',
    component: CSSCourse
  },
  {
    path: '/text/3',
    name: 'JavaScriptCourse',
    component: JavaScriptCourse
  },
  {
    path: '/text/4',
    name: 'VueCourse',
    component: VueCourse
  },
  {
    path: '/text/5',
    name: 'NodeCourse',
    component: NodeCourse
  },
  {
    path: '/text/6',
    name: 'SQLCourse',
    component: SQLCourse
  },
  {
    path: '/', 
    redirect: '/text'
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
