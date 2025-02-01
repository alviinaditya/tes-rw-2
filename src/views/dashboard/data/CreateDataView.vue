<template>
  <AuthGuard :isLoading>
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
        :isLoading="isSubmitting"
        :disabled="isSubmitting"
        >Create Data</Button
      >
    </form>
  </AuthGuard>
</template>
<script setup>
import AuthGuard from "@/components/AuthGuard.vue";
import { getCategoryListApi, createDataApi } from "@/api/index.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import Button from "@/components/ui/Button.vue";
import SelectOptions from "@/components/ui/SelectOptions.vue";
import TextArea from "@/components/ui/TextArea.vue";

const router = useRouter();
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
    const res = await createDataApi({
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

onMounted(async () => {
  try {
    const res = await getCategoryListApi();
    const data = await res.json();
    categories.value = data.data.result;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
});
</script>
