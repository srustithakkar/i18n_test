import {combineReducers} from 'redux';
import logInReducer from "../_reducers/login.reducer"
import translationReducer from "./translation.reducer"

const rootReducer = combineReducers({
    logInReducer, translationReducer
});

export default rootReducer;
