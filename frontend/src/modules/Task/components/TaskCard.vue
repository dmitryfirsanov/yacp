<script setup lang="ts">
import { formatDifficulty } from '@/helpers/formatting'

defineProps<{
    task: {
        id: string
        name: string
        difficulty: string
    }
}>()
</script>

<template>
    <Card class="task">
        <template #content>
            <h3 class="task__name">{{ task.name }}</h3>
            <p :class="['task__difficulty', `task__difficulty--${task.difficulty}`]">
                {{ formatDifficulty(task.difficulty) }}
            </p>
        </template>
    </Card>
</template>

<style lang="scss">
.task {
    padding: 0 20px;
    overflow: hidden;
    cursor: pointer;

    &:hover {
        background: var(--p-content-hover-background);
    }

    &__name {
        margin-bottom: 12px;
    }

    &__difficulty {
        &--easy {
            color: var(--p-green-500);
        }
        &--medium {
            color: var(--p-amber-500);
        }
        &--hard {
            color: var(--p-red-500);
        }
    }
}
</style>
