import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import EditarCategory from ' ../components/categories/EditarCategory.vue';
import NewCategory from ' ../components/categories/NewCategory.vue';
import Customers from '../views/Customers';
import Categories from '../views/Categories';
import Paymodes from '../views/Paymodes';
import Products from '../views/Products';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    panth: '/editar-category/:id',
    name: 'EditarCategory',
    component: EditarCategory
  },
  {
    panth: '/add-category/:id',
    name: 'NewCategory',
    component: NewCategory
  },
  {
    path: '/paymodes',
    name: 'Paymodes',
    component: Paymodes
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
