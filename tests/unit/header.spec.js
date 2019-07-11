// import mount from '@vue/test-utils';
import { expect } from 'chai';
// import Header from '../../src/components/header/header.vue';

// describe('Header', () => {
//   test('is a Vue instance', () => {
//     const wrapper = mount(Header);
//     expect(wrapper.isVueInstance()).toBeTruthy();
//   });
// });


describe('Examining the syntax of Jest tests', () => {
  it('sums numbers', () => {
    expect(1 + 2).equals(3);
    expect(2 + 2).equals(4);
  });
});
