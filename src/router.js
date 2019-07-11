import Router from 'vue-router';
import Dashboard from './views/dashboard/dashboard.vue';
import Favorites from './views/favorites/favorites.vue';
import MoviePage from './views/moviePage/moviePage.vue';
import MoviesList from './components/moviesList/moviesList.vue';
import NotFound from './views/404/404.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Dashboard,
  },
  {
    path: '/movies/:category',
    name: 'movies',
    component: {
      'list-router-view': MoviesList,
    },
  },
  {
    path: '/favorites',
    name: 'favorite',
    component: Favorites,
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: MoviePage,
  },
  {
    path: '/search/:query',
    name: 'search',
    components: {
      'search-router-view': MoviesList,
    },
  },
  {
    name: '404',
    path: '/404',
    components: NotFound,
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
