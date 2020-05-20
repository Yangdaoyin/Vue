import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myTest from '@/view/myTest'
Vue.use(Router)
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
          redirect: '/Inner',
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
    }
  ]
})
