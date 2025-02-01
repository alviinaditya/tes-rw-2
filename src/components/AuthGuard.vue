<template>
  <header>
    <Navbar />
  </header>
  <main class="layout">
    <LoadingScreen v-if="isLoading" />
    <slot v-else></slot>
  </main>
</template>
<script setup>
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import Navbar from "./Navbar.vue";
import LoadingScreen from "./LoadingScreen.vue";
const store = useAuthStore();
const router = useRouter();

defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
});

onMounted(() => {
  if (!store.isAuthenticated) {
    router.push({ name: "login" });
  }
});
</script>
