<template>
  <h3>Add new user</h3>
  <form @submit.prevent="handleSubmit">
    <label for="name">Name: </label>
    <input v-model="formData.name" id="name" type="text" />
    <br />
    <label for="email">Email:</label>
    <input v-model="formData.email" id="email" type="text" />
    <br />
    <button>Add new user</button>
  </form>
</template>

<script>
import { reactive } from "vue";
import { createUser } from "../hooks/user_hook";

export default {
  setup() {
    const formData = reactive({
      name: "",
      email: "",
    });

    const handleSubmit = async () => {
        //create
      await createUser({ ...formData });
      //clean up inputfield
      formData.name = ''
      formData.email = ''
    };
    return { formData, handleSubmit };
  },
};
</script>

<style></style>
