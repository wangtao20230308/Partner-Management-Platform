import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from "./store";

// 权限路由
import './permission'
// svg-icons注册导入
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'// svg component
// UI框架 element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入阿里图标库
import "@/assets/iconfont/iconfont.css";
import "@/assets/iconfont/iconfont.js";



const app = createApp(App)

app.component('svg-icon',SvgIcon)


// 注册icon组件
import * as ElIconsModules from '@element-plus/icons-vue'
// 全局注册element-plus icon图标组件
Object.keys(ElIconsModules).forEach((key) => {//循环遍历组件名称
    if ("Menu" !== key) {//如果不是图标组件不是Menu，就跳过，否则加上ICon的后缀
        app.component(key, ElIconsModules[key]);
    } else {
        app.component(key + "Icon", ElIconsModules[key]);
    }
});
app.use(pinia)
app.use(router)

app.use(ElementPlus).mount('#app')
