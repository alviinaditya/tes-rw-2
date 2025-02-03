import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("@/views/auth/LoginView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/views/dashboard/DashboardView.vue"),
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          name: "departments",
          component: () =>
            import("@/views/dashboard/department/ListDepartmentView.vue"),
        },
        {
          path: "/data",
          name: "data",
          component: () => import("@/views/dashboard/data/ListDataView.vue"),
        },
        {
          path: "/data/create",
          name: "createData",
          component: () => import("@/views/dashboard/data/CreateDataView.vue"),
        },
        {
          path: "/data/update/:id",
          name: "updateData",
          component: () => import("@/views/dashboard/data/UpdateDataView.vue"),
        },
        {
          path: "/categories",
          name: "categories",
          component: () =>
            import("@/views/dashboard/category/ListCategoryView.vue"),
        },
        {
          path: "/categories/create",
          name: "createCategory",
          component: () =>
            import("@/views/dashboard/category/CreateCategoryView.vue"),
        },
        {
          path: "/qa",
          name: "qa",
          component: () => import("@/views/dashboard/qa/QAView.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to) => {
  const store = useAuthStore();
  if (to.meta.requiresAuth && !store.isAuthenticated) {
    return { name: "login" };
  }
});

export default router;
