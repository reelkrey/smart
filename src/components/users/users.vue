<script setup lang="ts">
import type { User } from '@/interfaces/user'
import user from '@/components/users/user.vue'

interface Props {
  users: User[]
}

defineProps<Props>()
</script>

<template>
  <ul>
    <user :users="users" />
  </ul>
</template>
