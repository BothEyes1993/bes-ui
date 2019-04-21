import component2 from './src/component2.vue'

component2.install = function (Vue) {
  console.info('component2----install----')
  Vue.component(component2.name, component2)
}

export default component2
