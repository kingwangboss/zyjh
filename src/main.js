// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import global from './Global'
import Mint from 'mint-ui'; 
import 'mint-ui/lib/style.css'
import {post,fetch,patch,put} from './util/http'
import axios from 'axios'
import { Indicator } from 'mint-ui'
import sha256 from "./util/sha256";
import ElementUI from 'element-ui'
import '../theme/index.css'
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.use(Mint);
Vue.prototype.$global=global
Vue.prototype.$sha256 = sha256;
Vue.prototype.$show = Indicator;
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
