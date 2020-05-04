// 路由器对象模块
import Vue from "vue";
import VueRouter from "vue-router";
// 引入文件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
// 声明使用vue插件
Vue.use(VueRouter);

export default new VueRouter({
  // 配合所有路由
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/search",
      component: Search,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/login",
      component: Login,
    },
  ],
});
