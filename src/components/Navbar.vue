<template>
  <div>
    <router-link to="/data">List Data</router-link>
    <router-link to="/categories">Kategori</router-link>
    <router-link to="/qa">QA</router-link>
    <button @click="handleLogout">Logout</button>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
const store = useAuthStore();
const router = useRouter();
const handleLogout = () => {
  store.logout();
  router.push({ name: "login" });
};
</script>
<style lang=""></style>
