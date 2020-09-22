import fadeupMenu from '@/components/fadeup-menu'
import headerbar from '@/components/headerbar'

const components = {
  fadeupMenu,
  headerbar
}

const install = function (Vue) {
  Object.values(components).forEach(component => {
    Vue.use(component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.1.5',
  install,
  ...components
}
