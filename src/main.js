import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import Bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.js'

Vue.config.productionTip = false
Vue.use(Bootstrap)
Vue.use($)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
