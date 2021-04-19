import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
}

const initialState = {
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
  };
  
  export default function Auth(state = initialState, action) {
    switch(action.type){
      
      default:
        return state;
    }
  }