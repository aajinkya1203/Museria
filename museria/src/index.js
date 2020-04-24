import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './reducers/rootReducers';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, reduxFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import firebase from 'firebase/app';
import fbConfig from './config/fbConfig';  //this is the config file in which firebase connection details are present
                                          // along with firebase.initializeApp() and firebase.firestore() commands
import CoffeeLoading from './images/LoadingRe.gif';
// import OctopusLoading from './images/Loading.gif';


const rrfConfig ={
  userProfile:'users',
  useFirestoreForProfile:true, //include if using firestore
  attachAuthIsReady:true  //include if using firebase auth
}

// reduxFirestore worked for me and i guess is still there in the current version3
// NOTE: This is a necessary step, because when you're using firebaseReducer and firestoreReducer in
// the root reducer then those reducers know which firebase database to connect to as you pass these information
// as fbConfig, so you're store now knows about youre firebase configuration file

const store = createStore(rootReducers, 
  compose(
    applyMiddleware(thunk),
    reduxFirestore(fbConfig)
  )
);

// we pass these props from the <ReactReduxFirebaseProvider> down to all the elements and catch 
// the firebase property using the withFirebase() function (HOC)
  const rrfProps={
    firebase,
    config:rrfConfig,
    dispatch:store.dispatch,
    createFirestoreInstance
  }

  // this function is used as an alternative to the function in v2.*.* so that my DOM renders only when
  // my firebase has made a connection (ignore this if not using firebase.auth())
  function AuthIsReady({ children }){
    const auth = useSelector(state=>state.firebase.auth);
    if(isLoaded(auth)){
      return children;
    }
    else{
      return <div className="center loading"><img src= { CoffeeLoading } alt="Loading... " /></div>
    }
  }

  // remove <AuthIsReady> tag is not using firebase.auth()

ReactDOM.render(
  <Provider store = { store }>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <React.StrictMode>
        <AuthIsReady>    
          <App />
        </AuthIsReady>
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
