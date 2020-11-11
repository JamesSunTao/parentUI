export default [
  {
    path: '/action-sheet',
    name: 'actionSheet',
    component: resolve => require(['../components/fadeup-menu.vue'], resolve)
  }, {
    path: '/headerbar',
    name: 'headerbar',
    component: resolve => require(['../components/headerbar.vue'], resolve)
  }
]
