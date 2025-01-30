<template>
  <AuthGuard>
    <div>
      <h1>Categories</h1>
      <RouterLink to="/categories/create">Create Data</RouterLink>
    </div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Department</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in categories" :key="data.id">
          <td>{{ data.id }}</td>
          <td>{{ data.department }}</td>
          <td>{{ data.name }}</td>
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
import { getCategoryListApi } from "../api/index.js";
import { ref, onMounted, watch } from "vue";
import { RouterLink } from "vue-router";

const categories = ref([]);
const page = ref(1);

const getCategoies = async () => {
  try {
    const res = await getCategoryListApi(page.value);
    const data = await res.json();
    categories.value = data.data.result;
  } catch (error) {
    console.log(error);
  }
};

watch(page, () => {
  getCategoies();
});

onMounted(() => {
  getCategoies();
});
</script>
<style lang=""></style>
