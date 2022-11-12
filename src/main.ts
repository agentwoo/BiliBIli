import { createApp } from 'vue'


// import './style.css'
import './style/index.css'
import App from './App.vue'

import router from './router'
// 引入自定义mock接口
import '../src/mock/index'

import { Tab, Tabs, Swipe, SwipeItem } from 'vant'

const app = createApp(App)
app.use(router);
app.use(Tab);
app.use(Tabs);
app.use(Swipe);
app.use(SwipeItem);



app.mount('#app')