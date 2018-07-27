import Vue from 'vue'
import Router from 'vue-router'
import Normal from '@/components/normal'
import Eventbus from '@/components/eventbus'
// import Vuextodo from '@/components/vuextodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/normal',
      name: 'Normal',
      component: Normal
    },
    {
      path: '/eventbus',
      name: 'Eventbus',
      component: Eventbus
    }
    // {
    //   path: '/vuextodo',
    //   name: 'Vuextodo',
    //   component: Vuextodo
    // }
  ]
})
