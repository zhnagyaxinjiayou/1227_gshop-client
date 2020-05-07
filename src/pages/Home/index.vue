<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor />
    <Floor />
    <Brand />
    <!-- <Floor /> -->
  </div>
</template>

<script>
import ListContainer from "./ListContainer/ListContainer";
import TodayRecommend from "./TodayRecommend/TodayRecommend";
import Rank from "./Rank/Rank";
import Like from "./Like/Like";
import Brand from "./Brand/Brand";
import Floor from "./Floor/Floor";

export default {
  name: "Home",
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
