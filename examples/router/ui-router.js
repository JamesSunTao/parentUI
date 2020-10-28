export default [
  {
    path: '/fadeup-menu',
    name: 'fadeupMenu',
    component: resolve => require(['../components/fadeup-menu.vue'], resolve)
  }, {
    path: '/headerbar',
    name: 'headerbar',
    component: resolve => require(['../components/headerbar.vue'], resolve)
  }
]
