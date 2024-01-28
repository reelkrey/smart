import type { IFetch } from '@/common/types/fetch'
import type { IUser } from '@/common/types/user'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import api from '@/services/api'

export const useUserStore = defineStore('users', () => {
  const users = ref<IUser[] | []>([])
  const loading = ref(true)
  const searchParams = ref('')
  const filtredUsers = computed(() => {
    return users.value.filter((user) => user.first_name.toLowerCase().includes(searchParams.value))
  })

  async function getUsers() {
    try {
      const response = await api.get<IFetch>('/users')
      users.value = response.data.data
      loading.value = false
    } catch (error) {
      console.log(error)
    }
  }

  async function addUser(user: IUser) {
    try {
      await api.post('/users', {
        name: user.first_name,
        job: 'web developer'
      })
      users.value = [...users.value, user]
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteUser(userId: number) {
    try {
      await api.delete(`/users/${userId}`)
      users.value = users.value.filter((user) => user.id !== userId)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    users,
    loading,
    getUsers,
    addUser,
    deleteUser,
    searchParams,
    filtredUsers
  }
})
