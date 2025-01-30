<template>
  <div :class="[$style.inputContainer]">
    <label v-if="label" :class="[$style.inputLabel]">{{ label }}</label>
    <input v-model="model" :class="[$style.inputField]" v-bind="$attrs" />
  </div>
</template>
<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
});
const model = defineModel();
</script>
<style module>
.inputContainer {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.inputLabel {
  font-size: 0.875rem;
  color: var(--color-primary-text);
}

.inputField {
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 0.25rem;
  background-color: var(--color-background);
  font-size: 1rem;
  color: var(--color-primary-text);
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.inputField:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 1px var(--color-primary);
}

.inputField::placeholder {
  color: var(--color-text-muted);
}
</style>
