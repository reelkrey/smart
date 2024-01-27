import type { Fetch } from '@/interfaces/fetch'
import type { User } from '@/interfaces/user'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'

export const useUserStore = defineStore('users', () => {
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

  async function addUser(user: User) {
    try {
      await axios.post('https://reqres.in/api/users', {
        name: user.first_name,
        job: 'web developer'
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteUser(userId: number) {
    try {
      await axios.delete(`https://reqres.in/api/users/${userId}`)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    users,
    getUsers,
    isLoading,
    addUser,
    deleteUser
  }
})
