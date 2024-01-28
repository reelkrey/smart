<script setup lang="ts">
import { useModalStore } from '@/stores/modal'
import { computed } from 'vue'

const store = useModalStore()
const active = computed(() => store.active)
const user = computed(() => store.user)
</script>

<template>
  <div class="overlay" v-if="active">
    <div class="user__details">
      <div class="user__details-wrapper">
        <div class="user__details-inner">
          <div class="user__details-avatar">
            <img :src="user?.avatar" alt="User image" />
          </div>
        </div>
        <div class="user__details-inner">
          <h3 class="user__details-header">Персональная информация</h3>
          <span class="user__details-info name">{{
            `${user?.first_name} ${user?.last_name}`
          }}</span>
          <span class="user__details-info">{{ user?.email }} </span>
        </div>
        <div class="user__details-inner" v-if="user">
          <button class="user__details-button" @click="store.setIsActive(user)">✖</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user {
  &__details {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__details-wrapper {
    position: relative;
    display: flex;
    gap: 40px;
    padding: 80px 110px;
    border-radius: 20px;
    background-color: #fefefe;
    box-shadow: 3px 4px 20.2px 0px #e8e8e8;
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

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
</style>
