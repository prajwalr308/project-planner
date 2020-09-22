import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDWKsx_2EInZX3E2m5wzmGezIeqyvBJRKY",
    authDomain: "projectmanager-e2855.firebaseapp.com",
    databaseURL: "https://projectmanager-e2855.firebaseio.com",
    projectId: "projectmanager-e2855",
    storageBucket: "projectmanager-e2855.appspot.com",
    messagingSenderId: "921572202077",
    appId: "1:921572202077:web:277fd431372b4f1af59fb4",
    measurementId: "G-L7RE2Y4XNK",
    userProfile: 'users',
    useFirestoreForProfile: true 
   
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  firebase.firestore();
  
  export default firebase;