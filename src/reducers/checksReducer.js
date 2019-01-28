import mapKeys from 'lodash/mapKeys';
import initialState from './initialState';
import {
  GET_CHECKS,
  CREATE_CHECK,
  CLOSE_CHECK,
  ADD_ITEM_TO_CHECK
} from '../actions/actionTypes';

export default function checks(state = initialState.checks, action) {
  let newState = {};

  switch (action.type) {
    case GET_CHECKS:
      newState.byId = mapKeys(action.payload,'id');
      newState.allIds = action.payload.map(check => check.id);
      return newState;
    case CREATE_CHECK:
      newState.byId = {...state.byId, [action.payload.id]: action.payload}
      newState.allIds = [...state.allIds, action.payload.id];
      return newState;
    case CLOSE_CHECK:
      newState.byId = {...state.byId, [action.payload.id]: action.payload};
      newState.allIds = state.allIds;
      return newState;
    case ADD_ITEM_TO_CHECK:
      newState.byId = {...state.byId, [action.payload.id]: action.payload};
      newState.allIds = state.allIds;
      return newState;
    default:
      return state;
  }
}