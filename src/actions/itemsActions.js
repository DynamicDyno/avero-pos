import { GET_ITEMS } from './actionTypes';

function url() {
  return 'https://check-api.herokuapp.com/items';
}

export function receiveItems(data) {
  return { 
    type: GET_ITEMS, 
    payload: data,
  };
}

export function fetchItems() {
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
      dispatch(receiveItems(json));
    })
    .catch(error => {
      console.error(error);
    });
  };
}