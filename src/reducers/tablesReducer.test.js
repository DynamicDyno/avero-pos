import initialState from './initialState';
import tables from './tablesReducer';

it('has a default state', () => {
  expect(tables(undefined, {type: 'unexpected'})).toEqual(initialState.tables);
});
