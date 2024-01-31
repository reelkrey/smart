<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useModalStore } from '@/stores/modal'
import { computed, onMounted } from 'vue'
import type { IUser } from '@/common/types/user'

const userStore = useUserStore()
const modalStore = useModalStore()
const loading = computed(() => userStore.loading)
const detailsModalActive = computed(() => modalStore.detailsModalActive)
const createModalActive = computed(() => modalStore.createModalActive)

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
