import { computed, ref } from 'vue'

export function useModal() {
  const active = ref(false)
  const isActive = computed(() => active)

  function setIsActive() {
    active.value = true
  }

  return {
    isActive,
    setIsActive
  }
}
