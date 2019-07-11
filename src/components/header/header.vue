<template>
  <div class="header">
    <nav class="navbar is-info is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../../assets/logo.svg" width="112" height="28">
        </a>

        <a role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          v-on:click="toggleNavBurger"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link
            class="navbar-item"
            :to="{name: 'home', params: {category: $route.params.category}}"
          >
            Home
          </router-link>

          <router-link
            class="navbar-item"
            :to="{name: 'favorite', params: {category: $route.params.query}}"
          >
            Favorites
          </router-link>
        </div>

        <div class="navbar-end">
          <div class="field is-grouped navbar-item search-box is-hidden-mobile">
            <p class="control is-expanded">
              <input
                class="input"
                type="text"
                v-model.trim="searchQuery"
                @keyup.enter="search"
                @blur="search"
                placeholder="Search for a movie..."
              >
            </p>
            <p class="control">
              <a class="button is-primary">
                Search
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>
    <div class="field is-grouped search-box is-hidden-desktop showOnMobile">
      <p class="control is-expanded">
        <input
          class="input"
          type="text"
          v-model.trim="searchQuery"
          @keyup.enter="search"
          @blur="search"
          placeholder="Search for a movie..."
        >
      </p>
      <p class="control">
        <a class="button is-primary">
          Search
        </a>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {
    // encode search query
    queryForRouter() {
      return encodeURI(this.searchQuery.replace(/ /g, '+'));
    },
  },
  methods: {
    // search functions
    search() {
      if (!this.searchQuery.length) return;
      // add search query to router
      this.$router.push({ name: 'search', params: { query: this.queryForRouter } });
    },
    setSearchQuery(clear) {
      if (clear) {
        this.searchQuery = '';
      } else {
        const query = decodeURIComponent(this.$route.params.query);
        this.searchQuery = query ? query.replace(/\+/g, ' ') : '';
      }
    },
    // show/hide mobile navigation
    toggleNavBurger() {
      document.querySelector('.navbar-burger').classList.toggle('is-active');
      document.querySelector('.navbar-menu').classList.toggle('is-active');
    },
  },
  created() {
    eventHub.$on('setSearchQuery', this.setSearchQuery);
  },
};
</script>

<style scoped lang="scss">
  .header {
    margin-bottom: 50px;
  }
  .search-box {
    width: 600px;
  }
  .showOnMobile {
    @media (max-width: 1023px) {
      position: fixed;
      right: 100px;
      z-index: 31;
      top: 9px;
      max-width: 300px;
    }
    @media (max-width: 767px) {
      position: fixed;
      right: 60px;
      z-index: 31;
      top: 9px;
      max-width: 200px;
    }
  }
</style>
