// 路由器对象模块
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

// 声明使用vue插件
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history", //没有#号的模式
  routes, //配置所有路由
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }; //跳转路由是滚动条自动滚动到起始位置
  },
});
