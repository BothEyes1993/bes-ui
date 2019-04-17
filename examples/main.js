import Vue from 'vue'
import App from './App.vue'

// // 统一加载
// import BesUI from '../packages'
// Vue.use(BesUI)

import { Component1 } from '../packages/Component1'
Vue.use(Component1)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
