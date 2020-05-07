/*
vuex最核心的管理对象

*/
import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";

// 声明使用vuex插件
Vue.use(Vuex);

const mutations = {
  test2(state) {
    //总state
  },
};
const actions = {};
const getters = {};
// 向外暴露store对象
export default new Vuex.Store({
  //   state, vuex集中性管理的所有状态，所有数据都在state中集中性管理
  mutations, //封装更新数据的方法
  actions, //发送ajax请求
  getters, //计算属性
  modules,
});
