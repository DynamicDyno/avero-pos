import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
import Checklist from './Checklist';

const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Checklist />
    </Provider>, div);
  
  expect()

  ReactDOM.unmountComponentAtNode(div);
});
