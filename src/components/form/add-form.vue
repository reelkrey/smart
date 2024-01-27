<script setup lang="ts">
import type { User } from '@/interfaces/user'

const user: User = {
  first_name: '',
  email: ''
}

const emit = defineEmits<{
  (e: 'addUser', user: User): void
}>()
</script>

<template>
  <form @submit.prevent="emit('addUser', user)">
    <input type="text" placeholder="Имя" v-model="user.first_name" />
    <input type="text" placeholder="Email" v-model="user.email" />
    <button type="submit">Добавить</button>
  </form>
</template>
