<template>
  <div class="navbar">
    <div class="navbar-items">
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/data">List Data</router-link>
      <router-link to="/categories">Categories</router-link>
      <router-link to="/qa">QA</router-link>
    </div>
    <Button @click="handleLogout" variant="secondary">Logout</Button>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import Button from "./ui/Button.vue";
const store = useAuthStore();
const router = useRouter();
const handleLogout = () => {
  store.logout();
  router.push({ name: "login" });
};
</script>
<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-primary);
  color: var(--color-primary-text);
  padding: 0.5rem 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  z-index: 50;
}
.navbar-items {
  display: flex;
  gap: 1rem;
}
.navbar-items > a {
  text-decoration: none;
  color: var(--color-background-soft);
}
.navbar-items > a:hover {
  color: var(--color-primary-text);
}
.navbar-items > a.router-link-active {
  font-weight: 600;
  color: var(--color-primary-text);
}
</style>
