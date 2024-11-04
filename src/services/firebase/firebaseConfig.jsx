// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import getfirestore from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOixsLUqTZpt6vJaKVphxtEAQpqqF-7Vc",
  authDomain: "ecommerce-95f21.firebaseapp.com",
  projectId: "ecommerce-95f21",
  storageBucket: "ecommerce-95f21.firebasestorage.app",
  messagingSenderId: "592224959493",
  appId: "1:592224959493:web:45d5f9b8c6c3dd43c3706c",
  measurementId: "G-59R6LF1BWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getfirestore(app);