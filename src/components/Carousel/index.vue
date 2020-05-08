<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in carouselList" :key="item.id">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
// 引入swiper，包文件夹：跟目录下有一个package.json文件
import Swiper from "swiper"; //去node_modules文件中找swiper文件夹，一个包就是一个文件夹，根据package.json的main来确定要加载的模块

export default {
  name: "Carousel",

  props: {
    // 声明接收属性
    carouselList: Array,
  },
  //   第一种解决方法：floors不更新的问题
  //   mounted() {
  //     //   解决floors不更新的方法：判断组件是否有值，如果有就可以调用Swiper，floors里是有值得，因此可以成功调用Swiper
  //     if (this.carouselList.length > 0) {
  //       //数据列表显示
  //       //   直接创建swiper对象
  //       this.initSwiper();
  //     }
  //   },
  // banners ==>[]创建==>[...]更新组件对象
  // floors ==> []==>[...]创建  watch初始不会调用，只有更新数据才会调用，floors并没有更新数据，所以没有执行Swiper
  //   第二种解决方法：floors不更新的问题
  watch: {
    carouselList: {
      handler(value) {
        //banners通过此方式创建的swiper
        // 调用Swiper数据
        console.log("watch carouselList", value.length);
        //   如果有数据才去创建延迟swiper
        if (value.length > 0) {
          this.$nextTick(() => {
            this.initSwiper();
          });
        }
      },
      immediate: true, //初始显示之前立即调用一次
    },
  },
  //   第一种解决方法：floors不更新的问题
  //   watch: {
  //     // 刚开始是没有数据的，后来才有数据，只要更新数据界面就会自动更新(称之为数据绑定)，但vue更新界面是异步的
  //     // 我们更新的数据==>立即同步调用监视的回调函数（界面还没有更新，列表数据还没有显示）==>异步更新界面
  //     carouselList(value) {
  //       //banners通过此方式创建的swiper
  //       // 调用Swiper数据
  //       console.log("watch carouselList", value.length);
  //       //   如果有数据才去创建延迟swiper
  //       if (value.length > 0) {
  //         // 使用这种方法：
  //         // this.initSwiper(); //此时列表数据还没有显示，没有轮播效果

  //         //  nextTick()需要在数据更新之后界面更新前我们调用
  //         // 指定的回调函数什么时候执行？这次数据更新导致界面更新完成后立即执行
  //         this.$nextTick(() => {
  //           this.initSwiper();
  //         });
  //       }
  //     },
  //   },

  methods: {
    initSwiper() {
      // 创建Swiper实例对象：必须在列表数据显示之后创建才有正常轮播效果
      // .swiper-container选择器（实现Swiper代码的根元素是谁）
      new Swiper(this.$refs.swiper, {
        // direction: "vertical", // 垂直切换选项
        // direction: "horizontal", // 水平切换，默认就是这个值

        loop: true, // 循环模式选项
        // swiper代码
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
