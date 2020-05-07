//入口文件
import Vue from "vue";
// import App from "./App.vue";
import App from "@/App";
// 引入路由器
import router from "./router";
import store from "./store";
import TypeNav from "@/components/TypeNav";
import "./mock/mockServer";

Vue.config.productionTip = false; //去生产环境的提示
// 全局注册组件
Vue.component("TypeNav", TypeNav);

new Vue({
  render: (h) => h(App),
  router, //配置路由器
  store, //配置vuex的store  所有组件对象都可以通过$store属性得到store对象
}).$mount("#app");
