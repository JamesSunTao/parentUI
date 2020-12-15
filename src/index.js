import button from '@/components/button'
import fadeupMenu from '@/components/fadeup-menu'
import headerbar from '@/components/headerbar'
import dialog from '@/components/dialog'
import toast from '@/components/toast'
import checkbox from '@/components/checkbox'
import checkboxGroup from '@/components/checkbox-group'
import actionSheet from '@/components/actionSheet'
import shortVideoContainer from '@/components/short-video-container'
import vswitch from '@/components/switch'
import notify from '@/components/notify'
import picker from '@/components/picker'
import popover from '@/components/popover'

import tabs from '@/components/tabs'
import rate from '@/components/rate'


// 报告类组件
import reportHeadImage from '@/components/reportComponents/report/report-head-image'
const components = {
  fadeupMenu,
  headerbar,
  actionSheet,
  shortVideoContainer,
  vswitch,
  checkbox,
  checkboxGroup,
  notify,
  popover,
  tabs,
  reportHeadImage,
  rate
}
const prototypes = {
  dialog,
  toast,
  picker
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
