<script setup lang="ts">
import type { User } from '@/interfaces/user'
import User from '@/components/users/User.vue'

interface Props {
  users: User[]
}
defineProps<Props>()
</script>

<template>
  <ul>
    <User :users="users" />
  </ul>
</template>
