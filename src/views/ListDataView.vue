<template>
  <AuthGuard>
    <div>
      <h1>List Data</h1>
      <RouterLink to="/data/create">Create Data</RouterLink>
    </div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>Content</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in dataList" :key="data.id">
          <td>{{ data.id }}</td>
          <td>{{ data.category }}</td>
          <td>{{ data.content }}</td>
          <td>
            <RouterLink :to="`/data/update/${data.id}`">Update</RouterLink>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4">
            <button @click="page--">Prev</button>
            <button @click="page++">Next</button>
          </td>
        </tr>
      </tfoot>
    </table>
  </AuthGuard>
</template>
<script setup>
import AuthGuard from "../components/AuthGuard.vue";
import Navbar from "../components/Navbar.vue";
import { getListDataApi } from "../api/index.js";
import { ref, onMounted, watch } from "vue";
import { RouterLink } from "vue-router";

const dataList = ref([]);
const page = ref(1);

const getListData = async () => {
  try {
    const res = await getListDataApi(page.value);
    const data = await res.json();
    dataList.value = data.data.result;
  } catch (error) {
    console.log(error);
  }
};

watch(page, () => {
  getListData();
});

onMounted(() => {
  getListData();
});
</script>
<style lang=""></style>
