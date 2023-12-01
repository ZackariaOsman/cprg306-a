import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc } from "firebase/firestore";

const getItems = async (userId) => {
  const itemsQuery = query(collection(db, `users/${userId}/items`));
  const querySnapshot = await getDocs(itemsQuery);
  const items = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  return items;
};

const addItem = async (userId, item) => {
  const itemsCollection = collection(db, `users/${userId}/items`);
  const docRef = await addDoc(itemsCollection, item);
  return docRef.id;
};

export { getItems, addItem };