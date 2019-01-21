import { menuArray } from "../component/MySider";

/**
 * 自定义菜单数据
 */
const MenuConfig: menuArray[] = [
  {
    name: "行政主管部门综合查询",
    path: "/administrativeDepartment",
    IconType: "search",
    children: [
      {
        name: "医院财务报表",
        path: "/administrativeDepartment/hospitalFinancial",
        children: [
          {
            name: "门诊开单费用统计",
            path:
              "/administrativeDepartment/hospitalFinancial/outpatientBillingFee"
          },
          {
            name: "门诊挂账统计",
            path:
              "/administrativeDepartment/hospitalFinancial/paymentOfOutpatient"
          },
          {
            name: "预交款病人明细",
            path:
              "/administrativeDepartment/hospitalFinancial/advancePaymentPatient"
          },
          {
            name: "出院病人病区科室汇总",
            path:
              "/administrativeDepartment/hospitalFinancial/dischargePatientDepartment"
          },
          {
            name: "在院病人总账报表",
            path:
              "/administrativeDepartment/hospitalFinancial/hospitalPatientLedger"
          }
        ]
      },
      {
        name: "药品查询",
        path: "/administrativeDepartment/drugQuery",

        children: [
          {
            name: "药品收发存表",
            path: "/administrativeDepartment/drugQuery/dugDeliveryAndStorage"
          },
          {
            name: "药库收支月报",
            path: "/administrativeDepartment/drugQuery/pharmacyPayments"
          },
          {
            name: "药品库存查询",
            path: "/administrativeDepartment/drugQuery/drugInventory"
          }
        ]
      },
      {
        name: "人事管理",
        path: "/administrativeDepartment/personalManagement",

        children: [
          {
            name: "人事统计查询",
            path: "/administrativeDepartment/personalManagement/personnelQuery"
          }
        ]
      },
      {
        name: "总务管理",
        path: "/administrativeDepartment/generalAffairsManagement",

        children: [
          {
            name: "科室领用分析",
            path:
              "/administrativeDepartment/generalAffairsManagement/departmentOfRecipients"
          },
          {
            name: "库房库存分析",
            path:
              "/administrativeDepartment/generalAffairsManagement/warehouseInventory"
          },
          {
            name: "在用设备清单",
            path:
              "/administrativeDepartment/generalAffairsManagement/equipmentList"
          }
        ]
      },
      {
        name: "医疗业务统计",
        path: "/administrativeDepartment/medicalBusiness",

        children: [
          {
            name: "门急诊流量分析",
            path:
              "/administrativeDepartment/medicalBusiness/outpatientEmergencyFlow"
          },
          {
            name: "门急诊挂号分析",
            path:
              "/administrativeDepartment/medicalBusiness/outpatientRegistration"
          },
          {
            name: "门急诊医师工作量统计",
            path:
              "/administrativeDepartment/medicalBusiness/outpatientEmergencyPhysician"
          },
          {
            name: "医保数据统计",
            path:
              "/administrativeDepartment/medicalBusiness/outpatientEmergencyBusiness"
          },
          {
            name: "门急诊疾病统计分析",
            path:
              "/administrativeDepartment/medicalBusiness/outpatientEmergencyIllness"
          },
          {
            name: "医技科室工作量统计",
            path: "/administrativeDepartment/medicalBusiness/medicalLaboratory"
          },
          {
            name: "手术科室工作量统计",
            path:
              "/administrativeDepartment/medicalBusiness/surgicalDepartmentWorkload"
          },
          {
            name: "在院病人分布状况",
            path:
              "/administrativeDepartment/medicalBusiness/distributionPatients"
          },
          {
            name: "在院疾病分布情况",
            path:
              "/administrativeDepartment/medicalBusiness/distributionDisease"
          },
          {
            name: "在院危急病人清单",
            path: "/administrativeDepartment/medicalBusiness/criticalPatients"
          },
          {
            name: "出院死亡病人清单",
            path: "/administrativeDepartment/medicalBusiness/dischargeDeath"
          },
          {
            name: "出院疾病统计分析",
            path: "/administrativeDepartment/medicalBusiness/diseaseHospital"
          },
          {
            name: "床位使用状况分析",
            path: "/administrativeDepartment/medicalBusiness/bedUsing"
          }
        ]
      },
      {
        name: "病人管理",
        path: "/administrativeDepartment/patientManagement",

        children: [
          {
            name: "查询住院病人资料",
            path:
              "/administrativeDepartment/patientManagement/checkInpatientInformation"
          }
        ]
      },
      {
        name: "传染病管理",
        path: "/administrativeDepartment/communicableDiseasesControl",

        children: [
          {
            name: "传染病统计查询",
            path: "/administrativeDepartment/communicableDiseasesControl/query"
          }
        ]
      },
      {
        name: "慢病管理",
        path: "/administrativeDepartment/slowDiseaseManagement",

        children: [
          {
            name: "慢病统计查询",
            path: "/administrativeDepartment/slowDiseaseManagement/query"
          }
        ]
      },
      {
        name: "危重病人管理",
        path: "/administrativeDepartment/criticalPatients",

        children: [
          {
            name: "危重病人统计查询",
            path: "/administrativeDepartment/criticalPatients/query"
          }
        ]
      },
      {
        name: "死亡病人管理",
        path: "/administrativeDepartment/deathPatient",

        children: [
          {
            name: "死亡病人统计查询",
            path: "/administrativeDepartment/deathPatient/query"
          }
        ]
      },
      {
        name: "远程医疗",
        path: "/administrativeDepartment/telemedicine",

        children: [
          {
            name: "远程医疗统计查询",
            path: "/administrativeDepartment/telemedicine/query"
          }
        ]
      },
      {
        name: "双向转诊",
        path: "/administrativeDepartment/dualReferral",

        children: [
          {
            name: "双向转诊统计查询",
            path: "/administrativeDepartment/dualReferral/query"
          }
        ]
      },
      {
        name: "报表管理",
        path: "/administrativeDepartment/statementManagement ",

        children: [
          {
            name: "报表管理统计查询",
            path: "/administrativeDepartment/statementManagement/query"
          }
        ]
      }
    ]
  },

  /** ********************************************************************************************* */
  {
    name: "全面质量管理",
    path: "/totalQualityManage",
    IconType: "tags",
    children: [
      {
        name: "医生内涵质量管理",
        path: "/totalQualityManage/quanMianZhiLiangGuanLi",
        children: [
          {
            name: "内涵质量",
            path: "/totalQualityManage/quanMianZhiLiangGuanLi/neihanzhiliang"
          },
          {
            name: "问卷调查",
            path: "/totalQualityManage/quanMianZhiLiangGuanLi/wenjuandiaocha"
          },
          {
            name: "触摸屏评价",
            path: "/totalQualityManage/quanMianZhiLiangGuanLi/chumopingpingjia"
          },
          {
            name: "锦旗信件",
            path: "/totalQualityManage/quanMianZhiLiangGuanLi/jinqixinjian"
          }
        ]
      },
      {
        name: "患者出院随访管理",
        path: "/totalQualityManage/huanzhechuyuansuifang",
        children: [
          {
            name: "服务质量随访",
            path:
              "/totalQualityManage/huanzhechuyuansuifang/fuwuzhiliangsuifang"
          },
          {
            name: "护理部随访",
            path: "/totalQualityManage/huanzhechuyuansuifang/hulibusuifang"
          },
          {
            name: "单病种随访",
            path:
              "/totalQualityManage/huanzhechuyuansuifang/danbingzhongsuifang"
          }
        ]
      },
      {
        name: "汇总统计报表管理",
        path: "/totalQualityManage/huizongtongjibaobiaoguanli",
        children: [
          {
            name: "统计汇总报表",
            path:
              "/totalQualityManage/huizongtongjibaobiaoguanli/tongjihuizongbaobiao"
          }
        ]
      }
    ]
  },
  {
    name: "决策分析报表管理",
    path: "/decisionAnalysisReport",
    IconType: "appstore",
    children: [
      {
        name: "综合查询",
        path: "/decisionAnalysisReport/comprehensiveQuery",

        children: [
          {
            name: "门诊就诊病人查询",
            path: "/decisionAnalysisReport/comprehensiveQuery/outpatient"
          },
          {
            name: "在院病人查询",
            path: "/decisionAnalysisReport/comprehensiveQuery/inpatient"
          },
          {
            name: "远程影像查询",
            path: "/decisionAnalysisReport/comprehensiveQuery/remoteImage"
          },
          {
            name: "检验查询",
            path: "/decisionAnalysisReport/comprehensiveQuery/test"
          }
        ]
      },
      {
        name: "分账报表",
        path: "/decisionAnalysisReport/sub-account",

        children: [
          {
            name: "挂号分账",
            path: "/decisionAnalysisReport/sub-account/registration"
          },
          {
            name: "财务分账",
            path: "/decisionAnalysisReport/sub-account/finance"
          },
          {
            name: "住院分账",
            path: "/decisionAnalysisReport/sub-account/inHospital"
          },
          {
            name: "药品管理",
            path: "/decisionAnalysisReport/sub-account/yaopinguanli"
          },
          {
            name: "物资管理",
            path: "/decisionAnalysisReport/sub-account/wuziguanli"
          },
          {
            name: "检验中心",
            path: "/decisionAnalysisReport/sub-account/jianyanzhongxin"
          }
        ]
      },
      {
        name: "数据挖掘分析",
        path: "/decisionAnalysisReport/dataMining",

        children: [
          {
            name: "病人构成分析",
            path: "/decisionAnalysisReport/dataMining/patients"
          },
          {
            name: "病人就诊时间分析",
            path: "/decisionAnalysisReport/dataMining/patientsTime"
          },
          {
            name: "病人费用构成分析",
            path: "/decisionAnalysisReport/dataMining/patientsAccount"
          },
          {
            name: "同期费用对比分析",
            path: "/decisionAnalysisReport/dataMining/compareAccount"
          },
          {
            name: "单病种分析",
            path: "/decisionAnalysisReport/dataMining/singleDisease"
          }
        ]
      },
      {
        name: "辅助决策统计",
        path: "/decisionAnalysisReport/aidDecisionMaking",

        children: [
          {
            name: "住院人口报表统计",
            path: "/decisionAnalysisReport/aidDecisionMaking/hospitalPopulation"
          },
          {
            name: "出院人口报表统计",
            path:
              "/decisionAnalysisReport/aidDecisionMaking/dischargePopulation"
          },
          {
            name: "病种分类统计",
            path: "/decisionAnalysisReport/aidDecisionMaking/diseaseClass"
          }
        ]
      }
    ]
  },
  {
    name: "质量控制管理",
    path: "/qualityControlManage",
    IconType: "bulb",
    children: [
      {
        name: "医生工作站质控管理",
        path: "/qualityControlManage/yishenggongzuozhanzhikongguanli"
      },
      {
        name: "护理部质控管理",
        path: "/qualityControlManage/hulibuzhikongguanli"
      },
      {
        name: "临床实验室质控管理",
        path: "/qualityControlManage/linchuangshiyanshizhikongguanli"
      },
      {
        name: "远程影像质控管理",
        path: "/qualityControlManage/yuanchengyingxiangzhikongguanli"
      },
      {
        name: "心电质控",
        path: "/qualityControlManage/xindianzhikong"
      }
    ]
  },
  {
    name: "全流程危急值管理",
    path: "/criticalValue",
    IconType: "book",
    children: [
      {
        name: "医生工作站危急值",
        path: "/criticalValue/doctorWorkstation"
      },
      {
        name: "护士工作站危急值",
        path: "/criticalValue/nurseWorkstation"
      },
      {
        name: "临床检验实验室危急值",
        path: "/criticalValue/clinicalValidation"
      }
    ]
  }
];
export default MenuConfig;
