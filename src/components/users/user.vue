<script setup lang="ts">
import type { User } from '@/interfaces/user'
import { useUserStore } from '@/stores/user'

interface Props {
  users: User[]
}
defineProps<Props>()

const { deleteUser: deleteUserHandler } = useUserStore()

function deleteUser(userId: number) {
  deleteUserHandler(userId)
}
</script>

<template>
  <li v-for="user in users" :key="user.id">
    <span>{{ user.first_name }}</span>
    <span>{{ user.email }}</span>
    <span>
      <img :src="user.avatar" :alt="user.first_name" />
    </span>
    <button @click="deleteUser(user.id)">delete</button>
  </li>
</template>
