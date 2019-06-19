import React from 'react';
import { shallow } from 'enzyme';
import AppButton from './AppButton';
import AppLargeButton from './AppButtonLarge';


describe('test for AppButton', () => {
  it('test for appButton', () => {
    const wrapper = shallow(<AppButton />);
    expect(wrapper).toMatchSnapshot();
  });

  it('test for AppLargeButton', () => {
    const wrapper = shallow(<AppLargeButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
