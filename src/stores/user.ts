import type { IFetch } from '@/common/types/fetch'
import type { IUser } from '@/common/types/user'
import type { IUserForm } from '@/common/types/userForm'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/services/api'

export const useUserStore = defineStore('users', () => {
  const users = ref<IUser[] | []>([])
  const loading = ref(true)

  async function getUsers() {
    try {
      const response = await api.get<IFetch>('/users')
      users.value = response.data.data
      loading.value = false
    } catch (error) {
      console.log(error)
    }
  }

  async function addUser(user: IUserForm) {
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
