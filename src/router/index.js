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
      path: '/shujufenxi/setting1',
      name: 'setting1',
      // component: setting1
      component: resolve => require(['@/pages/shujufenxi/setting1'], resolve),
    },
    {
      path: '/shujufenxi/setting2',
      name: 'setting2',
      // component: setting2
      component: resolve => require(['@/pages/shujufenxi/setting2'], resolve),
    },
    {
      path: '/shujufenxi/setting3',
      name: 'setting3',
      // component: setting3
      component: resolve => require(['@/pages/shujufenxi/setting3'], resolve),
    },
    {
      path: '/shujufenxi/setting4',
      name: 'setting4',
      // component: setting4
      component: resolve => require(['@/pages/shujufenxi/setting4'], resolve),
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
    {
      path: '/wo/dailixiaoshou',
      name: 'dailixiaoshou',
      // component: about
      component: resolve => require(['@/pages/wo/dailixiaoshou'], resolve),
    },
    {
      path: '/wo/zhanghuyuer',
      name: 'zhanghuyuer',
      // component: error
      component: resolve => require(['@/pages/wo/zhanghuyuer'], resolve),
    },
    {
      path: '/wo/chengweidailishang',
      name: 'chengweidailishang',
      // component: error
      component: resolve => require(['@/pages/wo/chengweidailishang'], resolve),
    },
    {
      path: '/wo/woyaotixian',
      name: 'woyaotixian',
      // component: error
      component: resolve => require(['@/pages/wo/woyaotixian'], resolve),
    },
    {
      path: '/wo/mingxi',
      name: 'mingxi',
      // component: error
      component: resolve => require(['@/pages/wo/mingxi'], resolve),
    },
    {
      path: '/wo/setting',
      name: 'setting',
      // component: error
      component: resolve => require(['@/pages/wo/setting'], resolve),
    },
    {
      path: '/wo/feedback',
      name: 'feedback',
      // component: error
      component: resolve => require(['@/pages/wo/feedback'], resolve),
    },
    {
      path: '/wo/XGpwd',
      name: 'XGpwd',
      // component: error
      component: resolve => require(['@/pages/wo/XGpwd'], resolve),
    },
    {
      path: '/wo/youhuijuan',
      name: 'youhuijuan',
      // component: error
      component: resolve => require(['@/pages/wo/youhuijuan'], resolve),
    },
    {
      path: '/wo/ruanjianxiaoshou',
      name: 'ruanjianxiaoshou',
      // component: error
      component: resolve => require(['@/pages/wo/ruanjianxiaoshou'], resolve),
    },
    {
      path: '/wo/fuwuxiangqing',
      name: 'fuwuxiangqing',
      // component: error
      component: resolve => require(['@/pages/wo/fuwuxiangqing'], resolve),
    },
    {
      path: '/wo/xiaoshoujilu',
      name: 'xiaoshoujilu',
      // component: error
      component: resolve => require(['@/pages/wo/xiaoshoujilu'], resolve),
    },
    
    {
      path: '/error',
      name: 'error',
      // component: error
      component: resolve => require(['@/pages/error'], resolve),
    },
    {
      path: '/test',
      name: 'test',
      // component: error
      component: resolve => require(['@/pages/test'], resolve),
    },
  ]
})
