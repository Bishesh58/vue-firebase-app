import { ref, onUnmounted } from "vue";
import { db } from "../firebase/index";
import { collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";

//get ref 'users' collection
const usersCollection = collection(db, "users");

//add new user to the collection
export const createUser = async (user) => {
  const newUser = await addDoc(usersCollection, user);
  return newUser;
};

//get user if exist in the collection
export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

//update user
export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user);
};
//delete user
export const deleteUser = (id) => {
  return usersCollection.doc(id).delete();
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
