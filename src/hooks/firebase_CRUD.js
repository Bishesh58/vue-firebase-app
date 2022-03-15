import {ref, onUnmounted} from 'vue'
import {db} from '../firebase/index'


const usersCollection = db.collection('users');

//add new user to the collection
export const createUser = user => {
    return usersCollection.add(user);
}

//get user if exist in the collection
export const getUser = async id =>{
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
}

//update user
export const updateUser = (id, user)=> {
    return usersCollection.doc(id).update(user)
}
//delete user
export const deleteUser = id => {
    return usersCollection.doc(id).delete()
}

// watch if update and return changes
export const useLoadUsers =()=> {
    const users = ref([])
    const close = usersCollection.onSnapshot( snapshot => {
        users.value = snapshot.docs.map(doc => ({
            id: doc.id, ...doc.data()
        }))
        onUnmounted(close)
        return users
    })
}




