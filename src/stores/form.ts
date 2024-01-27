import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', () => {
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
