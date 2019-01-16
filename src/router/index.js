import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
