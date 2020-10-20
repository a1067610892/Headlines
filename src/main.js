import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* 加载 Vant 组件 */
import Vant from 'vant'
/* 加载 Vant 组件样式 */
import 'vant/lib/index.css'

/* 自动设置rem基准值 */
import 'amfe-flexible'

/* 加载全局样式 */
import './stylus/index.less'

/* 全局注册Vant的组件 */
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
