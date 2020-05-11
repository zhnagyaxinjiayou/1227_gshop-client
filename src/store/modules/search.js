// 管理搜索模块相关数据的vuex模块

import { reqProductList } from "@/api";
// 收集所有数据
const state = {
  productList: {}, //data是一个对象，搜索得到的商品列表相关数据的对象
};
// 更新数据
const mutations = {
  RECEIVE_PRODUCT_LIST(state, productList) {
    //   更新数据
    state.productList = productList;
  },
};
// 发请求（触发更新数据）接收保存新的商品列表数据
const actions = {
  // 获取商品列表数据的商品
  async getProductList({ commit }, searchParams) {
    const result = await reqProductList(searchParams);
    if (result.code === 200) {
      const productList = result.data;
      commit("RECEIVE_PRODUCT_LIST", productList);
    }
  },
};
// 计算属性
const getters = {};

export default { state, mutations, actions, getters };
