import jsRouter from './router/js-router'
import uiRouter from './router/ui-router'
export default [
<<<<<<< HEAD
  ...jsRouter,
  ...uiRouter
=======
  {
    path: '/fadeup-menu',
    name: 'fadeupMenu',
    component: resolve => require(['./components/fadeup-menu.vue'], resolve)
  }, {
    path: '/headerbar',
    name: 'headerbar',
    component: resolve => require(['./components/headerbar.vue'], resolve)
  },{
    path: '/switch',
    name: 'switch',
    component: resolve => require(['./components/switch.vue'], resolve)
  }
>>>>>>> switch
]
