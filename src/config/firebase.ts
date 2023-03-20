// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0F2fAgPoxl6_EbAySra47R51lGR3_YuM",
  authDomain: "react-blog-ac6d7.firebaseapp.com",
  projectId: "react-blog-ac6d7",
  storageBucket: "react-blog-ac6d7.appspot.com",
  messagingSenderId: "110438200350",
  appId: "1:110438200350:web:64df9a73d40ecd06eb6a0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
