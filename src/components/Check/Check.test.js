import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
import Check from './Check';

const store = configureStore();

const match = {
  params: {
    checkId: "3261c654-f555-42d4-85a8-fbf88f001eff"
  }
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Check match={match} />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
