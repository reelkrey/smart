<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { onMounted } from 'vue'
import type { IUser } from '@/interfaces/user'
import Users from '@/components/Users/Users.vue'
import AddForm from '@/components/form/AddForm.vue'
import UserDetails from '@/components/modal/UserDetails.vue'

const { users: usersData, getUsers, isLoading, addUser: addUserHandler } = useUserStore()

function addUser(user: IUser): void {
  addUserHandler(user)
}

onMounted(async () => {
  await getUsers()
})
</script>

<template>
  <main>
    <UserDetails />
    <div v-if="isLoading">loading...</div>
    <div v-else>
      <AddForm @add-user="addUser" />
      <Users :users="usersData" />
    </div>
  </main>
</template>
