
// import { initializeApp } from "firebase/app"; 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBPsF_5qYv69oqxBU0OwyTRagMw6SmyAu4",
  authDomain: "netflix-clone-9edab.firebaseapp.com",
  projectId: "netflix-clone-9edab",
  storageBucket: "netflix-clone-9edab.appspot.com",
  messagingSenderId: "116736856517",
  appId: "1:116736856517:web:9c1463f107bb85df9dbbac"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };