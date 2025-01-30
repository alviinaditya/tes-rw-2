<template>
  <AuthGuard>
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
    <template v-if="responses.length > 0">
      <div class="response-container">
        <span class="response-title">Answer</span>
        <ol class="response-list">
          <li
            v-for="(response, index) in responses"
            :key="index"
            class="response-item"
          >
            {{ response }}
          </li>
        </ol>
      </div>
    </template>
  </AuthGuard>
</template>
<script setup>
import AuthGuard from "@/components/AuthGuard.vue";
import { getCategoryListApi, postQAAnswerApi } from "@/api/index.js";
import { ref } from "vue";
import { onMounted } from "vue";
import SelectOptions from "@/components/ui/SelectOptions.vue";
import TextArea from "@/components/ui/TextArea.vue";
import Button from "@/components/ui/Button.vue";

const categories = ref([]);
const isLoading = ref(false);
const request = ref({
  categoryId: "",
  content: "",
});

const responses = ref([]);

const handleSubmit = async () => {
  isLoading.value = true;
  try {
    const res = await postQAAnswerApi({
      category_id: request.value.categoryId,
      content: request.value.content,
    });
    const data = await res.json();
    responses.value = data.data;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  try {
    const res = await getCategoryListApi();
    const data = await res.json();
    categories.value = data.data.result;
  } catch (error) {
    console.log(error);
  }
});
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
