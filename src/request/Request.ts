import service from "./Service";

/** 饼图 */

export function getPieData() {
    const data=[];
    data.push([

    ]);
    return data;
}
// export function getPieData() {
//     return service.get("");
// }
export function shuangxiangPagePost(params:any) {
    return service.post("/shuangXiangZhuanZhen/page",{},{params})
}
/**
 * 请求双向转诊弹出层数据
 * @param params
 */
export function shuangxiangModalPost(params:any) {
    return service.post("zhuanZhenMingXi/pageJieShouXiaZhuan",{},{params})
}