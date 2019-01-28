import mapKeys from 'lodash/mapKeys';
import initialState from './initialState';
import { GET_TABLES } from '../actions/actionTypes';

export default function tables(state = initialState.tables, action) {
  let newState = {};

  switch (action.type) {
    case GET_TABLES:
      newState.byId = mapKeys(action.payload,'id');
      newState.allIds = action.payload.map(table => table.id);
      return newState;
    default:
      return state;
  }
}