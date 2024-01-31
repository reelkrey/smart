import type { IUser } from '@/common/types/user'
import { userApi } from '@/services/user'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('users', () => {
  const users = ref<IUser[] | []>([])
  const loading = ref(true)
  const searchParams = ref('')
  const filtredUsers = computed(() => {
    return users.value.filter((user) => user.first_name.toLowerCase().includes(searchParams.value))
  })

  async function getUsers() {
    try {
      users.value = await userApi.getUsers()
      loading.value = false
    } catch (error) {
      console.log(error)
    }
  }

  async function addUser(user: IUser) {
    try {
      await userApi.addUser(user)
      users.value = [...users.value, user]
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteUser(userId: number) {
    try {
      await userApi.deleteUser(userId)
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
