<template>
  <AuthGuard :isLoading>
    <div class="heading-container">
      <h1>Update Data</h1>
      <Button @click="handleBack" size="small">Back</Button>
    </div>
    <div>
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
          :isLoading="isSubmitting"
          :disabled="isSubmitting"
          >Update Data</Button
        >
      </form>
    </div>
  </AuthGuard>
</template>
<script setup>
import AuthGuard from "@/components/AuthGuard.vue";
import {
  getCategoryListApi,
  getDataByIdApi,
  updateDataApi,
} from "@/api/index.js";
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import Button from "@/components/ui/Button.vue";
import SelectOptions from "@/components/ui/SelectOptions.vue";
import TextArea from "@/components/ui/TextArea.vue";

const router = useRouter();
const route = useRoute();
const categories = ref([]);
const isSubmitting = ref(false);
const isLoading = ref(true);
const request = ref({
  categoryId: "",
  content: "",
});

const handleBack = () => {
  router.back();
};

const handleSubmit = async () => {
  isSubmitting.value = true;
  try {
    const res = await updateDataApi({
      id: route.params.id,
      category_id: request.value.categoryId,
      content: request.value.content,
    });
    const data = await res.json();
    router.push({ name: "data" });
  } catch (error) {
    console.log(error);
  } finally {
    isSubmitting.value = false;
  }
};

const getData = async () => {
  try {
    const res = await getDataByIdApi(route.params.id);
    const data = await res.json();
    request.value.categoryId = data.data.category_id;
    request.value.content = data.data.content;
  } catch (error) {
    console.log(error);
  }
};

const getCategories = async () => {
  try {
    const res = await getCategoryListApi();
    const data = await res.json();
    categories.value = data.data.result;
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  await getCategories();
  await getData();
  isLoading.value = false;
});
</script>
