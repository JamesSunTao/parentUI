export default [
  {
    path: '/toast',
    name: 'toast',
    component: resolve => require(['../components/toast.vue'], resolve)
  }, {
    path: '/dialog',
    name: 'dialog',
    component: resolve => require(['../components/dialog.vue'], resolve)
  },{
    path: '/notify',
    name: 'notify',
    component: resolve => require(['../components/notify.vue'], resolve),
  }
]
