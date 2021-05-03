import {
    PRODUCT_LOADING,
    FIND_PRODUCTS,
    CREATE_PRODUCT,
  } from "../actions/types";
  
  const initialState = {
     product: null,
     loading: true,
     findProducts: false,
     createProduct: false,

    };
    
    export default function Auth(state = initialState, action) {
      switch(action.type){
        case PRODUCT_LOADING:
        return{
          ...state,
          loading:true
        }
        case FIND_PRODUCTS:
            return{
                ...state,
                loading: false,
                findProducts: action.data,
                createProduct: false,
            }
        case CREATE_PRODUCT:
            return{
                ...state,
                loading: false,
                findProducts: false,
                createProduct: action.data,
            }
        default:
          return state;
      }
    }