import Vue from 'vue'
import App from './App.vue'

// // 统一加载
import BesUI from 'bes-ui'
Vue.use(BesUI)

// 只加载Component1
// import { component1 } from 'bes-ui'
// Vue.use(component1)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
