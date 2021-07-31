import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBJYCvLfZBWxAwD2i9g_-TjG2h0v21f18U",
  authDomain: "clone-9be6b.firebaseapp.com",
  projectId: "clone-9be6b",
  storageBucket: "clone-9be6b.appspot.com",
  messagingSenderId: "253354145898",
  appId: "1:253354145898:web:62fa40d6c14d0c318c3213",
  measurementId: "G-DD8XRL95D3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth()

export { db, auth }

