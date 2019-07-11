<template>
  <div class="favorites">
    <movies-list :mode="'favorite'"></movies-list>
  </div>
</template>

<script>
  import storage from '../../storage.js';
  import MoviesList from '../../components/moviesList/moviesList.vue';

  export default {
    components: { MoviesList },

    created () {
      document.title = 'Favorite Movies';
      storage.backTitle = document.title;
    }
  }
</script>

<style scoped>
  .favorites {
    height: 900px;
  }
</style>

