import { createApp } from 'vue'
import App from '../app/App.vue'
import router from '../router/route.js';
import { createHead } from '@vueuse/head'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)

app.mount('#app')