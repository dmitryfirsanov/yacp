<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import PageSpacing from '@/core/components/spacings/PageSpacing.vue'
import PageHeader from '@/core/components/page/PageHeader.vue'
import TaskCard from '@/modules/Task/components/TaskCard.vue'

const router = useRouter()

const tasks = [
    { id: '1', name: 'Task 1', difficulty: 'easy' },
    { id: '2', name: 'Task 2', difficulty: 'medium' },
    { id: '3', name: 'Task 3', difficulty: 'hard' },
    { id: '4', name: 'Task 4', difficulty: 'easy' },
    { id: '5', name: 'Task 5', difficulty: 'medium' },
    { id: '6', name: 'Task 6', difficulty: 'hard' },
    { id: '7', name: 'Task 7', difficulty: 'easy' },
    { id: '8', name: 'Task 8', difficulty: 'medium' },
    { id: '9', name: 'Task 9', difficulty: 'hard' },
    { id: '10', name: 'Task 10', difficulty: 'easy' },
]

const selectedDifficulty = ref('easy')

const searchValue = ref()

const handleClickOnTask = () => {}
</script>

<template>
    <PageSpacing>
        <div class="catalog-page">
            <PageHeader text="Задачи" />

            <div class="catalog-page__content">
                <div class="catalog-page__list">
                    <TaskCard
                        v-for="task in tasks"
                        :key="task.id"
                        :task="task"
                        @click="handleClickOnTask"
                    />
                </div>

                <div class="catalog-page__sidebar">
                    <IconField>
                        <InputIcon class="pi pi-search" />
                        <InputText
                            v-model="searchValue"
                            class="catalog-page__sidebar-input"
                            placeholder="Поиск"
                            size="large"
                        />
                    </IconField>
                    <Select
                        v-model="selectedDifficulty"
                        :options="['Лёгкая', 'Средняя', 'Сложная']"
                        placeholder="Выберите сложность"
                        size="large"
                    />
                </div>
            </div>
        </div>
    </PageSpacing>
</template>

<style lang="scss">
.catalog-page {
    &__content {
        display: grid;
        gap: 40px;
        grid-template-columns: 3fr 2fr;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    &__sidebar {
        display: flex;
        flex-direction: column;
        gap: 8px;

        &-input {
            width: 100%;
        }
    }
}
</style>
