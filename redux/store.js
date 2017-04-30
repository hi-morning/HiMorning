import {combineReducers, createStore, applyMiddleware} from 'redux';
import commonReducer from './reducer/common.js';
import thunk from 'redux-thunk';
import config from '../config/app.js';

const rootReducer = combineReducers({
  common: commonReducer
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
