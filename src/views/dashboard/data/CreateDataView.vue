<template>
  <div>
    <div class="heading-container">
      <h1>Create Data</h1>
      <Button @click="handleBack" size="small">Back</Button>
    </div>
    <form @submit.prevent="handleSubmit" class="form-group">
      <SelectOptions
        id="category"
        label="Category"
        placeholder="Select Category"
        v-model="request.categoryId"
        :options="categories"
      />
      <TextArea
        id="content"
        label="Content"
        placeholder="Enter your content"
        v-model="request.content"
      ></TextArea>
      <Button
        variant="primary"
        type="submit"
        :isLoading="isLoading"
        :disabled="isLoading"
        >Create Data</Button
      >
    </form>
  </div>
</template>
<script setup>
import { apiUrls } from "@/api/index.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Button from "@/components/ui/Button.vue";
import SelectOptions from "@/components/ui/SelectOptions.vue";
import TextArea from "@/components/ui/TextArea.vue";
import useCategories from "@/composables/useCategories";
import useFetch from "@/composables/useFetch";
import { useToastStore } from "@/stores/toast";

const { fetchAllCategories } = useCategories();
const { isLoading, error, fetchData } = useFetch();
const toastStore = useToastStore();
const router = useRouter();
const categories = ref([]);
const request = ref({
  categoryId: "",
  content: "",
});
categories.value = await fetchAllCategories();
const handleBack = () => {
  router.back();
};

const handleSubmit = async () => {
  await fetchData("POST", apiUrls.createData(), {
    category_id: request.value.categoryId,
    content: request.value.content,
  });
  if (error.value) {
    toastStore.addToast(error.value, "error");
  } else {
    toastStore.addToast("Data created successfully", "success");
    router.push({ name: "data" });
  }
};
</script>
