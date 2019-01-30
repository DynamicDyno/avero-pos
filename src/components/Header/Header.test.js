import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from './Header';

it('renders Header without crashing', () => { 
  const wrapper = shallow(<Header />);
  expect(wrapper.find('.header')).to.have.lengthOf(1);
});