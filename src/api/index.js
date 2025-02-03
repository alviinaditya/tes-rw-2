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
