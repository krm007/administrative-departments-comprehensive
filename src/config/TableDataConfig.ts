import { Bocotable } from "../typings/CommonData";

const TableDataConfig: Map<string, Bocotable[]> = new Map<string, Bocotable[]>([
  /** 中医药服务项目监测指标 */
  [
    "ChineseMedicineMonitor",
    [
      {
        name: "中医治未病服务人次数(人次)",
        explain: "指医疗卫生机 构治未病科（中心）的门诊服务人次数",
        sign: "zyzwbfwrcs"
      },
      {
        name: "5000元以上中医诊疗设备台数（台）",
        explain:
          "按照单价在5000元以上的中医诊疗设备（含民族医诊疗设备）台数统计（不含5000元以下 设备台数）。中医诊疗设备是指在诊疗活动中，在中医理论指导下应用的仪器、设备 、器具、材料及其他物品（包括所需软件）。电针治疗设备包括温热电针治疗、冷针针灸、分证型治疗、子午流注治疗设备；中药熏洗设备包括熏蒸、熏洗、泡洗设备；中医电疗设备包括高频、中频、低频电疗设备；中医磁疗设备包括磁振热治疗、特定电磁波治疗、穴位磁疗、磁场效应治疗设备；中医康复训练设备包括智能关节康复器、智能疼痛治疗仪、智能下肢反馈康复训练系统、多功能神经康复诊疗系统、下肢智能反馈训练系统、声信息治疗仪；煎药机 包括中药煎煮壶、振动式药物超微粉碎机。",
        sign: "zyzlsbts"
      },
      {
        name: "开展中医医疗技术个数（个）",
        explain:
          "中医医疗技术指以中医理论为指导的，以简、便、廉、验为特点的，能发挥中医药特色优势的临床实用技术，包括针刺、灸类、刮痧、拔罐、推拿等中医诊疗技术。按照《中医医疗技术目录》中实际开展的技术个数统计",
        sign: "kzzyyljsgs"
      },
      {
        name: "中药制剂品种数（种）",
        explain:
          "中药制剂是医疗机构根据本单位临床需要经批准而配制、自用的固定的中药处方制剂。包括本院注册的医疗机构中药制剂以及省级食品药品监督管理局批准的外院调剂使用的中药制剂。",
        sign: "zyzjpzs"
      }
    ]
  ],
  /** 医院感染情况监测指标 */
  [
    "InfectionMonitor",
    [
      {
        name: "医院感染总发生率（%）",
        explain:
          "报告期内，存在的医院感染例数占观察期间处于感染危险中的病人出院人数比例",
        sign: "zgrfsl"
      },
      {
        name: "新生儿患者医院感染发生率（%）",
        explain:
          "报告期内，新生儿患者医院感染发生例数占同期内新生儿患者出院人次",
        sign: "xsegrfsl"
      },
      {
        name: "手术部位感染总发生率（%）",
        explain: "报告期内，手术患者的手术部位感染数占报告内某种手术患者数占比",
        sign: "ssgrfsl"
      },
      {
        name: "择期手术患者医院感染发生率（%）",
        explain:
          "报告期内，择期手术患者医院感染例数占报告内择期手术患者例数占比",
        sign: "ssgrls"
      },
      {
        name: "择期手术患者肺部感染发生率（%）",
        explain:
          "报告期内，择期手术患者肺部感染例数占报告内择期手术患者例数占比",
        sign: "ssfbgrfsl"
      }
    ]
  ],
  /** 医疗行为监测指标 & 合理用药监测指标 & 医疗费用监测指标 */
  [
    "rationalDrugUse",
    [
      /** 合理用药 */
      {
        name: "医院抗菌药物品种（个）",
        explain: "报告期内，医院抗菌药物品种数，原则上不超过35种",
        sign: ""
      },
      {
        name: "住院患者抗菌药物使用率（%）",
        explain:
          "报告期内，出院患者使用抗菌药物例数例数占同期出院患者总例数比例",
        sign: "zykjywsyl"
      },
      {
        name: "门诊患者抗菌药物处方比例（%）",
        explain: "报告期内，含有抗菌药物的门诊处方数占同期门诊处方总数",
        sign: "mzkjywcfbl"
      },
      {
        name: "药费收入占医疗总收入比重（%）",
        explain: "报告期内，药品收入占医疗总收入比例",
        sign: "yfsrzb"
      },
      {
        name: "抗菌药占西药出库总金额比重（%）",
        explain: "报告期内，抗菌药出库总金额占西药出库总金额的比例",
        sign: "kjywsrzb"
      }
    ]
  ],
  [
    "hospitalizationCosts",
    [
      /** 医疗费用 */
      {
        name: "基本医疗保险收入占医疗收入比重（%）",
        explain: "报告期内医疗卫生机构医疗收入中三项基本医疗保险收入所占比重",
        sign: "ybsrzb"
      },
      {
        name: "门诊病人次均医药费用（元）",
        explain: "报告期内门诊病人平均每次就诊医药费用，简称次均门诊费用",
        sign: "mzrjfy"
      },
      {
        name: "门诊病人次均药费（元）",
        explain: "报告期内门诊病人平均每次就诊药费，简称次均门诊药费",
        sign: "mzrjyf"
      },
      {
        name: "住院病人次均医药费用（元）",
        explain: "报告期内出院者平均每次住院医药费用，简称次均住院费用",
        sign: "zyrjfy"
      },
      {
        name: "住院病人次均药费（元）",
        explain: "报告期内出院者平均每次住院药费，简称人均住院药费",
        sign: "zyrjyf"
      },
      {
        name: "住院病人日均医药费用（元）",
        explain: "报告期内住院病人平均每日医药费用，又称日均住院费用",
        sign: "zybrrjfy"
      },
      {
        name: "门诊病人医药费用增长率（%）",
        explain: "报告期门诊病人医药费用增长数与上期病人医药费用之比",
        sign: ""
      },
      {
        name: "住院病人医药费用增长率（%）",
        explain: "报告期住院病人医药费用增长数与上期病人医药费用之比",
        sign: ""
      }
    ]
  ],
  /** 医疗质量 */
  [
    "MedicalQualityMonitor",
    [
      {
        name: "急诊科危重抢救例数(例数)",
        explain: "报告期内急诊科危重抢救例数",
        sign: "jzkwzqjls"
      },
      {
        name: "急诊科死亡例数(例数)",
        explain: "报告期内急诊科死亡例数",
        sign: "jzkswls"
      },
      {
        name: "住院危重抢救例数(例数)",
        explain: "报告期内住院危重抢救例数",
        sign: "zywzqjls"
      },
      {
        name: "死亡例数(例数)",
        explain: "报告期内死亡例数",
        sign: "swls"
      },
      {
        name: "急危重症抢救成功率（%）",
        explain:
          "报告期内(急诊科危重抢救例数-急诊科死亡例数)占急诊科危重抢救例数比例",
        sign: "zwzzqjcglUse"
      },
      {
        name: "急诊危重抢救死亡率（%）",
        explain: "报告期内急诊科死亡例数占急诊科危重抢救例数比例",
        sign: "jzwzqjswlUse"
      },
      {
        name: "住院危重病人抢救成功率（%）",
        explain:
          "报告期内（住院危重抢救例数-住院死亡例数)占住院危重抢救例数例数",
        sign: "zywzbrqjcglUse"
      },
      {
        name: "住院危重抢救死亡率（%）",
        explain: "报告期内住院死亡例数占住院危重抢救例数比例",
        sign: "zywzqjswlUse"
      },
      {
        name: "出入院诊断符合率（%）",
        explain: "报告期内，诊断符合患者数占（出院患者数－疑诊患者数）比例",
        sign: "cryzdfhlUse"
      },
      {
        name: "临床与病理诊断符合率（%）",
        explain: "报告期内，临床诊断与病理诊断符合数占临床病理数比例",
        sign: "lcyblzdfhlUse"
      },
      {
        name: "住院手术前后诊断符合率（%）",
        explain: "报告期内，手术前后诊断符合数占(手术例数-术前疑诊数)比例",
        sign: "zyssqhzdfhlUse"
      },
      {
        name: "手术冰冻与石蜡诊断符合率（%）",
        explain: "术中诊断与石蜡诊断符合标本数占同期术中快速诊断标本总数的比例",
        sign: "ssbdysnzdfhlUse"
      },
      {
        name: "治愈率（%）",
        explain: "报告期内，治愈人次占出院病人数的比例",
        sign: "zylUse"
      },
      {
        name: "好转率（%）",
        explain: "报告期内，好转人次占出院病人数的比例",
        sign: "hzlUse"
      },
      {
        name: "死亡率（%）",
        explain: "报告期内，死亡人次占出院病人数的比例",
        sign: "swlUse"
      },
      {
        name: "手术并发症患者住院死亡率（%）",
        explain:
          "报告期内，发生手术并发症的手术患者住院死亡人数占同期发生手术并发症的手术患者出院人次",
        sign: "ssbfzhzzyswlUse"
      },
      {
        name: "恶性肿瘤手术患者住院死亡率（%）",
        explain:
          "报告期内，恶性肿瘤手术患者死亡人数占同期恶性肿瘤手术患者出院人次",
        sign: "exzlsshzzyswlUse"
      },
      {
        name: "重返手术室再次手术患者住院死亡率（%）",
        explain:
          "报告期内，重返手术室再次手术患者死亡人数占同期重返手术室再次手术患者出院人次",
        sign: "cfssszcsshzzyswlUse"
      },
      {
        name: "住院择期手术死亡例数（例数）",
        explain: "报告期内，住院择期手术死亡人数",
        sign: "zyzqssswls"
      },
      {
        name: "重症监护平均天数（天数）",
        explain: "报告期内，重症监护平均天数",
        sign: "zzjhpjts"
      },
      {
        name: "重症监护好转率（%）",
        explain: "报告期内，重症监护好转患者占重症监护患者的比例",
        sign: "zzjhhzlUse"
      },
      {
        name: "临床路径入径率（%）",
        explain:
          "报告期内符合某一诊断编码(icd-10)的患者进入路径数和总患者数的比率",
        sign: "lcljrjl"
      },
      {
        name: "临床路径变异率（%）",
        explain: "报告期内未纳入临床路径例数占该病种同期所有病例总数比例",
        sign: "lclrjl"
      },
      {
        name: "医院感染总发生率（医院感染率）（%）",
        explain:
          "报告期内，存在的医院感染例数占观察期间处于感染危险中的病人数比例",
        sign: "yyhrzfslUse"
      },
      {
        name: "手术相关医院感染发生率（%）",
        explain: "报告期内，手术患者在院感染数占报告期内某种手术患者数占比",
        sign: "ssxgyyzgrfsl"
      },
      {
        name: "手术部位感染总发生率（%）",
        explain: "报告期内，手术患者的手术部位感染数占报告内某种手术患者数占比",
        sign: "ssbwgrzfsl"
      },
      {
        name: "择期手术患者医院感染发生率（%）",
        explain:
          "报告期内，择期手术患者医院感染例数占报告内择期手术患者例数占比",
        sign: "zqsshzyygrfslUse"
      },
      {
        name: "手术风险分级（NNIS 分级）手术部位感染率（%）",
        explain:
          "报告期内，指定NNIS 分级手术部位感染发生例数占同期进行指定NNIS 分级手术例数的比例",
        sign: "ssfxfjssbwgrlUse"
      }
    ]
  ],
  /** 医疗质量与安全 */
  [
    "QualitySafeMonitor",
    [
      {
        name: "急诊病死率（%）",
        explain: "年内某地区医疗卫生机构急诊死亡人数占急诊人次数的比例",
        sign: "jzbsl"
      },
      {
        name: "住院病死率（%）",
        explain: "年内医疗卫生机构住院死亡人数占出院人数的比例",
        sign: "zyswl"
      },
      {
        name: "入院与出院诊断符合率（%）",
        explain: "年内某地区医院入院与出院诊断符合人数占医院出院人数的比例",
        sign: "zdfhhzl"
      },
      {
        name: "临床与病理诊断符合率（%）",
        explain:
          "年内某地区医院病理诊断与出院诊断符合人数占医院出院病理检查人数的比例",
        sign: "lczdyblzdfhl"
      },
      {
        name: "I 类切口甲级率（%）",
        explain: "年内某地区医院 I 类切口愈合例数中甲级愈合例数所占比例",
        sign: "iqkjjl"
      },
      {
        name: "I 类切口感染率（%）",
        explain: "年内某地区医院 I 类切口愈合例数中丙级愈合例数所占比例",
        sign: "iqkgrl"
      },
      {
        name: "医疗纠纷例数（例）",
        explain: "某年由医疗卫生机构相关管理部门受理的医疗纠纷例数",
        sign: "yljfs"
      },
      {
        name: "医疗事故例数（例）",
        explain: "某年由医疗事故鉴定机构依据《医疗事故处理条例》鉴定的事故例数",
        sign: "ylsgs"
      }
    ]
  ],
  /** 预约挂号业务 */
  [
    "RegistrationMonitor",
    [
      {
        name: "预约挂号量（人次）",
        explain: "报告期内预约挂号量",
        sign: "yyghl"
      },
      {
        name: "预约退号量（人次）",
        explain: "报告期内预约挂号退号量",
        sign: "yythl"
      },
      {
        name: "预约履约率（%）",
        explain: "报告期内，通过预约挂号就诊人次/预约挂号量",
        sign: "yynvlUse"
      },
      {
        name: "预约爽约率（%）",
        explain: "报告期内，通过预约挂号未就诊人次/预约挂号量",
        sign: "yysvlUse"
      }
    ]
  ],
  /** 医疗服务效率 */
  [
    "ServiceEfficiencyMonitor",
    [
      {
        name: "病床使用率（%）",
        explain:
          "报告期内某地区医疗卫生机构实际占用总床日数与实际开放总床日数之比",
        sign: "bcsyl"
      },
      {
        name: "平均住院日（日）",
        explain:
          "报告期内某地区平均每个出院者占用的住院床日数，又称出院者平均住院日",
        sign: "pjzyr"
      },
      {
        name: "病床周转次数（次）",
        explain: "年内某地区医疗卫生机构出院人数与平均开放病床数之比",
        sign: "bczzcs"
      },
      {
        name: "医师日均担负诊疗人次（人次）",
        explain: "报告期内某地区平均每位医师每日担负的诊疗人次数",
        sign: "ysrjdfzlrc"
      },
      {
        name: "医师日均担负住院床日（日）",
        explain: "报告期内平均每位医师每日担负的住院床日数",
        sign: "ysrjdfzycr"
      },
      {
        name: "急救车出车率（%）",
        explain: "年内某地区急救机构出动急救车的次数占急救呼叫次数的比例",
        sign: "jjcccl"
      },
      {
        name: "院前急救服务网络平均反应时间（分）",
        explain:
          "年内某地区自患者发出急救呼救请求到急救人员到达呼救患者驻地的平均时间。",
        sign: "jjcpjfysj"
      }
    ]
  ],
  /** 医疗服务利用 */
  [
    "ServiceUsingMonitor",
    [
      {
        name: "总诊疗人次数（人次）",
        explain:
          "报告期内某地区所有诊疗活动的总人次，包括医疗卫生机构的门诊、急诊、出诊、单项健康检查、健康咨询指导人次",
        sign: "zzlrc"
      },
      {
        name: "门急诊人次数（人次）",
        explain: "报告期内某地区医疗卫生机构的门诊和急诊人次数之和",
        sign: "mzrc"
      },
      {
        name: "预约诊疗人次数（人次）",
        explain:
          "报告期内某地区患者采用网上、电话、院内登记、双向转诊等方式成功预约诊疗人次之和，含中医",
        sign: "yyzlrc"
      },
      {
        name: "健康检查人次数（人次）",
        explain:
          "报告期内某地区医疗机构全身体检人次数和体检中心全身及单项健康检查人次数之和",
        sign: "tjrc"
      },
      {
        name: "中医治未病服务人次数（人次）",
        explain: "年内某地区中医治未病科、中医治未病中心的门诊服务人次数之和",
        sign: "zyzwbrc"
      },
      {
        name: "使用中药饮片的出院人数占比（%）",
        explain: "使用中药饮片的出院人数占同类机构出院人数的比例",
        sign: "zyypzb"
      },
      {
        name: "门诊中医非药物疗法诊疗人次占比（%）",
        explain:
          "门诊中医非药物疗法诊疗人次数（以挂号人次计）占门诊人次数的比例",
        sign: "mzzyfywlfzb"
      },
      {
        name: "居民年平均就诊次数（人次）",
        explain: "年内某地区居民到医疗卫生机构的平均就诊人次数",
        sign: ""
      },

      {
        name: "非公医疗机构门诊量占门诊总量的比例（%）",
        explain: "年内某地区非公医疗机构门诊量与医疗卫生机构门诊总量之比",
        sign: "fyljgmzzb"
      },
      {
        name: "入院人数（人次）",
        explain: "年内某地区居民到医疗卫生机构住院的总人次数",
        sign: "ryrc"
      },
      {
        name: "居民年住院率（%）",
        explain: "年内某地区每百居民的住院次数",
        sign: ""
      },
      {
        name: "每百门急诊入院人数（人次）",
        explain: "年内每百门急诊患者中接受入院治疗的人次数",
        sign: "mzryzb"
      },
      {
        name: "出院人数（人次）",
        explain: "报告期内医疗卫生机构所有住院后出院的人次数",
        sign: "cyrc"
      },
      {
        name: "民营医院住院量占医院住院量的比例（%）",
        explain: "报告期内某地区民营医院出院人数与医院出院总人数之比",
        sign: "fyljgcyzb"
      },
      {
        name: "血液采集总量（U）",
        explain: "年内某地区一般血站采集的血液总单位数",
        sign: ""
      },
      {
        name: "临床用血总量（U）",
        explain: "某年某地区各级各类医疗卫生机构临床用血总单位数",
        sign: "yxl"
      },
      {
        name: "报废血液总量（U）",
        explain:
          "某年某地区因血液筛查结果不合格，血液过期，或血液采集、制备、储存和运输过程中由物理或化学因素造成的血液破损、变性、非标准剂量等，而导致的不能用于临床输注的血液总单位数。\n",
        sign: ""
      },
      {
        name: "血液检测不合格率（%）",
        explain: "某年某地区血液筛查结果不合格数占所有被查血液样本百分数",
        sign: ""
      },
      {
        name: "献血人次数（人次）",
        explain: "某年某地区采供血机构为献血者提供服务，并完成血液采集的人次数",
        sign: ""
      },
      {
        name: "千人口献血人数（人）",
        explain: "某年某地区每千人口中的献血人数",
        sign: ""
      },
      {
        name: "人均用血量（毫升）",
        explain: "某年某地区人均临床用全血和红细胞类血液成分的量",
        sign: "rjyxl"
      },
      {
        name: "住院病人手术人次数（人次）",
        explain: "年内某地区住院病人中施行手术和操作的人次数",
        sign: "zyssrc"
      }
    ]
  ],
  /** 医务人员职业行为 */
  [
    "StaffBehaviorMonitor",
    [
      {
        name: "非法行医（例次）",
        explain: "报告期内发现非法行医例次",
        sign: "ffxy"
      },
      {
        name: "医疗事故（次数）",
        explain: "报告期内发出现医疗事故（1-4级）例次",
        sign: "ylsg"
      },
      {
        name: "不良事件（次数）",
        explain: "报告期内发出现不良事件次数",
        sign: "blsj"
      },
      {
        name: "药物不良反应报告（例数）",
        explain: "报告期末药物不良反应报告（例数）",
        sign: "ywblfybg"
      }
    ]
  ],
  /** 远程医疗服务 */
  [
    "TelemedicineMonitor",
    [
      {
        name: "会诊申请量（人次）",
        explain: "报告期内会诊申请量",
        sign: "hzsql"
      },
      {
        name: "转诊量（人次）",
        explain: "报告期内转诊量",
        sign: "zzl"
      },
      {
        name: "预约量（人次）",
        explain: "报告期内预约量",
        sign: "yyl"
      },
      {
        name: "远程诊断申请量（人次）",
        explain: "报告期内预约远程诊断申请量",
        sign: "yczdsql"
      },
      {
        name: "提交的病历数量（例次）",
        explain: "报告期内远程提交的病历数量",
        sign: "tjblsl"
      },
      {
        name: "远程医疗病种数量",
        explain: "报告期内远程医疗病种数量",
        sign: "ycylbzsl"
      }
    ]
  ]
]);
export default TableDataConfig;
