//Styling
import './assets/main.css'
import './assets/styles/main.scss'

//Vue
import { createApp } from 'vue'
import Header from './pages/Header/Header.vue'
import App from './App.vue'
import '../src/pages/Header/Header.vue'


//Mounts
createApp(App).mount('#app')
createApp(Header).mount('#mountHome')