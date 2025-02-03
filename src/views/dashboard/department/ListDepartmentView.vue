<template>
  <div>
    <div class="heading-container">
      <h1>Dashboard</h1>
    </div>
    <div
      v-for="department in departments"
      :key="department.id"
      class="department-list"
    >
      <Card>{{ department.name }} Department</Card>
    </div>
  </div>
</template>
<script setup>
import Card from "@/components/ui/Card.vue";
import useDepartmentsData from "@/composables/useDepartments";

const { departments, fetchDepartments } = useDepartmentsData();

await fetchDepartments();
</script>

<style scoped>
.department-list {
  margin-bottom: 1rem;
}
</style>
