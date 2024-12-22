import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
/* paziti na ovo:
import "./assets/tailwind.css"; // Ovo mora odgovarati stvarnoj lokaciji fajla*/
