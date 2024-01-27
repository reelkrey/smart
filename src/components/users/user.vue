<script setup lang="ts">
import type { User } from '@/interfaces/user'
import { useUserStore } from '@/stores/user'
import { useModalStore } from '@/stores/modal'

interface Props {
  users: User[]
}
defineProps<Props>()

const { deleteUser: deleteUserHandler } = useUserStore()
const { setIsActive } = useModalStore()

function deleteUser(userId: number) {
  deleteUserHandler(userId)
}
</script>

<template>
  <li class="user__item" v-for="user in users" :key="user.id" @click="setIsActive(user)">
    <div class="user__item-inner">
      <span class="user__avatar">
        <img class="user__avatar-image" :src="user.avatar" :alt="user.first_name" />
      </span>
    </div>
    <div class="user__item-inner details">
      <span class="user__name">{{ user.first_name }}</span>
      <span class="user__email">{{ user.email }}</span>
    </div>
    <div class="user__item-inner button">
      <button class="user__button" @click="deleteUser(user.id)">✖</button>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.user__item {
  display: flex;
  align-items: center;
  border-radius: 1000px;
  border: 1px solid #b6b6b6;
  padding: 5px 10px;
}

.user__avatar {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 40px;

  &-image {
    border-radius: 50%;
  }
}

.user__email {
  color: #a8a8a8;
}

.user__item-inner {
  &.button {
    margin-left: auto;
    margin-right: 20px;
  }

  &.details {
    display: flex;
    flex-direction: column;
  }
}
</style>
