// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blogpost.firebaseapp.com",
  projectId: "mern-blogpost",
  storageBucket: "mern-blogpost.appspot.com",
  messagingSenderId: "692545018555",
  appId: "1:692545018555:web:686689d4fa6534b6d2e79e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);