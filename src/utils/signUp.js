import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";

export const firebaseSignUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return [user?.accessToken, null];
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return [null, errorCode + ": " + errorMessage];
  }
};
