// 使用mockjs来mock接口
import Mock from "mockjs";
import banners from "./banners.json"; //得到的是一个js数组
import floors from "./floors.json"; //得到的是一个js数组

// 模拟返回轮播图数据的接口
Mock.mock("/mock/banners", { code: 200, data: banners });

// 模拟一个返回所有楼层数据的接口
Mock.mock("/mock/floors", { code: 200, data: floors });
