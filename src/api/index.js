/*
包含所有接口请求函数的模块

*/
import ajax from "./ajax";
import mockAjax from "./mockAjax";

export function reqBaseCategoryList() {
  //   return ajax("/product/reqBaseCategoryList");
  return ajax({
    method: "GET",
    // url: "/product/reqBaseCategoryList",
    url: "/product/getBaseCategoryList",
  });
  // return ajax.get("/product/reqBaseCategoryList");
}
// 请求登陆
// POST

export function reqLogin(mobile, password) {
  return ajax({
    method: "POST",
    url: "/user/passport/login",
    data: { mobile, password },
  });
}
// return ajax.post("/user/passport/login,{ mobile, password }");

export const reqBanners = () => mockAjax("/banners");
export const reqFloors = () => mockAjax("/floors");
// 根据搜索的条件参数对象获取商品列表数据
export const reqProductList = (searchParams) =>
  ajax({
    url: "/list",
    method: "POST",
    data: searchParams, //searchParams参数的意思
  });

// reqProductList({
//   category3Id: "61",
//   categoryName: "手机",
//   keyword: "小米",
//   order: "1:desc",
//   pageNo: 1,
//   pageSize: 10,
//   props: ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//   trademark: "4:小米",
// });
