import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import myHeader from './components/myHeader'
Vue.config.productionTip = false;
Vue.component("my-header",myHeader)
Vue.prototype.axios=axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
