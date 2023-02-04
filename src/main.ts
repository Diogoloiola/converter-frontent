import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vue-toastification/dist/index.css';
import Toast from 'vue-toastification';

createApp(App).use(Toast, { position: "bottom-right" }).mount('#app')