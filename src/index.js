import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import {  ReactReduxFirebaseProvider,reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbconfig'
import firebase from 'firebase/app'
import * as serviceWorker from './serviceWorker';
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children
}

const store = createStore(rootReducer,compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
   
    reduxFirestore(firebase,fbConfig), // redux bindings for firestore

  ));
  const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
  }
  const rrfProps = {
    firebase,
   
    config: rrfConfig,fbConfig,
    
    dispatch: store.dispatch,
    attachAuthIsReady: true,
    createFirestoreInstance
  };
  

  ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
        
            <AuthIsLoaded>
                <App />

            </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




  
