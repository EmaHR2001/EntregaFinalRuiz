// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCnAEwu03P1NtdDtGQxAmCEpitIfj-e_Go",
  authDomain: "librery-storage.firebaseapp.com",
  projectId: "librery-storage",
  storageBucket: "librery-storage.appspot.com",
  messagingSenderId: "685353331088",
  appId: "1:685353331088:web:7485d60cc630dd3147eb15",
  measurementId: "G-TCNH7C8PYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()