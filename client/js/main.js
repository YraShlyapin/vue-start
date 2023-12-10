import { createApp, h } from 'vue'
import App from '@c/App.vue'

const app = createApp({
    render: () => h(App)
})


app.mount('#app')