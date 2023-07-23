import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import FormComponent from './Form.vue';
import HomeComponent from './Home.vue';
import UpdateComponent from './Update.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [ 
  { path: '/', component: HomeComponent}, 
  { path: '/form', component: FormComponent}, 
  { path: '/update/:productId', component: UpdateComponent }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).mount('#app');