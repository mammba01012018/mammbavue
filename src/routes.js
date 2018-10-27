import pagenotfound from "./components/pagenotfound.vue";
import home from "./components/home.vue";
import register from "./components/register.vue";
import dashboard from "./components/dashboard.vue";

export default [
  { path: "*", component: pagenotfound },
  { path: "/home", component: home },
  { path: "/", component: home },
  { path: "/register", component: register },
  { path: "/dashboard", component: dashboard },
];
