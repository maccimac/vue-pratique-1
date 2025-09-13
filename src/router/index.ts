import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import JobListingsView from "../views/JobListingsView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "job-listings",
    component: JobListingsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
