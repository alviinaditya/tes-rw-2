<template>
  <div>
    <div class="heading-container">
      <h1>Create Category</h1>
      <Button @click="handleBack" size="small">Back</Button>
    </div>
    <form @submit.prevent="handleSubmit" class="form-group">
      <SelectOptions
        id="department"
        label="Department"
        placeholder="Select Department"
        v-model="request.department"
        :options="departments"
        valueField="name"
      />
      <Input
        id="name"
        label="Name"
        type="text"
        v-model="request.name"
        placeholder="Enter name here"
        autocomplete="off"
      />
      <Button
        variant="primary"
        type="submit"
        :isLoading="isLoading"
        :disabled="isLoading"
        >Create Category</Button
      >
    </form>
  </div>
</template>
<script setup>
import { apiUrls } from "@/api/index.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Button from "@/components/ui/Button.vue";
import Input from "@/components/ui/Input.vue";
import SelectOptions from "@/components/ui/SelectOptions.vue";
import useDepartments from "@/composables/useDepartments";
import useFetch from "@/composables/useFetch";
import { useToastStore } from "@/stores/toast";

const { departments, fetchDepartments } = useDepartments();
const { isLoading, error, fetchData } = useFetch();
const toastStore = useToastStore();
const router = useRouter();
const request = ref({
  department: "",
  name: "",
});

const handleBack = () => {
  router.back();
};

const handleSubmit = async () => {
  await fetchData("POST", apiUrls.createCategory(), {
    name: request.value.name,
    department: request.value.department,
  });

  if (error.value) {
    toastStore.addToast(error.value, "error");
  } else {
    toastStore.addToast("Category created successfully", "success");
    router.push({ name: "category" });
  }
};

await fetchDepartments();
</script>
