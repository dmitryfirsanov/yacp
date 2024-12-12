<script setup lang="ts">
import { ref } from 'vue'

import { formatDate } from '@/helpers/formatting'

import PageSpacing from '@/core/components/spacings/PageSpacing.vue'

// Пример данных для профиля
const profile = ref({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'path/to/avatar.jpg',
})

// Пример данных для последних решений
const recentSolutions = ref([
    { title: 'Two Sum', date: '2023-10-01' },
    { title: 'Reverse Linked List', date: '2023-09-25' },
    // Добавьте больше задач по мере необходимости
])
</script>

<template>
    <PageSpacing>
        <div class="profile-page">
            <section class="profile-page__info">
                <Card>
                    <template #header>
                        <div class="profile-page__info-header">
                            <Avatar
                                :image="profile.avatar"
                                class="profile-page__info-avatar"
                                size="xlarge"
                                shape="circle"
                            />
                            <div class="profile-page__info-details">
                                <h1 class="profile-page__info-name">{{ profile.name }}</h1>
                                <p class="profile-page__info-email">{{ profile.email }}</p>
                            </div>
                        </div>
                    </template>
                </Card>
            </section>

            <section class="profile-page__solutions">
                <Card>
                    <template #title>Решенные задачи</template>
                    <template #content>
                        <div class="profile-page__solutions-list">
                            <div
                                v-for="(solution, index) in recentSolutions"
                                :key="index"
                                class="profile-page__solution"
                            >
                                <h3 class="profile-page__solution-title">
                                    {{ solution.title }}
                                </h3>
                                <p class="profile-page__solution-date">
                                    {{ formatDate(solution.date) }}
                                </p>
                            </div>
                        </div>
                    </template>
                </Card>
            </section>
        </div>
    </PageSpacing>
</template>

<style lang="scss">
.profile-page {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 0;

    &__info {
        &-header {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        &-avatar {
            flex-shrink: 0;
        }

        &-details {
            display: flex;
            flex-direction: column;
        }

        &-name {
            margin: 0;
            font-size: 1.5rem;
        }

        &-email {
            margin: 0;
            color: #666;
        }
    }

    &__solutions {
        &-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }

    &__solution {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;

        &-title {
            margin: 0;
            font-size: 1.2rem;
        }

        &-date {
            margin: 0;
            color: #666;
        }
    }
}
</style>
