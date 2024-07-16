<template>
  <div class="nav-container">
    <RouterLink class="nav-item" :to="'/home'">Home</RouterLink>
    <RouterLink class="nav-item" :to="'/'">Notifications</RouterLink>
    <div class="nav-item">Logout</div>
  </div>
</template>

<style scoped lang="less">
@import 'src/assets/main';

// Colors
@footer-background-color: #2f384c;
@footer-active-text-color: #9899af;

.nav-container {
  background-color: @footer-background-color;
  height: @footer-height-dim;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1;
}

.nav-item {
  flex: 1;
  text-align: center;
  color: #ffff;
  font-size: @font-size-m;
  &.router-link-active {
    color: @footer-active-text-color;
  }
}
</style>
