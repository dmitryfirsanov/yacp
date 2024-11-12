<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const handleClick = () => {
  router.push({ name: 'MainPage' });
};
</script>

<template>
  <div class="not-found">
    <h1>Страница не найдена</h1>
    <Button
      label="Вернуться на главную"
      @click="handleClick"
    />
  </div>
</template>

<style lang="scss">
.not-found {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
}
</style>
