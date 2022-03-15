<template>
  <h3>Edit user..!!</h3>
  <form @submit.prevent="update">
      <input v-model="form.name" type="text">
      <input v-model="form.email" type="text">
      <button type="submit">Update</button>
  </form>
</template>

<script>
import {reactive, computed, onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import { getUser, updateUser } from '../hooks/user_hook'

export default {
    setup(props) {
        const router = useRouter()
        const route = useRoute()
        const userID = computed(() => route.params.id)
        
        const form = reactive({
            name:'',
            email: ''
        })  

        onMounted(async() => {
            const user = await getUser(userID.value)
            form.name = user.name
            form.email = user.email
        })

        const update = async()=> {
            await updateUser(userID.value, {...form})
            router.push('/')
            form.name = ''
            form.email = ''
        }

        return {form, update}
    }

}
</script>

<style>

</style>