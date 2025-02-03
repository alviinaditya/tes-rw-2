<template>
  <main class="center">
    <LoadingScreen v-if="isCheckingAuth" />
    <Card v-else>
      <template #header>
        <h1 class="heading-text">Login</h1>
      </template>
      <form @submit.prevent="handleLogin" class="form-group">
        <Input
          id="email"
          label="Email"
          type="email"
          autocomplete="email"
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
import { apiUrls } from "@/api/index.js";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Button from "@/components/ui/Button.vue";
import Card from "@/components/ui/Card.vue";
import Input from "@/components/ui/Input.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
import useFetch from "@/composables/useFetch";
import { useToastStore } from "@/stores/toast";

const { isLoading, response, error, fetchData } = useFetch();
const router = useRouter();
const store = useAuthStore();
const toastStore = useToastStore();
const isCheckingAuth = ref(true);
const request = ref({
  username: "",
  password: "",
});

const handleLogin = async () => {
  await fetchData("POST", apiUrls.login(), request.value).then(() => {
    store.setToken(response.value.token);
    router.push({ name: "dashboard" });
  });

  if (error.value) {
    toastStore.addToast(error.value, "error");
  }
};

onMounted(() => {
  if (store.isAuthenticated) {
    router.push({ name: "departments" });
  }
  isCheckingAuth.value = false;
});
</script>
<style scoped>
.heading-text {
  text-align: center;
  font-size: 1.5rem;
}
</style>
