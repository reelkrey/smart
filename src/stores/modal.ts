import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IUser } from '@/common/types/user'

export const useModalStore = defineStore('modal', () => {
  const active = ref(false)
  const user = ref<IUser | null>(null)

  function setIsActive(userInfo: IUser) {
    active.value = !active.value
    user.value = userInfo
  }

  return {
    setIsActive,
    active,
    user
  }
})
