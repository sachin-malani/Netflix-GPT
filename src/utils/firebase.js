import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflixgpt-cb6c6.firebaseapp.com",
  projectId: "netflixgpt-cb6c6",
  storageBucket: "netflixgpt-cb6c6.appspot.com",
  messagingSenderId: "751680801794",
  appId: "1:751680801794:web:8f97aa9d1399351ef42b1b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
