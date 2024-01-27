<script setup lang="ts">
import type { User } from '@/interfaces/user'

interface Props {
  users: User[]
}

defineProps<Props>()
</script>

<template>
  <li v-for="user in users" :key="user.id">
    <span>{{ user.first_name }}</span>
    <span>{{ user.email }}</span>
    <span>
      <img :src="user.avatar" :alt="user.first_name" />
    </span>
  </li>
</template>
