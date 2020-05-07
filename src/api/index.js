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
