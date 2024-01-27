<script setup lang="ts">
import { useModalStore } from '@/stores/modal'

const { isActive } = useModalStore()
</script>

<template>
  <div v-if="isActive">Info</div>
</template>
