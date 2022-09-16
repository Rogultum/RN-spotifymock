
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBFzLLt9otiVnevs03H464qGCjkM5tgAic",
  authDomain: "spotifymockrn.firebaseapp.com",
  projectId: "spotifymockrn",
  storageBucket: "spotifymockrn.appspot.com",
  messagingSenderId: "360052113245",
  appId: "1:360052113245:web:a3075acaceb09ecbe8b2b4",
  measurementId: "G-LVCG7F4FBY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


