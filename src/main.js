// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'

import 'element-ui/lib/theme-chalk/index.css';
import './assets/font/iconfont.css';
import './assets/font2/iconfont.css';


Vue.use(ElementUI);
Vue.use(MintUI);
axios.defaults.baseURL = '/api/';
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
