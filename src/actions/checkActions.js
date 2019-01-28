import { 
  GET_CHECK,
  ADD_ITEM_TO_CHECK,
} from './actionTypes';

function baseUrl() {
  return 'https://check-api.herokuapp.com/checks';
}

export function getCheckSuccess(data) {
  return { 
    type: GET_CHECK, 
    payload: data,
  };
}

export function addItemSuccess(data) {
  return { 
    type: ADD_ITEM_TO_CHECK, 
    payload: data,
  };
}

export function getCheck(checkId) {
  return (dispatch) => {
    return fetch(`${baseUrl()}/${checkId}`, {
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
      dispatch(getCheckSuccess(json));
    })
    .catch(error => {
      console.error(error);
    });
  };
}

export function addItemToCheck(itemId, checkId) {
  return (dispatch) => {
    return fetch(`${baseUrl()}/${checkId}/addItem`, {
      method: 'PUT',
      headers: {
        'Authorization': process.env.REACT_APP_AUTH_TOKEN,
      },
      body: JSON.stringify({
        "itemId": itemId,
      })
    })
    .then(response => {
      if(!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(json => {
      console.log('added an item to a check');
      dispatch(addItemSuccess(json));
    })
    .catch(error => {
      console.error(error);
    });
  };
}