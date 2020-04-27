import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
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
    ,
    {
      path: '/admin',
      name: 'admin',
      component: () => import( './views/Admin.vue'),
      meta: {
        autentificado: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( './views/Login.vue')
    }

  ]
})

 router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let autorizacion = to.matched.some(record => record.meta.autentificado);
  console.log(to.name);
  console.log(`Autenticacion: ${autorizacion}`)
  console.log(`Autenticacion y usuario: ${(autorizacion && user != null)}`)

  if (to.name === 'admin' && autorizacion && user===null) {
    console.log('va a Login');
    next('/Login')
  } else if(autorizacion && user!=null) {
    console.log('va a admin');
    next()
  } else {
    console.log('lo que sea');
  next()
  }
}); 

export default router; 