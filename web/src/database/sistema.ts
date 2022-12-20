import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  DocumentReference,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestore } from "../database/firebaseConfig";
import { LastQueue } from "../helpers/interfaces";

export async function save(value: any, doc: string) {
  return addDoc(collection(firestore, doc), {
    ...value,
    timestamp: serverTimestamp(),
  });
}

export async function getLastQueue(options: LastQueue) {
  const q =
    options.tipo === 0
      ? query(
          collection(firestore, "senhas"),
          where("sendoAtendido", "==", false),
          where("type", "==", options.type),
          orderBy("timestamp", options.order)
        )
      : query(
          collection(firestore, "senhas"),
          orderBy("timestamp", options.order)
        );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.at(0);
}

export async function deleteSenha(ref: DocumentReference<DocumentData>) {
  await deleteDoc(ref);
}

export async function updateSenha(doc: DocumentData) {
  await updateDoc(doc.ref, {
    sendoAtendido: true,
    timestampAtendimento: serverTimestamp(),
  });
}

export async function set(docName: string, data: any) {
  const docRef = collection(firestore, docName);
  return await setDoc(doc(docRef, docName), { ...data });
}

export async function get(docName: string) {
  const docRef = doc(firestore, docName, docName);
  return await getDoc(docRef);
}
