<script setup lang="ts">
import { useModalStore } from '@/stores/modal'
import Search from '../ui/Search.vue'

const modalStore = useModalStore()
</script>

<template>
  <header class="header">
    <span class="header__logo">smart</span>
    <Search />
    <button class="header__button" @click="modalStore.openCreateModal">
      Добавить пользователя +
    </button>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 90px;
  margin-bottom: 40px;

  @media (max-width: 840px) {
    flex-direction: column;
    gap: 10px;
  }

  &__logo {
    font-size: 42px;
  }

  &__button {
    white-space: nowrap;
    color: #fff;
    border-radius: 30px;
    background: #303030;
    padding: 12px 25px;

    @media (max-width: 840px) {
      align-self: flex-end;
    }
  }
}
</style>
