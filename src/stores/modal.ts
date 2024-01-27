import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/interfaces/user'

export const useModalStore = defineStore('modal', () => {
  const active = ref(false)
  const user = ref<User | null>(null)
  const isActive = computed(() => active)
  const userInfo = computed(() => user)

  function setIsActive(userInfo: User) {
    active.value = !active.value
    user.value = userInfo
  }

  return {
    isActive,
    setIsActive,
    userInfo
  }
})
