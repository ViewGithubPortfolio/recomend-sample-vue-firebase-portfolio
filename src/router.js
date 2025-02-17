import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/MAIN/mainVue.vue'
import RootVue from './components/RootVue/rootVue.vue'
import ArtistDetail from './components/ArtistDetail/artistDetail.vue'
import NeighborArtists from './components/NeighborArtists/neighborArtists.vue'
import suggestResult from './components/SuggestResult/suggestResult.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
        path: '/',
        name: 'root_redirect',
        component: RootVue,
        redirect:'/main'
      },
      {
        path: '/artistDetail',
        name: 'artistDetail',
        component: ArtistDetail,
      },
      {
        path: '/neighborArtists',
        name: 'neighborArtists',
        component: NeighborArtists
      },
      {
        path: '/suggestResult',
        name: 'suggestResult',
        component: suggestResult
      }
  ]
})