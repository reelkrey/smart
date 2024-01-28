<script setup lang="ts">
import type { IUserForm } from '@/common/types/userForm'
import { useFormStore } from '@/stores/form'
import { computed, ref } from 'vue'

const store = useFormStore()
const active = computed(() => store.active)
const uncorrect = ref(false)
const user: IUserForm = {
  first_name: '',
  email: ''
}
const emit = defineEmits<{
  (e: 'addUser', user: IUserForm): void
}>()

function addUser() {
  if (user.first_name.length >= 3 && user.email.includes('@')) {
    emit('addUser', user)
    uncorrect.value = false
  } else {
    uncorrect.value = true
  }
}
</script>

<template>
  <div class="form__wrapper" :class="{ active: active }">
    <div class="form__inner">
      <img src="../../../public/images/user-photo.svg" alt="User image" />
    </div>
    <div class="form__inner">
      <h2 class="form__header">Добавление пользователя</h2>
      <h3 class="form__subtitle">Персональная информация</h3>
      <form class="form" @submit.prevent="addUser">
        <div class="form__label-inner">
          <label class="form__label" for="name">Введите имя</label>
          <input
            class="form__input"
            :class="{ 'form__input-uncorrect': uncorrect }"
            type="text"
            placeholder="Имя"
            v-model="user.first_name"
            id="name"
          />
          <span class="form__uncorrect" v-if="uncorrect">Минимальная длина 3 символа</span>
        </div>
        <div class="form__label-inner">
          <label class="form__label" for="email">Введите электронную почту</label>
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
        <button class="form__button" type="submit">Подтвердить</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  &__wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -300%);
    max-width: 700px;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    background-color: #fff;
    transition: all 0.5s;

    &.active {
      transform: translate(-50%, -50%);
    }
  }

  &__header {
    margin-bottom: 60px;
  }

  &__subtitle {
    margin-bottom: 20px;
  }

  &__label-inner {
    position: relative;
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

  &__button {
    white-space: nowrap;
    color: #fff;
    border-radius: 30px;
    background: #303030;
    padding: 12px 25px;
  }

  &__uncorrect {
    position: absolute;
    top: 55px;
    font-size: 12px;
    color: #ff0000;
  }

  &__input-uncorrect {
    animation: horizontal-shaking 0.3s 1.5;
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
