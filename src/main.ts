import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import vuetify from './assets/vuetify-config'
import router from './router'

const app = createApp(App)
const store = createPinia()

app.use(store)
app.use(router)
app.use(vuetify)

app.mount('#app')
