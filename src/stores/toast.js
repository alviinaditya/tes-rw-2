import { defineStore } from "pinia";
import { ref } from "vue";

export const useToastStore = defineStore("toast", () => {
  const toastList = ref([]);

  const addToast = (message, type = "success", duration = 3000) => {
    const toastId = Date.now();
    toastList.value.push({
      id: toastId,
      message,
      type,
    });

    setTimeout(() => {
      removeToast(toastId);
    }, duration);

    console.log("list", toastList.value);
  };

  const removeToast = (toastId) => {
    toastList.value = toastList.value.filter((toast) => toast.id !== toastId);
  };

  return { toastList, addToast, removeToast };
});
