<script setup lang="ts">
import { useDetailsModalStore } from '@/stores/detailsModal'
import { useCreateModalStore } from '@/stores/createModal'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

type Props = {
  modalActive: boolean
  modalType: string
}
defineProps<Props>()

const detailsModalStore = useDetailsModalStore()
const createModalStore = useCreateModalStore()
const target = ref(null)

onClickOutside(target, createModalStore.closeModal)
onClickOutside(target, detailsModalStore.closeModal)
</script>

<template>
  <div class="overlay" v-if="modalActive">
    <div class="modal" ref="target">
      <div class="modal__wrapper">
        <slot></slot>

        <button
          v-if="modalType === 'details'"
          class="modal__button"
          @click="detailsModalStore.closeModal"
        >
          ✖
        </button>
        <button
          v-if="modalType === 'create'"
          class="modal__button"
          @click="createModalStore.closeModal"
        >
          ✖
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;

  &__wrapper {
    position: relative;
    padding: 80px 110px;
    border-radius: 20px;
    background-color: #fefefe;
    box-shadow: 3px 4px 20.2px 0px #e8e8e8;
  }

  &__button {
    position: absolute;
    right: 20px;
    top: 20px;
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
