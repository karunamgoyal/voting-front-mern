import {combineReducers} from 'redux';
import auth from './auth';
import {polls,currentPoll} from './polls';
import error from './error';
export default combineReducers({
    auth,
    error,
    polls,
    currentPoll
});