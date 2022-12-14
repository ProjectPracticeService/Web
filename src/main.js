import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router/router";
import components from './components/UI';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app
    .use(ElementPlus)
    .use(router)
    .mount('#app')
