// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAWkfkLakdoJR3OzJ5dtWeSczI8v8WnXM",
  authDomain: "golden-link-69f12.firebaseapp.com",
  projectId: "golden-link-69f12",
  storageBucket: "golden-link-69f12.appspot.com",
  messagingSenderId: "446825364339",
  appId: "1:446825364339:web:431633896a6548a1e8e306",
  measurementId: "G-RN7XTFM3G9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;
