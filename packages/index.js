import component1 from './component1'
import component2 from './component2'

const components = [
  component1, component2
]

function install (Vue) {
  components.map(component => {
    console.info('install----all----')
    Vue.component(component.name, component)
  })
}
export {
  install,
  component1,
  component2
}
export default {
  install,
  component1,
  component2
}
