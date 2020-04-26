import * as firebase from "firebase";
import firestore from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDNrBTn-KlEYCpTzgitr7p16HHkjR_CbiY",
    authDomain: "donaid.firebaseapp.com",
    databaseURL: "https://donaid.firebaseio.com",
    projectId: "donaid",
    storageBucket: "donaid.appspot.com",
    messagingSenderId: "999664663104",
    appId: "1:999664663104:web:1dbc901ac57df7f5e13da5",
    measurementId: "G-ERVC6SJTDX"
  };
  firebase.initializeApp(firebaseConfig);



  export const db = firebase.firestore();
  export default firebase;