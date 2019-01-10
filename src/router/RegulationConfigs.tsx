import { RouteConfig } from "react-router-config";
import * as loadable from "react-loadable";
import BocoTable from "../views/BocoTable";
import * as React from "react";
import NormalTableTitleConfig from "../config/NormalTableTitleConfig";
import Loading from "../component/Loading";

const ChronicDiseaseTable = loadable({
  loader: () => import("../views/ChronicDiseaseTable"),
  loading: Loading
});
const TelemedicineSystemTable = loadable({
  loader: () => import("../views/TelemedicineSystemTable"),
  loading: Loading
});
const RemoteImageQueryTable = loadable({
  loader: () => import("../views/RemoteImageQueryTable"),
  loading: Loading
});
const CheckQueryTable = loadable({
  loader: () => import("../views/CheckQueryTable"),
  loading: Loading
});
const RegisteredFashionableTable = loadable({
  loader: () => import("../views/RegisteredFashionableTable"),
  loading: Loading
});
const FinancialCollectingTable = loadable({
  loader: () => import("../views/FinancialCollectingTable"),
  loading: Loading
});
const InHospitalFashionableTable = loadable({
  loader: () => import("../views/InHospitalFashionableTable"),
  loading: Loading
});
const PharmacyPaymentsTable = loadable({
  loader: () => import("../views/PharmacyPaymentsTable"),
  loading: Loading
});
const InfectiousDiseaseStatisticsTable = loadable({
  loader: () => import("../views/InfectiousDiseaseStatisticsTable"),
  loading: Loading
});
const RegulationConfigs: RouteConfig[] = [
  {
    path: "/administrativeDepartment/hospitalFinancial/outpatientBillingFee",
    component: () => (
      <BocoTable
        title={"门诊开单费用统计"}
        tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
      />
    )
  },
  {
    path: "/administrativeDepartment/hospitalFinancial/paymentOfOutpatient",
    component: () => (
      <BocoTable
        title={"门诊挂账统计"}
        tableTitle={NormalTableTitleConfig.get("MenZhenGuaZhangTongJi")}
      />
    )
  },
  {
    path: "/administrativeDepartment/hospitalFinancial/advancePaymentPatient",
    component: () => (
      <BocoTable
        title={"预交款病人明细"}
        url={"/yuJiaoKuanBingRenMingXi/page"}
        tableTitle={NormalTableTitleConfig.get("YuJiaoKuanBingRenMingXi")}
        formStructure={[
          {
            value: "jiaoKuanFangShi",
            text: "交款方式",
            url: "/yuJiaoKuanBingRenMingXi/getSelect"
          }
        ]}
      />
    )
  },
  {
    path:
      "/administrativeDepartment/hospitalFinancial/dischargePatientDepartment",
    component: () => (
      <BocoTable
        title={"出院病人病区科室汇总"}
        tableTitle={NormalTableTitleConfig.get("ChuYuanBingRenBingQu")}
      />
    )
  },
  {
    path: "/administrativeDepartment/hospitalFinancial/hospitalPatientLedger",
    component: () => (
      <BocoTable
        title={"在院病人总账报表"}
        tableTitle={NormalTableTitleConfig.get("ZaiYuanBingRenZongZhang")}
      />
    )
  },
  {
    path: "/administrativeDepartment/drugQuery/dugDeliveryAndStorage",
    component: () => (
      <BocoTable
        title={"药品收发存表"}
        tableTitle={NormalTableTitleConfig.get("YaoPinShouFaCunBiao")}
        formStructure={[
          {
            value: "name",
            text: "库房",
            url: ""
          },
          {
            value: "name",
            text: "药品类型",
            url: ""
          },
          {
            value: "name",
            text: "毒理分类",
            url: ""
          }
        ]}
      />
    )
  },
  {
    path: "/administrativeDepartment/drugQuery/pharmacyPayments",
    component: PharmacyPaymentsTable
  },
  {
    path: "/administrativeDepartment/drugQuery/drugInventory",
    component: () => (
      <BocoTable
        title={"药品库存查询"}
        tableTitle={NormalTableTitleConfig.get("YaoPinKuCunChaXun")}
        formStructure={[
          {
            value: "name",
            text: "选择库房",
            url: ""
          }
        ]}
      />
    )
  },
  {
    path: "/administrativeDepartment/personalManagement/personnelQuery",
    component: () => (
      <BocoTable
        title={"人事统计查询"}
        tableTitle={NormalTableTitleConfig.get("RenShiTongJiChaXun")}
        formStructure={[
          {
            value: "name",
            text: "选择科室",
            url: ""
          }
        ]}
      />
    )
  },
  {
    path:
      "/administrativeDepartment/generalAffairsManagement/departmentOfRecipients",
    component: () => <BocoTable title={"科室领用分析"} />
  },
  {
    path:
      "/administrativeDepartment/generalAffairsManagement/warehouseInventory",
    component: () => <BocoTable title={"库房库存分析"} />
  },
  {
    path: "/administrativeDepartment/generalAffairsManagement/equipmentList",
    component: () => <BocoTable title={"在用设备清单"} />
  },
  {
    path: "/administrativeDepartment/medicalBusiness/outpatientEmergencyFlow",
    component: () => (
      <BocoTable
        title={"门急诊流量分析"}
        tableTitle={NormalTableTitleConfig.get("MenZhenRiZhi")}
        formStructure={[
          {
            value: "name",
            text: "就诊医院",
            url: ""
          },
          {
            value: "name",
            text: "就诊科室",
            url: ""
          }
        ]}
      />
    )
  },
  {
    path: "/administrativeDepartment/medicalBusiness/outpatientRegistration",
    component: () => (
      <BocoTable
        title={"门急诊挂号分析"}
        tableTitle={NormalTableTitleConfig.get("GuaHaoJiLu")}
        formStructure={[
          {
            value: "name",
            text: "就诊科室",
            url: ""
          }
        ]}
      />
    )
  },
  {
    path:
      "/administrativeDepartment/medicalBusiness/outpatientEmergencyPhysician",
    component: () => (
      <BocoTable
        title={"门急诊医师工作量统计"}
        tableTitle={NormalTableTitleConfig.get("YiShiGongZuoLiangTongJi")}
      />
    )
  },
  {
    path:
      "/administrativeDepartment/medicalBusiness/outpatientEmergencyBusiness",
    component: () => (
      <BocoTable
        title={"医保数据统计"}
        tableTitle={NormalTableTitleConfig.get("YiBaoShuJuTongJi")}
        formStructure={[
          {
            value: "name",
            text: "结算类型",
            url: ""
          }
        ]}
      />
    )
  },
  {
    path:
      "/administrativeDepartment/medicalBusiness/outpatientEmergencyIllness",
    component: () => (
      <BocoTable
        title={"门急诊疾病统计分析"}
        tableTitle={NormalTableTitleConfig.get("MenJiZhenZhenDuan")}
      />
    )
  },
  {
    path: "/administrativeDepartment/medicalBusiness/medicalLaboratory",
    component: () => (
      <BocoTable
        title={"医技科室工作量统计"}
        tableTitle={NormalTableTitleConfig.get("YiJiKeShiGongZuoLiang")}
        formStructure={[
          {
            value: "name",
            text: "单据类型",
            url: ""
          },
          {
            value: "name",
            text: "门诊住院",
            url: ""
          }
        ]}
      />
    )
  },
  {
    path:
      "/administrativeDepartment/medicalBusiness/surgicalDepartmentWorkload",
    component: () => (
      <BocoTable
        title={"手术科室工作量统计"}
        tableTitle={NormalTableTitleConfig.get("ShouShuKeShiGongZuoLiang")}
      />
    )
  },
  {
    path: "/administrativeDepartment/medicalBusiness/distributionPatients",
    component: () => (
      <BocoTable
        title={"在院病人分布状况"}
        tableTitle={NormalTableTitleConfig.get("ZaiYuanBingRenFenBu")}
      />
    )
  },
  {
    path: "/administrativeDepartment/medicalBusiness/distributionDisease",
    component: () => (
      <BocoTable
        title={"在院疾病分布情况"}
        tableTitle={NormalTableTitleConfig.get("ZaiYuanJiBingFenBu")}
        formStructure={[
          {
            value: "name",
            text: "诊断名称",
            url: ""
          }
        ]}
      />
    )
  },
  {
    path: "/administrativeDepartment/medicalBusiness/criticalPatients",
    component: () => (
      <BocoTable
        title={"在院危急病人清单"}
        tableTitle={NormalTableTitleConfig.get("ZaiYuanWeiJiBingRen")}
      />
    )
  },
  {
    path: "/administrativeDepartment/medicalBusiness/dischargeDeath",
    component: () => (
      <BocoTable
        title={"出院死亡病人清单"}
        tableTitle={NormalTableTitleConfig.get("ChuYuanSiWangBingRen")}
      />
    )
  },
  {
    path: "/administrativeDepartment/medicalBusiness/diseaseHospital",
    component: () => (
      <BocoTable
        title={"出院疾病统计分析"}
        tableTitle={NormalTableTitleConfig.get("ZaiYuanJiBingFenBu")}
        formStructure={[
          {
            value: "name",
            text: "诊断名称",
            url: ""
          }
        ]}
      />
    )
  },
  {
    path: "/administrativeDepartment/medicalBusiness/bedUsing",
    component: () => (
      <BocoTable
        title={"床位使用状况分析"}
        tableTitle={NormalTableTitleConfig.get("ChuangWeiShiYong")}
      />
    )
  },
  {
    path:
      "/administrativeDepartment/patientManagement/checkInpatientInformation",
    component: () => (
      <BocoTable
        title={"查询住院病人资料"}
        tableTitle={NormalTableTitleConfig.get("ZhuYuanBingRenZiLiao")}
      />
    )
  },
  {
    path: "/administrativeDepartment/communicableDiseasesControl/query",
    component: InfectiousDiseaseStatisticsTable
  },
  {
    path: "/administrativeDepartment/slowDiseaseManagement/query",
    component: ChronicDiseaseTable
  },
  {
    path: "/administrativeDepartment/criticalPatients/query",
    component: () => (
      <BocoTable
        title={"危重病人统计查询"}
        tableTitle={NormalTableTitleConfig.get("ZaiYuanWeiJiBingRen")}
      />
    )
  },
  {
    path: "/administrativeDepartment/telemedicine/query",
    component: TelemedicineSystemTable
  },
  {
    path: "/administrativeDepartment/dualReferral/query",

    component: () => (
      <BocoTable
        title={"双向转诊统计表"}
        tableTitle={NormalTableTitleConfig.get("ShuangXiangZhuanZhen")}
      />
    )
  },
  {
    path: "/administrativeDepartment/statementManagement/query",
    component: () => <BocoTable title={"报表管理统计查询"} spin={true} />
  },
  /** ****************** */
  /** 全面质量管理（未做） */
  {
    path: "/decisionAnalysisReport/comprehensiveQuery/outpatient",
    component: () => (
      <BocoTable
        title={"门诊就诊病人查询"}
        tableTitle={NormalTableTitleConfig.get("MenZhenRiZhi")}
        formStructure={[
          {
            value: "name",
            text: "就诊科室",
            url: ""
          }
        ]}
      />
    )
  },
  {
    path: "/decisionAnalysisReport/comprehensiveQuery/inpatient",
    component: () => (
      <BocoTable
        title={"在院病人查询"}
        tableTitle={NormalTableTitleConfig.get("ZhuYuanBingRenZiLiao")}
      />
    )
  },
  {
    path: "/decisionAnalysisReport/comprehensiveQuery/remoteImage",
    component: RemoteImageQueryTable
  },
  {
    path: "/decisionAnalysisReport/comprehensiveQuery/test",
    component: CheckQueryTable
  },
  {
    path: "/decisionAnalysisReport/sub-account/registration",
    component: RegisteredFashionableTable
  },
  {
    path: "/decisionAnalysisReport/sub-account/finance",
    component: FinancialCollectingTable
  },
  {
    path: "/decisionAnalysisReport/sub-account/inHospital",
    component: InHospitalFashionableTable
  },
  {
    path: "/decisionAnalysisReport/dataMining/patients",
    component: () => <BocoTable title={"病人构成分析"} spin={true} />
  },
  {
    path: "/decisionAnalysisReport/dataMining/patientsTime",
    component: () => <BocoTable title={"病人就诊时间分析"} spin={true} />
  },
  {
    path: "/decisionAnalysisReport/dataMining/patientsAccount",
    component: () => <BocoTable title={"病人费用构成分析"} spin={true} />
  },
  {
    path: "/decisionAnalysisReport/dataMining/compareAccount",
    component: () => <BocoTable title={"同期费用对比分析"} spin={true} />
  },
  {
    path: "/decisionAnalysisReport/dataMining/singleDisease",
    component: () => <BocoTable title={"单病种分析"} spin={true} />
  },
  {
    path: "/decisionAnalysisReport/aidDecisionMaking/hospitalPopulation",
    component: () => <BocoTable title={"住院人口报表统计"} spin={true} />
  },
  {
    path: "/decisionAnalysisReport/aidDecisionMaking/dischargePopulation",
    component: () => <BocoTable title={"出院人口报表统计"} spin={true} />
  },
  {
    path: "/decisionAnalysisReport/aidDecisionMaking/diseaseClass",
    component: () => <BocoTable title={"病种分类统计"} spin={true} />
  },
  /** 质量控制管理（未做） */
  {
    path: "/criticalValue/doctorWorkstation",
    component: () => <BocoTable title={"医生工作站危急值"} spin={true} />
  },
  {
    path: "/criticalValue/nurseWorkstation",
    component: () => <BocoTable title={"护士工作站危急值"} spin={true} />
  },
  {
    path: "/criticalValue/clinicalValidation",
    component: () => (
      <BocoTable
        title={"临床检验实验室危急值"}
        tableTitle={NormalTableTitleConfig.get("LinChuangJianYan")}
      />
    )
  }
];

export default RegulationConfigs;
