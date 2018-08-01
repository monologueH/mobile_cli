import Vue from 'vue'
import Router from 'vue-router'
import bargain from '@/pages/bargain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bargain',
      component: bargain
    }
  ]
})
