<template>
  <div class="card-container" @click="onPressCreateToDo">
    <div v-if="!props.data.read" class="read-indicator-container">
      <div class="read-indicator"></div>
    </div>
    <div class="avatar-container">
      <AvatarIcon :name="props.data.author" />
    </div>
    <div class="info-container">
      <p class="notification-type-text">{{ props.data.title }}</p>
      <p>{{ props.data.preview_text }}</p>
      <div class="info-footer">
        <p>{{ props.data.author }}</p>
        <p>{{ props.data.created }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createToDo, type NotificationInfo } from '@/api/notifications'
import AvatarIcon from './AvatarIcon.vue'
import { ref } from 'vue'

const props = defineProps<{
  data: NotificationInfo
}>()

const isLoadingAction = ref(false)

// creating todo when pressing the card
const onPressCreateToDo = async () => {
  // Don't do anything if to do action is available or if action has already been initiated
  if (isLoadingAction.value || !props.data.available_actions.includes('CREATE_TODO')) {
    return
  }
  isLoadingAction.value = true
  // actionResponse: for potentially handling success or failed creation
  const actionResponse = await createToDo(props.data.id)
  isLoadingAction.value = false
}
</script>

<style scoped lang="less">
@import 'src/assets/main';

@info-footer-text-color: rgba(255, 255, 255, 0.6);
@card-border-color: rgba(255, 255, 255, 0.3);
@read-indicator-size: 4px;

.card-container {
  padding: @spacing-m;
  position: relative;
  display: flex;
  flex-direction: row;
  border-bottom: @border-xs-dim solid @card-border-color;
}
.info-container {
  padding: 0px 0px 0px @spacing-m;
  flex: 1;
}
.notification-type-text {
  font-size: @font-size-xs;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
}
.info-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: @info-footer-text-color;
  font-size: @font-size-xs;
  text-transform: uppercase;
  padding-top: @spacing-m;
}
.avatar-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.read-indicator-container {
  position: absolute;
  top: 0;
  left: @spacing-xs;
  height: 100%;
  display: flex;
  align-items: center;
}
.read-indicator {
  width: @read-indicator-size;
  height: @read-indicator-size;
  border-radius: 50%;
  background-color: @white-color;
}
</style>
