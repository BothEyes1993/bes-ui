import Component2 from './src/Component2.vue'

Component2.install = function (Vue) {
  console.info('Component2----install----')
  Vue.component(Component2.name, Component2)
}

export default Component2
