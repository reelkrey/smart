import type { User } from '@/interfaces/user'

export interface Fetch {
  page: number
  perPage: number
  total: number
  totalPages: number
  data: User[]
}
