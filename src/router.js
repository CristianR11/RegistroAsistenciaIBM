import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'eventos',
      component: () => import( './views/Eventos.vue')
    },
    {
      path: '/survey',
      name: 'survey',
      component: () => import( './views/Encuesta.vue')
    }
    ,
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import( './views/Calendar.vue')
    }
    ,
    {
      path: '/registroev',
      name: 'regeventos',
      component: () => import( './views/RegistroEv.vue')
    }
  ]
})
