// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Layout from "./view/frame/Layout";
import './comment/style.css';
import  VueResource  from 'vue-resource'
import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueResource)
// Vue.prototype.$axios = axios
Vue.use(ElementUI)
// Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
