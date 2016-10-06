import I from 'immutable';

export function home (state = I.Map({}), action) {
  switch (action.type) {

    // case LOGIN_REQUEST:
    //   return handleLoginRequest(state, action.isFetching, action.isAuthenticated);

    default:
      return state;
  }
}
