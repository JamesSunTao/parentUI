export default [
  {
    path: '/action-sheet',
    name: 'actionSheet',
    component: resolve => require(['../components/fadeup-menu.vue'], resolve)
  }, {
    path: '/headerbar',
    name: 'headerbar',
    component: resolve => require(['../components/headerbar.vue'], resolve)
  }, {
    path: '/shortVideoContainer',
    name: 'shortVideoContainer',
    component: resolve => require(['../components/short-video-container.vue'], resolve),
    children: [{
        path: '/common',
        name: 'common',
        component: resolve => require(['../view/short-video/common.vue'], resolve)
      },
      {
        path: '/blur',
        name: 'blur',
        component: resolve => require(['../view/short-video/blur.vue'], resolve)
    }],
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: resolve => require(['../components/checkbox.vue'], resolve)
  },{
    path: '/vswitch',
    name: 'vswitch',
    component: resolve => require(['../components/vswitch.vue'], resolve),
  },
  {
    path: '/checkboxGroup',
    name: 'checkbox-group',
    component: resolve => require(['../components/checkbox-group.vue'], resolve),
  }
]
