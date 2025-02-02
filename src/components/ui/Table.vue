<template>
  <table :class="[$style.table]">
    <thead>
      <tr>
        <th v-for="(column, index) in columns" :key="index">
          {{ column.label }}
        </th>
        <th v-if="action && action.length" class="action-column">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in data" :key="index">
        <td v-for="(column, colIndex) in columns" :key="colIndex">
          {{ row[column.key] }}
        </td>
        <td v-if="action && action.length">
          <div v-for="(actionItem, actionIndex) in action" :key="actionIndex">
            <ButtonLink
              :to="actionItem.link.replace(':id', row.id)"
              variant="secondary"
              >{{ actionItem.label }}</ButtonLink
            >
          </div>
        </td>
      </tr>
    </tbody>
    <tfoot v-if="pagination">
      <tr>
        <td colspan="100%">
          <div :class="[$style.pagination]">
            <Button
              @click="goToPreviousPage"
              :disabled="currentPage === 1"
              variant="secondary"
            >
              Previous
            </Button>
            <span>{{ currentPage }} / {{ totalPages }}</span>
            <Button
              @click="goToNextPage"
              :disabled="currentPage === totalPages"
              variant="secondary"
            >
              Next
            </Button>
          </div>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import Button from "./Button.vue";
import ButtonLink from "./ButtonLink.vue";
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
  pagination: {
    type: Object,
  },
  action: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["onPageChange"]);

const currentPage = ref(Number(props.pagination.current_page));
const totalPages = ref(Number(props.pagination.total_page));

watchEffect(() => {
  currentPage.value = Number(props.pagination.current_page);
  totalPages.value = Number(props.pagination.total_page);
});

const goToNextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    emit("onPageChange", currentPage.value);
  }
};

const goToPreviousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    emit("onPageChange", currentPage.value);
  }
};
</script>

<style module>
.table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  text-align: left;
  border: 1px solid var(--color-border);
}

th {
  font-weight: 600;
  color: var(--color-primary-text);
  background-color: var(--color-primary);
  border-color: var(--color-primary-hover);
  cursor: pointer;
}

th:hover {
  background-color: var(--color-primary-hover);
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.pagination button {
  padding: 5px 10px;
}
</style>
