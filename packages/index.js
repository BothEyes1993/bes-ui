import Component1 from './Component1'
import Component2 from './Component2'

const components = [
  Component1, Component2
]

function install (Vue) {
  components.map(component => {
    console.info('install----all----')
    Vue.component(component.name, component)
  })
}
export {
  install,
  Component1,
  Component2
}
export default {
  install,
  Component1,
  Component2
}
