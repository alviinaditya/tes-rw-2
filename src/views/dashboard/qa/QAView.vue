<template>
  <div>
    <div class="heading-container">
      <h1>Question</h1>
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
        >Submit</Button
      >
    </form>
    <template v-if="response.data">
      <div class="response-container">
        <span class="response-title">Answer</span>
        <ol class="response-list">
          <li
            v-for="(response, index) in response.data"
            :key="index"
            class="response-item"
          >
            {{ response }}
          </li>
        </ol>
      </div>
    </template>
  </div>
</template>
<script setup>
import { apiUrls } from "@/api/index.js";
import { ref } from "vue";
import SelectOptions from "@/components/ui/SelectOptions.vue";
import TextArea from "@/components/ui/TextArea.vue";
import Button from "@/components/ui/Button.vue";
import useCategories from "@/composables/useCategories";
import useFetch from "@/composables/useFetch";
import { useToastStore } from "@/stores/toast";

const { fetchAllCategories } = useCategories();
const { isLoading, response, error, fetchData } = useFetch();

const toastStore = useToastStore();
const categories = ref([]);
const request = ref({
  categoryId: "",
  content: "",
});

categories.value = await fetchAllCategories();

const handleSubmit = async () => {
  await fetchData("POST", apiUrls.qa(), request.value);

  if (error.value) {
    toastStore.addToast(error.value, "error");
  } else {
    toastStore.addToast("Question submitted successfully", "success");
  }
};
</script>
<style scoped>
.response-container {
  margin-top: 1rem;
}
.response-title {
  font-size: 1.5rem;
  margin: 1rem 0;
}
.response-item {
  font-size: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
}
.response-item:last-child {
  margin-bottom: 0;
}
</style>
