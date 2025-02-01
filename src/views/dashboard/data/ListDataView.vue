<template>
  <AuthGuard :isLoading>
    <div class="heading-container">
      <h1>List Data</h1>
      <ButtonLink to="/data/create" variant="primary">Create Data</ButtonLink>
    </div>
    <Table
      :data="dataList"
      :columns="columns"
      :pagination="pagination"
      :action="actions"
      @onPageChange="handlePageChange"
    ></Table>
  </AuthGuard>
</template>
<script setup>
import AuthGuard from "@/components/AuthGuard.vue";
import { getListDataApi } from "@/api/index.js";
import { ref, onMounted, watch } from "vue";
import ButtonLink from "@/components/ui/ButtonLink.vue";
import Table from "@/components/ui/Table.vue";

const dataList = ref([]);
const pagination = ref({});
const page = ref(1);
const isLoading = ref(false);

const columns = [
  { label: "ID", key: "id" },
  { label: "Category", key: "category" },
  { label: "Content", key: "content" },
];
const actions = [{ label: "Update", link: "/data/update/:id" }];
const getListData = async () => {
  isLoading.value = true;
  try {
    const res = await getListDataApi(page.value);
    const data = await res.json();
    dataList.value = data.data.result;
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
  getListData();
});

onMounted(() => {
  getListData();
});
</script>
