<script setup lang="ts">
import { useFormStore } from '@/stores/form'
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'

const { setIsActive } = useFormStore()
const { searchUser } = useUserStore()
const searchParams = ref('')
</script>

<template>
  <header class="header">
    <span class="header__logo">smart</span>
    <input
      class="header__input"
      type="text"
      placeholder="Поиск по имени"
      v-model="searchParams"
      @input="searchUser(searchParams)"
    />
    <button class="header__button" @click="setIsActive">Добавить пользователя +</button>
    {{ searchParams }}
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 90px;
  margin-bottom: 40px;
}

.header__logo {
  font-size: 42px;
}

.header__input {
  padding: 15px 25px;
  border-radius: 30px;
  border: 1px solid #b6b6b6;
}

.header__button {
  white-space: nowrap;
  color: #fff;
  border-radius: 30px;
  background: #303030;
  padding: 12px 25px;
}
</style>
