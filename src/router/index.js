import { createRouter, createWebHistory } from "vue-router";

import HomeLayout from "/src/components/ui/HomeLayout.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
    name: "Index",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("/src/components/ui/Countries.vue"),
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
