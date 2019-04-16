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
  },

  { path: '/secretsauce',
    name: 'Get That Count',
    component: require('@/pages/Secret.vue').default,
    meta: {
      title: 'Jess D̶̨͚̖̩́̈͘e̴̹̊̆́̕s̵̢͚̩̲̒̄r̵̛̻͈̥̓͜o̵͍̖̓͜c̶̡͎̟̳̄̈̂h̸͍̼̟̏͊͊ͅe̷̝͖̊r̵̨̘͛s̵͔̻͑ | Ṡ̷̻͎̚̕͠ę̴̮̱̀̾̍c̵̡̙̠̯̎r̶̮̄̂͠ĕ̴̩̈́t̶̡̻̂̾'
    },
  }
]

const router = new Router({
  routes,
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
