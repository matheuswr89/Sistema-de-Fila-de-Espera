import {
  addDoc,
  collection,
  deleteDoc,
  DocumentData,
  DocumentReference,
  getDocs,
  orderBy,
  OrderByDirection,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestore } from "../database/firebaseConfig";

export async function save(value: any, doc: string) {
  return addDoc(collection(firestore, doc), {
    ...value,
    timestamp: Math.floor(Date.now() / 1000),
  });
}

export async function getLastQueue(order: OrderByDirection, tipo: number) {
  const q =
    tipo === 0
      ? query(
          collection(firestore, "senhas"),
          where("sendoAtendido", "==", false),
          orderBy("timestamp", order)
        )
      : query(collection(firestore, "senhas"), orderBy("timestamp", order));
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
