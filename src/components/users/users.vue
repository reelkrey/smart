<script setup lang="ts">
import type { IUser } from '@/interfaces/user'
import User from '@/components/users/User.vue'

interface Props {
  users: IUser[]
}
defineProps<Props>()
</script>

<template>
  <ul>
    <User :users="users" />
  </ul>
</template>
