import mapKeys from 'lodash/mapKeys';
import union from 'lodash/union';
import initialState from './initialState';
import {
  GET_CHECKS,
  CREATE_CHECK,
  CLOSE_CHECK,
  GET_CHECK,
  ADD_ITEM_TO_CHECK,
  VOID_ITEM,
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
      newState = {...state};
      newState.byId[action.payload.id] = action.payload;
      return newState;
    case GET_CHECK:
      newState = {...state};
      newState.byId[action.payload.id] = action.payload;
      newState.allIds = union(state.allIds, [action.payload.id]);
      return newState;
    case ADD_ITEM_TO_CHECK:
      newState = {...state};
      newState.byId[action.payload.checkId].orderedItems.push(action.payload);
      return newState;
    case VOID_ITEM:
      newState = {...state};
      newState.byId[action.payload.checkId].orderedItems = newState.byId[action.payload.checkId].orderedItems.map((orderedItem) => {
        if(orderedItem.id === action.payload.id) {
          return action.payload;
        } else {
          return orderedItem;
        }
      });
      return newState;
    default:
      return state;
  }
}