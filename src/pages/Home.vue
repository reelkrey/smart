<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { computed, onMounted } from 'vue'
import type { IUser } from '@/common/types/user'
import Users from '@/components/users/Users.vue'
import AddForm from '@/components/form/AddForm.vue'
import UserDetails from '@/components/modal/UserDetails.vue'

const store = useUserStore()
const loading = computed(() => store.loading)

function addUser(user: IUser): void {
  store.addUser(user)
}

onMounted(async () => {
  if (!store.users.length) {
    await store.getUsers()
  }
})
</script>

<template>
  <main>
    <UserDetails />
    <div v-if="loading">loading...</div>
    <div v-else>
      <AddForm @add-user="addUser" />
      <Users :users="store.filtredUsers" />
    </div>
  </main>
</template>
