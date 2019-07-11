
import { expect } from 'chai';
import MoviesList from '@/components/moviesList/moviesList.vue';

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('MoviesList', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof MoviesList.created).toBe('function');
  });
});
