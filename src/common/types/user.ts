import type { IUserForm } from '@/common/types/userForm'

export interface IUser extends IUserForm {
  id: number
  last_name: string
  avatar: string
}
