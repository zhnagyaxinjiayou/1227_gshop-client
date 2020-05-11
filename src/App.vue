<template>
  <div>
    <Header />
    <!-- 显示当前配置的路由 -->
    <router-view></router-view>
    <!-- 所有的组件都多了一个属性$route，以下是$route里面的功能path路径 显示和隐藏-->
    <!-- <Footer v-show="$route.path !== '/register' && $route.path!=='/login'" /> -->
    <Footer v-show="!$route.meta.isHideFooter" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import { reqBaseCategoryList, reqLogin } from "@/api";
import { reqFloors } from "@/api";
export default {
  name: "APP",

  async mounted() {
    // 测试接口请求函数
    // const result = await reqBaseCategoryList();
    // console.log("result", result);
    // const result2 = await reqLogin("13700000000", "111111");
    // console.log("result2", result2);
    // console.log(this.$store.state);
    //  测试使用mock接口 对应的接口请函数
    // const result = await reqFloors();
    // console.log("mock result", result);
    // 测试针对muck接口的vuex代码
    // this.$store.dispatch("getFloors");
    // this.$store.dispatch("getBanners");

    //通过异步action获取异步获取数据到vuex的state中
    this.$store.dispatch("getBaseCategoryList");
  },

  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less" scoped></style>
