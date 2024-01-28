<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>

<template>
  <input class="input" type="text" placeholder="Поиск по имени" v-model="userStore.searchParams" />
</template>

<style lang="scss" scoped>
.input {
  padding: 15px 25px;
  border-radius: 30px;
  border: 1px solid #b6b6b6;
  min-width: 300px;

  &::placeholder {
    color: #a8a8a8;
  }
}
</style>
