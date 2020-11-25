import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD3_zYAYz6cksr1Wg6FRUz-S5Lpb4Mc_RA",
  authDomain: "instagram-clone-mern-25a02.firebaseapp.com",
  databaseURL: "https://instagram-clone-mern-25a02.firebaseio.com",
  projectId: "instagram-clone-mern-25a02",
  storageBucket: "instagram-clone-mern-25a02.appspot.com",
  messagingSenderId: "23688901874",
  appId: "1:23688901874:web:bb75dc4e3c2c24410c0c6b",
  measurementId: "G-BNCHEK4XPP"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
