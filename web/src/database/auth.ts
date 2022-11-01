import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";
import { firebaseAuth } from "../database/firebaseConfig";
import { LoginInterface } from "../helpers/interfaces";

export function auth(login: LoginInterface) {
  return createUserWithEmailAndPassword(
    firebaseAuth,
    login.email,
    login.senha
  ).then((userCredential: any) => {
    const user = userCredential;
  });
}

export function logout() {
  return signOut(firebaseAuth);
}

export function login(login: LoginInterface) {
  return signInWithEmailAndPassword(firebaseAuth, login.email, login.senha);
}

export function resetPassword(email: any) {
  return sendPasswordResetEmail(firebaseAuth, email);
}
