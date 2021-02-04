import vbutton from '@/components/button'
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
import search from '@/components/search'
import badge from '@/components/badge'
import nodata from '@/components/nodata'
import autoplay from '@/components/autoplay'
import scrollNumber from '@/components/scrollNumber'
import imageView from '@/components/image-view'
import parentuiRow from '@/components/parentui-row'
import parentuiCol from '@/components/parentui-col'

import tabs from '@/components/tabs'
import rate from '@/components/rate'

import list from '@/components/list'
import pullRefresh from '@/components/pullRefresh'

import videoplayer from '@/components/videoplayer'
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
  imageView,
  tabs,
  search,
  badge,
  rate,
  vbutton,
  nodata,
  list,
  parentuiRow,
  parentuiCol,
  picker,
  pullRefresh,
  autoplay,
  scrollNumber,
  videoplayer
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
  version: '1.0.0',
  install,
  ...components
}
