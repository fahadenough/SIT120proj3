import { createRouter, createWebHashHistory } from 'vue-router'

import Roll from '../views/Roll.vue'
import Restaurants from '../views/restaurants/Restaurants.vue'
import Contact from '../views/Contact.vue'
import Reviews from '../views/restaurants/Reviews.vue'
import Signup from '../views/Signup.vue'
import Profile from '../views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'roll',
    component: Roll
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/restaurants/:id',
    name: 'reviews',
    component: Reviews,
  },
  {
    path: '/profile/',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  }, 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
