<template>
  <div id="app">
    <app-header></app-header>

    <movie-modal
      v-if="moviePopupIsVisible"
      @close="closeMoviePopup"
      :id="moviePopupId">
    </movie-modal>

    <section class="main">
      <transition name="fade">
        <router-view
          name="popular-list-router-view"
          :mode="'popular'"
          :key="$route.params.category"
        >
        </router-view>

        <router-view
          name="search-router-view"
          :mode="'search'"
          :key="$route.params.query"
        >
        </router-view>
        <router-view></router-view>
      </transition>
    </section>

    <app-footer></app-footer>
  </div>
</template>

<script>
import storage from './storage';
import Footer from '@/components/footer/footer.vue';
import Header from '@/components/header/header.vue';
import MovieModal from '@/components/movieModal/movieModal.vue';

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'movie-modal': MovieModal,
  },

  data() {
    return {
      listTypes: storage.listTypes,
      moviePopupIsVisible: false,
      moviePopupId: 0,
    };
  },

  methods: {
    // open movie details modal
    openMoviePopup(id, newMoviePopup) {
      if (newMoviePopup) {
        storage.backTitle = document.title;
      }
      storage.createMoviePopup = newMoviePopup;
      this.moviePopupIsVisible = true;
      this.moviePopupId = id;
      document.querySelector('body').classList.add('hidden');
    },
    // close movie details modal
    closeMoviePopup() {
      storage.createMoviePopup = false;
      this.moviePopupIsVisible = false;
      document.querySelector('body').classList.remove('hidden');
      window.history.back();
    },
  },
  created() {
    eventHub.$on('openMoviePopup', this.openMoviePopup);
  },
};
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: 0.25s;
  }
  .fade-enter-active {
    transition-delay: 0.25s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
