import {combineReducers} from 'redux';
import auth from './auth';
import staff from './staff';
import products from './products';
import rooms from './rooms';

export default combineReducers({

    auth,
    staff,
    products,
    rooms
});