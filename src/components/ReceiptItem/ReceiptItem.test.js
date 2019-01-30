import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
import ReceiptItem from './ReceiptItem';

const store = configureStore();

const orderedItem = {
  "id": "cc61e886-595a-43de-a744-40692a96c681",
  "dateCreated": "2019-01-29T02:20:28.515589Z",
  "dateUpdated": "2019-01-29T02:20:28.515589Z",
  "createdBy": "dedc08c5-1e78-451f-8e32-6ca9057e3681",
  "checkId": "3261c654-f555-42d4-85a8-fbf88f001eff",
  "itemId": "abae32ec-05e5-4072-ba54-3a46764a5eff",
  "voided": false
}

const menuItem = {
  "id": "abae32ec-05e5-4072-ba54-3a46764a5eff",
  "name": "MORTGAGE LIFTER BEANS",
  "price": 6
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <ReceiptItem
        key={orderedItem.id}
        checkClosed={false}
        orderedItem={orderedItem}
        menuItem={menuItem}
      />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
