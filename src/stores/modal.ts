import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const active = ref(false)
  const isActive = computed(() => active)

  function setIsActive() {
    active.value = !active.value
  }

  return {
    isActive,
    setIsActive
  }
})
