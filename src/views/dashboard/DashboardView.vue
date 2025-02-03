<template>
  <header>
    <Navbar />
  </header>
  <main class="layout">
    <RouterView v-slot="{ Component }">
      <Transition mode="out-in" name="fade">
        <Suspense timeout="0">
          <component :is="Component" />
          <template #fallback>
            <LoadingScreen />
          </template>
        </Suspense>
      </Transition>
    </RouterView>
  </main>
</template>
<script setup>
import LoadingScreen from "@/components/LoadingScreen.vue";
import Navbar from "@/components/Navbar.vue";
import { RouterView } from "vue-router";
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
