import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDD1JtfCF7wn5L10cd5w0Lq9jHDtNnvkYQ",
  authDomain: "clone-1cbc8.firebaseapp.com",
  databaseURL: "https://clone-1cbc8.firebaseio.com",
  projectId: "clone-1cbc8",
  storageBucket: "clone-1cbc8.appspot.com",
  messagingSenderId: "849629861567",
  appId: "1:849629861567:web:f35f5812ec0d1b8bca980a",
  measurementId: "G-CM9S5NXKRM"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };