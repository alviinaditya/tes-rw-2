import { computed } from "vue";
import useFetch from "./useFetch";
import { apiUrls } from "@/api";

export default function useCategories() {
  const { isLoading, error, response, fetchData } = useFetch();

  const fetchCategories = async (page = 1) => {
    await fetchData("GET", apiUrls.categoryList(page));
    return response.value?.data?.result || [];
  };

  const fetchAllCategories = async () => {
    const categories = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const response = await fetchCategories(page);

      if (response.length) {
        categories.push(...response);
        page += 1;
      } else {
        hasMore = false;
      }
    }

    return categories;
  };

  const pageInfo = computed(() => response.value?.data?.pagination || {});

  return {
    isLoading,
    error,
    pageInfo,
    fetchCategories,
    fetchAllCategories,
  };
}
