import { RouteConfig } from "react-router-config";
import * as loadable from "react-loadable";
import BocoTable from "../views/BocoTable";
import * as React from "react";
import NormalTableTitleConfig from "../config/NormalTableTitleConfig";
import Loading from "../component/Loading";
import Home from "../views/Home";
import TwoWayTransOutPatientTable from "../views/twoway-transOutpatient/TwoWayTransOutPatientTable";

/** 慢病统计查询 */
const ChronicDiseaseTable = loadable({
  loader: () => import("../views/ChronicDiseaseTable"),
  loading: Loading
});
/** 远程医疗统计查询 */
const TelemedicineSystemTable = loadable({
  loader: () => import("../views/TelemedicineSystemTable"),
  loading: Loading
});
/** 远程影像查询 */
const RemoteImageQueryTable = loadable({
  loader: () => import("../views/RemoteImageQueryTable"),
  loading: Loading
});
/** 检验查询 */
const CheckQueryTable = loadable({
  loader: () => import("../views/CheckQueryTable"),
  loading: Loading
});
/** 挂号分账 */
const RegisteredFashionableTable = loadable({
  loader: () => import("../views/RegisteredFashionableTable"),
  loading: Loading
});
/** 财务分账 */
const FinancialCollectingTable = loadable({
  loader: () => import("../views/FinancialCollectingTable"),
  loading: Loading
});
/** 住院分账 */
const InHospitalFashionableTable = loadable({
  loader: () => import("../views/InHospitalFashionableTable"),
  loading: Loading
});
/** 药库收支月报 */
const PharmacyPaymentsTable = loadable({
  loader: () => import("../views/PharmacyPaymentsTable"),
  loading: Loading
});
/** 传染病统计查询 */
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
        url={"/heJi/MenZhenKaiDanFeiYong/queryPage"}
        tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
      />
    )
  },
  {
    path: "/administrativeDepartment/hospitalFinancial/paymentOfOutpatient",
    component: () => (
      <BocoTable
        title={"门诊挂账统计"}
        url={"/menZhenGuaZhangTongJi/page"}
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
            url: "/yuJiaoKuanBingRenMingXi/getSelect",
            initialValue: true
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
        url={"/chuYuanBingRenBingQu/page"}
        tableTitle={NormalTableTitleConfig.get("ChuYuanBingRenBingQu")}
      />
    )
  },
  {
    path: "/administrativeDepartment/hospitalFinancial/hospitalPatientLedger",
    component: () => (
      <BocoTable
        title={"在院病人总账报表"}
        url={"/zaiYuanBingRenZongZhang/page"}
        tableTitle={NormalTableTitleConfig.get("ZaiYuanBingRenZongZhang")}
      />
    )
  },
  {
    path: "/administrativeDepartment/drugQuery/dugDeliveryAndStorage",
    component: () => (
      <BocoTable
        title={"药品收发存表"}
        url={"/yaoPinShouFaCunBiao/page"}
        timeFormat={1}
        tableTitle={NormalTableTitleConfig.get("YaoPinShouFaCunBiao")}
        formStructure={[
          {
            value: "kuFang",
            text: "库房",
            url: "/yaoPinShouFaCunBiao/getKuFang"
          },
          {
            value: "yaoPinLeiXing",
            text: "药品类型",
            url: "/yaoPinShouFaCunBiao/getYaoPinLeiXing"
          },
          {
            value: "duLiFenLei",
            text: "毒理分类",
            url: "/yaoPinShouFaCunBiao/getDuLiFenLei"
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
        url={"/yaoPinKuCunChaXun/page"}
        timeFormat={1}
        tableTitle={NormalTableTitleConfig.get("YaoPinKuCunChaXun")}
        formStructure={[
          {
            value: "kuFang",
            text: "选择库房",
            url: "/yaoPinKuCunChaXun/getKuFang"
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
        url={"/renShiTongJiChaXun/page"}
        tableTitle={NormalTableTitleConfig.get("RenShiTongJiChaXun")}
        timeFormat={0}
        formStructure={[
          {
            value: "keShi",
            text: "选择科室",
            url: "/renShiTongJiChaXun/getKeShi"
          }
        ]}
      />
    )
  },
  {
    path:
      "/administrativeDepartment/generalAffairsManagement/departmentOfRecipients",
    component: () => <BocoTable title={"科室领用分析"} spin={true} />
  },
  {
    path:
      "/administrativeDepartment/generalAffairsManagement/warehouseInventory",
    component: () => <BocoTable title={"库房库存分析"} spin={true} />
  },
  {
    path: "/administrativeDepartment/generalAffairsManagement/equipmentList",
    component: () => <BocoTable title={"在用设备清单"} spin={true} />
  },
  {
    path: "/administrativeDepartment/medicalBusiness/outpatientEmergencyFlow",
    component: () => (
      <BocoTable
        title={"门急诊流量分析"}
        url={"/menZhenRiZhi/page"}
        tableTitle={NormalTableTitleConfig.get("MenZhenRiZhi")}
        formStructure={[
          {
            value: "KeShi",
            text: "就诊科室",
            url: "/menZhenRiZhi/getKeShi"
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
        url={"/guaHaoJiLu/page"}
        tableTitle={NormalTableTitleConfig.get("GuaHaoJiLu")}
        formStructure={[
          {
            value: "keShi",
            text: "就诊科室",
            url: "/guaHaoJiLu/getKeShi"
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
        url={"/yiShiGongZuoLiangTongJi/page"}
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
        url={"/yiBaoShuJuTongJi/page"}
        tableTitle={NormalTableTitleConfig.get("YiBaoShuJuTongJi")}
        formStructure={[
          {
            value: "jieSuanLeiXing",
            text: "结算类型",
            url: "/yiBaoShuJuTongJi/getJieSuanLeiXing"
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
        url={"/menJiZhenZhenDuan/page"}
        tableTitle={NormalTableTitleConfig.get("MenJiZhenZhenDuan")}
      />
    )
  },
  {
    path: "/administrativeDepartment/medicalBusiness/medicalLaboratory",
    component: () => (
      <BocoTable
        title={"医技科室工作量统计"}
        url={"/yiJiKeShiGongZuoLiang/page"}
        tableTitle={NormalTableTitleConfig.get("YiJiKeShiGongZuoLiang")}
        formStructure={[
          {
            value: "danJuLeiXing",
            text: "单据类型",
            url:"/yiJiKeShiGongZuoLiang/getDanJuLeiXing"
          },
          {
            value: "menZhenZhuYuan",
            text: "门诊住院",
            url: "/yiJiKeShiGongZuoLiang/getMenZhenZhuYuan"
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
        url={"/shouShuKeShiGongZuoLiang/page"}
        tableTitle={NormalTableTitleConfig.get("ShouShuKeShiGongZuoLiang")}
      />
    )
  },
  {
    path: "/administrativeDepartment/medicalBusiness/distributionPatients",
    component: () => (
      <BocoTable
        title={"在院病人分布状况"}
        url={"/zaiYuanBingRenFenBu/page"}
        tableTitle={NormalTableTitleConfig.get("ZaiYuanBingRenFenBu")}
      />
    )
  },
  {
    path: "/administrativeDepartment/medicalBusiness/distributionDisease",
    component: () => (
      <BocoTable
        title={"在院疾病分布情况"}
        url={"/zaiYuanJiBingFenBu/pageZaiYuan"}
        tableTitle={NormalTableTitleConfig.get("ZaiYuanJiBingFenBu")}
        formStructure={[
          {
            value: "zhenDuanMingCheng",
            text: "诊断名称",
            url: "zaiYuanJiBingFenBu/getZhenDuanMingCheng"
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
        url={"/zaiYuanWeiJiBingRen/page"}
        tableTitle={NormalTableTitleConfig.get("ZaiYuanWeiJiBingRen")}
      />
    )
  },
  {
    path: "/administrativeDepartment/medicalBusiness/dischargeDeath",
    component: () => (
      <BocoTable
        title={"出院死亡病人清单"}
        url={"/chuYuanSiWangBingRen/page"}
        tableTitle={NormalTableTitleConfig.get("ChuYuanSiWangBingRen")}
      />
    )
  },
  {
    path: "/administrativeDepartment/medicalBusiness/diseaseHospital",
    component: () => (
      <BocoTable
        title={"出院疾病统计分析"}
        url={"/zaiYuanJiBingFenBu/pageChuYuan"}
        tableTitle={NormalTableTitleConfig.get("ZaiYuanJiBingFenBu")}
        formStructure={[
          {
            value: "zhenDuanMingCheng",
            text: "诊断名称",
            url: "zaiYuanJiBingFenBu/getZhenDuanMingCheng"
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
        url={"/chuangWeiShiYong/page"}
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
        url={"/zhuYuanBingRenZiLiao/page"}
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
        url={"/zaiYuanWeiJiBingRen/page"}
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

    component: TwoWayTransOutPatientTable
  },
  {
    path: "/administrativeDepartment/statementManagement/query",
    component: () => <BocoTable title={"报表管理统计查询"} spin={true} />
  },
  /** ****************** */
  /** 全面质量管理（未做） */
  {
    path: "/totalQualityManage",
    component: () => <BocoTable title={"全面质量管理"} spin={true} />
  },
  {
    path: "/decisionAnalysisReport/comprehensiveQuery/outpatient",
    component: () => (
      <BocoTable
        title={"门诊就诊病人查询"}
        url={"/menZhenRiZhi/page"}
        tableTitle={NormalTableTitleConfig.get("MenZhenRiZhi")}
        formStructure={[
          {
            value: "keShi",
            text: "就诊科室",
            url: "/menZhenRiZhi/getKeShi"
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
        url={"/zhuYuanBingRenZiLiao/page"}
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
    path: "/qualityControlManage",
    component: () => <BocoTable title={"质量控制管理"} spin={true} />
  },
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
        url={"/linChuangJianYan/page"}
        tableTitle={NormalTableTitleConfig.get("LinChuangJianYan")}
      />
    )
  },
  {
    path: "/",
    component:Home
  }
];

export default RegulationConfigs;
