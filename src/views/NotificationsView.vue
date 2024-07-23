<template>
  <div>
    <div class="page-header-container">Notifications</div>
    <div class="page-content-container" v-if="!isLoading">
      <p class="message-container" v-if="message.length">{{ message }}</p>
      <NotificationCard
        v-for="notification in notifications"
        :key="notification.id"
        :data="notification"
      />
    </div>
    <div class="page-content-container" v-else>Loading...</div>
  </div>
</template>

<script setup lang="ts">
import { getNotifications, type NotificationInfo } from '@/api/notifications'
import NotificationCard from '@/components/NotificationCard.vue'
import { ref } from 'vue'

const notifications = ref<NotificationInfo[]>([])
const message = ref('')
const isLoading = ref(true)

const fetchData = async () => {
  const data = await getNotifications()
  notifications.value = data.data
  const noNotifsMessage = data.data.length ? '' : 'No notifications to show'
  message.value = data.success ? noNotifsMessage : data.message
  isLoading.value = false
}

fetchData()
</script>

<style scoped lang="less">
@import 'src/assets/main';

.message-container {
  padding: @spacing-m;
}
</style>
