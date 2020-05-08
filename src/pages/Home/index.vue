<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <!-- :floor="floor"数据传给floor组件 -->
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor" />
    <!-- <Floor /> -->
    <Brand />
  </div>
</template>

<script>
// 读取数据
import { mapState } from "vuex";
import ListContainer from "./ListContainer/ListContainer";
import TodayRecommend from "./TodayRecommend/TodayRecommend";
import Rank from "./Rank/Rank";
import Like from "./Like/Like";
import Brand from "./Brand/Brand";
import Floor from "./Floor/Floor";

export default {
  name: "Home",
  mounted() {
    // 分发cation请求获取banners和Floors数据到state中
    this.$store.dispatch("getBanners");
    this.$store.dispatch("getFloors");
  },
  computed: {
    // 展开数据
    ...mapState({
      floors: (state) => state.home.floors,
    }),
  },
  components: {
    ListContainer,
    TodayRecommend,
    Brand,
    Floor,
    Like,
    Rank,
  },
};
</script>

<style lang="less" scoped></style>
