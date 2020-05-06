import Vue from 'vue'
import VueRouter from 'vue-router'
import * as service from '@/service'
import Home from '../views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect() {
      return {name: 'Mcco'}
    },
    children: [
      {
        path: '',
        name: 'Mcco',
        component: () => import('@/views/mcco/Mcco.vue'),
      },
      {
        path: 'materiel/:platform',
        name: 'Materiel',
        component: () => import('@/views/materiel/Materiel.vue'),
      },
      {
        path: 'materiel/:platform/:versionId',
        name: 'MaterielDetail',
        component: () => import('@/views/materiel/MaterielDetail.vue'),
      },
      {
        path: 'project',
        name: 'Project',
        component: () => import('@/views/project/Project.vue'),
      },
      {
        path: 'project/:projectId',
        name: 'ProjectDetail',
        component: () => import('@/views/project/ProjectDetail.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/auth/Register.vue'),
  },
]

const router = new VueRouter({
  mode: process.env.NODE_ENV === 'development' ?  'hash' : 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.name === 'Login' || to.name === 'Register') {
    next()
  } else {
    const user = await service.testAuth()
    if (user) {
      store.commit('changeUser', user)
      next()
    } else {
      next({name: 'Login'})
    }
  }
})

export default router
