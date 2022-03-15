<template>
  <h2>user's list</h2>
  <div v-for="{ id, name, email } in users" :key="id">
    <li>{{ name }} {{ email }}</li>
    <router-link :to="`/edit/${id}`">
        <button>Edit</button>
    </router-link>
   
    <button @click="deleteUser(id)">Delete</button>
  </div>
</template>

<script>
import { useLoadUsers, deleteUser } from "../hooks/user_hook";
export default {
  setup() {
    const users = useLoadUsers();
    return { users, deleteUser };
  },
};
</script>

<style></style>
