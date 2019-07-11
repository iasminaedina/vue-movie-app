<template>
  <div id="dashboard">
    <movies-list
      v-for="item in listTypes"
      v-if="item.isCategory"
      :mode="'collection'"
      :category="item.query"
      :shortList="true"
    >
    </movies-list>
  </div>
</template>

<script>
  import storage from '../../storage.js';
  import MoviesList from '../../components/moviesList/moviesList.vue';

  export default {
    components: { MoviesList },
    data() {
      return {
        listTypes: storage.listTypes
      }
    },
    created() {
      document.title = 'Vue Movie App';
      storage.backTitle = document.title;
    }
  }
</script>

<style scoped>
</style>