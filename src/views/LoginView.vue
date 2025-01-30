<script setup>
import { useAuthStore } from "../stores/auth";
import { loginApi } from "../api/index.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useAuthStore();

const request = ref({
  username: "",
  password: "",
});

const handleLogin = async () => {
  try {
    const res = await loginApi(request.value.username, request.value.password);
    const data = await res.json();
    localStorage.setItem("token", data.token);
    store.token = data.token;
    router.push({ name: "dashboard" });
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <main>
    <div>
      <form @submit.prevent="handleLogin">
        <input type="text" v-model="request.username" />
        <input type="password" v-model="request.password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </main>
</template>
