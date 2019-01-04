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
    path: "/administrativeDepartment/hospitalFinancial/outpatientBillingFee",
    component: () => (
      <BocoTable title={"门诊开单费用统计"}  />
    )
  },{
    path: "/administrativeDepartment/hospitalFinancial/paymentOfOutpatient",
    component: () => (
      <BocoTable title={"门诊挂账统计"}  />
    )
  },{
    path: "/administrativeDepartment/hospitalFinancial/advancePaymentPatient",
    component: () => (
      <BocoTable title={"预交款病人明细"}  />
    )
  },{
    path: "/administrativeDepartment/hospitalFinancial/dischargePatientDepartment",
    component: () => (
      <BocoTable title={"出院病人病区科室汇总"}  />
    )
  },{
    path: "/administrativeDepartment/hospitalFinancial/hospitalPatientLedger",
    component: () => (
      <BocoTable title={"在院病人总账报表"}  />
    )
  },{
    path: "/administrativeDepartment/drugQuery/dugDeliveryAndStorage",
    component: () => (
      <BocoTable title={"药品收发存表"}  />
    )
  },{
    path: "/administrativeDepartment/drugQuery/pharmacyPayments",
    component: () => (
      <BocoTable title={"药库收支月报"}  />
    )
  },{
    path: "/administrativeDepartment/drugQuery/drugInventory",
    component: () => (
      <BocoTable title={"药品库存查询"}  />
    )
  },{
    path: "/administrativeDepartment/personalManagement/personnelQuery",
    component: () => (
      <BocoTable title={"人事统计查询"}  />
    )
  },{
    path: "/administrativeDepartment/generalAffairsManagement/departmentOfRecipients",
    component: () => (
      <BocoTable title={"科室领用分析"}  />
    )
  },{
    path: "/administrativeDepartment/generalAffairsManagement/warehouseInventory",
    component: () => (
      <BocoTable title={"库房库存分析"}  />
    )
  },{
    path: "/administrativeDepartment/generalAffairsManagement/equipmentList",
    component: () => (
      <BocoTable title={"在用设备清单"}  />
    )
  },{
    path: "/administrativeDepartment/medicalBusiness/outpatientEmergencyFlow",
    component: () => (
      <BocoTable title={"门急诊流量分析"}  />
    )
  },{
    path: "/administrativeDepartment/medicalBusiness/outpatientRegistration",
    component: () => (
      <BocoTable title={"门急诊挂号分析"}  />
    )
  },{
    path: "/administrativeDepartment/medicalBusiness/outpatientEmergencyPhysician",
    component: () => (
      <BocoTable title={"门急诊医师工作量统计"}  />
    )
  },{
    path: "/administrativeDepartment/medicalBusiness/outpatientEmergencyBusiness",
    component: () => (
      <BocoTable title={"医保数据统计"}  />
    )
  },{
    path: "/administrativeDepartment/medicalBusiness/outpatientEmergencyIllness",
    component: () => (
      <BocoTable title={"门急诊疾病统计分析"}  />
    )
  },{
    path: "/administrativeDepartment/medicalBusiness/medicalLaboratory",
    component: () => (
      <BocoTable title={"医技科室工作量统计"}  />
    )
  },{
    path: "/administrativeDepartment/medicalBusiness/surgicalDepartmentWorkload",
    component: () => (
      <BocoTable title={"手术科室工作量统计"}  />
    )
  },{
    path: "/administrativeDepartment/medicalBusiness/distributionPatients",
    component: () => (
      <BocoTable title={"在院病人分布状况"}  />
    )
  },{
    path: "/administrativeDepartment/medicalBusiness/distributionDisease",
    component: () => (
      <BocoTable title={"在院疾病分布情况"}  />
    )
  },{
    path: "/administrativeDepartment/medicalBusiness/criticalPatients",
    component: () => (
      <BocoTable title={"在院危急病人清单"}  />
    )
  },{
    path: "/administrativeDepartment/medicalBusiness/dischargeDeath",
    component: () => (
      <BocoTable title={"出院死亡病人清单"}  />
    )
  },{
    path: "/administrativeDepartment/medicalBusiness/diseaseHospital",
    component: () => (
      <BocoTable title={"出院疾病统计分析"}  />
    )
  },{
    path: "/administrativeDepartment/medicalBusiness/bedUsing",
    component: () => (
      <BocoTable title={"床位使用状况分析"}  />
    )
  },{
    path: "/administrativeDepartment/patientManagement/checkInpatientInformation",
    component: () => (
      <BocoTable title={"查询住院病人资料"}  />
    )
  },{
    path: "/administrativeDepartment/communicableDiseasesControl/query",
    component: () => (
      <BocoTable title={"传染病统计查询"}  />
    )
  },{
    path: "/administrativeDepartment/slowDiseaseManagement/query",
    component: () => (
      <BocoTable title={"慢病统计查询"}  />
    )
  },{
    path: "/administrativeDepartment/criticalPatients/query",
    component: () => (
      <BocoTable title={"危重病人统计查询"}  />
    )
  },{
    path: "/administrativeDepartment/telemedicine/query",
    component: () => (
      <BocoTable title={"远程医疗统计查询"}  />
    )
  },{
    path: "/administrativeDepartment/dualReferral/query",
    component: () => (
      <BocoTable title={"双向转诊统计查询"}  />
    )
  },{
    path: "/administrativeDepartment/statementManagement/query",
    component: () => (
      <BocoTable title={"报表管理统计查询"}  />
    )
  },
  /** ****************** */
  {
    path: "/decisionAnalysisReport/comprehensiveQuery/outpatient",
    component: () => (
      <BocoTable title={"门诊就诊病人查询"}  />
    )
  },{
    path: "/decisionAnalysisReport/comprehensiveQuery/inpatient",
    component: () => (
      <BocoTable title={"在院病人查询"}  />
    )
  },{
    path: "/decisionAnalysisReport/comprehensiveQuery/remoteImage",
    component: () => (
      <BocoTable title={"远程影像查询"}  />
    )
  },{
    path: "/decisionAnalysisReport/comprehensiveQuery/test",
    component: () => (
      <BocoTable title={"检验查询"}  />
    )
  },{
    path: "/decisionAnalysisReport/sub-account/registration",
    component: () => (
      <BocoTable title={"挂号分账"}  />
    )
  },{
    path: "/decisionAnalysisReport/sub-account/finance",
    component: () => (
      <BocoTable title={"财务分账"}  />
    )
  },{
    path: "/decisionAnalysisReport/sub-account/inHospital",
    component: () => (
      <BocoTable title={"住院分账"}  />
    )
  },{
    path: "/decisionAnalysisReport/dataMining/patients",
    component: () => (
      <BocoTable title={"病人构成分析"}  />
    )
  },{
    path: "/decisionAnalysisReport/dataMining/patientsTime",
    component: () => (
      <BocoTable title={"病人就诊时间分析"}  />
    )
  },{
    path: "/decisionAnalysisReport/dataMining/patientsAccount",
    component: () => (
      <BocoTable title={"病人费用构成分析"}  />
    )
  },{
    path: "/decisionAnalysisReport/dataMining/compareAccount",
    component: () => (
      <BocoTable title={"同期费用对比分析"}  />
    )
  },{
    path: "/decisionAnalysisReport/dataMining/singleDisease",
    component: () => (
      <BocoTable title={"单病种分析"}  />
    )
  },{
    path: "/decisionAnalysisReport/aidDecisionMaking/hospitalPopulation",
    component: () => (
      <BocoTable title={"住院人口报表统计"}  />
    )
  },{
    path: "/decisionAnalysisReport/aidDecisionMaking/dischargePopulation",
    component: () => (
      <BocoTable title={"出院人口报表统计"}  />
    )
  },{
    path: "/decisionAnalysisReport/aidDecisionMaking/diseaseClass",
    component: () => (
      <BocoTable title={"病种分类统计"}  />
    )
  },{
    path: "/criticalValue/doctorWorkstation",
    component: () => (
      <BocoTable title={"医生工作站危急值"}  />
    )
  },{
    path: "/criticalValue/nurseWorkstation",
    component: () => (
      <BocoTable title={"护士工作站危急值"}  />
    )
  },{
    path: "/criticalValue/clinicalValidation",
    component: () => (
      <BocoTable title={"临床检验实验室危急值"}  />
    )
  },

];

export default RegulationConfigs;
