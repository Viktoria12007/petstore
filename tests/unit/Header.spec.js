import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Header from './../../src/components/Header.vue'
import Vuex from 'vuex'
import {store} from './../../src/store/store'

const localVue = createLocalVue();
localVue.use(Vuex)

describe('Header.vue', () => {
  // it('Check prop was sent over correctly to Header', () => {
  //   const cartItemCount = 10;
  //   const wrapper = shallowMount(Header, {
  //     store, localVue, propsData: { cartItemCount }
  //   })
  //   expect(wrapper.vm.cartItemCount).to.be(cartItemCount)
  // });
  it('Check cartItemCount text is properly displayed', () => {
    const cartItemCount = 10;
    const wrapper = shallowMount(Header, {
      store, localVue, propsData: { cartItemCount }
    })
    const p = wrapper.find('span');
    expect(p.text()).to.include(cartItemCount)
  });
  it('Check if navbar class is added to first div', () => {
    const cartItemCount = 10;
    const wrapper = shallowMount(Header, {
      store, localVue, propsData: { cartItemCount }
    })
    const p = wrapper.findAll('div').at(0);
    expect(p.classes()).to.include('navbar');
  });
})
