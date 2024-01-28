import type { Fetch } from '@/interfaces/fetch'
import type { User } from '@/interfaces/user'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import api from '@/services/api'

export const useUserStore = defineStore('users', () => {
  const usersArray = ref<User[] | []>([])
  const loading = ref(true)
  const users = computed(() => usersArray)
  const isLoading = computed(() => loading)

  async function getUsers() {
    try {
      const response = await api.get<Fetch>('/users')
      usersArray.value = response.data.data
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
    usersArray.value = usersArray.value.filter(
      (user) => user.first_name.indexOf(searchParams) !== -1
    )
  }

  return {
    users,
    getUsers,
    isLoading,
    addUser,
    deleteUser,
    searchUser
  }
})
