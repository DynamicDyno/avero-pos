import initialState from './initialState';
import {
  GET_CHECK,
  ADD_ITEM_TO_CHECK,
} from '../actions/actionTypes';

export default function checks(state = initialState.check, action) {
  let newState = {};

  switch (action.type) {
    case GET_CHECK:
      return action.payload;
    case ADD_ITEM_TO_CHECK:
      newState = {...state};
      newState.orderedItems = [...state.orderedItems, action.payload];
      return newState;
    default:
      return state;
  }
}