import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
const firebaseConfig = {
  apiKey: "AIzaSyAClJ-nf0gjjdLsIgfyhvkMC9cfqBqC-0k",
  authDomain: "smartisolation-9510e.firebaseapp.com",
  databaseURL: "https://smartisolation-9510e-default-rtdb.firebaseio.com",
  projectId: "smartisolation-9510e",
  storageBucket: "smartisolation-9510e.appspot.com",
  messagingSenderId: "289847315989",
  appId: "1:289847315989:web:2e2b39d7c1ef688605881c",
  measurementId: "G-7VXS87E4V3"
};

  firebase.initializeApp(firebaseConfig);
  export const dataRef = firebase.database();
  export default firebase;