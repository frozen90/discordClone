import axios from 'axios';
import store from '../store';
import { STAFF } from './types'
import tokenConfig from "./auth"
export const loadStaff = () => (dispatch, getState) =>{
  
    // Get token from state
    axios.get('/api/staff/', tokenConfig())
      .then(res =>{
       dispatch({type:STAFF, data:res.data})
      }).catch(err =>{
        console.log(err)
      })
  }