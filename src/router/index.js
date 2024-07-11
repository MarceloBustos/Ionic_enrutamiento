import { createRouter, createWebHistory } from '@ionic/vue-router';
import PaginaUno from '../views/PaginaUno.vue';
import PaginaDos from '../views/PaginaDos.vue';
import Index from '../views/perfil/index.vue';
import Destacados from '../views/perfil/destacados.vue';
import Fotos from '../views/perfil/fotos.vue';
import Likes from '../views/perfil/likes.vue';

const routes = [
  {
    path: '/',
    redirect: '/pagina1'
  },
  {
    path: '/pagina1',
    name: 'Página 1',
    component: PaginaUno
  },
  {
    path: '/pagina2/:mensaje',
    name: 'Página 2',
    component: PaginaDos
  },
  {
    path: '/perfil/',
    component: Index,
    children:[
      {
        path:'destacados',
        component: Destacados
      },
      {
        path:'fotos',
        component: Fotos
      },
      {
        path:'likes',
        component: Likes
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
