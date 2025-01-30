<script setup>
import AuthGuard from "../components/AuthGuard.vue";
import {
  getCategoryListApi,
  getDataByIdApi,
  updateDataApi,
} from "../api/index.js";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();
const route = useRoute();
const categories = ref([]);

const request = ref({
  categoryId: "",
  content: "",
});

const handleSubmit = async () => {
  try {
    const res = await updateDataApi({
      id: route.params.id,
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

const getCategoies = async () => {
  try {
    const res = await getCategoryListApi();
    const data = await res.json();
    categories.value = data.data.result;
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  getCategoies();
  getData();
});
</script>

<template>
  <AuthGuard>
    <div>
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
        <button type="submit">Update</button>
      </form>
    </div>
  </AuthGuard>
</template>
