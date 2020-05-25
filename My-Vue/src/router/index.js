import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myTest from '@/view/myTest'
Vue.use(Router)
// 账号 yxyy20040901 ......
let children = []
const srcRouters = require.context('./', true, /^\.\/((?!\/)[\s\S]+\/route\.js$/)
srcRouters.keys().map(key => srcRouters(key).default).forEach(sa => {
  children = children.concat(sa)
})
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('../view/frame/Layout.vue'),
      children: [
        {
          path: 'Inner',
          name: 'Inner',
          redirect: '/dashboard',
          children: children,
          component: () => import('../view/frame/Inner.vue'),
        }
      ]
    },
    {
      path: '/view/myTest',
      name: 'myTest',
      component: () => import('../view/myTest.vue'),
      mete: {
        routeName: 'myTest'
      }
    },
    {
      path: '/view/user/userForm',
      name: 'USERFORM',
      component: () => import('../view/user/userForm.vue'),
      mete: {
        routeName: 'USERFORM'
      }
    }
  ]
})
