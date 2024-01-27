<script setup lang="ts">
import type { User } from '@/interfaces/user'
import { useFormStore } from '@/stores/form'

const { isActive } = useFormStore()
const user: User = {
  first_name: '',
  email: ''
}

const emit = defineEmits<{
  (e: 'addUser', user: User): void
}>()
</script>

<template>
  <div class="form__wrapper" :class="{ active: isActive }">
    <div class="form__inner">
      <img src="../../../public/images/user-photo.svg" alt="User image" />
    </div>
    <div class="form__inner">
      <h2 class="form__header">Добавление пользователя</h2>
      <h3 class="form__subtitle">Персональная информация</h3>
      <form class="form" @submit.prevent="emit('addUser', user)">
        <div class="form__label-inner">
          <label class="form__label" for="name">Введите имя</label>
          <input
            class="form__input"
            type="text"
            placeholder="Имя"
            v-model="user.first_name"
            id="name"
          />
        </div>
        <div class="form__label-inner">
          <label class="form__label" for="email">Введите электронную почту</label>
          <input
            class="form__input"
            type="text"
            placeholder="Email"
            v-model="user.email"
            id="email"
          />
        </div>
        <div class="form__label-inner">
          <label class="form__label" for="email">Введите номер телефона</label>
          <input
            class="form__input"
            type="text"
            placeholder="Email"
            v-model="user.email"
            id="email"
          />
        </div>
        <button class="form__button" type="submit">Подтвердить</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form__wrapper {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  left: 50%;
  transform: translate(-50%, -300%);
  max-width: 700px;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  background-color: #fff;
  transition: all 0.5s;

  &.active {
    transform: translate(-50%, 0%);
  }
}

.form__header {
  margin-bottom: 60px;
}

.form__subtitle {
  margin-bottom: 20px;
}

.form__label-inner {
  display: flex;
  flex-direction: column;
}

.form__label {
  margin-bottom: 5px;
}

.form__input {
  border-radius: 200px;
  border: 1px solid #b6b6b6;
  padding: 5px 10px;
  margin-bottom: 20px;
}

.form__button {
  white-space: nowrap;
  color: #fff;
  border-radius: 30px;
  background: #303030;
  padding: 12px 25px;
}
</style>
