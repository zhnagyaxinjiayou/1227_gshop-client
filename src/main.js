//入口文件
import Vue from "vue";
// 引入样式
import "swiper/css/swiper.min.css"; //如果要找包里面的其它文件就要写具体路径
// import App from "./App.vue";
import App from "@/App";
// 引入路由器
import router from "./router";
import store from "./store";
import Pagination from "@/components/Pagination";
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import "./mock/mockServer";

Vue.config.productionTip = false; //去生产环境的提示
// 全局注册组件
Vue.component("TypeNav", TypeNav);
Vue.component("Carousel", Carousel);
Vue.component("Pagination", Pagination);

// 给Vue原型对象指定事件总线对象（vm对象）
// Vue.prototype.$bus = new Vue();

new Vue({
  // beforCreate() {
  //   // 给Vue原型对象指定事件总线对象（当前vm对象）
  //   Vue.prototype.$bus = this;
  // },
  beforeCreate() {
    // 给Vue原型对象指定事件总线对象(当前vm对象)
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  router, //配置路由器
  store, //配置vuex的store  所有组件对象都可以通过$store属性得到store对象
}).$mount("#app");
