<script setup lang="ts">
import type { IUser } from '@/common/types/user'
import User from '@/components/users/User.vue'

type Props = {
  users: IUser[]
}
defineProps<Props>()
</script>

<template>
  <ul>
    <User :users="users" />
  </ul>
</template>
