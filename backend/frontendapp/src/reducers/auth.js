import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../actions/types";

const initialState = {
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: true,
    errors: '',
  };
  
  export default function Auth(state = initialState, action) {
    switch(action.type){
      case USER_LOADING:
        return{
          ...state,
          isLoading:true
        }
      case USER_LOADED:
        return{
          ...state,
          isAuthenticated:true,
          isLoading:false,
        }
      case LOGIN_SUCCESS:
        localStorage.setItem('token',
        action.payload.token)
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          isLoading: false
        }
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT_SUCCESS:
        localStorage.removeItem('token');
        return{
          ...state,
          token:null,
          user:null,
          isAuthenticated:false,
          isLoading:false,
          errors: action.data
        }

      default:
        return state;
    }
  }