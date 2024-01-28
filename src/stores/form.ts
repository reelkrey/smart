import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', () => {
  const active = ref(false)

  function setIsActive() {
    active.value = !active.value
    console.log()
  }

  return {
    active,
    setIsActive
  }
})
