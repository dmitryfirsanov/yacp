<script setup lang="ts">
defineProps<{
    text: string
}>()
</script>

<template>
    <div class="page-header">
        <h1>{{ text }}</h1>
    </div>
</template>

<style lang="scss">
.page-header {
    margin-bottom: 20px;
}
</style>
