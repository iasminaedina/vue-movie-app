<template>
  <div class="movie-list">
    <div class="container">
      <h1 class="title is-3">{{ listTitle }} ({{ results }})</h1>
        <div class="columns is-multiline is-mobile">
          <a
            v-for="movie in movies"
            v-bind:key="movie.id"
            class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop"
            :href="'/movie/' + movie.id"
            @click.prevent="openMoviePopup(movie.id, true)"
          >
            <img :src="'http://image.tmdb.org/t/p/w185' + movie.poster_path">
            <p class="movie-title">{{ movie.title }}</p>
          </a>
        </div>

        <section v-if="!movies.length" class="not-found">
          <div class="not-found__content">
              <h2 class="not-found__title" v-if="mode == 'search'">Nothing Found</h2>
              <h2 class="not-found__title" v-if="mode == 'favorite'">
                You haven't added any favorite movies
              </h2>
          </div>
        </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import storage from '../../storage';

export default {
  props: ['mode', 'category'],
  // clear search query when reloading route
  beforeRouteLeave(to, from, next) {
    if (from.name === 'search') {
      eventHub.$emit('setSearchQuery', true);
    }
    next();
  },
  data() {
    return {
      movies: [],
      listTitle: '',
      results: '',
    };
  },
  computed: {
    pageTitle() {
      return this.listTitle + storage.pageTitlePostfix;
    },
    query() {
      return this.$route.params.query || '';
    },
    request() {
      // check mode and make appropriate request for movie list
      if (this.mode === 'search') {
        return `/search/movie?api_key=${storage.apiKey}&language=en-US&query=${this.query}&page=1`;
      } else if (this.mode === 'popular') {
        return `/movie/${this.mode}?api_key=${storage.apiKey}&language=en-US&page=1`;
      }
    },
  },
  methods: {
    openMoviePopup(id, event) {
      eventHub.$emit('openMoviePopup', id, event);
    },
    // get mode and set list to appropriate data
    fetchCategory() {
      axios.get(this.request)
      .then(function (resp) {
        const data = resp.data;
        this.movies = data.results;
        this.results = this.movies.length;

        document.title = this.pageTitle;
      }.bind(this))
        .catch(function (error) {
          console.log(error);
          this.$router.push({ name: '404' });
        }.bind(this));
    },
    fetchFavorites() {
      if (localStorage.getItem('favorites')) {
        const ids = JSON.parse(localStorage.getItem('favorites'));
        if (ids.length > 0) {
          this.results = ids.length;
          const favorites = [];
          // loop through favorites localStorage ids and get movies
          ids.forEach(function (id, key) {
            axios.get(`/movie/${id}?api_key=${storage.apiKey}&language=en-US`)
              .then(function (resp) {
                favorites.push(resp.data);
              });
          });
          this.movies = favorites;
        }
      }
    },
  },
  watch: {
    // watch if route params change and fetch correct list
    query(value) {
      this.fetchCategory(value);
    },
  },
  created() {
    // check mode and get title for list
    if (this.mode === 'search') {
      this.fetchCategory();
      this.listTitle = storage.categories['search'];
      eventHub.$emit('setSearchQuery');
    } else if (this.mode === 'popular') {
      this.fetchCategory();
      this.listTitle = storage.categories[this.mode];
    } else if (this.mode === 'favorite') {
      this.listTitle = storage.categories[this.mode];
      this.fetchFavorites();
    }
  },
};
</script>

<style scoped>
  .movie-list {
    padding: 20px;
    min-height: 900px;
  }
  .movie-title {
    margin: 0;
    font-size: 12px;
    letter-spacing: 0.8px;
    transition: color 0.5s ease;
  }
  img {
    transform: scale(0.97) translateZ(0);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  img:hover {
    transform: scale(1.03);
    box-shadow: 0 0 10px rgba(#081c24, 0.1);
    cursor: pointer;
  }
  .movie-title:hover {
    cursor: pointer;
    color: #081c24;
  }
  .not-found__content {
    text-align: center;
  }
</style>
