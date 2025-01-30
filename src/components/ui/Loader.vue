<template>
  <span :class="[$style.baseLoader, 'animate-spin']"></span>
</template>
<script setup>
defineProps({
  size: {
    type: String,
    default: "16px",
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
</style>
