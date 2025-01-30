<script setup>
import AuthGuard from "../components/AuthGuard.vue";
import { getCategoryListApi, createDataApi } from "../api/index.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();
const categories = ref([]);

const request = ref({
  categoryId: "",
  content: "",
});

const handleSubmit = async () => {
  try {
    const res = await createDataApi({
      category_id: request.value.categoryId,
      content: request.value.content,
    });
    const data = await res.json();
    console.log(data);
    router.push({ name: "data" });
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

<template>
  <main>
    <AuthGuard>
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
        <button type="submit">Create</button>
      </form>
    </AuthGuard>
  </main>
</template>
