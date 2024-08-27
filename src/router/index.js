import { createRouter, createWebHistory } from 'vue-router';
import TopText from '@/views/top-text.vue';
import TopBlog from '@/views/top-blog.vue';
/*コース内の教材コンポーネント*/
import HTMLCourse from '@/views/html-course.vue';
import CSSCourse from '@/views/css-course.vue';
import JavaScriptCourse from '@/views/javascript-course.vue';
import VueCourse from '@/views/vue-course.vue';
import NodeCourse from '@/views/node-course.vue';
import SQLCourse from '@/views/sql-course.vue';
import HTMLChapter1 from '@/views/html-course-detail/html-chapter-1.vue';
import HTMLChapter2 from '@/views/html-course-detail/html-chapter-2.vue';
import HTMLChapter3 from '@/views/html-course-detail/html-chapter-3.vue';
import CSSChapter1 from '@/views/css-course-detail/css-chapter-1.vue';
import CSSChapter2 from '@/views/css-course-detail/css-chapter-2.vue';
import CSSChapter3 from '@/views/css-course-detail/css-chapter-3.vue';
import CSSChapter4 from '@/views/css-course-detail/css-chapter-4.vue';
import JavaScriptChapter1 from '@/views/javascript-course-detail/javascript-chapter-1.vue';
import JavaScriptChapter2 from '@/views/javascript-course-detail/javascript-chapter-2.vue';
import JavaScriptChapter3 from '@/views/javascript-course-detail/javascript-chapter-3.vue';
import VueChapter1 from '@/views/vue-course-detail/vue-chapter-1.vue';
import VueChapter2 from '@/views/vue-course-detail/vue-chapter-2.vue';
import VueChapter3 from '@/views/vue-course-detail/vue-chapter-3.vue';
import NodeChapter1 from '@/views/node-course-detail/node-chapter-1.vue';
import NodeChapter2 from '@/views/node-course-detail/node-chapter-2.vue';
import NodeChapter3 from '@/views/node-course-detail/node-chapter-3.vue';
import SQLChapter1 from '@/views/sql-course-detail/sql-chapter-1.vue';
import SQLChapter2 from '@/views/sql-course-detail/sql-chapter-2.vue';
import SQLChapter3 from '@/views/sql-course-detail/sql-chapter-3.vue';
import SQLChapter4 from '@/views/sql-course-detail/sql-chapter-4.vue';
import SQLChapter5 from '@/views/sql-course-detail/sql-chapter-5.vue';
import SQLChapter6 from '@/views/sql-course-detail/sql-chapter-6.vue';

/* ブログ記事のインストール */
import FirstBootstrap from '@/views/blogs/first-bootstrap.vue';
import BootstrapCol from '@/views/blogs/bootstrap-col.vue';
import MakeHeaderUsingBootstrap from '@/views/blogs/make-header-using-bootstrap.vue';
import GithubConnectUbuntu from '@/views/blogs/github-connect-ubuntu.vue';
import GithubCommands from '@/views/blogs/github-commands.vue';
import OpenGithubPages from '@/views/blogs/open-github-pages.vue';


import SearchResults from '@/views/search-result.vue';


const routes = [
  {
    path: '/blog',
    name: 'TopBlog',
    component: TopBlog
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
    path: '/text/1/chapter/1',
    name: 'HTMLChapter1',
    component: HTMLChapter1
  },
  {
    path: '/text/1/chapter/2',
    name: 'HTMLChapter2',
    component: HTMLChapter2
  },
  {
    path: '/text/1/chapter/3',
    name: 'HTMLChapter3',
    component: HTMLChapter3
  },
  {
    path: '/text/2/chapter/1',
    name: 'CSSChapter1',
    component: CSSChapter1
  },
  {
    path: '/text/2/chapter/2',
    name: 'CSSChapter2',
    component: CSSChapter2
  },
  {
    path: '/text/2/chapter/3',
    name: 'CSSChapter3',
    component: CSSChapter3
  },
  {
    path: '/text/2/chapter/4',
    name: 'CSSChapter4',
    component: CSSChapter4
  },
  {
    path: '/text/3/chapter/1',
    name: 'JavaScriptChapter1',
    component: JavaScriptChapter1
  },
  {
    path: '/text/3/chapter/2',
    name: 'JavaScriptChapter2',
    component: JavaScriptChapter2
  },
  {
    path: '/text/3/chapter/3',
    name: 'JavaScriptChapter3',
    component: JavaScriptChapter3
  },
  {
    path: '/text/4/chapter/1',
    name: 'VueChapter1',
    component: VueChapter1
  },
  {
    path: '/text/4/chapter/2',
    name: 'VueChapter2',
    component: VueChapter2
  },
  {
    path: '/text/4/chapter/3',
    name: 'VueChapter3',
    component: VueChapter3
  },
  {
    path: '/text/5/chapter/1',
    name: 'NodeChapter1',
    component: NodeChapter1
  },
  {
    path: '/text/5/chapter/2',
    name: 'NodeChapter2',
    component: NodeChapter2
  },
  {
    path: '/text/5/chapter/3',
    name: 'NodeChapter3',
    component: NodeChapter3
  },
  {
    path: '/text/6/chapter/1',
    name: 'SQLChapter1',
    component: SQLChapter1
  },
  {
    path: '/text/6/chapter/2',
    name: 'SQLChapter2',
    component: SQLChapter2
  },
  {
    path: '/text/6/chapter/3',
    name: 'SQLChapter3',
    component: SQLChapter3
  },
  {
    path: '/text/6/chapter/4',
    name: 'SQLChapter4',
    component: SQLChapter4
  },
  {
    path: '/text/6/chapter/5',
    name: 'SQLChapter5',
    component: SQLChapter5
  },
  {
    path: '/text/6/chapter/6',
    name: 'SQLChapter6',
    component: SQLChapter6
  },
  {
    path: '/blog/1',
    name: 'FirstBootstrap',
    component: FirstBootstrap,
    props: true
  },
  {
    path: '/blog/2',
    name: 'BootstrapCol',
    component: BootstrapCol,
    props: true
  },
  {
    path: '/blog/3',
    name: 'MakeHeaderUsingBootstrap',
    component: MakeHeaderUsingBootstrap,
    props: true
  },
  {
    path: '/blog/4',
    name: 'GithubConnectUbuntu',
    component: GithubConnectUbuntu,
    props: true
  },
  {
    path: '/blog/5',
    name: 'GithubCommands',
    component: GithubCommands,
    props: true
  },
  {
    path: '/blog/6',
    name: 'OpenGithubPages',
    component: OpenGithubPages,
    props: true
  },
  {
    path: '/search-results',
    name: 'SearchResults',
    component: SearchResults,
    props: true
  },
  {
    path: '', 
    redirect: '/text'
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
