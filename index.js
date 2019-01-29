import Component1 from './package/Component1'
import Component2 from './package/Component2'


const components = [
  Component1,Component2
]

function install (Vue) {
  components.map(component => {
    console.info('install----all----')
    Vue.component(component.name, component)
  })
}

export const component = {
  install,
  Component1,
  Component2
}

// export default {
//   install,
//   Component1,
//   Component2
// }

// module.exports = {
//   install,
//   Component1,
//   Component2
// };

// module.exports.default = module.exports;
