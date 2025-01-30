<template>
  <AuthGuard>
    <h1>Dashboard</h1>
    <div v-for="department in departmentList" :key="department.id">
      <h2>{{ department }}</h2>
    </div>
  </AuthGuard>
</template>

<script setup>
import AuthGuard from "../components/AuthGuard.vue";
import Navbar from "../components/Navbar.vue";
import { getDepartmentListApi } from "../api/index.js";
import { ref, onMounted } from "vue";

const departmentList = ref([]);

const getDepartments = async () => {
  try {
    const res = await getDepartmentListApi();
    const data = await res.json();
    departmentList.value = data.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getDepartments();
});
</script>

<style></style>
