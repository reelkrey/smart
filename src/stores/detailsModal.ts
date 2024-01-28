import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IUser } from '@/common/types/user'

export const useDetailsModalStore = defineStore('detailsModal', () => {
  const active = ref(false)
  const user = ref<IUser | null>(null)

  function openModal(userInfo: IUser) {
    active.value = true
    user.value = userInfo
  }

  function closeModal() {
    active.value = false
  }

  return {
    openModal,
    closeModal,
    active,
    user
  }
})
