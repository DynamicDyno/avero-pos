import { 
  GET_CHECKS,
  CREATE_CHECK,
  CLOSE_CHECK,
} from './actionTypes';

function baseUrl() {
  return 'https://check-api.herokuapp.com/checks';
}

export function fetchChecksSuccess(data) {
  return { 
    type: GET_CHECKS, 
    payload: data,
  };
}

export function createCheckSuccess(data) {
  return { 
    type: CREATE_CHECK, 
    payload: data,
  };
}

export function closeCheckSuccess(data) {
  return { 
    type: CLOSE_CHECK, 
    payload: data,
  };
}

export function fetchChecks() {
  return (dispatch) => {
    return fetch(baseUrl(), {
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
      dispatch(fetchChecksSuccess(json));
    })
    .catch(error => {
      console.error(error);
    });
  };
}

export function createCheck(tableId) {
  return (dispatch) => {
    return fetch(baseUrl(), {
      method: 'POST',
      headers: {
        'Authorization': process.env.REACT_APP_AUTH_TOKEN,
      },
      body: JSON.stringify({
        "tableId": tableId,
      })
    })
    .then(response => {
      if(!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(json => {
      dispatch(createCheckSuccess(json));
    })
    .catch(error => {
      console.error(error);
    });
  };
}

export function closeCheck(checkId) {
  return (dispatch) => {
    return fetch(`${baseUrl()}/${checkId}/close`, {
      method: 'PUT',
      headers: {
        'Authorization': process.env.REACT_APP_AUTH_TOKEN,
      },
    })
    .then(response => {
      if(!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(json => {
      dispatch(closeCheckSuccess(json));
    })
    .catch(error => {
      console.error(error);
    });
  };
}