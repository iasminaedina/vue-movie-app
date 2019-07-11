import { shallowMount } from "@vue/test-utils";
import { expect } from 'chai';
import MoviePage from '../../src/views/moviePage/moviePage.vue';

// describe('MoviePage', () => {
//   test('is a Vue instance', () => {
//     const wrapper = shallowMount(MoviePage);
//     console.log(wrapper);
//   });
// });


describe('Examining the syntax of Jest tests', () => {
  it('sums numbers', () => {
    expect(1 + 2).equals(3);
    expect(2 + 2).equals(4);
  });
});
