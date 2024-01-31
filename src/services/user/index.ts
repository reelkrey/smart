import type { IFetch } from '@/common/types/fetch'
import type { IUser } from '@/common/types/user'
import api from '@/services/api'

async function getUsers() {
  const response = await api.get<IFetch>('/users')
  return response.data.data
}

async function addUser(user: IUser) {
  await api.post('/users', {
    name: user.first_name,
    job: 'web developer'
  })
}

async function deleteUser(userId: number) {
  await api.delete(`/users/${userId}`)
}

export const userApi = {
  getUsers,
  addUser,
  deleteUser
}
