import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAEPS5v0TMP95GOOsKm7AEqKjoryFZHkmw",
    authDomain: "crwn-db-84223.firebaseapp.com",
    databaseURL: "https://crwn-db-84223.firebaseio.com",
    projectId: "crwn-db-84223",
    storageBucket: "crwn-db-84223.appspot.com",
    messagingSenderId: "384450229959",
    appId: "1:384450229959:web:7c7362feb43fb269a930e2",
    measurementId: "G-PXZVGTGN5X"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : `select_account` });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;