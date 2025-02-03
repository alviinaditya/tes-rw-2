import { computed } from "vue";
import useFetch from "./useFetch";
import { apiUrls } from "@/api";

export default function useDepartments() {
  const { isLoading, error, response, fetchData } = useFetch();

  const fetchDepartments = async () => {
    await fetchData("GET", apiUrls.departmentList());
  };

  const departments = computed(() => {
    if (!response.value || !response.value.data) return [];
    return response.value.data.map((department, index) => ({
      id: (index + 1).toString(),
      name: department,
    }));
  });

  return { isLoading, error, departments, fetchDepartments };
}
