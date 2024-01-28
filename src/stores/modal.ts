import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IUser } from '@/common/types/user'

export const useModalStore = defineStore('modal', () => {
  const user = ref<IUser | null>(null)
  const detailsModalActive = ref(false)
  const createModalActive = ref(false)

  function openDetailsModal(userInfo: IUser) {
    detailsModalActive.value = true
    user.value = userInfo
  }

  function openCreateModal() {
    createModalActive.value = true
  }

  function closeDetailsModal() {
    detailsModalActive.value = false
  }

  function closeCreateModal() {
    createModalActive.value = false
  }

  return {
    user,
    detailsModalActive,
    createModalActive,
    openDetailsModal,
    openCreateModal,
    closeDetailsModal,
    closeCreateModal
  }
})
