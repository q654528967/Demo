import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import minitUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from './axios'
//import './assets/css/my-mint.css'

Vue.config.productionTip = false
Vue.use(minitUi);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
