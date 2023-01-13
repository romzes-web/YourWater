import HomeView from '../views/HomeView.vue'
import CatalogView from '../views/CatalogView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogView,
    children: [
      {
        path: '/catalog/:catid',
        name: 'catalog-category',
        props: true,
        component: CatalogView
      }
    ],
  },
  {
    path: '/catalog/:catid/:itemid',
    name: 'catalog-category-item',
    props: true,
    component: () => import('../views/ProductPageView.vue'),
  },
  {
    path: '/water',
    name: 'water',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/water/plesca-naturalnaya',
    name: 'wtr-info-plesca-natr',
    component: () => import('../views/about/PlescaView.vue')
  },
  {
    path: '/water/voda-pervaya-categoriya',
    name: 'wtr-info-plesca-clsc',
    component: () => import('../views/about/PlescaClassicView.vue')
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: () => import('../views/DeliveryView.vue'),
  },
  {
    path: '/delivery/dostavka-strelna',
    name: 'delivery-strelna',
    component: () => import('../views/delivery/DeliveryStrelnaView.vue')
  },
  {
    path: '/delivery/dostavka-krasnoe-selo',
    name: 'delivery-krasnoe-selo',
    component: () => import('../views/delivery/DeliveryKrasnoeSeloView.vue')
  },
  {
    path: '/delivery/dostavka-shushary',
    name: 'delivery-shushary',
    component: () => import('../views/delivery/DeliveryShusharyView.vue')
  },
  {
    path: '/delivery/dostavka-metallostroy',
    name: 'delivery-metallostroy',
    component: () => import('../views/delivery/DeliveryMetallostroyView.vue')
  },
  {
    path: '/delivery/dostavka-kronshtadt',
    name: 'delivery-kronshtadt',
    component: () => import('../views/delivery/DeliveryKronshtadtView.vue')
  },
  {
    path: '/delivery/dostavka-kolpino',
    name: 'delivery-kolpino',
    component: () => import('../views/delivery/DeliveryKolpinoView.vue')
  },
  {
    path: '/delivery/dostavka-pushkin',
    name: 'delivery-pushkin',
    component: () => import('../views/delivery/DeliveryPushkinView.vue')
  },
  {
    path: '/delivery/dostavka-piter',
    name: 'delivery-piter',
    component: () => import('../views/delivery/DeliveryPiterView.vue')
  },
  {
    path: '/payments',
    name: 'payments',
    component: () => import('../views/PaymentsView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/ContactsView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue')
  }
]

export default routes
