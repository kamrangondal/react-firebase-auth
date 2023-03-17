import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBTj0_Ol7sTApUPr2tpXIhZS4gBYeuD_4U",
  authDomain: "custom-validation.firebaseapp.com",
  projectId: "custom-validation",
  storageBucket: "custom-validation.appspot.com",
  messagingSenderId: "564319065220",
  appId: "1:564319065220:web:3b6770950f3e6daaf81ed1",
  measurementId: "G-53H17YRDY4"
});

export default firebaseConfig;