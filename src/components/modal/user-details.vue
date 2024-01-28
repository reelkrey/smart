<script setup lang="ts">
import { useModalStore } from '@/stores/modal'

const { isActive, userInfo } = useModalStore()
</script>

<template>
  <div class="user__details" v-if="isActive">
    <div class="user__details-wrapper">
      <div class="user__details-inner">
        <div class="user__details-avatar">
          <img src="../../../public/images/user-photo.svg" alt="User image" />
        </div>
      </div>
      <div class="user__details-inner">
        <h3 class="user__details-header">Персональная информация</h3>
        <span class="user__details-info name">{{
          `${userInfo?.first_name} ${userInfo?.last_name}`
        }}</span>
        <span class="user__details-info">{{ userInfo?.email }} </span>
      </div>
      <div class="user__details-inner">
        <button class="user__details-button">✖</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user__details {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.user__details-wrapper {
  position: relative;
  display: flex;
  gap: 40px;
  padding: 80px 110px;
  border-radius: 20px;
  background-color: #fefefe;
  box-shadow: 3px 4px 20.2px 0px #e8e8e8;
}

.user__details-header {
  margin-bottom: 20px;
  color: #b6b6b6;
  white-space: nowrap;
  font-size: 24px;
}

.user__details-avatar {
  width: 130px;
  height: 130px;
}

.user__details-info {
  margin-bottom: 10px;
  display: block;

  &.name {
    font-weight: 600;
  }
}

.user__details-button {
  position: absolute;
  right: 5%;
  top: 10%;
}
</style>
