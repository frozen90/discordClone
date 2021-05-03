import {combineReducers} from 'redux';
import auth from './auth';
import staff from './staff';
import products from './products';

export default combineReducers({

    auth,
    staff,
    products
});