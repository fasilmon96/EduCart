import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANikLq1BQI4tFrekWyJNGsfQOjEDupNng",
    authDomain: "educart-682b9.firebaseapp.com",
    projectId: "educart-682b9",
    storageBucket: "educart-682b9.appspot.com",
    messagingSenderId: "813249689695",
    appId: "1:813249689695:web:12099d0c84f292b8b103ea",
    measurementId: "G-83V6P4XJ1X"
  };

  export default firebase.initializeApp(firebaseConfig)