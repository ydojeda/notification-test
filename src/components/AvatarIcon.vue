<template>
  <div class="avatar-container" :style="{ backgroundColor: avatarColor }">{{ initials }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name: string
}>()

const getInitials = (name: string): string => {
  const names = name.split(' ')
  return (names[0]?.[0] ?? '') + (names[1]?.[0] ?? '')
}

const getBackgroundColor = (name: string): string => {
  const initials = getInitials(name)
  var hash = 0
  for (var idx = 0; idx < initials.length; idx++) {
    // get hash based on unicode
    hash = initials.charCodeAt(idx) + ((hash << 5) - hash)
  }
  // Ensure readability against white background
  return `hsl(${hash % 360}, 50%, 50%)`
}

const initials = computed<string>(() => getInitials(props.name))
const avatarColor = computed<string>(() => getBackgroundColor(props.name))
</script>

<style scoped lang="less">
@import 'src/assets/main';

.avatar-container {
  width: @avatar-dim;
  height: @avatar-dim;
  border-radius: 50%;
  background-color: @light-purple-color;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
