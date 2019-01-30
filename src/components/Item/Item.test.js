import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Item from './Item';

const menuItem = {
  "id": "abae32ec-05e5-4072-ba54-3a46764a5eff",
  "name": "MORTGAGE LIFTER BEANS",
  "price": 6
}

it('renders Item without crashing', () => { 
  const wrapper = shallow(<Item item={menuItem} />);
  expect(wrapper.find('.item')).to.have.lengthOf(1);
});