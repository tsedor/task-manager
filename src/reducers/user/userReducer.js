import { LOGIN_REQUEST_FAILURE, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST } from "./userActions";

const initialState = {
  request: false,
  token: 'tmp'
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
      return {...state, request: true}
    case LOGIN_REQUEST_SUCCESS:
      return {...state, token: action.payload, request: false}
    case LOGIN_REQUEST_FAILURE:
      return {...state, request: false}
    default:
      return state;
  }
}

export default userReducer;