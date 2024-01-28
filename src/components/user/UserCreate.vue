<script setup lang="ts">
import type { IUser } from '@/common/types/user'
import { useModalStore } from '@/stores/modal'
import { ref } from 'vue'

const modalStore = useModalStore()

const uncorrect = ref(false)
const user: IUser = {
  first_name: '',
  email: '',
  avatar: '',
  id: Date.now(),
  last_name: ''
}
const emit = defineEmits<{
  (e: 'addUser', user: IUser): void
}>()

function addUser() {
  if (user.first_name.length >= 3 && user.email.includes('@')) {
    emit('addUser', user)
    modalStore.closeCreateModal()
    uncorrect.value = false
  } else {
    uncorrect.value = true
  }
}
</script>

<template>
  <div class="form__wrapper">
    <div class="form__inner">
      <div class="form__image">
        <img src="../../../public/images/user-photo.svg" alt="User image" />
      </div>
    </div>
    <div class="form__inner">
      <h2 class="form__header">Добавление пользователя</h2>
      <h3 class="form__subtitle">Персональная информация</h3>
      <form class="form" @submit.prevent="addUser">
        <div class="form__label-inner">
          <label class="form__label" for="name">Введите имя</label>
          <div :class="{ 'form__uncorrect-animation': uncorrect }">
            <input
              class="form__input"
              type="text"
              placeholder="Имя"
              v-model="user.first_name"
              id="name"
            />
            <span class="form__uncorrect" v-if="uncorrect">Минимальная длина 3 символа</span>
          </div>
        </div>
        <div class="form__label-inner">
          <label class="form__label" for="email">Введите электронную почту</label>
          <div :class="{ 'form__uncorrect-animation': uncorrect }">
            <input
              class="form__input"
              :class="{ 'form__input-uncorrect': uncorrect }"
              type="text"
              placeholder="Email"
              v-model="user.email"
              id="email"
            />
            <span class="form__uncorrect" v-if="uncorrect">Email должен содержать символ "@"</span>
          </div>
        </div>
        <div class="form__button-inner">
          <button class="form__button" type="submit">Подтвердить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  &__image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 150px;
    margin-bottom: 20px;

    @media (max-width: 395px) {
      min-width: auto;
    }
  }

  &__header {
    margin-bottom: 30px;
    white-space: nowrap;

    @media (max-width: 395px) {
      font-size: 20px;
    }
  }

  &__subtitle {
    margin-bottom: 20px;
    white-space: nowrap;

    @media (max-width: 395px) {
      font-size: 15px;
    }
  }

  &__label-inner {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    &:nth-child(2) {
      margin-bottom: 50px;
    }
  }

  &__label {
    margin-bottom: 5px;
  }

  &__input {
    border-radius: 200px;
    border: 1px solid #b6b6b6;
    padding: 5px 10px;
  }

  &__button-inner {
    width: 100%;
  }

  &__button {
    display: block;
    white-space: nowrap;
    color: #fff;
    width: 150px;
    margin-left: auto;
    border-radius: 30px;
    background: #303030;
    padding: 12px 25px;
  }

  &__uncorrect-animation {
    position: relative;
    max-width: 250px;
    animation: horizontal-shaking 0.3s 1.5;
  }

  &__uncorrect {
    position: absolute;
    left: 0;
    top: 31px;
    font-size: 12px;
    color: #ff0000;
  }
}

@keyframes horizontal-shaking {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
