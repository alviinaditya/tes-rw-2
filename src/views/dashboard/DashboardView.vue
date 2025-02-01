<template>
  <AuthGuard>
    <LoadingScreen v-if="isLoading" />
    <template v-else>
      <div class="heading-container">
        <h1>Dashboard</h1>
      </div>
      <div
        v-for="department in departmentList"
        :key="department.id"
        class="department-list"
      >
        <Card>{{ department }} Department</Card>
      </div>
    </template>
  </AuthGuard>
</template>
<script setup>
import AuthGuard from "@/components/AuthGuard.vue";
import { getDepartmentListApi } from "@/api/index.js";
import { ref, onMounted } from "vue";
import Card from "@/components/ui/Card.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";

const departmentList = ref([]);
const isLoading = ref(false);

const getDepartments = async () => {
  isLoading.value = true;
  try {
    const res = await getDepartmentListApi();
    const data = await res.json();
    departmentList.value = data.data;
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
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
