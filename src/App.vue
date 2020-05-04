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

export default {
  name: "APP",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less" scoped></style>
