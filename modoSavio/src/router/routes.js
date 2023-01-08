import MainLayout from 'layouts/MainLayout'
import IndexPage from 'pages/IndexPage'
import ServicesPage from 'pages/ServicesPage'
import LoginPage from 'pages/LoginPage'
import OldPage from 'pages/OldPage'

const routes = [
  {
    path: '/',
    component: OldPage,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: 'home', component: IndexPage
      },
      {
        path: 'our_services', component: ServicesPage
      }
    ],
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    component: LoginPage,
    meta: { requiresAuth: false },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
