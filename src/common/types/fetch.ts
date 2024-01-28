import type { IUser } from '@/common/types/user'

export interface IFetch {
  page: number
  perPage: number
  total: number
  totalPages: number
  data: IUser[]
}
