// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {Firestore, getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBChZY4DZAYpCqGAJxpDbJ8o_bSjqFCgYY",
  authDomain: "election-platform-6a1f6.firebaseapp.com",
  databaseURL: "https://election-platform-6a1f6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "election-platform-6a1f6",
  storageBucket: "election-platform-6a1f6.appspot.com",
  messagingSenderId: "853121562737",
  appId: "1:853121562737:web:4a427d05da795efa8643d0",
  measurementId: "G-YFCKJ6S30N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);


  export { db, auth, analytics };