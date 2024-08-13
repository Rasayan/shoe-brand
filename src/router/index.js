import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import ProductItemsComponents from '@/components/ProductItemsComponents.vue'
import ProductComponent from '@/components/ProductComponent.vue'
import About  from '../views/About.vue'
import ContactUs from '../views/ContactUs.vue'
import Privacy from '../views/Privacy.vue'
import Refundpolicy from '../views/Refundpolicy.vue'
import TermCondition from '../views/TermCondition.vue'
import DeliveryPolicy from '../views/DeliveryPolicy.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CartView
    },
    {
      path: '/products',
      name: 'ProductItemsComponent',
      component: ProductItemsComponents
      // r oute level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    },
    {
      path: '/view',
      name: 'ProductComponent',
      component: ProductComponent
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUs
    },

   {
    path: '/privacy',
    name: 'privacy',
    component: Privacy
   },
   {
    path: '/refundpolicy',
    name: 'refundpolicy',
    component: Refundpolicy
   },
   {
    path: '/term',
   name: 'term',
   component: TermCondition
   },
   {
    path: '/deliverypolicy',
    name: 'deliveypolicy',
    component: DeliveryPolicy
   }
  ]
})

export default router
