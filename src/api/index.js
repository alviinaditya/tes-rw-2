const BASE_URL = import.meta.env.VITE_API_URL;

export const apiUrls = {
  login: () => `${BASE_URL}/admin/auth/login`,
  departmentList: () => `${BASE_URL}/admin/department/list`,
  dataList: (page = 1) => `${BASE_URL}/admin/data/list?page=${page}`,
  dataDetail: (id) => `${BASE_URL}/admin/data/detail?id=${id}`,
  createData: () => `${BASE_URL}/admin/data/create`,
  updateData: () => `${BASE_URL}/admin/data/update/`,
  categoryList: (page = 1) => `${BASE_URL}/admin/categories/list?page=${page}`,
  createCategory: () => `${BASE_URL}/admin/categories/create`,
  qa: () => `${BASE_URL}/admin/qa/answer`,
};

export const getDepartmentListApi = () => {
  return fetch(`${BASE_URL}/admin/department/list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getListDataApi = (page = 1) => {
  return fetch(`${BASE_URL}/admin/data/list?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getDataByIdApi = (id) => {
  return fetch(`${BASE_URL}/admin/data/detail?id=${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const createDataApi = (data) => {
  return fetch(`${BASE_URL}/admin/data/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
};

export const updateDataApi = (data) => {
  return fetch(`${BASE_URL}/admin/data/update/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
};

export const getCategoryListApi = (page = 1) => {
  return fetch(`${BASE_URL}/admin/categories/list?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const createCategoryApi = (data) => {
  return fetch(`${BASE_URL}/admin/categories/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
};

export const postQAAnswerApi = (data) => {
  return fetch(`${BASE_URL}/admin/qa/answer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
};
