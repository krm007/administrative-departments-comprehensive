import { menuArray } from "../component/MySider";

const MenuConfig: menuArray[] = [
  {
    name: "医院财务报表",
    path:'/hospitalFinancial',
    IconType: "apple",
    children: [
      {
        name: "门诊开单费用统计",
        path: "/hospitalFinancial/outpatientBillingFee",
        IconType: "star"
      },{
        name: "门诊挂账统计",
        path: "/hospitalFinancial/paymentOfOutpatient",
        IconType: "star"
      },{
        name: "预交款病人明细",
        path: "/hospitalFinancial/advancePaymentPatient",
        IconType: "star"
      },{
        name: "出院病人病区科室汇总",
        path: "/hospitalFinancial/dischargePatientDepartment",
        IconType: "star"
      },{
        name: "在院病人总账报表",
        path: "/hospitalFinancial/hospitalPatientLedger",
        IconType: "star"
      },
    ]
  },
  {
    name: "药品查询",
    path:"/drugQuery",
    IconType: "apple",
    children: [
      {
        name: "药品收发存表",
        path: "/drugQuery/dugDeliveryAndStorage",
        IconType: "star"
      },{
        name: "药库收支月报",
        path: "/drugQuery/pharmacyPayments",
        IconType: "star"
      },{
        name: "药品库存查询",
        path: "/drugQuery/drugInventory",
        IconType: "star"
      },
    ]
  },
  {
    name: "人事管理",
    path:"/personalManagement",
    IconType: "apple",
    children: [
      {
        name: "人事管理查询",
        path: "/personalManagement/personnelQuery",
        IconType: "star"
      }
    ]
  },
  {
    name: "总务管理",
    path:"/generalAffairsManagement",
    IconType: "apple",
    children: [
      {
        name: "科室领用分析",
        path: "/generalAffairsManagement/departmentOfRecipients",
        IconType: "star"
      },{
        name: "库房库存分析",
        path: "/generalAffairsManagement/warehouseInventory",
        IconType: "star"
      },{
        name: "在用设备清单",
        path: "/generalAffairsManagement/equipmentList",
        IconType: "star"
      },

    ]
  },
  {
    name: "医疗业务统计",
    path:"/medicalBusiness",
    IconType: "apple",
    children: [
      {
        name: "门急诊流量分析",
        path: "/medicalBusiness/outpatientEmergencyFlow",
        IconType: "star"
      },{
        name: "门急诊挂号分析",
        path: "/medicalBusiness/outpatientRegistration",
        IconType: "star"
      },{
        name: "门急诊医师工作量统计",
        path: "/medicalBusiness/outpatientEmergencyPhysician",
        IconType: "star"
      },{
        name: "门急诊业务状况分析",
        path: "/medicalBusiness/outpatientEmergencyBusiness",
        IconType: "star"
      },{
        name: "门急诊疾病统计分析",
        path: "/medicalBusiness/outpatientEmergencyIllness",
        IconType: "star"
      },{
        name: "医技科室工作量统计",
        path: "/medicalBusiness/medicalLaboratory",
        IconType: "star"
      },{
        name: "手术科室工作量统计",
        path: "/medicalBusiness/surgicalDepartmentWorkload",
        IconType: "star"
      },{
        name: "在院病人分布状况",
        path: "/medicalBusiness/distributionPatients",
        IconType: "star"
      },{
        name: "在院疾病分布状况",
        path: "/medicalBusiness/distributionDisease",
        IconType: "star"
      },{
        name: "在院危急病人清单",
        path: "/medicalBusiness/criticalPatients",
        IconType: "star"
      },{
        name: "出院死亡病人清单",
        path: "/medicalBusiness/dischargeDeath",
        IconType: "star"
      },{
        name: "出院疾病统计分析",
        path: "/medicalBusiness/diseaseHospital",
        IconType: "star"
      },{
        name: "床位使用状况分析",
        path: "/medicalBusiness/bedUsing",
        IconType: "star"
      },
    ]
  },
  {
    name: "病人管理",
    path:"/patientManagement",
    IconType: "apple",
    children: [
      {
        name: "查询住院病人资料",
        path: "/patientManagement/checkInpatientInformation",
        IconType: "star"
      }
    ]
  },
  {
    name: "传染病管理",
    path:"/communicableDiseasesControl",
    IconType: "apple",
    children: [
      {
        name: "传染病统计查询",
        path: "/communicableDiseasesControl/query",
        IconType: "star"
      }
    ]
  },
  {
    name: "慢病管理",
    path:"/slowDiseaseManagement",
    IconType: "apple",
    children: [
      {
        name: "慢病统计查询",
        path: "/slowDiseaseManagement/query",
        IconType: "star"
      }
    ]
  },
  {
    name: "危重病人管理",
    path:"/criticalPatients",
    IconType: "apple",
    children: [
      {
        name: "危重病人统计查询",
        path: "/criticalPatients/query",
        IconType: "star"
      }
    ]
  },
  {
    name: "远程医疗",
    path:"/telemedicine",
    IconType: "apple",
    children: [
      {
        name: "远程医疗统计查询",
        path: "/telemedicine/query",
        IconType: "star"
      }
    ]
  },
  {
    name: "双向转诊",
    path:"/dualReferral",
    IconType: "apple",
    children: [
      {
        name: "双向转诊统计查询",
        path: "/dualReferral/query",
        IconType: "star"
      }
    ]
  },
  {
    name: "报表管理",
    path:"/statementManagement ",
    IconType: "apple",
    children: [
      {
        name: "报表管理统计查询",
        path: "/statementManagement/query",
        IconType: "star"
      }
    ]
  },
    /** ********************************************************************************************* */
  {
    name: "全面质量管理(未做)",
    path:"/comprehensiveQuality ",
    IconType: "apple",

  },
  {
    name: "决策分析报表管理",
    path:"/decisionAnalysisReport ",
    IconType: "apple",
    children: [
      {
        name: "综合查询",
        path: "/decisionAnalysisReport/comprehensiveQuery",
        IconType: "star",
        children:[
            {
              name: "his系统",
              path: "/decisionAnalysisReport/comprehensiveQuery/his",
              IconType: "cloud",
            },{
              name: "lis系统",
              path: "/decisionAnalysisReport/comprehensiveQuery/lis",
              IconType: "cloud",
            },{
              name: "pacs系统",
              path: "/decisionAnalysisReport/comprehensiveQuery/pacs",
              IconType: "cloud",
            },
        ]
      },
      {
        name: "分账报表",
        path: "/decisionAnalysisReport/sub-account ",
        IconType: "star",
        children:[
            {
              name: "挂号分账",
              path: "/decisionAnalysisReport/sub-account/registration",
              IconType: "cloud",
            },{
              name: "财务分账",
              path: "/decisionAnalysisReport/sub-account/finance",
              IconType: "cloud",
            },{
              name: "住院分账",
              path: "/decisionAnalysisReport/sub-account/inHospital",
              IconType: "cloud",
            },
        ]
      },
      {
        name: "数据挖掘分析",
        path: "/decisionAnalysisReport/dataMining ",
        IconType: "star",
        children:[
            {
              name: "病人构成分析",
              path: "/decisionAnalysisReport/dataMining/patients ",
              IconType: "cloud",
            },
            {
              name: "病人就诊时间分析",
              path: "/decisionAnalysisReport/dataMining/patientsTime",
              IconType: "cloud",
            },
            {
              name: "病人费用构成分析",
              path: "/decisionAnalysisReport/dataMining/patientsAccount",
              IconType: "cloud",
            },
            {
              name: "同期费用对比分析",
              path: "/decisionAnalysisReport/dataMining/compareAccount",
              IconType: "cloud",
            },
            {
              name: "单病种分析",
              path: "/decisionAnalysisReport/dataMining/singleDisease",
              IconType: "cloud",
            },
        ]
      },
      {
        name: "辅助决策统计",
        path: "/decisionAnalysisReport/aidDecisionMaking",
        IconType: "star",
        children:[
          {
            name: "住院人口报表统计",
            path: "/decisionAnalysisReport/aidDecisionMaking/hospitalPopulation",
            IconType: "cloud",
          },{
            name: "出院人口报表统计",
            path: "/decisionAnalysisReport/aidDecisionMaking/dischargePopulation",
            IconType: "cloud",
          },{
            name: "病种分类统计",
            path: "/decisionAnalysisReport/aidDecisionMaking/diseaseClass",
            IconType: "cloud",
          },
        ]
      },
    ]
  },
  {
    name: "质量控制管理(未做)",
    path:"/qualityControl",
    IconType: "apple",

  },
  {
    name: "全流程危急值管理",
    path:"/criticalValue",
    IconType: "apple",
    children:[
      {
        name: "医生工作站危急值",
        path:"/criticalValue/doctorWorkstation ",
        IconType: "star",
      },{
        name: "护士工作站危急值",
        path:"/criticalValue/nurseWorkstation",
        IconType: "star",
      },{
        name: "药品管理系统危急值",
        path:"/criticalValue/drugWorkstation",
        IconType: "star",
      },{
        name: "临床校验实验室危急值",
        path:"/criticalValue/clinicalValidation",
        IconType: "star",
      },
    ]
  },


];
export default MenuConfig;
