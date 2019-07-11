<template>
  <div class="modal-container">
    <p class="image">
      <img :src="movieBackdropSrc" alt="">
    </p>
    <div class="tile is-parent">
      <article class="tile is-child">
        <div class="header">
          <p class="title movie-title"> {{ movie.title }} </p>
          <p class="title movie-rating"> {{ movie.vote_average }} </p>
        </div>
        <p v-if="movie.tagline" class="subtitle">
          <span class="uppercase">{{ movie.tagline }}</span>
        </p>

        <div class="content">

          <div class="genre-subtitle uppercase">
            <span class="blue-color">Genre: </span>
            <span v-for="genre in movie.genres" v-bind:key="genre.name"> {{ genre.name }} </span>
          </div>

          <p class="subtitle uppercase">
            <span class="blue-color">Release date: </span>
            <span>{{ movie.release_date | formatDate }}</span>
          </p>

          <div class="description">
            {{ movie.overview }}
          </div>

          <button
            v-if="!favoriteChecked"
            class="button is-primary"
            v-on:click="setFavorite"
          >
            Add to favorites
          </button>
          <button
            v-if="favoriteChecked"
            class="button"
            v-on:click="unsetFavorite"
          >
            Remove from favorites
          </button>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import storage from '../../storage';

export default {
  props: ['id'],
  data() {
    return {
      movie: {},
      movieBackdropSrc: '',
      favoriteChecked: false,
    };
  },
  methods: {
    // get movie
    fetchMovie(id) {
      axios.get(`/movie/${id}?api_key=${storage.apiKey}&language=en-US`)
      .then(function (resp) {
        this.movie = resp.data;

        this.backdrop();
        this.checkIfFavorite();

        // open modal
        if (storage.createMoviePopup) {
          storage.moviePath = '/movie/' + id;
          history.pushState({ popup: true }, null, storage.moviePath);
          storage.createMoviePopup = false;
        }

        // change page title to movie title
        document.title = this.movie.title;
      }.bind(this))
        .catch(function (error) {
          console.log(error);
          // show 404 page
          this.$router.push({ name: '404' });
        }.bind(this));
    },
    // set image backdrop
    backdrop() {
      if (this.movie.backdrop_path) {
        this.movieBackdropSrc = 'http://image.tmdb.org/t/p/w500' + this.movie.backdrop_path;
      }
    },
    // check if movie is added to favorites
    checkIfFavorite() {
      const favorites = JSON.parse(localStorage.getItem('favorites'));

      if (favorites.find(fav => fav === this.movie.id)) {
        this.favoriteChecked = true;
      } else {
        this.favoriteChecked = false;
      }
    },
    // favorite/unfavorite methods
    setFavorite() {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      favorites.push(this.movie.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      this.favoriteChecked = true;

      // show toast notification for confirmation
      this.$toasted.global.myToast(`${this.movie.title} added to favorites!`);
    },
    unsetFavorite() {
      const favorites = JSON.parse(localStorage.getItem('favorites'));
      for (let i = 0; i < favorites.length; i++) {
        if (favorites[i] === this.movie.id) {
          favorites.splice(i, 1);
        }
      }
      localStorage.setItem('favorites', JSON.stringify(favorites));
      this.favoriteChecked = false;

      // show toast notification for confirmation
      this.$toasted.global.myToast(`${this.movie.title} removed from favorites!`);
    },
  },
  created() {
    this.fetchMovie(this.id);
  },
};
</script>

<style scoped>
  .tile {
    padding: 20px;
  }
  .description {
    margin-bottom: 20px;
  }
  .header {
    display: flex;
  }
  .movie-title {
    display: flex;
    justify-content: flex-start;
    width: 90%;
  }
  .movie-rating {
    display: flex;
    justify-content: flex-end;
    color: #209cee;
  }
  .subtitle {
    font-size: 12px;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .blue-color {
    color: #209cee;
  }
  .genre-subtitle {
    font-size: 12px;
  }
  .toastStyle {
    background-color: #00d1b2;
  }
</style>
