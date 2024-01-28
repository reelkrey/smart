import type { IUserForm } from '@/interfaces/userForm'

export interface IUser extends IUserForm {
  id: number
  last_name: string
  avatar: string
}
