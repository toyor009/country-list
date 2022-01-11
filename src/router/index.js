import { createRouter, createWebHistory } from "vue-router";

import HomeLayout from "@/components/ui/HomeLayout.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
    name: "Index",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
      layout: HomeLayout,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
