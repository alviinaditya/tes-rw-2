import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
    },
    {
      path: "/data",
      name: "data",
      component: () => import("../views/ListDataView.vue"),
    },
    {
      path: "/data/create",
      name: "data-create",
      component: () => import("../views/CreateDataView.vue"),
    },
    {
      path: "/data/update/:id",
      name: "data-update",
      component: () => import("../views/UpdateDataView.vue"),
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import("../views/CategoriesView.vue"),
    },
    {
      path: "/categories/create",
      name: "categories-create",
      component: () => import("../views/CreateCategoryView.vue"),
    },
    {
      path: "/qa",
      name: "qa",
      component: () => import("../views/QAView.vue"),
    },
  ],
});

export default router;
