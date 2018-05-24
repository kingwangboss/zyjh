import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'isNeedLogin',
      // component: isNeedLogin
      component: resolve => require(['@/pages/isNeedLogin'], resolve)
    },
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
    {
      path: '/planVC/planDetail/setParameter',
      name: 'setParameter',
      // component: setParameter
      component: resolve => require(['@/pages/setParameter'], resolve),
    },
    {
      path: '/regist',
      name: 'registVC',
      // component: registVC
      component: resolve => require(['@/pages/regist'], resolve)
    },
    {
      path: '/lossPwd1',
      name: 'lossPwdVC1',
      // component: lossPwdVC
      component: resolve => require(['@/pages/lossPwd1'], resolve)
    },
    {
      path: '/lossPwd2',
      name: 'lossPwdVC2',
      // component: lossPwdVC
      component: resolve => require(['@/pages/lossPwd2'], resolve)
    },
  ]
})
