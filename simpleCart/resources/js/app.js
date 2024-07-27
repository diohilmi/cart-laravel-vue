import './bootstrap';

import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import App from './components/App.vue';
Vue.use(VueRouter);

const router = new VueRouter({
    routes : routes,
    mode: 'history'
    
});

new Vue({
    render : (h) => h(App),
    router : router
}).$mount('#app');