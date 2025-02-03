import { apiUrls } from "@/api";
import useFetch from "./useFetch";
import { computed } from "vue";

export default function useData() {
  const { isLoading, error, response, fetchData } = useFetch();

  const fetchListData = async (page = 1) => {
    await fetchData("GET", apiUrls.dataList(page));
    return response.value?.data?.result || [];
  };

  const fetchDataById = async (id) => {
    await fetchData("GET", apiUrls.dataDetail(id));
    return response.value?.data || {};
  };

  const pageInfo = computed(() => response.value?.data?.pagination || {});

  return { isLoading, error, pageInfo, fetchListData, fetchDataById };
}
