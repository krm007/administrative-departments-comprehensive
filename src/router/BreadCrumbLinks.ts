const breadcrumbNameMap = {
    "/administrativeDepartment": "行政主管部门综合查询",
    "/administrativeDepartment/hospitalFinancial": "医院财务报表",
    "/administrativeDepartment/hospitalFinancial/outpatientBillingFee": "门诊开单费用统计",
    "/administrativeDepartment/hospitalFinancial/paymentOfOutpatient": "门诊挂账统计",
    "/administrativeDepartment/hospitalFinancial/advancePaymentPatient": "预交款病人明细",
    "/administrativeDepartment/hospitalFinancial/dischargePatientDepartment": "出院病人病区科室汇总",
    "/administrativeDepartment/hospitalFinancial/hospitalPatientLedger": "在院病人总账报表",
    "/administrativeDepartment/drugQuery": "药品查询",
    "/administrativeDepartment/drugQuery/dugDeliveryAndStorage": "药品收发存表",
    "/administrativeDepartment/drugQuery/pharmacyPayments": "药库收支月报",
    "/administrativeDepartment/drugQuery/drugInventory": "药品库存查询",
    "/administrativeDepartment/personalManagement": "人事管理",
    "/administrativeDepartment/generalAffairsManagement/departmentOfRecipients": "科室领用分析",
    "/administrativeDepartment/personalManagement/personnelQuery": "人事统计查询",
    "/administrativeDepartment/generalAffairsManagement": "总务管理",
    "/administrativeDepartment/generalAffairsManagement/warehouseInventory": "库房库存分析",
    "/administrativeDepartment/generalAffairsManagement/equipmentList": "在用设备清单",
    "/administrativeDepartment/medicalBusiness": "医疗业务统计",
    "/administrativeDepartment/medicalBusiness/outpatientEmergencyFlow": "门急诊流量分析",
    "/administrativeDepartment/medicalBusiness/outpatientRegistration": "门急诊挂号分析",
    "/administrativeDepartment/medicalBusiness/outpatientEmergencyPhysician": "门急诊医师工作量统计",
    "/administrativeDepartment/medicalBusiness/outpatientEmergencyBusiness": "医保数据统计",
    "/administrativeDepartment/medicalBusiness/outpatientEmergencyIllness": "门急诊疾病统计分析",
    "/administrativeDepartment/medicalBusiness/medicalLaboratory": "医技科室工作量统计",
    "/administrativeDepartment/medicalBusiness/surgicalDepartmentWorkload": "手术科室工作量统计",
    "/administrativeDepartment/medicalBusiness/distributionPatients": "在院病人分布状况",
    "/administrativeDepartment/medicalBusiness/distributionDisease": "在院疾病分布情况",
    "/administrativeDepartment/medicalBusiness/criticalPatients": "在院危急病人清单",
    "/administrativeDepartment/medicalBusiness/dischargeDeath": "出院死亡病人清单",
    "/administrativeDepartment/medicalBusiness/diseaseHospital": "出院疾病统计分析",
    "/administrativeDepartment/medicalBusiness/bedUsing": "床位使用状况分析",
    "/administrativeDepartment/patientManagement": "病人管理",
    "/administrativeDepartment/patientManagement/checkInpatientInformation": "查询住院病人资料",
    "/administrativeDepartment/communicableDiseasesControl": "传染病管理",
    "/administrativeDepartment/communicableDiseasesControl/query": "传染病统计查询",
    "/administrativeDepartment/slowDiseaseManagement": "慢病管理",
    "/administrativeDepartment/slowDiseaseManagement/query": "慢病统计查询",
    "/administrativeDepartment/criticalPatients": "危重病人管理",
    "/administrativeDepartment/criticalPatients/query": "危重病人统计查询",
    "/administrativeDepartment/telemedicine": "远程医疗",
    "/administrativeDepartment/telemedicine/query": "远程医疗统计查询",
    "/administrativeDepartment/dualReferral": "双向转诊",
    "/administrativeDepartment/dualReferral/query": "双向转诊统计查询",
    "/administrativeDepartment/statementManagement": "报表管理",
    "/administrativeDepartment/statementManagement/query": "报表管理统计查询",
    "/totalQualityManage": "全面质量管理",
    "/totalQualityManage/quanMianZhiLiangGuanLi/neihanzhiliang": "内涵质量",
    "/totalQualityManage/quanMianZhiLiangGuanLi/wenjuandiaocha": "问卷调查",
    "/totalQualityManage/quanMianZhiLiangGuanLi/chumopingpingjia": "触摸屏评价",
    "/totalQualityManage/quanMianZhiLiangGuanLi/jinqixinjian": "锦旗信件",
    "/totalQualityManage/huanzhechuyuansuifang/fuwuzhiliangsuifang": "服务质量随访",
    "/totalQualityManage/huanzhechuyuansuifang/hulibusuifang": "服务质量随访",
    "/totalQualityManage/huanzhechuyuansuifang/danbingzhongsuifang": "单病种随访",
    "/totalQualityManage/huizongtongjibaobiaoguanli/tongjihuizongbaobiao": "统计汇总报表",
    "/decisionAnalysisReport": "决策分析报表管理",
    "/decisionAnalysisReport/comprehensiveQuery": "综合查询",
    "/decisionAnalysisReport/comprehensiveQuery/outpatient": "门诊就诊病人查询",
    "/decisionAnalysisReport/comprehensiveQuery/inpatient": "在院病人查询",
    "/decisionAnalysisReport/comprehensiveQuery/remoteImage": "远程影像查询",
    "/decisionAnalysisReport/comprehensiveQuery/test": "检验查询",
    "/decisionAnalysisReport/sub-account": "分账报表",
    "/decisionAnalysisReport/sub-account/registration": "挂号分账",
    "/decisionAnalysisReport/sub-account/finance": "财务分账",
    "/decisionAnalysisReport/sub-account/inHospital": "住院分账",
    "/decisionAnalysisReport/sub-account/yaopinguanli": "药品管理",
    "/decisionAnalysisReport/sub-account/wuziguanli": "物资管理",
    "/decisionAnalysisReport/sub-account/jianyanzhongxin": "检验中心",
    "/decisionAnalysisReport/dataMining": "数据挖掘分析",
    "/decisionAnalysisReport/dataMining/patients": "病人构成分析",
    "/decisionAnalysisReport/dataMining/patientsTime": "病人就诊时间分析",
    "/decisionAnalysisReport/dataMining/patientsAccount": "病人费用构成分析",
    "/decisionAnalysisReport/dataMining/compareAccount": "同期费用对比分析",
    "/decisionAnalysisReport/dataMining/singleDisease": "单病种分析",
    "/decisionAnalysisReport/aidDecisionMaking": "辅助决策统计",
    "/decisionAnalysisReport/aidDecisionMaking/hospitalPopulation": "住院人口报表统计",
    "/decisionAnalysisReport/aidDecisionMaking/dischargePopulation": "出院人口报表统计",
    "/decisionAnalysisReport/aidDecisionMaking/diseaseClass": "病种分类统计",
    "/qualityControlManage": "质量控制管理",
    "/qualityControlManage/yishenggongzuozhanzhikongguanli": "医生工作站质控管理",
    "/qualityControlManage/hulibuzhikongguanli": "护理部质控管理",
    "/qualityControlManage/linchuangshiyanshizhikongguanli": "临床实验室质控管理",
    "/qualityControlManage/yuanchengyingxiangzhikongguanli": "远程影像质控管理",
    "/qualityControlManage/xindianzhikong": "心电质控",
    "/criticalValue": "全流程危急值管理",
    "/criticalValue/doctorWorkstation": "医生工作站危急值",
    "/criticalValue/nurseWorkstation": "护士工作站危急值",
    "/criticalValue/clinicalValidation": "临床检验实验室危急值",

};
export default breadcrumbNameMap;
