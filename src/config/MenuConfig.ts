import { menuArray } from "../component/MySider";

const MenuConfig: menuArray[] = [
  {
    name: "医院财务报表",
    IconType: "apple",
    children: [
      { name: "门诊开单费用统计", path: "/m-regulation/medicalServiceWatch", IconType: "star" },
    ]
  },
  {
    name: "药品查询",
    IconType: "apple",
    children: [{ name: "药品采购", path: "/medical-services/utilization", IconType: "star" }]
  },
  {
    name: "人事管理",
    IconType: "apple",
    children: [{ name: "人事管理查询", path: "/medical-expense/regulatory", IconType: "star" }]
  },
    {
        name: "总务管理",
        IconType: "apple",
        children: [{name: "科室领用分析", path: "/medical-quality-safety/regulatory", IconType: "star"}]
    }
];
export default MenuConfig;
