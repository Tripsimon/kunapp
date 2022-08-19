import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/LandingPageView.vue'
import MainPageView from "@/views/MainPageView";
import RepetitionsView from "@/views/RepetitionsView";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
    /*
  {
    path: '/mainPage',
    name: 'main',
    component: MainPageView
  },
*/

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: MainPageView
  },
  {
    path: '/repetitions',
    name: 'repetitions',
    component: RepetitionsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
