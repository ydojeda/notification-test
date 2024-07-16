<template>
  <div>
    <div class="page-header-container">Notifications</div>
    <div class="page-content-container" v-if="!isLoading">
      <p class="empty-state" v-if="!notifications.length">No notifications to show.</p>
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
import NotificationCard from '@/components/NotificationCard.vue'
import { getNotifications, type NotificationInfo } from '@/api/notifications'
import { ref } from 'vue'

const notifications = ref<NotificationInfo[]>([])
const isLoading = ref(true)

const fetchData = async () => {
  const data = await getNotifications()
  console.log('Hello', data)
  notifications.value = data
  isLoading.value = false
}

fetchData()
</script>

<style scoped lang="less">
@import 'src/assets/main';

.empty-state {
  padding: @spacing-m;
}
</style>
