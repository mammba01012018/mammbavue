import pagenotfound from "./components/pagenotfound.vue";
import home from "./components/home.vue";

export default [
  { path: "*", component: pagenotfound },
  { path: "/home", component: home },
  { path: "/", component: home }
];
