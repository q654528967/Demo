import axios from 'axios'
import Vue from 'vue'
axios.defaults.withCredentials=true;
axios.defaults.baseURL="http://127.0.0.1:3000/";
Vue.prototype.axios=axios;
