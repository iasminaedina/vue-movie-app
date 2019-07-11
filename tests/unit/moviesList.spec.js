import Vue from 'vue';
import { expect } from 'chai';
import MoviesList from '@/components/moviesList/moviesList.vue';

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('MoviesList', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof MoviesList.created).toBe('function');
  });

  // helper function that mounts and returns the rendered text
  function getRenderedText(Component, propsData) {
    const Constructor = Vue.extend(Component);
    const vm = new Constructor({ propsData }).$mount();
    return vm.$el.textContent;
  }

  describe('MoviesList', () => {
    it('renders correctly with different props', () => {
      expect(getRenderedText(MoviesList, {
        msg: 'Hello',
      })).toBe('Hello');

      expect(getRenderedText(MoviesList, {
        msg: 'Bye',
      })).toBe('Bye');
    });
  });
});
