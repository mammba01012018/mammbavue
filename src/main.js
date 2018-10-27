import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Routes from "./routes";
import BootstrapVue from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

export const bus = new Vue();

export const router = new VueRouter({
  routes: Routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = [ '/','home','/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/');
  }

  next();
})

new Vue({
  render: h => h(App),
  router: router
}).$mount("#app");
