import { GET_TABLES } from './actionTypes';

function url() {
  return 'https://check-api.herokuapp.com/tables';
}

export function receiveTables(data) {
  return { 
    type: GET_TABLES, 
    payload: data,
  };
}

export function fetchTables() {
  return (dispatch) => {
    return fetch(url(), {
      method: 'GET',
      headers: {
        'Authorization': process.env.REACT_APP_AUTH_TOKEN,
      }
    })
    .then(response => {
      if(!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(json => {
      dispatch(receiveTables(json));
    })
    .catch(error => {
      console.error(error);
    });
  };
}