import {RouteConfig} from "react-router-config";
// import * as loadable from "react-loadable";
import BocoTable from "../views/BocoTable";
import * as React from "react";
// import Loading from "../component/Loading";

// const ComprehensiveWorkWatch = loadable({
//     loader: () => import("../views/ComprehensiveWorkWatch"),
//     loading: Loading
// });
const RegulationConfigs: RouteConfig[] = [
  {
    path: "/hospitalFinancial/outpatientBillingFee",
    component: () => (
      <BocoTable title={"门诊开单费用统计"}  />
    )
  },{
    path: "/hospitalFinancial/paymentOfOutpatient",
    component: () => (
      <BocoTable title={"门诊挂账统计"}  />
    )
  },{
    path: "/hospitalFinancial/advancePaymentPatient",
    component: () => (
      <BocoTable title={"预交款病人明细"}  />
    )
  },{
    path: "/hospitalFinancial/dischargePatientDepartment",
    component: () => (
      <BocoTable title={"出院病人病区科室汇总"}  />
    )
  },{
    path: "/hospitalFinancial/hospitalPatientLedger",
    component: () => (
      <BocoTable title={"在院病人总账报表"}  />
    )
  },{
    path: "/drugQuery/dugDeliveryAndStorage",
    component: () => (
      <BocoTable title={"药品收发存表"}  />
    )
  },{
    path: "/drugQuery/pharmacyPayments",
    component: () => (
      <BocoTable title={"药库收支月报"}  />
    )
  },{
    path: "/drugQuery/drugInventory",
    component: () => (
      <BocoTable title={"药品库存查询"}  />
    )
  },{
    path: "/personalManagement/personnelQuery",
    component: () => (
      <BocoTable title={"人事管理查询"}  />
    )
  },{
    path: "/generalAffairsManagement/departmentOfRecipients",
    component: () => (
      <BocoTable title={"科室领用分析"}  />
    )
  },{
    path: "/generalAffairsManagement/warehouseInventory",
    component: () => (
      <BocoTable title={"库房库存分析"}  />
    )
  },{
    path: "/generalAffairsManagement/equipmentList",
    component: () => (
      <BocoTable title={"在用设备清单"}  />
    )
  },{
    path: "/medicalBusiness/outpatientEmergencyFlow",
    component: () => (
      <BocoTable title={"门急诊流量分析"}  />
    )
  },{
    path: "/medicalBusiness/outpatientRegistration",
    component: () => (
      <BocoTable title={"门急诊挂号分析"}  />
    )
  },{
    path: "/medicalBusiness/outpatientEmergencyPhysician",
    component: () => (
      <BocoTable title={"门急诊医师工作量统计"}  />
    )
  },{
    path: "/medicalBusiness/outpatientEmergencyBusiness",
    component: () => (
      <BocoTable title={"门急诊业务状况分析"}  />
    )
  },{
    path: "/medicalBusiness/outpatientEmergencyIllness",
    component: () => (
      <BocoTable title={"门急诊疾病统计分析"}  />
    )
  },{
    path: "/medicalBusiness/medicalLaboratory",
    component: () => (
      <BocoTable title={"医技科室工作量统计"}  />
    )
  },{
    path: "/medicalBusiness/surgicalDepartmentWorkload",
    component: () => (
      <BocoTable title={"手术科室工作量统计"}  />
    )
  },{
    path: "/medicalBusiness/distributionPatients",
    component: () => (
      <BocoTable title={"在院病人分布状况"}  />
    )
  },{
    path: "/medicalBusiness/distributionDisease",
    component: () => (
      <BocoTable title={"在院疾病分布状况"}  />
    )
  },{
    path: "/medicalBusiness/criticalPatients",
    component: () => (
      <BocoTable title={"在院危急病人清单"}  />
    )
  },{
    path: "/medicalBusiness/dischargeDeath",
    component: () => (
      <BocoTable title={"出院死亡病人清单"}  />
    )
  },{
    path: "/medicalBusiness/diseaseHospital",
    component: () => (
      <BocoTable title={"出院疾病统计分析"}  />
    )
  },{
    path: "/medicalBusiness/bedUsing",
    component: () => (
      <BocoTable title={"床位使用状况分析"}  />
    )
  },{
    path: "/patientManagement/checkInpatientInformation",
    component: () => (
      <BocoTable title={"查询住院病人资料"}  />
    )
  },{
    path: "/communicableDiseasesControl/query",
    component: () => (
      <BocoTable title={"传染病统计查询"}  />
    )
  },{
    path: "/slowDiseaseManagement/query",
    component: () => (
      <BocoTable title={"慢病统计查询"}  />
    )
  },{
    path: "/criticalPatients/query",
    component: () => (
      <BocoTable title={"危重病人统计查询"}  />
    )
  },{
    path: "/telemedicine/query",
    component: () => (
      <BocoTable title={"远程医疗统计查询"}  />
    )
  },{
    path: "/dualReferral/query",
    component: () => (
      <BocoTable title={"双向转诊统计查询"}  />
    )
  },{
    path: "/statementManagement/query",
    component: () => (
      <BocoTable title={"报表管理统计查询"}  />
    )
  },

];

export default RegulationConfigs;
