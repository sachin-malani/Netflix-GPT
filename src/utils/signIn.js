import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const firebaseSignIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return [user?.accessToken, null];
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return [null, errorCode + ": " + errorMessage];
  }
};