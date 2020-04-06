import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCqF5wIRVtq7CtgH4az8Y-TlHw52J-sn5I",
  authDomain: "movie-app-db-f4e17.firebaseapp.com",
  databaseURL: "https://movie-app-db-f4e17.firebaseio.com",
  projectId: "movie-app-db-f4e17",
  storageBucket: "movie-app-db-f4e17.appspot.com",
  messagingSenderId: "578119396315",
  appId: "1:578119396315:web:c2f6ebf68759f078ef15fe",
  measurementId: "G-MEKMZT3P80"
};

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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
