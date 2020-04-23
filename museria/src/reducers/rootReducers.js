import authReducers from  './authReducers';
import projectReducers from './projectReducers';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore'

const rootReducers = combineReducers({
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    auth: authReducers,
    project: projectReducers
})

export default rootReducers;