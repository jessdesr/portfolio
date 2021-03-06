import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Profile',
    component: require('@/pages/Profile.vue').default,
    meta: {
      title: 'Jess Desrochers | Profile'
    }
  },

  {
    path: '/resume',
    name: 'Resume',
    component: require('@/pages/Resume.vue').default,
    meta: {
      title: 'Jess Desrochers | Resume'
    }
  },

  {
    path: '/projects',
    name: 'Projects',
    component: require('@/pages/Projects.vue').default,
    meta: {
      title: 'Jess Desrochers | Projects'
    }
  }
]

const router = new Router({
  mode: 'history',
  routes,
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
