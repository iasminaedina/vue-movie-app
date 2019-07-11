<template>
  <div id="dashboard">
    <movies-list :mode="'popular'"></movies-list>
  </div>
</template>

<script>
import storage from '../../storage';
import MoviesList from '../../components/moviesList/moviesList.vue';

export default {
  components: { MoviesList },
  data() {
    return {
      listTypes: storage.listTypes,
    };
  },
  created() {
    document.title = 'Vue Movie App';
    storage.backTitle = document.title;
  },
};
</script>

<style scoped>
</style>
