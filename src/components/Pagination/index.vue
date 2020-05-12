<template>
  <div class="pagination">
    <!-- 当前页为1的时候不能操作 -->
    <button
      :disabled="myCurrentPage === 1"
      @click="setCurrentPage(myCurrentPage - 1)"
    >
      上一页
    </button>
    <!-- start要大于1才显示 -->
    <button v-if="startEnd.start > 1" @click="setCurrentPage(1)">1</button>
    <!-- start要大于2才显示 -->
    <button disabled v-if="startEnd.start > 2">···</button>
    <!-- 连续代码页[start,end] -->
    <!-- v-for的优先级高于v-if:执行v-for的遍历，每遍历一个再进行v-if的判断 -->
    <button
      v-for="num in startEnd.end"
      v-if="num >= startEnd.start"
      :class="{ active: num === myCurrentPage }"
      @click="setCurrentPage(num)"
    >
      {{ num }}
    </button>
    <!-- 只有end小于totalPages-1 -->
    <!-- 接数页码  小于总页码数-1 就是 -->
    <button disabled v-if="startEnd.end < totalPages - 1">···</button>
    <!-- 只有在end小于totalPages -->
    <button
      v-if="startEnd.end < totalPages"
      @click="setCurrentPage(totalPages)"
    >
      {{ totalPages }}
    </button>
    <!-- 当当前页码为totalPages时不能操作-->
    <button
      :disabled="myCurrentPage === totalPages"
      @click="setCurrentPage(myCurrentPage + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px" disabled>共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  //   1.设置从外部接收的数据
  props: {
    // 当前页码
    currentPage: {
      type: Number,
      default: 1,
    },
    // 每页数量
    pageSize: {
      tepe: Number,
      default: 5,
    },
    // 总数量
    total: {
      tepe: Number,
      default: 0,
    },
    // 连续代码数
    showPageNo: {
      tepe: Number,
      default: 5,
    },
  },

  data() {
    return {
      //2.将外部传入的当前页码作为当前组件的当前页码初始值
      myCurrentPage: this.currentPage,
    };
  },
  //   监视
  watch: {
    currentPage(value) {
      //当父组件改变了其它对应的当前页面数据时，此时回调就会自动调用
      //更新内部的当前页码
      this.myCurrentPage = value;
    },
  },

  computed: {
    //   总页数
    // 依赖数据 总数量total 和 每页数量pageSize
    totalPages() {
      // 取出数据
      const { total, pageSize } = this;
      //   Math.ceil向上取整
      return Math.ceil(total / pageSize);
    },
    // 计算连续页码的start和end
    startEnd() {
      let start, end;
      // 取出依赖数据
      const { myCurrentPage, showPageNo, totalPages } = this;
      //   计算start 当前页面-连续代码数（向下取整）
      start = myCurrentPage - Math.floor(showPageNo / 2);
      //   如果计算出的start为0
      // 如果start小于1, 修改为1
      if (start < 0) {
        start = 1;
      }
      //   计算end
      // 起始页面+连续数据-1
      end = start + showPageNo - 1;
      // 如果end超出了totalPages，修正为totalPages
      if (end > totalPages) {
        end = totalPages;
        // 根据连续页码数据来修正stare
        start = end - showPageNo + 1;
        // 如果start小于1，修正为1
        if (start < 1) {
          start = 1;
        }
      }
      return { start, end };
    },
  },

  methods: {
    //   设置新的当前页码
    setCurrentPage(currentPage) {
      // 一定要是更新自己data中的当前页码, 而不更新接收的currentPage属性
      this.myCurrentPage = currentPage;
      // 分发vue自定义事件: 通知父组件, 当前页码变化了
      this.$emit("currentChange", currentPage);
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
