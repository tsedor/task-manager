import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILURE = 'LOGIN_REQUEST_FAILURE';

const loginRequestStart = () => ({
  type: LOGIN_REQUEST
})
const loginRequestSuccess = payload => ({
  type: LOGIN_REQUEST_SUCCESS,
  payload
})
const loginRequestFailure = () => ({
  type: LOGIN_REQUEST_FAILURE
})

export const loginRequest = ({ login, password }) => {
  return async (dispatch) => {
    try {
      dispatch(loginRequestStart())
      const { data } = await axios.get('./login.json');
      dispatch(loginRequestSuccess(data.token))
    } catch(e) {
      dispatch(loginRequestFailure())
    }
  }
}

export const selectToken = state => state.user.token;
export const selectLoginRequestState = state => state.user.request;