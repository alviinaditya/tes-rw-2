<template>
  <header>
    <Navbar />
  </header>
  <main class="layout">
    <slot></slot>
  </main>
</template>
<script setup>
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import Navbar from "./Navbar.vue";
const store = useAuthStore();
const router = useRouter();

onMounted(() => {
  if (!store.isAuthenticated) {
    router.push({ name: "login" });
  }
});
</script>
