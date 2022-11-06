import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../database/firebaseConfig";
import { MessageInterface } from "../helpers/interfaces";

export function saveMessage(dados: MessageInterface) {
  return addDoc(collection(firestore, `messages`), {
    message: dados.message,
    timestamp: Math.floor(Date.now() / 1000),
  });
}
