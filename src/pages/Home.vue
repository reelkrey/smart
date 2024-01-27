<script setup lang="ts">
import { useUsersStore } from '@/stores/users'
import { onMounted } from 'vue'
import users from '@/components/users/users.vue'

const { users: usersData, getUsers, isLoading } = useUsersStore()

onMounted(async () => {
  await getUsers()
})
</script>

<template>
  <main>
    <div v-if="isLoading">loading...</div>
    <div v-else>
      <users :users="usersData" />
    </div>
  </main>
</template>
