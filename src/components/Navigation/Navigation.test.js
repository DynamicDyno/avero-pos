import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Navigation from './Navigation';
import { Link } from "react-router-dom";

it('renders Navigation without crashing', () => { 
  const wrapper = shallow(<Navigation />);
  expect(wrapper.find('.nav')).to.have.lengthOf(1);
  expect(wrapper.find(Link)).to.have.lengthOf(2);
});