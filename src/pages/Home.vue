<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useDetailsModalStore } from '@/stores/detailsModal'
import { useCreateModalStore } from '@/stores/createModal'
import { computed, onMounted } from 'vue'
import type { IUser } from '@/common/types/user'
import Users from '@/components/user/Users.vue'
import UserCreate from '@/components/user/UserCreate.vue'
import Modal from '@/components/ui/Modal.vue'
import UserDetails from '@/components/user/UserDetails.vue'

const userStore = useUserStore()
const detailsModalStore = useDetailsModalStore()
const createModalStore = useCreateModalStore()
const loading = computed(() => userStore.loading)
const detailsModalActive = computed(() => detailsModalStore.active)
const createModalActive = computed(() => createModalStore.active)

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
    <div v-if="loading">loading...</div>
    <div v-else>
      <Users :users="userStore.filtredUsers" />

      <Modal :modalActive="detailsModalActive" :modalType="'details'">
        <UserDetails></UserDetails>
      </Modal>

      <Modal :modalActive="createModalActive" :modalType="'create'">
        <UserCreate @add-user="addUser" />
      </Modal>
    </div>
  </main>
</template>
