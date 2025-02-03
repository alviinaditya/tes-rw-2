<template>
  <div>
    <div class="heading-container">
      <h1>Update Data</h1>
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
        >Update Data</Button
      >
    </form>
  </div>
</template>
<script setup>
import { apiUrls } from "@/api/index.js";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import Button from "@/components/ui/Button.vue";
import SelectOptions from "@/components/ui/SelectOptions.vue";
import TextArea from "@/components/ui/TextArea.vue";
import useCategories from "@/composables/useCategories";
import useFetch from "@/composables/useFetch";
import useData from "@/composables/useData";

const { fetchAllCategories } = useCategories();
const { fetchDataById } = useData();
const { isLoading, error, fetchData } = useFetch();
const router = useRouter();
const route = useRoute();
const categories = ref([]);
const request = ref({
  categoryId: "",
  content: "",
});
categories.value = await fetchAllCategories();
const data = await fetchDataById(route.params.id);
request.value = {
  categoryId: data.category_id,
  content: data.content,
};
const handleBack = () => {
  router.back();
};

const handleSubmit = async () => {
  await fetchData("POST", apiUrls.updateData(), {
    id: route.params.id,
    category_id: request.value.categoryId,
    content: request.value.content,
  });

  if (error.value) {
    toastStore.addToast(error.value, "error");
  } else {
    toastStore.addToast("Data updated successfully", "success");
    router.push({ name: "data" });
  }
};
</script>
