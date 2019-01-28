import mapKeys from 'lodash/mapKeys';
import initialState from './initialState';
import { GET_ITEMS } from '../actions/actionTypes';

export default function items(state = initialState.items, action) {
  let newState = {};

  switch (action.type) {
    case GET_ITEMS:
      newState.byId = mapKeys(action.payload,'id');
      newState.allIds = action.payload.map(item => item.id);
      return newState;
    default:
      return state;
  }
}