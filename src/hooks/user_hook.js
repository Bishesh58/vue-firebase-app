import { ref, onUnmounted } from "vue";
import { db } from "../firebase/index";
import {
  getDoc,
  doc,
  collection,
  addDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";

//get ref 'users' collection
const usersCollection = collection(db, "users");

//add new user to the collection
export const createUser = async (user) => {
  const newUser = await addDoc(usersCollection, user);
  return newUser;
};

//get user if exist in the collection
export const getUser = async (id) => {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
};

//update user
export const updateUser = (id, user) => {
  const docRef = doc(db, "users", id);
  return updateDoc(docRef, user);
};
//delete user
export const deleteUser = (id) => {
  const docRef = doc(db, "users", id);
  return deleteDoc(docRef);
};

// watch if update and return changes
export const useLoadUsers = () => {
  const users = ref([]);

  const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
    users.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
  onUnmounted(unsubscribe);
  return users;

  //handling listerner--> unsubscribe for detach a listerner
  // const unsubscribe = onSnapshot(
  //     collection(db, "cities"),
  //     (snapshot) => {
  //       // ...
  //     },
  //     (error) => {
  //       // ...
  //     });
  //unsubscribe();
};
