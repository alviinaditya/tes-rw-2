<template>
  <div>
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
  </div>
</template>
<script setup>
import { ref } from "vue";
import ButtonLink from "@/components/ui/ButtonLink.vue";
import Table from "@/components/ui/Table.vue";
import useCategories from "@/composables/useCategories";
import { useToastStore } from "@/stores/toast";

const { error, pageInfo, fetchCategories } = useCategories();
const toastStore = useToastStore();

const categories = ref([]);
const pagination = ref({});
const page = ref(1);

const columns = [
  { label: "ID", key: "id" },
  { label: "Department", key: "department" },
  { label: "Name", key: "name" },
];

const fetchCategoriesData = async () => {
  categories.value = await fetchCategories(page.value);
  if (error.value) {
    toastStore.addToast(error.value, "error");
  }
};

const handlePageChange = (val) => {
  page.value = val;
  fetchCategoriesData();
};

await fetchCategoriesData();
pagination.value = pageInfo.value?.pagination;
</script>
