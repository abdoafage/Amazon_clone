// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCSiLKfitsqXXvwPWaiY48kTigwrd0K8NU",
    authDomain: "clone-ded9f.firebaseapp.com",
    databaseURL: "https://clone-ded9f.firebaseio.com",
    projectId: "clone-ded9f",
    storageBucket: "clone-ded9f.appspot.com",
    messagingSenderId: "19083556429",
    appId: "1:19083556429:web:59a3c18572af0ad8a28e04",
    measurementId: "G-P23NGF45Z0"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
  
export {db,auth};