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
    path: '/notify',
    name: 'notify',
    component: resolve => require(['../components/notify.vue'], resolve),
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
    }]
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
  },
  {
    path: '/popover',
    name: 'popover',
    component: resolve => require(['../components/popover.vue'], resolve)
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: resolve => require(['../components/tabs.vue'], resolve),
  },
  {
    path: '/rate',
    name: 'rate',
    component: resolve => require(['../components/rate.vue'], resolve),
  }, {
    path: '/vbutton',
    name: 'vbutton',
    component: resolve => require(['../components/vbutton.vue'], resolve),
  }
]
