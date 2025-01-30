<template>
  <main class="center">
    <Card>
      <template #header>
        <h1 class="heading-text">Login</h1>
      </template>
      <form @submit.prevent="handleLogin" class="form-group">
        <Input
          id="username"
          label="Username"
          type="email"
          v-model="request.username"
          placeholder="email@example.com"
        />
        <Input
          id="password"
          label="Password"
          type="password"
          v-model="request.password"
          placeholder="password"
        />
        <Button
          variant="primary"
          type="submit"
          :isLoading="isLoading"
          :disabled="isLoading"
          >Login</Button
        >
      </form>
    </Card>
  </main>
</template>
<script setup>
import { useAuthStore } from "@/stores/auth";
import { loginApi } from "@/api/index.js";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Button from "@/components/ui/Button.vue";
import Card from "@/components/ui/Card.vue";
import Input from "@/components/ui/Input.vue";

const router = useRouter();
const store = useAuthStore();
const isLoading = ref(false);
const request = ref({
  username: "",
  password: "",
});

const handleLogin = async () => {
  isLoading.value = true;
  try {
    const res = await loginApi(request.value.username, request.value.password);
    const data = await res.json();
    localStorage.setItem("token", data.token);
    store.token = data.token;
    router.push({ name: "dashboard" });
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  if (store.isAuthenticated) {
    router.push({ name: "dashboard" });
  }
});
</script>
<style scoped>
.heading-text {
  text-align: center;
  font-size: 1.5rem;
}
</style>
