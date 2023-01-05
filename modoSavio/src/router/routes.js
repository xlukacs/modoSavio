import MainLayout from 'layouts/MainLayout'
import IndexPage from 'pages/IndexPage'
import ServicesPage from 'pages/ServicesPage'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '', component: IndexPage
      },
      {
        path: 'home', component: IndexPage
      },
      {
        path: 'our_services', component: ServicesPage
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
