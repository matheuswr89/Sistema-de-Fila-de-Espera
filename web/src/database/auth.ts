import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { firebaseAuth, firestore } from "../database/firebaseConfig";
import { LoginInterface } from "../helpers/interfaces";

export function auth(login: LoginInterface) {
  return createUserWithEmailAndPassword(
    firebaseAuth,
    login.email,
    login.senha
  ).then((userCredential: UserCredential) => {
    saveUser(userCredential, login.name + "");
  });
}

export function logoutFirebase() {
  return signOut(firebaseAuth);
}

export function loginFirebase(login: LoginInterface) {
  return signInWithEmailAndPassword(firebaseAuth, login.email, login.senha);
}

export function resetPassword(email: string) {
  return sendPasswordResetEmail(firebaseAuth, email);
}

function saveUser(user: UserCredential, name: string) {
  return addDoc(collection(firestore, `user`), {
    id: user.user.uid,
    type: "user",
    name,
  });
}

export async function getUserInfo(uid: string) {
  const q = query(collection(firestore, "user"), where("id", "==", uid));

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.at(0)?.get("type");
}
