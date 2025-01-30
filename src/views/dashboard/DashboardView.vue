<template>
  <AuthGuard>
    <h1>Dashboard</h1>
    <div
      v-for="department in departmentList"
      :key="department.id"
      class="department-list"
    >
      <Card>{{ department }} Department</Card>
    </div>
  </AuthGuard>
</template>
<script setup>
import AuthGuard from "@/components/AuthGuard.vue";
import { getDepartmentListApi } from "@/api/index.js";
import { ref, onMounted } from "vue";
import Card from "@/components/ui/Card.vue";

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

<style scoped>
.department-list {
  margin-bottom: 1rem;
}
</style>
