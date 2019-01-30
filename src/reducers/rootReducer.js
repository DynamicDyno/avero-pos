import {combineReducers} from 'redux';
import tables from './tablesReducer';
import checks from './checksReducer';
import items from './itemsReducer';

const rootReducer = combineReducers({
  tables,
  checks,
  items,
});

// Selectors

export function selectOpenChecks(state) {
  return state.checks.allIds
    .filter(id => !state.checks.byId[id].closed)
    .map(id => state.checks.byId[id]);
}

export function filterOpenChecks(state) {
  return state.checks.allIds
    .filter(id => !state.checks.byId[id].closed);
}

export function filterClosedChecks(state) {
  return state.checks.allIds
    .filter(id => state.checks.byId[id].closed);
}

export default rootReducer;