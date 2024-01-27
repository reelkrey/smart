<script setup lang="ts">
import { useModalStore } from '@/stores/modal'

const { isActive, userInfo } = useModalStore()
</script>

<template>
  <div v-if="isActive">Info : {{ userInfo }}</div>
</template>
