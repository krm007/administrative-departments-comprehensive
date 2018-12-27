import {RouteConfig} from "react-router-config";
import * as loadable from "react-loadable";
import BocoTable from "../views/BocoTable";
import * as React from "react";
import Loading from "../component/Loading";
import DischargePatientDisease from "../views/chart/DischargePatientDisease";
import MutipleCharts from "../views/chart/MutipleCharts";

const ComprehensiveWorkWatch = loadable({
    loader: () => import("../views/ComprehensiveWorkWatch"),
    loading: Loading
});
const RegulationConfigs: RouteConfig[] = [
    {
        path: "/m-regulation/medicalServiceWatch",
        component: () => <ComprehensiveWorkWatch title={"常规综合统计指标监测"} url={"StatisticalMonitor"}/>,
    },
    {
        path: "/m-regulation/hospital-operation",
        component: () => <ComprehensiveWorkWatch title={"医院运营情况监管"} url={"OperationMonitor"}/>,
    },
  {
    path: "/m-regulation/telemedicine-service",
    component: () => (
      <BocoTable title={"远程医疗业务监管"} url={"TelemedicineMonitor"} />
    )
  },
  {
    path: "/m-regulation/appointmentRegister",
    component: () => (
      <BocoTable title={"预约挂号业务监管"} url={"RegistrationMonitor"} />
    )
  },
  {
    path: "/m-regulation/medical-staff",
    component: () => (
      <BocoTable title={"医务人员职业行为监管"} url={"StaffBehaviorMonitor"} />
    )
  },
  {
    path: "/m-regulation/medical-quality",
    component: () => (
      <BocoTable title={"医疗质量情况监管"} url={"MedicalQualityMonitor"} />
    )
  },
  {
    path: "/m-regulation/medical-infection",
    component: () => (
      <BocoTable title={"医疗感染情况监管"} url={"InfectionMonitor"} />
    )
  },
  {
    path: "/m-regulation/rational-business",
    component: () => (
      <BocoTable
        title={"合理用药业务监管"}
        url={"MedicalBehaviorMonitor"}
        tableName={"rationalDrugUse"}
      />
    )
  },
  {
    path: "/m-regulation/medical-treatment",
    component: () => (
       <ComprehensiveWorkWatch title={"医疗行为检测指标"} url={"MedicalBehaviorMonitor"}/>
    )
  },
  {
    path: "/m-regulation/essential-drugs",
    component: () => <BocoTable title={"基本药物运行情况监管"} url={"bsoa"} />
  },
  {
    path: "/medical-services/utilization",
    component: () => (
      <BocoTable
        title={"医疗服务利用监管"}
        url={"ServiceUsingMonitor"}
        chart={<DischargePatientDisease />}
        chartTitle={"出院病人疾病构成图"}
      />
    )
  },
  {
    path: "/medical-expense/regulatory",
    component: () => (
      <BocoTable
        title={"医药费用监管"}
        url={"MedicalBehaviorMonitor"}
        chart={<MutipleCharts />}
        chartTitle={"医疗费用分析"}
        tableName={"hospitalizationCosts"}
      />
    )
  },
  {
    path: "/medical-quality-safety/regulatory",
    component: () => (
      <BocoTable title={"医疗质量与安全监管"} url={"QualitySafeMonitor"} />
    )
  },
  {
    path: "/efficiency-medical-services/regulatory",
    component: () => (
      <BocoTable title={"医疗服务效率监管"} url={"ServiceEfficiencyMonitor"} />
    )
  },
  {
    path: "/m-regulation/TCM-service-project",
    component: () => (
      <BocoTable title={"中医药服务项目监管"} url={"ChineseMedicineMonitor"} />
    )
  }
];

export default RegulationConfigs;
