import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCreateModalStore = defineStore('createModal', () => {
  const active = ref(false)

  function openModal() {
    active.value = true
  }

  function closeModal() {
    active.value = false
  }

  return {
    openModal,
    closeModal,
    active
  }
})
