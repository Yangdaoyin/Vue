import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$axios = axios
export const submitAPI = params => {
  return axios.post('http://localhost:8090/mooc/getString', params);
}
