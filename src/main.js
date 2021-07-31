import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import Navbar from './components/group/Navbar.vue'
import Button from './components/single/Button.vue'

const app = createApp(App).use(router).use(store)

app.component('Navbar', Navbar)
app.component('Button', Button)

app.mount('#app')
