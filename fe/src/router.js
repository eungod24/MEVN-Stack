import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import restaurantList from './views/restaurant-list.vue' //여기

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    { //여기부터
      path: '/list',
      name: 'restaurantList',
      component: restaurantList
    }, // 여기까지
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
