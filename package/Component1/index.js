import Component1 from './src/Component1.vue'

Component1.install = function (Vue) {
  console.info('Component1----install----')
  Vue.component(Component1.name, Component1)
}

export default Component1
