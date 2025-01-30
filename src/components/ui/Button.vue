<template>
  <button
    :class="[
      $style.baseButton,
      $style[variant],
      { [$style.disabled]: disabled },
    ]"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <Loader :class="[$style.loader, { [$style.visible]: isLoading }]" />
    <span :class="[$style.content, { [$style.visible]: !isLoading }]">
      <slot></slot>
    </span>
  </button>
</template>
<script setup>
import Loader from "./Loader.vue";

defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "secondary", "outline"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
<style module>
.baseButton {
  border: none;
  background: transparent;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  display: grid;
}
.loader {
  grid-area: 1/1;
  visibility: hidden;
  justify-self: center;
}
.content {
  grid-area: 1/1;
  visibility: hidden;
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
.visible {
  visibility: visible;
}
</style>
