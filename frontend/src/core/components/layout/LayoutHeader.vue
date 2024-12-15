<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const navLinks = [
    {
        label: 'Каталог',
        to: '/catalog',
    },
    {
        label: 'Тесты',
        to: '/tests',
    },
]

const isMenuOpen = ref()

const menuItems = ref([
    {
        label: 'Профиль',
        icon: 'pi pi-user',
        command: handleProfile,
    },
    {
        label: 'Выйти',
        icon: 'pi pi-sign-out',
        command: handleLogout,
    },
])

const toggleMenu = (event?: Event) => {
    isMenuOpen.value.toggle(event)
}

function handleProfile() {
    router.push({ name: 'ProfilePage' })

    toggleMenu()
}

function handleLogout() {
    toggleMenu()
}
</script>

<template>
    <header class="header">
        <div class="header__logo">
            <Button label="yacp" text size="large" />
        </div>
        <nav class="header__nav">
            <Button
                v-for="link in navLinks"
                :key="link.to"
                as="router-link"
                :to="link.to"
                :label="link.label"
                link
            />
        </nav>
        <div class="header__actions">
            <Button
                icon="pi pi-user"
                outlined
                rounded
                aria-haspopup="true"
                aria-controls="overlay_menu"
                @click="toggleMenu"
            />

            <Menu id="overlay_menu" ref="isMenuOpen" :model="menuItems" :popup="true"></Menu>
        </div>
    </header>
</template>

<style lang="scss">
.header {
    height: 4rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    width: 100%;
    padding: 0 8rem;

    &__actions {
        margin-left: auto;
    }
}
</style>
