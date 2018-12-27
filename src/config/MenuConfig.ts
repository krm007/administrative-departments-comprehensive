import { menuArray } from "../component/MySider";

const MenuConfig: menuArray[] = [
  {
    name: "医疗服务多维监管",
    path: "/m-regulation",
    IconType: "apple",
    children: [
      { name: "综合业务监管", path: "/m-regulation/medicalServiceWatch", IconType: "star" },
      { name: "医院运营情况监管", path: "/m-regulation/hospital-operation", IconType: "star" },
      /*{ name: "检验检查互认业务监管", path: "/m-regulation/check-mutual", IconType: "star" },*/
      {
        name: "预约挂号业务监管",
        path: "/m-regulation/appointmentRegister",
        IconType: "star"
      },
      { name: "远程医疗业务监管", path: "/m-regulation/telemedicine-service", IconType: "star" },
      { name: "中医药服务项目监管", path: "/m-regulation/TCM-service-project", IconType: "star" },
      { name: "医务人员职业行为监管", path: "/m-regulation/medical-staff", IconType: "star" },
      { name: "医疗质量情况监管", path: "/m-regulation/medical-quality", IconType: "star" },
      { name: "医疗感染情况监管", path: "/m-regulation/medical-infection", IconType: "star" },
      { name: "合理用药业务监管", path: "/m-regulation/rational-business", IconType: "star" },
      { name: "医疗行为监管", path: "/m-regulation/medical-treatment", IconType: "star" },
      { name: "基本药物运行情况监管", path: "/m-regulation/essential-drugs", IconType: "star" }
    ]
  },
  {
    name: "医疗服务利用",
    path: "/medical-services",
    IconType: "apple",
    children: [{ name: "医疗服务利用监管", path: "/medical-services/utilization", IconType: "star" }]
  },
  {
    name: "医药费用",
    path: "/medical-expense",
    IconType: "apple",
    children: [{ name: "医药费用监管", path: "/medical-expense/regulatory", IconType: "star" }]
  },
  {
    name: "医疗质量与安全",
    path: "/medical-quality-safety",
    IconType: "apple",
    children: [{ name: "医疗质量与安全监管", path: "/medical-quality-safety/regulatory", IconType: "star" }]
  },
  {
    name: "医疗服务效率",
    path: "/efficiency-medical-services",
    IconType: "apple",
    children: [{ name: "医疗服务效率监管", path: "/efficiency-medical-services/regulatory", IconType: "star" }]
  }
];
export default MenuConfig;
