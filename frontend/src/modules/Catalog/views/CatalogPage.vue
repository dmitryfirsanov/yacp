<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

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

const selectedDifficulty = ref()
</script>

<template>
    <div class="catalog">
        <h1 class="catalog__title">Задачи</h1>
        <div class="catalog__content">
            <ul class="catalog__list">
                <li v-for="task in tasks" :key="`task-${task.id}`" class="catalog__item">
                    <RouterLink class="catalog__item-link" :to="`/task/${task.id}`">
                        <h3 class="catalog__item-title">{{ task.name }}</h3>
                        <p
                            :class="[
                                'catalog__item-difficulty',
                                `catalog__item-difficulty--${task.difficulty}`,
                            ]"
                        >
                            {{ task.difficulty }}
                        </p>
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div class="catalog__sidebar">
            <div class="catalog__sidebar-input">
                <InputText placeholder="Введите название задачи" size="large" fluid />
                <Button icon="pi pi-search" text />
            </div>

            <Select
                v-model="selectedDifficulty"
                :options="['Лёгкая', 'Средняя', 'Сложная']"
                placeholder="Выберите сложность"
            />
        </div>
    </div>
</template>

<style lang="scss">
.catalog {
    display: grid;
    gap: 16px;
    grid-template-columns: 2fr 1fr;

    width: 1320px;
    margin: 40px auto 0;

    &__title {
        grid-column: 1/3;
    }

    &__list {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    &__item {
        &-link {
            display: block;
            margin-bottom: 16px;
            padding: 24px 32px;
            box-sizing: border-box;
            background-color: var(--card);
            border-radius: 16px;
            color: var(--black);

            &:hover {
                background-color: var(--card-hover);
            }
        }

        &-title {
            margin-bottom: 6px;
        }

        &-difficulty {
            &--easy {
                color: var(--p-green-500);
            }

            &--medium {
                color: var(--p-orange-500);
            }

            &--hard {
                color: var(--p-red-500);
            }
        }
    }

    &__sidebar {
        display: flex;
        flex-direction: column;
        gap: 8px;

        &-input {
            position: relative;

            input {
                padding: 10px 44px 10px 16px;
            }

            button {
                position: absolute;
                top: 50%;
                right: 0.4rem;
                transform: translateY(-50%);
            }
        }

        .p-select-label {
            padding: 10px 0px 10px 16px;
            font-size: var(--p-inputtext-lg-font-size);
        }

        .p-select-dropdown {
            padding-right: 10px;
        }
    }
}
</style>
