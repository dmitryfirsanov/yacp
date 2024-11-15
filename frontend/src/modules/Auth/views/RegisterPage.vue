<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const email = ref('')
const password = ref('')
</script>

<template>
    <div class="auth-page">
        <section class="auth-page__section">
            <form class="auth-page__form" @submit.prevent>
                <h1 class="auth-page__header">Регистрация</h1>
                <div class="auth-page__form-field">
                    <label for="username">Никнейм</label>
                    <InputText id="username" v-model="username" placeholder="Ваш никнейм" fluid />
                </div>
                <div class="auth-page__form-field">
                    <label for="email">Email</label>
                    <InputText id="email" v-model="email" placeholder="Ваш email" fluid />
                </div>
                <div class="auth-page__form-field">
                    <label for="password">Пароль</label>
                    <Password
                        v-model="password"
                        input-id="password"
                        placeholder="Ваш пароль"
                        :feedback="false"
                        toggle-mask
                        fluid
                    />
                </div>
                <Button class="auth-page__button" label="Зарегистрироваться" fluid />
            </form>
            <p class="auth-page__info">
                Уже зарегистрированы?
                <Button
                    class="auth-page__button"
                    as="router-link"
                    to="/sign-in"
                    severity="secondary"
                    label="Войти"
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
