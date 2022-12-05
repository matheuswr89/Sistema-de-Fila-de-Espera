import {
  addDoc,
  collection,
  deleteDoc,
  DocumentData,
  DocumentReference,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestore } from "../database/firebaseConfig";
import { LastQueue } from "../helpers/interfaces";

export async function save(value: any, doc: string) {
  return addDoc(collection(firestore, doc), {
    ...value,
    timestamp: Math.floor(Date.now() / 1000),
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

export async function getLast(doc: string) {
  const q = query(collection(firestore, doc), orderBy("timestamp", "desc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.at(0);
}

export async function deleteSenha(ref: DocumentReference<DocumentData>) {
  await deleteDoc(ref);
}

export async function updateSenha(doc: DocumentData) {
  await updateDoc(doc.ref, {
    sendoAtendido: true,
  });
}
