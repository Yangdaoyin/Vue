import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myTest from '@/view/myTest'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('../components/HelloWorld.vue'),
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
