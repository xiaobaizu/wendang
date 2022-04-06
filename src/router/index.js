import Vue from 'vue'
import VueRouter from 'vue-router'
import Mine1 from '../views/mine.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    name: 'main1',
    component: Mine1,
    children:[
      {
        path:'/home',
        name:'home',
        component:() => import('../views/home')
      },
      {
        path: '/VueCli',
        name: 'VueCli',
        component: () => import('../views/vue/VueCli.vue')
      },
      {
        path: '/VueDea',
        name: 'VueDea',
        component: () => import('../views/vue/VueDea.vue')
      },
      {
        path: '/VueX',
        name: 'VueX',
        component: () => import('../views/vue/VueX.vue')
      },
      {
        path: '/VueLife',
        name: 'VueLife',
        component: () => import('../views/vue/VueLife.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
