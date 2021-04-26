
import axios from 'axios';
import store from '../store';
import { 
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_ERRORS,
  LOGOUT_SUCCESS,
} from './types'


// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) =>{
  // User Loading
  dispatch({ type: USER_LOADING });

  // Get token from state
  axios.get('/api/auth/user', tokenConfig())
    .then(res =>{
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    }).catch(err =>{
      dispatch({type: AUTH_ERROR, data:err.response.data})
    })
}

export const login = (username, password) => (dispatch, getState) =>{
  // User Loading
  dispatch({ type: USER_LOADING });

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  //Request Body
  const body = JSON.stringify({username,password})
  axios.post('/api/auth/login', body, config)
    .then(res =>{
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    }).catch(err =>{
      dispatch({type: LOGIN_FAIL})
    })
}

export const logoutUser = () => (dispatch) =>{

  axios.post('/api/auth/logout',null, tokenConfig())
    .then(res =>{
      dispatch({
        type: LOGOUT_SUCCESS
      })
    }).catch(err =>{
      dispatch({type: LOGOUT_ERRORS})
    })
}

export const tokenConfig = () => {
  const token = store.getState().auth.token
  
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  //If token, add to headers config
  if(token){
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config
};

export default tokenConfig;