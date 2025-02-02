<template>
  <Teleport to="body">
    <Transition name="toast">
      <div v-if="toasts.length" :class="[$style.toastContainer]">
        <TransitionGroup name="toast" tag="ul">
          <li
            v-for="toast in toasts"
            :key="toast.id"
            :class="[$style.toast, $style[toast.type]]"
          >
            {{ toast.message }}
          </li>
        </TransitionGroup>
      </div>
    </Transition>
  </Teleport>
</template>
<script setup>
import { useToastStore } from "@/stores/toast";
import { computed } from "vue";

const store = useToastStore();
const toasts = computed(() => store.toastList);
</script>
<style module>
.toastContainer {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 99;
}
.toastContainer > ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.toast {
  padding: 10px 20px;
  background-color: var(--color-primary);
  color: var(--color-primary-text);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.success {
  background-color: var(--color-success);
  border-color: var(--color-success-border);
  color: var(--color-text-white);
}
.error {
  background-color: var(--color-error);
  border-color: var(--color-error-border);
  color: var(--color-text-white);
}
</style>

<style scoped>
.toast-enter-from,
.toast-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.toast-enter-active,
.toast-leave-active {
  transition: 0.25s ease all;
}
</style>
