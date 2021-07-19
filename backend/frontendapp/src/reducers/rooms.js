import {
   SELECT_ROOM
  } from "../actions/types";
  
  const initialState = {
     roomName:'',
     roomId:0,
     

    };
    
    export default function Auth(state = initialState, action) {
      switch(action.type){
        case SELECT_ROOM:
        return{
          ...state,
          roomName:action.data
        }
        default:
          return state;
      }
    }