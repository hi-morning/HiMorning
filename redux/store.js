import {combineReducers, createStore, applyMiddleware} from 'redux';
import commonReducer from './reducer/common.js';
import thunk from 'redux-thunk';
import firebase from 'firebase';
import config from '../config/app.js';

firebase.initializeApp(config.firebase);

//firebase.auth().signInWithEmailAndPassword(config.authentication.email, config.authentication.password)
//.then(function(user) {
//  console.log('Firebase User:', user);
//}).catch(function(error) {
//  console.log(error);
//});


const rootReducer = combineReducers({
  common: commonReducer
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
