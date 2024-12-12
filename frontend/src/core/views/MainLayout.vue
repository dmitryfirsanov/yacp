<script setup lang="ts">
import { RouterView } from 'vue-router'

import LayoutHeader from '@/core/components/layout/LayoutHeader.vue'
</script>

<template>
    <div class="layout">
        <LayoutHeader />

        <main>
            <RouterView />
        </main>
    </div>
</template>

<style lang="scss"></style>
