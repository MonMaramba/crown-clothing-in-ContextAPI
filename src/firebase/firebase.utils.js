import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAA93_rixdL3reLl5NTRnD8Pyf2yseEv0Q",
  authDomain: "crowndb-c5b35.firebaseapp.com",
  databaseURL: "https://crowndb-c5b35.firebaseio.com",
  projectId: "crowndb-c5b35",
  storageBucket: "crowndb-c5b35.appspot.com",
  messagingSenderId: "530255691782",
  appId: "1:530255691782:web:848d781a24d93ca1848387",
  measurementId: "G-H918PPP17S"
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
