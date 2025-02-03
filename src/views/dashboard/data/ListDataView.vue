<template>
  <div>
    <div class="heading-container">
      <h1>List Data</h1>
      <ButtonLink to="/data/create" variant="primary">Create Data</ButtonLink>
    </div>
    <Table
      :data="listData"
      :columns="columns"
      :pagination="pagination"
      :action="actions"
      @onPageChange="handlePageChange"
    ></Table>
  </div>
</template>
<script setup>
import { ref } from "vue";
import ButtonLink from "@/components/ui/ButtonLink.vue";
import Table from "@/components/ui/Table.vue";
import { useToastStore } from "@/stores/toast";
import useData from "@/composables/useData";

const { error, pageInfo, fetchListData } = useData();
const toastStore = useToastStore();
const pagination = ref({});
const listData = ref([]);
const page = ref(1);

const columns = [
  { label: "ID", key: "id" },
  { label: "Category", key: "category" },
  { label: "Content", key: "content" },
];
const actions = [{ label: "Update", link: "/data/update/:id" }];

const fetchItemsData = async () => {
  listData.value = await fetchListData(page.value);
  if (error.value) {
    toastStore.addToast(error.value, "error");
  }
};

const handlePageChange = (val) => {
  page.value = val;
  fetchItemsData();
};

await fetchItemsData();
pagination.value = pageInfo.value?.pagination;
</script>
