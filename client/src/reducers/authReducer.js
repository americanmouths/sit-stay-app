export default function authReducer(state = {
  currentUser: {},
  token: null,
  loading: false,
  errors: {}
}, action) {
  switch (action.type) {
    case 'LOADING_AUTH_REQ':
      return {...state, loading: true}
    case 'LOG_IN':
      return setUser(state, action.payload)
    default:
      return state;
  }
};

function setUser(state, user) {
  if (user.token) {
    localStorage.setItem('token', user.token);
    localStorage.setItem('username', user.user.username);
    localStorage.setItem('id', user.user.id);
  }
  return {...state,
    currentUser: user.user,
    token: user.token,
    errors: user.errors,
    loading: false
  };
}
