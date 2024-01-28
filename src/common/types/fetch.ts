import type { IUser } from '@/common/types/user'

export interface Fetch {
  page: number
  perPage: number
  total: number
  totalPages: number
  data: IUser[]
}
