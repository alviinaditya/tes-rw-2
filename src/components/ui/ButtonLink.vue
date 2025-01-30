<template>
  <RouterLink
    :to="to"
    :class="[
      $style.baseButton,
      $style[variant],
      { [$style.disabled]: disabled },
    ]"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot></slot>
  </RouterLink>
</template>

<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "secondary", "outline"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  to: {
    type: [String, Object],
    required: true,
  },
});
</script>

<style module>
.baseButton {
  border: none;
  background: transparent;
  border-radius: 0.25rem;
  padding: 0.25rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  text-decoration: none;
}
.primary {
  background-color: var(--color-primary);
  color: var(--color-primary-text);
}
.primary:hover {
  background-color: var(--color-primary-hover);
}
.secondary {
  background-color: var(--color-secondary);
  color: var(--color-secondary-text);
}
.secondary:hover {
  background-color: var(--color-secondary-hover);
}
.outline {
  border: 2px solid var(--color-primary);
}
.outline:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary-hover);
}
.disabled {
  background-color: var(--color-text-muted);
  opacity: 0.5;
  cursor: not-allowed;
}
.disabled:hover {
  background-color: var(--color-text-muted);
}
</style>
