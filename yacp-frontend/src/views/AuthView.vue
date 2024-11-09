<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="auth-layout">
    <main class="auth-layout__content">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss">
.auth-layout {
  max-width: 100vw;
  min-height: 100vh;

  display: flex;
  padding: 0;
}
</style>
