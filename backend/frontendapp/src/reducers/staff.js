import {
    STAFF_LOADING,
    STAFF
  } from "../actions/types";
  
  const initialState = {
      staffData:{
        rows: [],
        total:0,
        loading:true
      }
    };
    export default function Auth(state = initialState, action) {
        switch(action.type){
            case STAFF:
                return{
                    ...state,
                    staffData:{
                        rows:action.data.rows,
                        total:action.data.total,
                        loading:false
                    }
                }
          default:
            return state;
        }
      }
