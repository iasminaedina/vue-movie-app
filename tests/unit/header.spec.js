import { mount } from '@vue/test-utils';
import { expect } from 'chai';
import Header from '../../src/components/header/header.vue';

describe('Header', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Header);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

