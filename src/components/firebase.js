import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0SXbbo14wGDKI13AadVp10jRXCycIisg",
  authDomain: "clone-dfce5.firebaseapp.com",
  projectId: "clone-dfce5",
  storageBucket: "clone-dfce5.appspot.com",
  messagingSenderId: "290239314934",
  appId: "1:290239314934:web:e62788eb60e32157e9e5d7",
  measurementId: "G-XC4JLFC654"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db =firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db, auth};