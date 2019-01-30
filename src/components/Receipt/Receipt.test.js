import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
import Receipt from './Receipt';

const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Receipt
        checkId="3261c654-f555-42d4-85a8-fbf88f001eff"
      />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
