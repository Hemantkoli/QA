// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy30zHjiQNmBsNyhxj1tKsR0kRRzyYbe0",
  authDomain: "qa-site-aad05.firebaseapp.com",
  projectId: "qa-site-aad05",
  storageBucket: "qa-site-aad05.appspot.com",
  messagingSenderId: "1006017428606",
  appId: "1:1006017428606:web:63d2f078b06a2e514a6c2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
