const storage = {
  apiKey: '4cb1eeab94f45affe2536f2c684a5c9e',
  pageTitlePostfix: '',
  listTypes: [
    {
      title: 'Popular Movies',
      shortTitle: 'Popular',
      query: 'popular',
      isCategory: true,
    },
    {
      title: 'Search Results',
      query: 'search',
      isCategory: false,
    },
    {
      title: 'Your Favorite Movies',
      query: 'favorite',
      isCategory: false,
    },
  ],
  categories: {},

  // for history
  backTitle: '',
  moviePath: '',
  createMoviePopup: false,
};

// category title
storage.listTypes.forEach(function (listType) {
  storage.categories[listType.query] = listType.title;
});

export default storage;
