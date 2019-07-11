<template>
  <div
    class="modal is-active"
    @click="$emit('close')"
  >
    <div @click.stop>
      <div class="modal-background"></div>

      <div class="modal-content">
        <movieItem :id="id"></movieItem>
      </div>

    </div>

    <button
      class="modal-close is-large"
      aria-label="close"
      @click="$emit('close')"
    >
    </button>
  </div>
</template>

<script>
  import MovieItem from '../movieItem/movieItem.vue';

  export default {
    props: ['id'],
    components: { MovieItem },

    created(){
      //close modal when pressing escape
      window.addEventListener('keyup', function(e){
        if (e.keyCode == 27) {
          this.$emit('close');
        }
      }.bind(this));
    }
  }
</script>

<style scoped lang="scss">
  .modal-content {
    max-height: 900px;
    max-width: 900px;
    background-color: #ffffff;
    @media (max-width: 375px) {
      margin: 0;
    }
  }
</style>
