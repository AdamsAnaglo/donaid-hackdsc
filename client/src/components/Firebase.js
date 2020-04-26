import firebase from firebase;

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
  firebase.initializeApp(config);

  export default firebase;