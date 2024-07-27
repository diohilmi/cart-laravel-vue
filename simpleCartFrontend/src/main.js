// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'vue-toastification/dist/index.css'

// import Toast from "vue-toastification"
import Toast, { POSITION } from 'vue-toastification';
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .use(Toast , {position: POSITION.TOP_RIGHT,})
    .mount('#app')

