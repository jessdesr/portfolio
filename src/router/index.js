import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Profile',
      component: require('@/pages/Profile.vue').default
    },

    {
      path: '/resume',
      name: 'Resume',
      component: require('@/pages/Resume.vue').default
    },

    {
      path: '/projects',
      name: 'Projects',
      component: require('@/pages/Projects.vue').default
    },
  ]
})
