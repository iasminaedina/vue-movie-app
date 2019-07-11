<template>
  <div class="container info">
    <movieItem :id="$route.params.id"></movieItem>
  </div>
</template>

<script>
import MovieItem from '../../components/movieItem/movieItem.vue';

export default {
  components: { MovieItem },
};
</script>

<style scoped>
  .container {
    height: 900px;
  }
</style>
