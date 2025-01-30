<script setup>
import AuthGuard from "../components/AuthGuard.vue";
import { createCategoryApi } from "../api/index.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();

const request = ref({
  department: "",
  name: "",
});

const handleSubmit = async () => {
  try {
    const res = await createCategoryApi({
      department: request.value.department,
      name: request.value.name,
    });
    const data = await res.json();
    console.log(data);
    router.push({ name: "categories" });
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <main>
    <AuthGuard>
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="request.department" />
        <input type="text" v-model="request.name" />
        <button type="submit">Create</button>
      </form>
    </AuthGuard>
  </main>
</template>
