import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import errorMessage from "./errorMessage";

export const firebaseSignIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return [user?.accessToken, null];
  } catch (error) {
    const errCode = error.code;
    const errMessage = errorMessage(errCode);
    return [null, errMessage];
  }
};