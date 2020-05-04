import Vue from "vue";
// import App from "./App.vue";
import App from "@/App";
// 引入路由器
import router from "./router";

Vue.config.productionTip = false; //去生产环境的提示

new Vue({
  render: (h) => h(App),
  router, //配置路由器
}).$mount("#app");
// var a = 3;
