<script setup lang="ts">
import { ref } from 'vue';

const navLinks = [
  {
    label: 'Каталог',
    to: '/catalog',
  },
  {
    label: 'Тесты',
    to: '/tests',
  },
];

const themeActionIcon = ref('pi pi-sun');

const isMenuOpen = ref();

function toggleUserMenu(event: Event) {
  isMenuOpen.value.toggle(event);
}

function toggleTheme() {
  document.documentElement.classList.toggle('dark-mode');

  if (document.documentElement.classList.contains('dark-mode')) {
    themeActionIcon.value = 'pi pi-moon';
  } else {
    themeActionIcon.value = 'pi pi-sun';
  }
}
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <Button
        label="yacp"
        text
        size="large"
      />
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
        class="header__action"
        @click="toggleTheme"
        :icon="themeActionIcon"
        outlined
        rounded
      />
      <div class="header__action header__action--user">
        <Button
          icon="pi pi-user"
          @click="toggleUserMenu"
          outlined
          rounded
        />

        <Popover ref="isMenuOpen">
          <div class="header__action-menu">
            <Button
              label="Профиль"
              icon="pi pi-user"
              text
            />
            <Button
              label="Выйти"
              icon="pi pi-sign-out"
              text
            />
          </div>
        </Popover>
      </div>
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
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  &__action-menu {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    .p-button {
      justify-content: flex-start;
      gap: 0.5rem;
    }
  }
}
</style>
