<template>
  <div :class="[$style.inputContainer]">
    <label :for="id" :class="[$style.inputLabel]">{{ label }}</label>
    <textarea
      :id="id"
      v-model="model"
      :placeholder="placeholder"
      :class="[$style.inputField]"
      rows="4"
      cols="50"
    ></textarea>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  placeholder: {
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
  color: var(--color-text-muted);
}

.inputField {
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 0.25rem;
  background-color: var(--color-background);
  font-size: 1rem;
  color: var(--color-text);
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  resize: vertical;
}

.inputField:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 1px var(--color-primary);
}
</style>
