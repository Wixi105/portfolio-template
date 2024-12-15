import './assets/main.css'

import { createApp } from 'vue'
import {createHead} from '@vueuse/head'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.use(PrimeVue)

app.mount('#app')
