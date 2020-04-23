import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDCj1AT265XQ2u8-FcuPrZHDB5iSyNSpdE",
    authDomain: "museria-1209.firebaseapp.com",
    databaseURL: "https://museria-1209.firebaseio.com",
    projectId: "museria-1209",
    storageBucket: "museria-1209.appspot.com",
    messagingSenderId: "864952772992",
    appId: "1:864952772992:web:a998fb4d9bd26cd96f7965",
    measurementId: "G-62L7WFRV44"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();

  export default firebase;