import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../views/auth/LoginView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/dashboard/DashboardView.vue"),
    },
    {
      path: "/data",
      name: "data",
      component: () => import("../views/dashboard/data/ListDataView.vue"),
    },
    {
      path: "/data/create",
      name: "data-create",
      component: () => import("../views/dashboard/data/CreateDataView.vue"),
    },
    {
      path: "/data/update/:id",
      name: "data-update",
      component: () => import("../views/dashboard/data/UpdateDataView.vue"),
    },
    {
      path: "/categories",
      name: "categories",
      component: () =>
        import("../views/dashboard/category/ListCategoryView.vue"),
    },
    {
      path: "/categories/create",
      name: "categories-create",
      component: () =>
        import("../views/dashboard/category/CreateCategoryView.vue"),
    },
    {
      path: "/qa",
      name: "qa",
      component: () => import("../views/dashboard/qa/QAView.vue"),
    },
  ],
});

export default router;
