import fetch from 'isomorphic-fetch';

export function logoutUser() {
  return {type: 'LOG_OUT'};
}

export function login(loginInfo){
  const request = JSON.stringify(loginInfo);

  return (dispatch) => {
    dispatch({type: "LOADING_AUTH_REQ"});
    return fetch('/api/login', {
      method: 'post',
      body: request,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
      .then(user => {
        dispatch({
          type: "LOG_IN",
          payload: user
        });
      });
    }
  }

  export function signUp(signUpInfo){
    const request = JSON.stringify(signUpInfo);

    return (dispatch) => {
      dispatch({type: "LOADING_AUTH_REQ"});
      return fetch('/api/signup', {
        method: 'post',
        body: request,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      }).then(response => response.json())
      .then(user => {
        dispatch({
          type: "SIGN_UP",
          payload: user
        });
      });
    }
  }
