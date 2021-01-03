import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
/*import VueSocketIO from "vue-socket.io";*/
import Jquery from 'jquery'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(Jquery)

/*
Vue.use( new VueSocketIO({
  debug: true,
  connection : 'https://tristanseclet.com:8080',
    }
    options: { path: "/my-app/" } //Optional options
))
*/

new Vue({
  router,
  render: h => h(App),
  template : '<App/>'
}).$mount('#app')
