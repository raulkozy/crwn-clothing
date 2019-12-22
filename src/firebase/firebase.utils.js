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

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if (!userAuth) return null;
  const userRef = firestore.doc(`users/${userAuth.uid}`);


  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj);
    // console.log(newDocRef);
  });
  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: `select_account` });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;