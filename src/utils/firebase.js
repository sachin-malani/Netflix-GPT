// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlmiodQITAnc3TMITgW1eiaSs6MMzIvxc",
  authDomain: "netflix-86b6d.firebaseapp.com",
  projectId: "netflix-86b6d",
  storageBucket: "netflix-86b6d.appspot.com",
  messagingSenderId: "563481113863",
  appId: "1:563481113863:web:b1f88958381344f0f841a2",
  measurementId: "G-T1T8M9SZ24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();