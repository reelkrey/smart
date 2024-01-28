import type { Fetch } from '@/interfaces/fetch'
import type { User } from '@/interfaces/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/services/api'

export const useUserStore = defineStore('users', () => {
  const users = ref<User[] | []>([])
  const loading = ref(true)

  async function getUsers() {
    try {
      const response = await api.get<Fetch>('/users')
      users.value = response.data.data
      loading.value = false
    } catch (error) {
      console.log(error)
    }
  }

  async function addUser(user: User) {
    try {
      await api.post('/users', {
        name: user.first_name,
        job: 'web developer'
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteUser(userId: number) {
    try {
      await api.delete(`/users/${userId}`)
    } catch (error) {
      console.log(error)
    }
  }

  function searchUser(searchParams: string) {
    users.value = users.value.filter((user) => user.first_name.indexOf(searchParams) !== -1)
  }

  return {
    users,
    loading,
    getUsers,
    addUser,
    deleteUser,
    searchUser
  }
})
