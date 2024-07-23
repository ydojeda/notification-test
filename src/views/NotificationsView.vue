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

// list of notification objects
const notifications = ref<NotificationInfo[]>([])
// display error or empty
const message = ref('')
// for fetching notifications
const isLoading = ref(true)

// call endpoint for list of notifications
const fetchData = async () => {
  const data = await getNotifications()
  notifications.value = data.data
  // assign message if empty or in
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
