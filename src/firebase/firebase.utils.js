import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBA0RxCPzTlL0O1bjNWJvWKvUmFPz4amIY",
  authDomain: "xtrend-store.firebaseapp.com",
  databaseURL: "https://xtrend-store.firebaseio.com",
  projectId: "xtrend-store",
  storageBucket: "xtrend-store.appspot.com",
  messagingSenderId: "879522357020",
  appId: "1:879522357020:web:c9c6e350d7124adf2be4d9",
  measurementId: "G-T4VC60P7EN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;