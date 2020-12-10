import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
import store from './store'
// 引入bootstrap
import $ from 'jquery'
import Bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.js'
// 引入svg
import './svg.js'

// 引入markdown
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)

Vue.config.productionTip = false
Vue.use(Bootstrap)
Vue.use($)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
