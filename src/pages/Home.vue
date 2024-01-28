<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useModalStore } from '@/stores/modal'
import { computed, onMounted } from 'vue'
import type { IUser } from '@/common/types/user'
import Users from '@/components/users/Users.vue'
import AddForm from '@/components/form/AddForm.vue'
import UserDetails from '@/components/modal/UserDetails.vue'
import Modal from '@/components/ui/Modal.vue'

const userStore = useUserStore()
const modalStore = useModalStore()
const loading = computed(() => userStore.loading)
const active = computed(() => modalStore.active)

function addUser(user: IUser): void {
  userStore.addUser(user)
}

onMounted(async () => {
  if (!userStore.users.length) {
    await userStore.getUsers()
  }
})
</script>

<template>
  <main>
    <UserDetails />
    <div v-if="loading">loading...</div>
    <div v-else>
      <AddForm @add-user="addUser" />
      <Users :users="userStore.filtredUsers" />

      <Modal v-if="active">
        <template v-slot:create>color</template>
      </Modal>
    </div>
  </main>
</template>
