<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
</script>

<template>
    <div class="auth-page">
        <section class="auth-page__section">
            <form class="auth-page__form" @submit.prevent>
                <h1 class="auth-page__header">Вход</h1>
                <div class="auth-page__form-field">
                    <label for="email">Email</label>
                    <InputText id="email" v-model="email" placeholder="mail@mail.ru" fluid />
                </div>
                <div class="auth-page__form-field">
                    <label for="password">
                        Пароль
                        <Button
                            class="auth-page__button"
                            as="router-link"
                            to="/sign-up"
                            severity="secondary"
                            label="Забыли пароль?"
                            link
                        />
                    </label>
                    <Password
                        v-model="password"
                        input-id="password"
                        :feedback="false"
                        toggle-mask
                        fluid
                    />
                </div>
                <Button class="auth-page__button" label="Вход" fluid />
            </form>
            <p class="auth-page__info">
                Еще нет аккаунта?
                <Button
                    class="auth-page__button"
                    as="router-link"
                    to="/sign-up"
                    severity="secondary"
                    label="Зарегистрироваться"
                    link
                />
            </p>
        </section>

        <section class="auth-page__section">
            <img class="auth-page__bg" src="@/assets/images/bg-auth.webp" alt="" />
        </section>
    </div>
</template>

<style lang="scss"></style>
