import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const token = ref(localStorage.getItem("token"));
  const isAuthenticated = computed(() => !!token.value);

  const logout = () => {
    token.value = null;
    localStorage.removeItem("token");
  };

  return { token, isAuthenticated, logout };
});
