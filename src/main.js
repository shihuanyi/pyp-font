/* eslint-disable prettier/prettier */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/styles/globe.css'


import Vant from "vant"
import "vant/lib/index.css"
import { Lazyload } from "vant"

Vue.use(Vant)
Vue.use(Lazyload)
// 引入微信的js SDK
import wx from 'weixin-js-sdk'
Vue.prototype.wx = wx

Vue.config.productionTip = false;
// Vue.use(Vant);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
