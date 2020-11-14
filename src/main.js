import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
 /* el:'#app',*/ /*rajouter apres jsp si a garder*/
  router,
  render: h => h(App),
  template : '<App/>' /*rajouter apres jsp si a garder*/
}).$mount('#app')
