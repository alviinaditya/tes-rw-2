<template>
  <div class="loading-screen">
    <Loader size="40px" variant="primary" />
  </div>
</template>

<script setup>
import Loader from "./ui/Loader.vue";
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-soft);
  z-index: 1;
}
</style>
