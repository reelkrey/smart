import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Fetch } from '@/interfaces/fetch'
import type { User } from '@/interfaces/user'
import axios from 'axios'

export const useUsersStore = defineStore('users', () => {
  const usersArray = ref<User[] | []>([])
  const loading = ref(true)
  const users = computed(() => usersArray)
  const isLoading = computed(() => loading)

  async function getUsers() {
    try {
      const response = await axios.get<Fetch>('https://reqres.in/api/users')
      usersArray.value = response.data.data
      loading.value = false
    } catch (error) {
      console.log(error)
    }
  }

  return {
    users,
    getUsers,
    isLoading
  }
})
