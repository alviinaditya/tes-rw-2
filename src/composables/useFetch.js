import { reactive, toRefs } from "vue";

export default function useFetch() {
  const state = reactive({
    isLoading: false,
    error: null,
    response: [],
  });

  const authToken = localStorage.getItem("token");

  const fetchData = async (method, url, body, options = {}) => {
    state.isLoading = true;
    state.error = null;
    try {
      const headers = {
        "Content-Type": "application/json",
        ...options.headers,
      };

      if (authToken && authToken !== "undefined" && authToken !== "null") {
        headers["Authorization"] = `Bearer ${authToken}`;
      }

      const response = await fetch(url, {
        method: method,
        headers: headers,
        body: method.toUpperCase() === "POST" ? JSON.stringify(body) : null,
        ...options,
      });
      const json = await response.json();
      if (!response.ok) {
        throw new Error(json.message || "Something went wrong");
      }
      state.response = json;
    } catch (fetchError) {
      state.error = fetchError;
    } finally {
      state.isLoading = false;
    }
  };

  return { ...toRefs(state), fetchData };
}
