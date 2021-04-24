import {combineReducers} from 'redux';
import auth from './auth';
import staff from './staff';

export default combineReducers({

    auth,
    staff,
});