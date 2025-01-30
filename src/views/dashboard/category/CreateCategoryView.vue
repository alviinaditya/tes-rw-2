<template>
  <AuthGuard>
    <div class="heading-container">
      <h1>Create Category</h1>
      <Button @click="handleBack" size="small">Back</Button>
    </div>
    <form @submit.prevent="handleSubmit" class="form-group">
      <Input
        id="department"
        label="Department"
        type="text"
        v-model="request.department"
        placeholder="Enter department here"
      />
      <Input
        id="name"
        label="Name"
        type="text"
        v-model="request.name"
        placeholder="Enter name here"
      />
      <Button
        variant="primary"
        type="submit"
        :isLoading="isLoading"
        :disabled="isLoading"
        >Create Category</Button
      >
    </form>
  </AuthGuard>
</template>
<script setup>
import AuthGuard from "@/components/AuthGuard.vue";
import { createCategoryApi } from "@/api/index.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Button from "@/components/ui/Button.vue";
import Input from "@/components/ui/Input.vue";

const router = useRouter();
const isLoading = ref(false);
const request = ref({
  department: "",
  name: "",
});

const handleBack = () => {
  router.back();
};

const handleSubmit = async () => {
  isLoading.value = true;
  try {
    const res = await createCategoryApi({
      department: request.value.department,
      name: request.value.name,
    });
    const data = await res.json();
    console.log(data);
    router.push({ name: "categories" });
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};
</script>
