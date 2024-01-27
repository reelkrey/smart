<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { onMounted } from 'vue'
import type { User } from '@/interfaces/user'
import users from '@/components/users/users.vue'
import addForm from '@/components/form/add-form.vue'

const { users: usersData, getUsers, isLoading, addUser: addUserHandler } = useUserStore()

function addUser(user: User): void {
  addUserHandler(user)
}

onMounted(async () => {
  await getUsers()
})
</script>

<template>
  <main>
    <div v-if="isLoading">loading...</div>
    <div v-else>
      <add-form @add-user="addUser" />
      <users :users="usersData" />
    </div>
  </main>
</template>
