// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueParticles from 'vue-particles'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.config.productionTip = false
Vue.component('v-icon', Icon)
Vue.use(BootstrapVue)
Vue.use(VueParticles)
Vue.use(Vue2TouchEvents)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
