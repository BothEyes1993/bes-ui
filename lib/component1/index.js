import component1 from './src/component1.vue'

component1.install = function (Vue) {
  console.info('component1----install----')
  Vue.component(component1.name, component1)
}

export default component1
