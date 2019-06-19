import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import ShoppingCartModal from './ShoppingCartModal';

const initialState = {
  shoppingCart: { cartItems: [{}] },
};
const mockStore = configureStore();
let wrapper;
let store;

describe('test for ShoppingCartModal', () => {
  it('test for ShoppingCartModal', () => {
    store = mockStore(initialState);
    wrapper = shallow(<ShoppingCartModal store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});
