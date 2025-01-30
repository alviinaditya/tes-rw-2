<template>
  <span :class="[$style.baseLoader, $style[variant], 'animate-spin']"></span>
</template>
<script setup>
defineProps({
  size: {
    type: String,
    default: "16px",
  },
  variant: {
    type: String,
    default: "default",
    validator: (value) => ["default", "primary", "secondary"].includes(value),
  },
});
</script>
<style module>
.baseLoader {
  width: v-bind(size);
  height: v-bind(size);
  border: 2px solid var(--color-background);
  border-radius: 50%;
  border-top: 2px solid var(--color-text);
}
.primary {
  border-color: var(--color-primary);
  border-top: var(--color-primary-text);
}
.secondary {
  border-color: var(--color-secondary);
  border-top: var(--color-secondary-text);
}
</style>
