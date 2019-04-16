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
import {VueMasonryPlugin} from 'vue-masonry'
import axios from '../src/mixins/vue-axios'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false
Vue.component('v-icon', Icon)
Vue.use(VueMasonryPlugin)
Vue.use(BootstrapVue)
Vue.use(VueParticles)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
