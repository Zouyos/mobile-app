// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRivPr7WGSQfqRTrs4TmW_oB9tWlN-2TA",
  authDomain: "mobileapp0909.firebaseapp.com",
  projectId: "mobileapp0909",
  storageBucket: "mobileapp0909.appspot.com",
  messagingSenderId: "597449057287",
  appId: "1:597449057287:web:0fb96d5f54093e731ab6a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)