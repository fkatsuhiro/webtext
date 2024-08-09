import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'highlight.js/styles/github-dark.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
