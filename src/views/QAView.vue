<template>
  <AuthGuard>
    <h1>QA</h1>
    <p v-if="isSubmited">
      Terimakasih telah menghubungi kami. Data telah berhasil dikirimkan
    </p>
    <form @submit.prevent="handleSubmit">
      <select v-model="request.categoryId">
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
      <input type="text" v-model="request.content" />
      <button type="submit">Submit</button>
    </form>
  </AuthGuard>
</template>
<script setup>
import AuthGuard from "../components/AuthGuard.vue";
import { getCategoryListApi, postQAAnswerApi } from "../api/index.js";
import { ref } from "vue";
import { onMounted } from "vue";

const categories = ref([]);

const request = ref({
  categoryId: "",
  content: "",
});

const isSubmited = ref(false);

const handleSubmit = async () => {
  try {
    const res = await postQAAnswerApi({
      category_id: request.value.categoryId,
      content: request.value.content,
    });
    const data = await res.json();
    console.log(data);
    isSubmited.value = true;
  } catch (error) {
    console.log(error);
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
<style lang=""></style>
