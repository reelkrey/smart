<script setup lang="ts">
import { useUsersStore } from '@/stores/users'
import { onMounted } from 'vue'

const { users, getUsers, isLoading } = useUsersStore()

onMounted(async () => {
  await getUsers()
})
</script>

<template>
  <main>
    <div v-if="isLoading">hello</div>
    <div v-else>
      <ul>
        <li v-for="user in users" :key="user.id">
          <span>{{ user.first_name }}</span>
        </li>
      </ul>
    </div>
  </main>
</template>
