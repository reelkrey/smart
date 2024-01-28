<script setup lang="ts">
import type { IUser } from '@/common/types/user'
import { useUserStore } from '@/stores/user'
import { useDetailsModalStore } from '@/stores/detailsModal'

type Props = {
  users: IUser[]
}
defineProps<Props>()

const { deleteUser: deleteUserHandler } = useUserStore()
const detailsModalStore = useDetailsModalStore()

function deleteUser(userId: number) {
  deleteUserHandler(userId)
}
</script>

<template>
  <li class="user__item" v-for="user in users" :key="user.id">
    <div class="user__item-inner">
      <span class="user__avatar">
        <img class="user__avatar-image" :src="user.avatar" :alt="user.first_name" />
      </span>
    </div>
    <div class="user__item-inner details">
      <span class="user__name" @click="detailsModalStore.openModal(user)">{{
        user.first_name
      }}</span>
      <span class="user__email">{{ user.email }}</span>
    </div>
    <div class="user__item-inner button">
      <button class="user__button" @click="deleteUser(user.id)">✖</button>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.user {
  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 5px 10px;
    border-radius: 1000px;
    border: 1px solid #b6b6b6;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.01);
    }
  }

  &__avatar {
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 40px;

    &-image {
      border-radius: 50%;
    }

    @media (max-width: 500px) {
      margin-right: 10px;
    }
  }

  &__email {
    color: #a8a8a8;
  }

  &__item-inner {
    &.button {
      margin-left: auto;
      margin-right: 20px;
    }

    &.details {
      display: flex;
      flex-direction: column;
    }
  }

  &__name {
    max-width: max-content;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  &__button {
    &:hover {
      transform: scale(1.5);
    }
  }
}
</style>
