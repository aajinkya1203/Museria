import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {

  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();

  export default firebase;
