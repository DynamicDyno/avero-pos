import { 
  GET_CHECKS,
  CREATE_CHECK,
  CLOSE_CHECK,
  GET_CHECK,
  ADD_ITEM_TO_CHECK,
  VOID_ITEM,
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

export function voidItemSuccess(data) {
  return { 
    type: VOID_ITEM, 
    payload: data,
  };
}

// grouped Checks
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


// individual Check
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
      dispatch(addItemSuccess(json));
    })
    .catch(error => {
      console.error(error);
    });
  };
}

export function voidItem(orderedItemId, checkId) {
  return (dispatch) => {
    return fetch(`${baseUrl()}/${checkId}/voidItem`, {
      method: 'PUT',
      headers: {
        'Authorization': process.env.REACT_APP_AUTH_TOKEN,
      },
      body: JSON.stringify({
        "orderedItemId": orderedItemId,
      })
    })
    .then(response => {
      if(!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(json => {
      dispatch(voidItemSuccess(json));
    })
    .catch(error => {
      console.error(error);
    });
  };
}