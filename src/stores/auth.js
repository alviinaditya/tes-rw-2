import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const token = ref(localStorage.getItem("token"));

  const isAuthenticated = computed(() => {
    return (
      !!token.value &&
      token.value !== "undefined" &&
      token.value !== "null" &&
      token.value !== ""
    );
  });

  const setToken = (newToken) => {
    token.value = newToken;
    localStorage.setItem("token", newToken);
  };
  const logout = () => {
    token.value = null;
    localStorage.removeItem("token");
  };

  return { token, setToken, isAuthenticated, logout };
});
