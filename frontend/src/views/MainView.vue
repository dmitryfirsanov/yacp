<script setup lang="ts">
import { RouterView } from 'vue-router';

import PageHeader from '@/components/PageHeader.vue';
</script>

<template>
  <div class="layout">
    <PageHeader />

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss"></style>
