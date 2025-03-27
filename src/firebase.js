// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5g4lzIERLvB4seaIw2ZsvwSi5QAJUmfA",
  authDomain: "notes-app-2-125a8.firebaseapp.com",
  projectId: "notes-app-2-125a8",
  storageBucket: "notes-app-2-125a8.firebasestorage.app",
  messagingSenderId: "204938756480",
  appId: "1:204938756480:web:076b808da84f869d83c165"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export { auth, googleProvider };