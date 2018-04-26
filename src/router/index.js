import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'loginVC',
      // component: loginVC
      component: resolve => require(['@/pages/login'], resolve)
    },
    {
      path: '/planVC',
      name: 'PlanVC',
      component: resolve => require(['@/pages/planVC'], resolve)
    },
    {
      path: '/XZcaizhong',
      name: 'XZcaizhong',
      // component: XZcaizhong
      component: resolve => require(['@/pages/XZcaizhong'], resolve),
    },
    {
      path: '/changePlan',
      name: 'changePlan',
      // component: changePlan
      component: resolve => require(['@/pages/changePlan'], resolve),
    },
    {
      path: '/routerPush',
      name: 'routerPush',
      // component: routerPush
      component: resolve => require(['@/pages/routerPush'], resolve),
    },
    {
      path: '/planVC/planDetail',
      name: 'PlanDetail',
      component: resolve => require(['@/pages/planDetail'], resolve)
    },
  ]
})
