import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import service from "./utils/request"

console.log(service,'1111111')
const app = createApp(App)

app.use(router)

app.mount('#app')
