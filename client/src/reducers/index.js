import {combineReducers} from 'redux';
import userReducer from './userReducer';
import studentReducer from './studentReducer'

export default combineReducers({
    User : userReducer,
    Student : studentReducer
})