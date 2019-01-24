import service from "./Service";

/** 饼图 */

export function getPieData() {
  const data = [];
  data.push([]);
  return data;
}
// export function getPieData() {
//     return service.get("");
// }
/**
 * 双向转诊主表
 * @param params
 */
export function shuangxiangPagePost(params: any) {
  return service.post("/shuangXiangZhuanZhen/page", {}, { params });
}
/**
 * 请求双向转诊弹出层数据
 * @param params
 */
export function shuangxiangModalPost(params: any) {
  return service.post("zhuanZhenMingXi/pageJieShouXiaZhuan", {}, { params });
}
/**
 * 远程影像
 * @param params
 */
export function yuanchengPagePost(params: any) {
  return service.post("/quYuYiShengGongZuo/page", {}, { params });
}
/**
 * 请求双向转诊弹出层数据
 * @param params
 */
export function yuanChengModalPost(params: any) {
  return service.post("quYuYiShengMingXi/page", {}, { params });
}
/**
 * 检验工作量统计
 * @param params
 */
export function jianYanChaXunPagePost(params: any) {
  return service.post("heJi/ZongHeChaXun/queryPage", {}, { params });
}
/**
 * 请求双向转诊弹出层数据
 * @param params
 */
export function jianYanChaXunModalPost(params: any) {
  return service.post("yiShengMingXi/page", {}, { params });
}
/**
 * 获取菜单列表
 */
export function getMenuList() {
  return service.get("/common/menuList");
}
