<script setup lang="ts">
import { useModalStore } from '@/stores/modal'
import { computed } from 'vue'

const modalStore = useModalStore()
const user = computed(() => modalStore.user)
</script>

<template>
  <div class="user__details">
    <div class="user__details-wrapper">
      <div class="user__details-inner">
        <div class="user__details-avatar">
          <img class="user__details-avatar__image" :src="user?.avatar" alt="User image" />
        </div>
      </div>
      <div class="user__details-inner">
        <h3 class="user__details-header">Персональная информация</h3>
        <span class="user__details-info name">{{ `${user?.first_name} ${user?.last_name}` }}</span>
        <span class="user__details-info">{{ user?.email }} </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user {
  &__details-wrapper {
    display: flex;
    gap: 40px;
  }

  &__details-header {
    margin-bottom: 20px;
    color: #b6b6b6;
    white-space: nowrap;
    font-size: 24px;
  }

  &__details-avatar {
    width: 130px;
    height: 130px;
  }

  &__details-avatar__image {
    border-radius: 50%;
  }

  &__details-info {
    margin-bottom: 10px;
    display: block;

    &.name {
      font-weight: 600;
    }
  }

  &__details-button {
    position: absolute;
    right: 5%;
    top: 10%;

    &:hover {
      transform: scale(1.5);
    }
  }
}
</style>
