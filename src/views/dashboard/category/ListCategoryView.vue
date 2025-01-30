<template>
  <AuthGuard>
    <LoadingScreen v-if="isLoading" />
    <template v-else>
      <div class="heading-container">
        <h1>Categories</h1>
        <ButtonLink to="/categories/create">Create Category</ButtonLink>
      </div>
      <Table
        :data="categories"
        :columns="columns"
        :pagination="pagination"
        @onPageChange="handlePageChange"
      ></Table>
    </template>
  </AuthGuard>
</template>
<script setup>
import AuthGuard from "@/components/AuthGuard.vue";
import { getCategoryListApi } from "@/api/index.js";
import { ref, onMounted, watch } from "vue";
import ButtonLink from "@/components/ui/ButtonLink.vue";
import Table from "@/components/ui/Table.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";

const categories = ref([]);
const pagination = ref({});
const page = ref(1);
const isLoading = ref(false);

const columns = [
  { label: "ID", key: "id" },
  { label: "Department", key: "department" },
  { label: "Name", key: "name" },
];

const getCategories = async () => {
  isLoading.value = true;
  try {
    const res = await getCategoryListApi(page.value);
    const data = await res.json();
    categories.value = data.data.result;
    pagination.value = data.data.pagination.pagination;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};

const handlePageChange = (val) => {
  page.value = val;
};

watch(page, () => {
  getCategories();
});

onMounted(() => {
  getCategories();
});
</script>
