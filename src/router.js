import Vue from "vue";
import Router from "vue-router";

//组件模块
import Login from "./pages-admin/pages/login";
import Register from "./pages-admin/pages/register";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", name: "login", component: Login },
    { path: "/register", name: "register", component: Register }
  ]
});
