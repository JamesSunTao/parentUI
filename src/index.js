import button from '@/components/button'
import fadeupMenu from '@/components/fadeup-menu'
import headerbar from '@/components/headerbar'
<<<<<<< HEAD
import dialog from '@/components/dialog'
import toast from '@/components/toast'

=======
import Switch from '@/components/switch'
>>>>>>> switch
const components = {
  fadeupMenu,
  headerbar,
  Switch
}

const prototypes = {
  dialog,
  toast
}

const install = function (Vue) {
  Object.values(components).forEach(component => {
    Vue.use(component)
  })
  Object.keys(prototypes).forEach(prototype => {
    Vue.prototype[`$${prototype}`]= prototypes[prototype];
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}


export default {
  version: '0.1.6',
  install,
  ...components
}
