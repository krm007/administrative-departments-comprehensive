import { ColumnProps } from "antd/lib/table";
/**
 * 没有合并单元格table
 */
const VirtualTableTitleConfig: Map<string, Array<ColumnProps<any>>> = new Map<
  string,
  Array<ColumnProps<any>>
>([
 [
  // 行政部门主管查询-总务管理-科室领用分析
  "keshilingyongfenxi",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "科室名称",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "领用人",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "领用物品名称",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "领用数量",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "领用时间",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 行政部门主管查询-总务管理-库房库存分析
  "kufangkucunfenxi",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "物品名称",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "物品规格",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "单位",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "数量",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "进货价格",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "零售价格",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 行政部门主管查询-总务管理-在用设备清单
  "zaiyongshebeiqingdan",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "设备名称",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "设备型号",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "设备用途",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "设备数量",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 行政部门主管查询-报表管理-报表管理查询，这个页面要规划一下
  "baobiaoguanlichaxun",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "报表名称",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "创建日期",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "操作",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 全面质量管理-医生内涵质量管理-内涵质量-tab1：医疗文书评分
  "yiliaowenshupingfen",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "上级医生查房",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "病程记录",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "手术记录",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "版面格式",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "一般项目",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "查体术语",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "辅助检查",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "苏醒程度",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "问题描述",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "审核备注",
      align: "center",
      dataIndex: "",
      key: ""
    }, 
  ],
 ],
 [
  // 全面质量管理-医生内涵质量管理-内涵质量-tab2：处方质量评分
  "chufangzhiliangpingfen",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "诊断与用法不符",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "无手工签名或不规范",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "超量处方",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "内外用药混开",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "医保处方缺项",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "其他项目",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "问题描述",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "审核备注",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 全面质量管理-医生内涵质量管理-内涵质量-tab3：医保问题调查
  "yibaowentidiaocha",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "药超适用症",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "协议书未签",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "出院诊断不全",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "其他",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "单病种超定额",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "自费比例超标",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
[
  // 全面质量管理-医生内涵质量管理-内涵质量-tab4：申请单问题
  "shenqingdanwenti",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "一般项目",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "主要症状",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "无临床诊断",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "无检查部位和要求",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "无申请医师签名和其它项目",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "问题描述",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "审核备注",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 全面质量管理-医生内涵质量管理-内涵质量-tab5：病案管理
  "binganguanli",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "首页缺项",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "编码(顺序)错误",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "无医师签名",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "无住院诊断",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "其它项目",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "问题描述",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "审核备注",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 全面质量管理-医生内涵质量管理-内涵质量-tab6：出诊管理
  "chuzhenguanli",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "迟到",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "早退",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "不假外出",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "出现问题时间",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "问题描述",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "审核备注",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 全面质量管理-医生内涵质量管理-问卷调查
  "wenjuandiaocha",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "医技科室",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "临床科室",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "护理服务",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "食堂伙食",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "科室互评",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 全面质量管理-医生内涵质量管理-触摸屏评价
  "chumopingpingjia",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "总体评价",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "表扬批评",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "意见建议",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 全面质量管理-医生内涵质量管理-锦旗信件-tab1：外院检查情况
  "waiyuanjianchaqingkuang",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "外院检查科室",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "检查项目名称",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "检查医院",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "外院检查原因备注",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 全面质量管理-医生内涵质量管理-锦旗信件-tab2：征求意见建议
  "zhengqiuyijianjianyi",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "日期",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "医生",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "科室",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "患者",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "内容",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 全面质量管理-患者出院随访管理-服务质量随访
  "fuwuzhiliangsuifang",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "门诊满意度",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "医生满意度",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "住院满意度",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "护士满意度",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "检验满意度",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "影像满意度",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 全面质量管理-患者出院随访管理-护理部随访
  "hulibusuifang",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "护士满意度",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "职业技能满意度",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "服务态度满意度",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "病床舒适满意度",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "总体满意度",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 全面质量管理-患者出院随访管理-单病种随访
  "danbingzhongsuifang",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "疾病名称",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "并发症",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "复发率",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "存活率",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 全面质量管理-汇总统计报表管理-统计汇总报表
  "tongjihuizongbaobiao",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "质量考评",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "表扬信统计",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "锦旗统计",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "食堂伙食调查",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "临床满意率",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "护理满意率",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "医技满意率",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "科室年度对比",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "医生年度对比",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "科室质量统计",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "医生质量统计",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 决策分析报表管理-分账报表-药品管理
  "yaopinguanli",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "药品名称",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "药品规格",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "产地名称",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "单位",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "采购单位",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "采购价格",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "采购数量",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "库存",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 决策分析报表管理-分账报表-物资管理
  "wuziguanli",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "物资名称",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "领用单位",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "领用时间",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "领用数量",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "领用人",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 决策分析报表管理-分账报表-检验中心
  "jianyanzhongxin",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "医疗机构",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "检验项目名称",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "数量",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "费用",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 决策分析报表管理-数据挖掘分析-病人构成分析
  "bingrengouchengfenxi",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "病人名称",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "年龄",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "诊断疾病",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "门诊次数",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "住院次数",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "手术次数",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "检验次数",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "影像次数",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 决策分析报表管理-数据挖掘分析-病人就诊时间分析
  "bingrenjiuzhenshijianfenxi",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "病人名称",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "年龄",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "诊断疾病",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "门诊时间（min）",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "住院时间（d）",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "手术时间（h）",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 决策分析报表管理-数据挖掘分析-病人费用构成分析
  "bingrenfeiyonggouchengfenxi",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "病人名称",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "年龄",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "科室",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "诊断疾病",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "西药费",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "成药费",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "检查费",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "治疗费",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "CT费",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "放射费",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "手术费",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "化验费",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "输氧费",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "诊察费",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "卫生组套费",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "床位费",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "伙食费",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "护理费",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "材料费",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "麻醉费",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "外院检查",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "会诊费",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "其他费用",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "合  计",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 决策分析报表管理-数据挖掘分析-同期费用对比分析-tab1：按科室
  "ankeshi",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "科室名称",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "门诊收入",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "住院收入",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "药品收入",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "医疗收入",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "检验类收入",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "影像类收入",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "手术类收入",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "其他收入",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 决策分析报表管理-数据挖掘分析-同期费用对比分析-tab2：按机构
  "anjigou",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "机构名称",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "门诊收入",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "住院收入",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "药品收入",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "医疗收入",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "检验类收入",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "影像类收入",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "手术类收入",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "其他收入",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 决策分析报表管理-数据挖掘分析-单病种分析
  "danbingzhongfenxi",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "病人名称",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "年龄",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "诊断疾病",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "费用合计",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "住院时间",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "治疗方案",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "主治医生",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 决策分析报表管理-辅助决策统计-住院人口报表统计
  "zhuyuanrenkoubaobiaotongji",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "科室",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "住院人数",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "疾病种类",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "人均每天住院费用",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "手术人数",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "手术率",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "人均手术费用",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "人均每天药物费用",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 决策分析报表管理-辅助决策统计-出院人口报表统计
  "chuyuanrenkoubaobiaotongji",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "科室",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "出院人数",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "疾病种类",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "住院天数",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "人均住院费用",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "人均药物费用",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "手术人数",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "手术率",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "人均手术费用",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 决策分析报表管理-辅助决策统计-病种分类统计
  "bingzhongfenleitongji",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "疾病名称",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "ICD编码",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "患病人数",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "人均治疗费用",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "人均治疗时间",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "痊愈率",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "复发率",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "手术率",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "死亡率",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 质控管理-医生工作站质控管理
  "yishenggongzuozhanzhikongguanli",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "医生名称",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "诊断",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "处方",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "检查",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "检验",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "治疗处置",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "手术",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "卫材",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 质控管理-护理部质控管理
  "hulibuzhikongguanli",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "护士名称",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "病床管理",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "医嘱执行",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "查房",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "观察记录",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "体征测量",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "病案管理",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 质控管理-临床实验室质控管理
  "linchuangshiyanshizhikongguanli",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "申请医生",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "检查医生",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "申请单质量",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "结果分类",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "危急值预警",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "报告质量",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 质控管理-远程影像质控管理
  "yuanchengyingxiangzhikongguanli",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "申请医生",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "临床诊断",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "检查医生",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "检查项目",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "使用仪器",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "影像质量",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "报告质量",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 质控管理-心电质控
  "xindianzhikong",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "申请医生",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "检查医生",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "结果分类",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "报告质量",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "检查时间",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 全流程危急值-医生工作站危急值
  "yishenggongzuozhanweijizhi",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "确认日期",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "责任医生",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "危机指标",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "临床诊断",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "病床号",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 [
  // 全流程危急值-护士工作站危急值
  "hushigongzuozhanweijizhi",
  [
    {
      title: "编号",
      align: "center",
      dataIndex: "id",
      key: "id",
      render: (value, row, index) => {
        return `${index + 1}`;
      }
    },
    {
      title: "确认日期",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "责任护士",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "入院日期",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "临床诊断",
      align: "center",
      dataIndex: "",
      key: ""
    },
    {
      title: "病床号",
      align: "center",
      dataIndex: "",
      key: ""
    },
  ],
 ],
 ]);
export default VirtualTableTitleConfig;
