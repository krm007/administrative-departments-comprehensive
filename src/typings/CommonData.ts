/**
 * 按药品类型统计
 */
export interface AnYaoPinLeiXingTongJi{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期:按月 */
  riQi?: string;
  /** 库房 */
  kuFang?: string;
  /** 分类名称 */
  feiLeiMingCheng?: string;
  /** 方式名称 */
  fangShiMingCheng?: string;
  /** 西药 */
  xiYao?: number;
  /** 成药 */
  chengYao?: number;
  /** 卫材 */
  weiCai?: number;
  /** 合计金额 */
  heJiJinE?: number;
}
/**
 * 按账薄类型统计
 */
export interface AnZhangBoLeiXingTongJi{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期:按月 */
  riQi?: string;
  /** 库房 */
  kuFang?: string;
  /** 分类名称 */
  fenLeiMingCheng?: string;
  /** 方式名称 */
  fangShiMingCheng?: string;
  /** 西药 */
  xiYao?: number;
  /** 成药 */
  chengYao?: number;
  /** 氧气 */
  yangQi?: number;
  /** 卫材 */
  weiCai?: number;
  /** 合计金额 */
  heJiJinE?: number;
}
/**
 * 某病报告发病情况（肺结核，肝炎，hiv阳性，梅毒）
 */
export interface BaoGaoFaBingQingKuang{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期:格式：年份+季度 2018Q1 */
  riQi?: string;
  /** 传染病名称 */
  chuanRanBingMingCheng?: string;
  /** 总报告数 */
  zongBaoGaoShu?: number;
  /** 新投犯报告数 */
  xinTouFanBaoGaoShu?: number;
}
/**
 * 本季度某监狱慢性病分布情况
 */
export interface BenJiManXingFenBu{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 报告日期:格式：年份+季度 2018Q1 */
  baoGaoNianFen?: string;
  /** 慢病病种 */
  manBingBingZhong?: string;
  /** 发病情况 */
  faBingQingKuang?: number;
}
/**
 * 病区出院病人应收医疗费明细（财务）
 */
export interface BingQuChuYuanYingShou{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 单位名称 */
  danWeiMingCheng?: string;
  /** 姓名 */
  xingMing?: string;
  /** 病区 */
  bingQu?: string;
  /** 科室 */
  keShi?: string;
  /** 医疗费 */
  yiLiaoFei?: number;
}
/**
 * 床位使用状况分析
 */
export interface ChuangWeiShiYong{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 病区 */
  bingQu?: string;
  /** 病人数 */
  bingRenShu?: number;
  /** 总床数 */
  zongChuangShu?: number;
  /** 空床数 */
  kongChuangShu?: number;
  /** 占床数 */
  zhanChuangShu?: number;
  /** 包床数 */
  baoChuangShu?: number;
  /** 原有人数 */
  yuanYouRenShu?: number;
  /** 入院人数 */
  ruYuanRenShu?: number;
  /** 出院人数 */
  chuYuanRenShu?: number;
  /** 转入人数 */
  zhuanRuRenShu?: number;
  /** 转出人数 */
  zhuanChuRenShu?: number;
  /** 待入科 */
  daiRuKe?: number;
}
/**
 * 出院病人病区科室汇总
 */
export interface ChuYuanBingRenBingQu{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 病区 */
  bingQu?: string;
  /** 科室 */
  keShi?: string;
  /** 人次 */
  renCi?: number;
  /** 西药费 */
  xiYaoFei?: number;
  /** 成药费 */
  chengYaoFei?: number;
  /** 检查费 */
  jianChaFei?: number;
  /** 治疗费 */
  zhiLiaoFei?: number;
  /** CT费 */
  ctFei?: number;
  /** 放射费 */
  fangSheFei?: number;
  /** 手术费 */
  shouShuFei?: number;
  /** 化验费 */
  huaYanFei?: number;
  /** 其他费 */
  qiTaFei?: number;
  /** 输氧费 */
  shuYangFei?: number;
  /** 诊察费 */
  zhenChaFei?: number;
  /** 卫生组套费 */
  weiShengZuTaoFei?: number;
  /** 床位费 */
  chuangWeiFei?: number;
  /** 伙食费 */
  huoShiFei?: number;
  /** 护理费 */
  huLiFei?: number;
  /** 材料费 */
  caiLiaoFei?: number;
  /** 麻醉费 */
  maZuiFei?: number;
  /** 合计 */
  heJi?: number;
}
/**
 * 出院病人费用统计
 */
export interface ChuYuanBingRenFeiYong{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 病历号 */
  bingLiHao?: string;
  /** 姓名 */
  xingMing?: string;
  /** 西药费 */
  xiYaoFei?: number;
  /** 成药费 */
  chengYaoFei?: number;
  /** 检查费 */
  jianCheFei?: number;
  /** 治疗费 */
  zhiLiaoFei?: number;
  /** CT费 */
  ctFei?: number;
  /** 放射费 */
  fangSheFei?: number;
  /** 化验费 */
  huaYanFei?: number;
  /** 其它费 */
  qiTaFei?: number;
  /** 输氧费 */
  shuYangFei?: number;
  /** 诊察费 */
  zhenChaFei?: number;
  /** 卫生组套费 */
  weiShengZhuTaoFei?: number;
  /** 床位费 */
  chuangWeiFei?: number;
  /** 伙食费 */
  huoShiFei?: number;
  /** 护理费 */
  huLiFei?: number;
  /** 材料费 */
  caiLiaoFei?: number;
  /** 合  计 */
  heJi?: number;
}
/**
 * 出院病人结账汇总
 */
export interface ChuYuanBingRenJieZhang{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 病区 */
  bingQu?: string;
  /** 结算人次 */
  jieSuanRenCi?: number;
  /** 合计金额 */
  heJiJinE?: number;
  /** 已付金额 */
  yiFuJinE?: number;
  /** 现金挂账 */
  xianJinGuaZhang?: number;
  /** 省医保 */
  shengYiBao?: number;
  /** 市医保 */
  shiYiBao?: number;
  /** 省一卡通 */
  shengYiKaTong?: number;
  /** 其它金额 */
  qiTaJinE?: number;
}
/**
 * 出院病人收入统计表（科室）
 */
export interface ChuYuanBingRenShouRu{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 科室 */
  keShi?: string;
  /** 住院人数 */
  zhuYuanRenShu?: number;
  /** 住院天数 */
  zhuYuanTianShu?: number;
  /** 合计金额 */
  heJiJinE?: number;
  /** 西药费 */
  xiYaoFei?: number;
  /** 中成药 */
  zhongChengYao?: number;
  /** 中草药 */
  zhongCaoYao?: number;
  /** 药品小计 */
  yaoPinXiaoJi?: number;
  /** 床位费 */
  chuangWeiFei?: number;
  /** 诊疗费 */
  zhenLiaoFei?: number;
  /** 科室检查费 */
  keShiJianChaFei?: number;
  /** 治疗费 */
  zhiLiaoFei?: number;
  /** 材料费 */
  caiLiaoFei?: number;
  /** 护理费 */
  huLiFei?: number;
  /** 输氧费 */
  shuYangFei?: number;
  /** 接生费 */
  jieShengFei?: number;
  /** 其它费 */
  qiTaFei?: number;
  /** 手术 */
  shouShu?: number;
  /** 化验 */
  huaYan?: number;
  /** 放射 */
  fangShe?: number;
  /** B超 */
  bChao?: number;
  /** 内镜 */
  neiJing?: number;
  /** 心电图 */
  xinDianTu?: number;
  /** 血透费 */
  xueTouTu?: number;
  /** 体外循环费 */
  tiWaiXunHuanFei?: number;
  /** 麻醉费 */
  maZhuiFei?: number;
  /** 输血费 */
  shuXheFei?: number;
  /** 手术材料费 */
  shouShuCaiLiaoFei?: number;
  /** 麻醉材料费 */
  maZhuiCaiLiaoFei?: number;
  /** 检查材料费 */
  jianChaCaiLiaoFei?: number;
  /** 化验材料费 */
  huaYanCaiLiaoFei?: number;
  /** 其他医技费用 */
  qiTaYiJiFeiYong?: number;
  /** 其他医技材料 */
  qiTaYiJiCaiLiao?: number;
  /** 其他非核算收入 */
  qiTaFeiHeSuanShouRu?: number;
  /** 医疗收入小计 */
  yiIaoShouRuXiaoJi?: number;
  /** 期间 */
  qiJian?: string;
  /** 财务科室编码 */
  caiWuKeShiBianMa?: string;
  /** 核算单元 */
  heSuanDanYuan?: string;
  /** 门诊住院 */
  menZhenZhuYuan?: string;
}
/**
 * 出院死亡病人清单
 */
export interface ChuYuanSiWangBingRen{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 病案号 */
  bingAnHao?: string;
  /** 姓名 */
  xingMing?: string;
  /** 年龄 */
  nianLing?: string;
  /** 科室 */
  keShi?: string;
  /** 主治医生 */
  zhuZhiYiSheng?: string;
  /** 死亡诊断 */
  siWangZhenDuan?: string;
  /** 死亡日期 */
  siWangRiQi?: string;
}
/**
 * 定点医疗机构单病种医疗费申请拨付核对表
 */
export interface DingDianShenQingHeDui{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 险种 */
  xianZhong?: string;
  /** 病种/治疗方式 */
  bingZhong?: string;
  /** 人次 */
  renCi?: number;
  /** 医疗费总额 */
  yiLiaoFeiZongE?: number;
  /** 自理费用 */
  ziLiFeiYong?: number;
  /** 列支金额 */
  lieZhiJinE?: number;
  /** 申请拨付 */
  shenQingBoFu?: number;
}
/**
 * 法定传染病报告发病情况
 */
export interface FaDingChuanRanFaBing{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期:格式：年份+季度 2018Q1 */
  riQi?: string;
  /** 病种 */
  bingZhong?: string;
  /** 本季报告数 */
  benJiBaoGaoShu?: number;
  /** 上季报告数 */
  shangJiBaoGaoShu?: number;
  /** 环比（%） */
  huanBi?: number;
  /** 去年同季报告数:对方取不出来，后台取 */
  quNianTongJiBaoGaoShu?: number;
  /** 同比（%） */
  tongBi?: number;
}
/**
 * 各地区法定传染病报告发病分布
 */
export interface FaDingChuanRanFenBu{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 地区:包括：杭州，宁波，湖州，金华，衢州，台州，丽水 */
  diQu?: string;
  /** 病种 */
  bingZhong?: string;
  /** 患病人数 */
  huanBingRenShu?: number;
}
/**
 * 浙江省监狱系统法定传染病发病、死亡统计表
 */
export interface FaDingChuanRanTongJi{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期:格式：年份+季度 2018Q1 */
  riQi?: string;
  /** 疾病名 */
  jiBingMingCheng?: string;
  /** 本季发病数 */
  benJiFaBingShu?: number;
  /** 新投犯带病入监数 */
  xinFanDaiBingRuJianShu?: number;
  /** 季末患病数 */
  jiMoHuanBingShu?: number;
  /** 本年累计数:对方取不出来，后台取 */
  benNianLeiJiShu?: number;
  /** 本季死亡数 */
  benJiSiWangShu?: number;
}
/**
 * 肺结核
 */
export interface FeiJieHe{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期:格式：年份+季度 2018Q1 */
  riQi?: string;
  /** 入监体检-例数 */
  fxfsRuJianTiJianLiShu?: number;
  /** 入监体检-占比 */
  fxfsRuYuanTiJianZhanBi?: number;
  /** 因症就诊-例数 */
  fxfsJiuZhenLiShu?: number;
  /** 因症就诊-占比 */
  fxfsJiuZhenZhanBi?: number;
  /** 健康体检-例数 */
  fxfsJianKangTiJianLiShu?: number;
  /** 健康体检-占比 */
  fxfsJianKangTiJianZhanBi?: number;
  /** 接触者检查-例数 */
  fxfsJianChaLiShu?: number;
  /** 接触者检查-占比 */
  fxfsJianChaZhanBi?: number;
  /** 结核普查-例数 */
  fxfsJieHePuChaLiShu?: number;
  /** 结核普查-占比 */
  fxfsJieHePuChaZhanBi?: number;
  /** 其他-例数 */
  fxfsQiTaLiShu?: number;
  /** 其他-占比 */
  fxfsQiTaZhanBi?: number;
  /** 合计-例数 */
  fxfsHeJiLiShu?: number;
  /** 合计-占比:100% */
  fxfsHeJiZhanBi?: number;
  /** 新患者-例数 */
  djflXinHuanZheLiShu?: number;
  /** 新患者-占比 */
  djflXinHuanZheZhanBi?: number;
  /** 复发-例数 */
  djflFuFaLiShu?: number;
  /** 复发-占比 */
  djflFuFaZhanBi?: number;
  /** 返回-例数 */
  djflFanHuiLiShu?: number;
  /** 返回-占比 */
  djflFanHuiZhanBi?: number;
  /** 初治失败-例数 */
  djflChuZhiShiBaiLiShu?: number;
  /** 初治失败-占比 */
  djflChuZhiShiBaiZhanBi?: number;
  /** 其他-例数 */
  djflQiTaLiShu?: number;
  /** 其他-占比 */
  djflQiTaZhanBi?: number;
  /** 合计-例数 */
  djflHeJiLiShu?: number;
  /** 合计-占比:100% */
  djflHeJiZhanBi?: number;
  /** 痰涂片-阴性-例数 */
  ttpYinXingLiShu?: number;
  /** 痰涂片-阴性-占比 */
  ttpYinXingZhanBi?: number;
  /** 痰涂片-阳性-例数 */
  ttpYangXingLiShu?: number;
  /** 痰涂片-阳性-占比 */
  ttpYangXingZhanBi?: number;
  /** 合计-例数 */
  ttpHeJiLiShu?: number;
  /** 合计-占比:100% */
  ttpHeJiZhanBi?: number;
}
/**
 * 挂号记录
 */
export interface GuaHaoJiLu{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 就诊科室 */
  jiuZhenKeShi?: string;
  /** 日期 */
  riQi?: string;
  /** 操作工号 */
  caoZuoGongHao?: string;
  /** 操作人员 */
  caoZuoRenYuan?: string;
  /** 挂号人次 */
  guaHaoRenCi?: number;
  /** 退号人次 */
  tuiHaoRenCi?: number;
  /** 挂号金额 */
  guaHaoJinE?: number;
  /** 收费人次 */
  shouFeiRenCi?: number;
  /** 退费人次 */
  tuiFeiRenCi?: number;
  /** 收费金额 */
  shouFeiJinE?: number;
  /** 合计金额 */
  heJiJinE?: number;
}
/**
 * 挂号日报个人汇总表
 */
export interface GuaHaoRiBaoGeRenHuiZong{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 挂号数量 */
  guaHaoShuLiang?: number;
  /** 挂号金额 */
  guaHaoJinE?: number;
  /** 挂号诊疗费 */
  guaHaoZhenLiaoFei?: number;
  /** 挂号磁卡费 */
  guaHaoCiKaFei?: number;
  /** 挂号病历费 */
  guaHaoBingLiFei?: number;
  /** 退号数量 */
  tuiHaoShuLiang?: number;
  /** 退号金额 */
  tuiHaoJinE?: number;
  /** 退号诊疗费 */
  tuiHaoZhenLiaoFei?: number;
  /** 退号磁卡费 */
  tuiHaoCiKaFei?: number;
  /** 退号病历费 */
  tuiHaoBingLiFei?: number;
  /** 实际数量 */
  shiJiShuLiang?: number;
  /** 实际挂号金额 */
  shiJiGuaHaoJinE?: number;
  /** 实际诊疗费 */
  shiJiZhenLiaoFei?: number;
  /** 实际磁卡费 */
  shiJiCiKaFei?: number;
  /** 实际病历费 */
  shiJiBingLiFei?: number;
}
/**
 * 监狱重点慢性病月度汇总表
 */
export interface HisZhongDianManXingBing{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期:按月 */
  riQi?: string;
  /** 一级 */
  jiBingYuJingRenShu_1?: number;
  /** 二级 */
  jiBingYuJingRenShu_2?: number;
  /** 三级 */
  jiBingYuJingRenShu_3?: number;
  /** 本月发病数 */
  gxyBenYueFaBingShu?: number;
  /** 月末患病数 */
  gxyYueMoHuanBingShu?: number;
  /** 本月发病数 */
  gxbBenYueFaBingShu?: number;
  /** 月末患病数 */
  gxbYueMoHuanBingShu?: number;
  /** 本月发病数 */
  nzzBenYueFaBingShu?: number;
  /** 月末患病数 */
  nzzYueMoHuanBingShu?: number;
  /** 本月发病数 */
  tnbBenYueFaBingShu?: number;
  /** 月末患病数 */
  tnbYueMoHuanBingShu?: number;
  /** 本月发病数 */
  mzfBenYueFaBingShu?: number;
  /** 月末患病数 */
  mzfYueMoHuanBingShu?: number;
  /** 本月发病数 */
  exzlBenYueFaBingShu?: number;
  /** 月末患病数 */
  exzlYueMoHuanBingShu?: number;
  /** 本月发病数 */
  jsbBenYueFaBingShu?: number;
  /** 月末患病数 */
  jsbYueMoHuanBingShu?: number;
}
/**
 * 检验标本可接受性统计查询||检验报告质量统计查询||检验周转时间统计查询
 */
export interface JianYanBiaoBenTongJi{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 指标值:指标说明 */
  zhiBiaoZhi?: string;
  /** 临检 */
  linJian?: number;
  /** 生化 */
  shengHua?: number;
  /** 免疫 */
  minaYi?: number;
  /** 细菌 */
  xiJun?: number;
  /** 下沙院区 */
  xiaShaYuanQu?: number;
  /** 血库 */
  xueKu?: number;
  /** 二监检验 */
  erJianJianYan?: number;
  /** 三监检验 */
  sanJianJianYuan?: number;
  /** 女监检验 */
  nvJianJianYuan?: number;
  /** 外送 */
  waiSong?: number;
  /** 总计 */
  zongJi?: number;
}
/**
 * 临床检验实验室危急值
 */
export interface LinChuangJianYan{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 确认日期 */
  queRenRiQi?: string;
  /** 样本类型 */
  yangBenLeiXinng?: string;
  /** 标本日期 */
  yangBenRiQi?: string;
  /** 临床诊断 */
  linChuangZhenDuan?: string;
  /** 确认耗时(分钟) */
  queRenHaoShi?: number;
}
/**
 * 本季度全省监狱重点慢性病新犯发病情况及新老犯比较分布
 */
export interface ManXingBingBiJiao{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期:格式：年份+季度 2018Q1 */
  riQi?: string;
  /** 病种 */
  bingZhong?: string;
  /** 本季发病数 */
  benJiFaBingShu?: number;
  /** 新投犯带病入监数 */
  xinFanDaiBingRuJianShu?: number;
  /** 狱内发病数 */
  yuNeiFaBingShu?: number;
}
/**
 * 本季末各监狱重点慢性病患病比例
 */
export interface ManXingBingBiLi{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期:格式：年份+季度 2018Q1 */
  riQi?: string;
  /** 单位（监狱） */
  danWei?: string;
  /** 季末押犯数 */
  jiMoYaFanShu?: number;
  /** 季末患病病例数 */
  jiMoHuanBingLiShu?: number;
  /** 各病种季末患病数 */
  bignZhongJiMoHuanBingShu?: number;
  /** 各病种季末患病比例 */
  bingZhongJiMoHuanBingBi?: string;
}
/**
 * 本季度全省监狱慢性病分布情况
 */
export interface ManXingBingFenBu{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 报告日期:格式：年份+季度 2018Q1 */
  baoGaoNianFen?: string;
  /** 慢病病种 */
  manBingBingZhong?: string;
  /** 发病情况 */
  faBingQingKuang?: number;
}
/**
 * 监狱系统重点慢性病季汇总表
 */
export interface ManXingBingJiDuHuiZong{
  /** 单位 */
  danWei?: string;
  /** 日期:格式：年份+季度 2018Q1 */
  riQi?: string;
  /** 季末押犯总数 */
  jiMoYaFanZongShu?: number;
  /** 本季入监新犯数 */
  benJiRuJianXinFanShu?: number;
  /** 季末通过保外鉴定而未保 */
  jiMoBaoWaiErWeiBao?: string;
  /** 精神类疾病人数 */
  jingShenLeiJiBingRenShu?: number;
  /** 心脑血管疾病—高血压-本季发病数 */
  xlxgGxyBenJiFaBingShu?: number;
  /** 心脑血管疾病—高血压-新投犯带病入监数 */
  xlxgGxyXinFanDaiBingShu?: number;
  /** 心脑血管疾病—高血压-季末患病数 */
  xlxgGxyJiMoHuanBingShu?: number;
  /** 心脑血管疾病—高血压-本年累计数 */
  xlxgGxyBenNianLeiJiShu?: number;
  /** 心脑血管疾病—高血压-本季死亡数 */
  xlxgGxyBenJiSiWangShu?: number;
  /** 心脑血管疾病—冠心病-本季发病数 */
  xlxgGxbBenJiFaBingShu?: number;
  /** 心脑血管疾病—冠心病-新投犯带病入监数 */
  xlxgGxbXinFanDaiBingShu?: number;
  /** 心脑血管疾病—冠心病-季末患病数 */
  xlxgGxbJiMoHuanBingShu?: number;
  /** 心脑血管疾病—冠心病-本年累计数 */
  xlxgGxbBenNianLeiJiShu?: number;
  /** 心脑血管疾病—冠心病-本季死亡数 */
  xlxgGxbBenJiSiWangShu?: number;
  /** 心脑血管疾病—脑卒中-本季发病数 */
  xlxgNzzBenJiFaBingShu?: number;
  /** 心脑血管疾病—脑卒中-新投犯带病入监数 */
  xlxgNzzXinFanDaiBingShu?: number;
  /** 心脑血管疾病—脑卒中-季末患病数 */
  xlxgNzzJiMoHuanBingShu?: number;
  /** 心脑血管疾病—脑卒中-本年累计数 */
  xlxgNzzBenNianLeiJiShu?: number;
  /** 心脑血管疾病—脑卒中-本季死亡数 */
  xlxgNzzBenJiSiWangShu?: number;
  /** 心脑血管疾病—其他-本季发病数 */
  xlxgQtBenJiFaBingShu?: number;
  /** 心脑血管疾病—其他-新投犯带病入监数 */
  xlxgQtXinFanDaiBingShu?: number;
  /** 心脑血管疾病—其他-季末患病数 */
  xlxgQtJiMoHuanBingShu?: number;
  /** 心脑血管疾病—其他-本年累计数 */
  xlxgQtBenNianLeiJiShu?: number;
  /** 心脑血管疾病—其他-本季死亡数 */
  xlxgQtBenJiSiWangShu?: number;
  /** 内分泌营养代谢疾病—糖尿病-本季发病数 */
  nfmTnbBenJiFaBingShu?: number;
  /** 内分泌营养代谢疾病—糖尿病-新投犯带病入监数 */
  nfmTnbXinFanDaiBingShu?: number;
  /** 内分泌营养代谢疾病—糖尿病-季末患病数 */
  nfmTnbJiMoHuanBingShu?: number;
  /** 内分泌营养代谢疾病—糖尿病-本年累计数 */
  nfmTnbBenNianLeiJiShu?: number;
  /** 内分泌营养代谢疾病—糖尿病-本季死亡数 */
  nfmTnbBenJiSiWangShu?: number;
  /** 内分泌营养代谢疾病—其他-本季发病数 */
  nfmQtBenJiFaBingShu?: number;
  /** 内分泌营养代谢疾病—其他-新投犯带病入监数 */
  nfmQtXinFanDaiBingShu?: number;
  /** 内分泌营养代谢疾病—其他-季末患病数 */
  nfmQtJiMoHuanBingShu?: number;
  /** 内分泌营养代谢疾病—其他-本年累计数 */
  nfmQtBenNianLeiJiShu?: number;
  /** 内分泌营养代谢疾病—其他-本季死亡数 */
  nfmQtBenJiSiWangShu?: number;
  /** 精神疾病-本季发病数 */
  jsjbBenJiFaBingShu?: number;
  /** 精神疾病-新投犯带病入监数 */
  jsjbXinFanDaiBingShu?: number;
  /** 精神疾病-季末患病数 */
  jsjbJiMoHuanBingShu?: number;
  /** 精神疾病-本年累计数 */
  jsjbBenNianLeiJiShu?: number;
  /** 精神疾病-本季死亡数 */
  jsjbBenJiSiWangShu?: number;
  /** 运动系统疾病-本季发病数 */
  ydxtjbBenJiFaBingShu?: number;
  /** 运动系统疾病-新投犯带病入监数 */
  ydxtjbXinFanDaiBingShu?: number;
  /** 运动系统疾病-季末患病数 */
  ydxtjbJiMoHuanBingShu?: number;
  /** 运动系统疾病-本年累计数 */
  ydxtjbBenNianLeiJiShu?: number;
  /** 运动系统疾病-本季死亡数 */
  ydxtjbBenJiSiWangShu?: number;
  /** 消化系统疾病-本季发病数 */
  xhxtjbBenJiFaBingShu?: number;
  /** 消化系统疾病-新投犯带病入监数 */
  xhxtjbXinFanDaiBingShu?: number;
  /** 消化系统疾病-季末患病数 */
  xhxtjbJiMoHuanBingShu?: number;
  /** 消化系统疾病-本年累计数 */
  xhxtjbBenNianLeiJiShu?: number;
  /** 消化系统疾病-本季死亡数 */
  xhxtjbBenJiSiWangShu?: number;
  /** 呼吸系统疾病-本季发病数 */
  hxxtjbBenJiFaBingShu?: number;
  /** 呼吸系统疾病-新投犯带病入监数 */
  hxxtjbXinFanDaiBingShu?: number;
  /** 呼吸系统疾病-季末患病数 */
  hxxtjbJiMoHuanBingShu?: number;
  /** 呼吸系统疾病-本年累计数 */
  hxxtjbBenNianLeiJiShu?: number;
  /** 呼吸系统疾病-本季死亡数 */
  hxxtjbBenJiSiWangShu?: number;
  /** 泌尿系统疾病-本季发病数 */
  mnxtjbBenJiFaBingShu?: number;
  /** 泌尿系统疾病-新投犯带病入监数 */
  mnxtjbXinFanDaiBingShu?: number;
  /** 泌尿系统疾病-季末患病数 */
  mnxtjbJiMoHuanBingShu?: number;
  /** 泌尿系统疾病-本年累计数 */
  mnxtjbBenNianLeiJiShu?: number;
  /** 泌尿系统疾病-本季死亡数 */
  mnxtjbBenJiSiWangShu?: number;
  /** 神经系统疾病-本季发病数 */
  sjxtjbBenJiFaBingShu?: number;
  /** 神经系统疾病-新投犯带病入监数 */
  sjxtjbXinFanDaiBingShu?: number;
  /** 神经系统疾病-季末患病数 */
  sjxtjbJiMoHuanBingShu?: number;
  /** 神经系统疾病-本年累计数 */
  sjxtjbBenNianLeiJiShu?: number;
  /** 神经系统疾病-本季死亡数 */
  sjxtjbBenJiSiWangShu?: number;
  /** 血液造血系统疾病-本季发病数 */
  xyzxxtjbBenJiFaBingShu?: number;
  /** 血液造血系统疾病-新投犯带病入监数 */
  xyzxxtjbXinFanDaiBingShu?: number;
  /** 血液造血系统疾病-季末患病数 */
  xyzxxtjbJiMoHuanBingShu?: number;
  /** 血液造血系统疾病-本年累计数 */
  xyzxxtjbBenNianLeiJiShu?: number;
  /** 血液造血系统疾病-本季死亡数 */
  xyzxxtjbBenJiSiWangShu?: number;
  /** 恶性肿瘤-本季发病数 */
  exzlBenJiFaBingShu?: number;
  /** 恶性肿瘤-新投犯带病入监数 */
  exzlXinFanDaiBingShu?: number;
  /** 恶性肿瘤-季末患病数 */
  exzlJiMoHuanBingShu?: number;
  /** 恶性肿瘤-本年累计数 */
  exzlBenNianLeiJiShu?: number;
  /** 恶性肿瘤-本季死亡数 */
  exzlBenJiSiWangShu?: number;
  /** 免疫风湿性疾病-本季发病数 */
  myfsxjbBenJiFaBingShu?: number;
  /** 免疫风湿性疾病-新投犯带病入监数 */
  myfsxjbXinFanDaiBingShu?: number;
  /** 免疫风湿性疾病-季末患病数 */
  myfsxjbJiMoHuanBingShu?: number;
  /** 免疫风湿性疾病-本年累计数 */
  myfsxjbBenNianLeiJiShu?: number;
  /** 免疫风湿性疾病-本季死亡数 */
  myfsxjbBenJiSiWangShu?: number;
  /** 其他-本季发病数 */
  qtBenJiFaBingShu?: number;
  /** 其他-新投犯带病入监数 */
  qtXinFanDaiBingShu?: number;
  /** 其他-季末患病数 */
  qtJiMoHuanBingShu?: number;
  /** 其他-本年累计数 */
  qtBenNianLeiJiShu?: number;
  /** 其他-本季死亡数 */
  qtBenJiSiWangShu?: number;
  /** 合计-本季发病数 */
  hjBenJiFaBingShu?: number;
  /** 合计-新投犯带病入监数 */
  hjXinFanDaiBingShu?: number;
  /** 合计-季末患病数 */
  hjJiMoHuanBingShu?: number;
  /** 合计-本年累计数 */
  hjBenNianLeiJiShu?: number;
  /** 合计-本季死亡数 */
  hjBenJiSiWangShu?: number;
  /** 审核人 */
  shenHeRen?: string;
  /** 填报人 */
  tianBaoRen?: string;
  /** 填报人警务通 */
  tianBaoRenJingWuTong?: string;
  /** 填报日期 */
  tianBaoRenRiQi?: string;
  /** 单位小计-本季总发病数 */
  dwxjBenJiZongFaBingShu?: number;
  /** 单位小计-总发病数占押犯之比 */
  dwxjZongShuZhanYaFanBi?: string;
  /** 单位小计-新投犯带病入监总数 */
  dwxjXinFanDaiBingRuJians?: number;
  /** 单位小计-新投犯带病数占总押犯数之比 */
  dwxjXtfdbszzyfzb?: string;
  /** 单位小计-新投犯中带病数比例 */
  dwxjXinFanDaiBingShuBi?: string;
  /** 单位小计-季末患病总数 */
  dwxjJiMoHuanBingZongShu?: number;
}
/**
 * 全省监狱重点慢性病（心脑血管病|糖尿病|恶性肿瘤...）季度发病、患病情况
 */
export interface ManXingBingQingKuang{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期:格式：年份+季度 2018Q1 */
  riQi?: string;
  /** 本季发病数 */
  benJiFaBingShu?: number;
  /** 新投犯带病数 */
  xinTouFanDaiBingShu?: number;
  /** 季末患病数 */
  jiMoHuanBingShu?: number;
  /** 本季押犯总数 */
  benJiYaFanShu?: number;
  /** 本季新犯数 */
  benJiXinFanShu?: number;
  /** 发病数比例 */
  faBingShuBiLi?: string;
  /** 患病数比例 */
  huanBingShuBiLi?: string;
  /** 新犯带病比例 */
  xinFaDaiBingBiLi?: string;
}
/**
 * 监狱慢性病统计分析季报表（每季度手工填报）
 */
export interface ManXingBingTongJi{
  /** 填报单位 */
  tianBaoDanWei?: string;
  /** 填报季度:格式：年份+季度 2018Q1 */
  tianBaoJiDu?: string;
  /** 慢病分类:慢病分类（高血压，糖尿病，冠心病、肿瘤和精神病） */
  manBingFenLei?: string;
  /** 疾病名 */
  jiBingMing?: string;
  /** 本季发病数 */
  benJiFaBingShu?: number;
  /** 新投犯带病入监数 */
  xinFanDaiBingRuJianShu?: number;
  /** 季末患病数 */
  jiMoHuanBingShu?: number;
  /** 本年累计数 */
  benNianLeiJiShu?: number;
  /** 本季死亡数 */
  benJiSiWangShu?: number;
}
/**
 * 某监狱重点慢性病（心脑血管病|糖尿病|恶性肿瘤...）季度发病、患病情况
 */
export interface ManXingJiDuFaBing{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期:格式：年份+季度 2018Q1 */
  riQi?: string;
  /** 本季发病数 */
  benJiFaBingShu?: number;
  /** 新投犯带病数 */
  xinTouFanDaiBingShu?: number;
  /** 季末患病数 */
  jiMoHuanBingShu?: number;
  /** 本季押犯总数 */
  benJiYaFanShu?: number;
  /** 本季新犯数 */
  benJiXinFanShu?: number;
  /** 发病数比例 */
  faBingShuBiLi?: string;
  /** 患病数比例 */
  huanBingShuBiLi?: string;
  /** 新犯带病比例 */
  xinFaDaiBingBiLi?: string;
}
/**
 * 门急诊诊断
 */
export interface MenJiZhenZhenDuan{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 诊断ID */
  zhenDuanId?: string;
  /** ICD10码 */
  icd10Ma?: string;
  /** 诊断名称 */
  zhenDuanMingCheng?: string;
  /** 人次 */
  renCi?: number;
}
/**
 * 门诊挂账统计（单位汇总）
 */
export interface MenZhenGuaZhangHuiZong{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 单位 */
  danWei?: string;
  /** 挂账金额 */
  guaZhangJinE?: number;
}
/**
 * 门诊挂账统计
 */
export interface MenZhenGuaZhangTongJi{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 监狱 */
  jianYu?: string;
  /** 监区 */
  jianQu?: string;
  /** 姓名 */
  xingMing?: string;
  /** 编号 */
  bianHao?: string;
  /** 挂账时间 */
  guaZhangShiJian?: string;
  /** 挂账金额 */
  guaZhangJinE?: number;
  /** 制表人 */
  zhiBiaoRen?: string;
}
/**
 * 门诊汇总个人日报表
 */
export interface MenZhenHuiZongGeRen{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日报ID */
  riBaoId?: number;
  /** 机构ID */
  jiGouId?: number;
  /** 日报类别 */
  riBaoLeiBie?: string;
  /** 统计类别 */
  tongJiLeiBie?: string;
  /** 日报日期 */
  riBaoRiQi?: string;
  /** 日报金额 */
  riBaoJinE?: number;
  /** 记录总数 */
  jiLuZongShu?: number;
  /** 日报人员 */
  riBaoGongHao?: string;
  /** 汇总工号 */
  huiZongGongHao?: string;
}
/**
 * 门诊汇总清单
 */
export interface MenZhenHuiZongQingDan{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 工号 */
  gongHao?: string;
  /** 姓名 */
  xingMing?: string;
  /** 药品收入 */
  yaoPinShouRu?: number;
  /** 医疗收入 */
  yiLiaoShouRu?: number;
  /** 其他收入 */
  qiTaShouRu?: number;
  /** 合计 */
  heJi?: number;
  /** 记录数 */
  jiLiShu?: number;
  /** 现金 */
  xianJin?: number;
}
/**
 * 门诊汇总月报表
 */
export interface MenZhenHuiZongYue{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 月份 */
  yueFei?: string;
  /** 西药费 */
  xiYaoFei?: number;
  /** 成药费 */
  chengYaoFei?: number;
  /** 草药费 */
  caoYaoFei?: number;
  /** 检查费 */
  jianChaFei?: number;
  /** 治疗费 */
  zhiLiaoFei?: number;
  /** CT费 */
  ctFei?: number;
  /** 放射费 */
  fangSheFei?: number;
  /** 手术费 */
  shouShuFei?: number;
  /** 化验费 */
  huaYanFei?: number;
  /** 其它费 */
  qiTaFei?: number;
  /** 护理费 */
  huLiFei?: number;
  /** 材料费 */
  caiLiaoFei?: number;
  /** 麻醉费 */
  maZhuiFei?: number;
  /** 合  计 */
  heJi?: number;
}
/**
 * 门诊开单费用统计查询
 */
export interface MenZhenKaiDanFeiYong{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 科室 */
  keShi?: string;
  /** 人次 */
  renCi?: number;
  /** 西药费 */
  xiYaoFei?: number;
  /** 成药费 */
  chengYaoFei?: number;
  /** 草药费 */
  caoYaoFei?: number;
  /** 检查费 */
  jianChaFei?: number;
  /** 治疗费 */
  zhiLiaoFei?: number;
  /** CT费 */
  ctFei?: number;
  /** 放射费 */
  fangSheFei?: number;
  /** 手术费 */
  shouShuFei?: number;
  /** 化验费 */
  huaYanFei?: number;
  /** 其他费 */
  qiTaFei?: number;
  /** 诊察费 */
  zhenChaFei?: number;
  /** 护理费 */
  huLiFei?: number;
  /** 材料费 */
  caiLiaoFei?: number;
  /** 麻醉费 */
  maZuiFei?: number;
  /** 合计 */
  heJi?: number;
}
/**
 * 门诊开单科室费用统计
 */
export interface MenZhenKaiDanKeShiFei{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 科室 */
  keShi?: string;
  /** 人次 */
  renCi?: number;
  /** 合计 */
  heJi?: number;
  /** 西药费 */
  xiYaoFei?: number;
  /** 成药费 */
  chengYaoFei?: number;
  /** 草药费 */
  caoYaoFei?: number;
  /** 检查费 */
  jianChaFei?: number;
  /** 治疗费 */
  zhiLiaoFei?: number;
  /** CT费 */
  ctFei?: number;
  /** 放射费 */
  fangSheFei?: number;
  /** 手术费 */
  shouShuFei?: number;
  /** 化验费 */
  huaYanFei?: number;
  /** 其它费 */
  qiTaFei?: number;
  /** 诊察费 */
  zhenChaFei?: number;
  /** 护理费 */
  huLiFei?: number;
  /** 材料费 */
  caiLiaoFei?: number;
  /** 麻醉费 */
  maZuiFei?: number;
}
/**
 * 门诊科室医生费用统计
 */
export interface MenZhenKeShiFeiYong{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 科室 */
  keShi?: string;
  /** 医生 */
  yiSheng?: string;
  /** 人次 */
  renCi?: number;
  /** 合计 */
  heJi?: number;
  /** 西药费 */
  xiYaoFei?: number;
  /** 成药费 */
  chengYaoFei?: number;
  /** 草药费 */
  caoYaoFei?: number;
  /** 检查费 */
  jianChaFei?: number;
  /** 治疗费 */
  zhiLiaoFei?: number;
  /** CT费 */
  ctFei?: number;
  /** 放射费 */
  fangSheFei?: number;
  /** 手术费 */
  shouShuFei?: number;
  /** 化验费 */
  huaYanFei?: number;
  /** 其它费 */
  qiTaFei?: number;
  /** 输血费 */
  shuXueFei?: number;
  /** 输氧费 */
  shuYangFei?: number;
  /** 诊察费 */
  zhenChaFei?: number;
  /** 挂号费 */
  guaHaoFei?: number;
  /** 监管费 */
  jianGuanFei?: number;
  /** 卫生组套费 */
  weiShengZuTaoFei?: number;
  /** 陪客费 */
  peiKeFei?: number;
  /** 床位费 */
  chuangWeiFei?: number;
  /** 伙食费 */
  huoShiFei?: number;
  /** 护理费 */
  huLiFei?: number;
  /** 材料费 */
  caiLiaoFei?: number;
  /** 麻醉费 */
  maZuiFei?: number;
  /** 外院检查 */
  waiYuanJianCha?: number;
  /** 外院治疗 */
  waiYuanZhiLiao?: number;
  /** 外院化验 */
  waiYuanHuaYan?: number;
  /** 外院手术 */
  waiYuanShouShu?: number;
  /** 会诊费 */
  huiZhenFei?: number;
  /** 其他 */
  qiTa?: number;
}
/**
 * 门诊日志
 */
export interface MenZhenRiZhi{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 医生 */
  yiSheng?: string;
  /** 科室编码 */
  keShiBianMa?: string;
  /** 科室名称 */
  keShiMingCheng?: string;
  /** 就诊日期 */
  jiuZhenRiQi?: string;
  /** 复诊 */
  fuZhen?: string;
  /** 病人姓名 */
  bingRenXingMing?: string;
  /** 性别 */
  xingBie?: string;
  /** 年龄 */
  nianLing?: string;
  /** 现住址 */
  xianZhuZhi?: string;
  /** 单位(学校) */
  danWei?: string;
  /** 联系电话 */
  lianXiDianHua?: string;
  /** 初步诊断 */
  chuBuZhenDuan?: string;
  /** 发病日期 */
  faBingRiQi?: string;
  /** 身份证 */
  shenFenZheng?: string;
}
/**
 * 门诊业务收入凭证
 */
export interface MenZhenYeWuShouRu{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 月份 */
  yueFei?: string;
  /** 凭证类别编码 */
  pingZhengLeiBieBianMa?: string;
  /** 分录编号 */
  fenLuBianHao?: string;
  /** 凭证日期 */
  pingZhengRiQi?: string;
  /** 附单据数(默认-1) */
  fuDanJuShu?: string;
  /** 制单人 */
  zhiDanRen?: string;
  /** 摘要 */
  zhaiYao?: string;
  /** 科目 */
  keMu?: string;
  /** 借方 */
  jieFang?: string;
  /** 贷方 */
  daiFang?: string;
  /** 部门编码 */
  buMenBianMa?: string;
  /** 个人编码 */
  geRenBianMa?: string;
  /** 客户编码 */
  keHuBianMa?: string;
  /** 供应商编码 */
  gongYingShangBianMa?: string;
  /** 项目编码 */
  xiangMuBianMa?: string;
  /** 项目大类 */
  xiangMuDaLei?: string;
}
/**
 * 欠费控制查询
 */
export interface QianFeiKongZhiChaXun{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 病案号 */
  bingAnHao?: string;
  /** 病人类别 */
  bingRenLeiBie?: string;
  /** 姓名 */
  xingMing?: string;
  /** 住院科室 */
  zhuYuanKeShi?: string;
  /** 住院病区 */
  zhuYuanBingQy?: string;
  /** 床位号 */
  chuangWeiHao?: string;
  /** 住院天数 */
  zhuYuanTianShu?: number;
  /** 总金额 */
  zongJinE?: number;
  /** 预交合计 */
  yuJiaoHeJi?: number;
}
/**
 * 区域跨院写报告统计
 */
export interface QuYuKuaYuanBaoGao{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 机构名称 */
  jiGouMingCheng?: string;
  /** 报告医生:报告医生人员 */
  baoGaoYiSheng?: string;
  /** DX:当日 */
  dx?: number;
  /** CR:当日 */
  cr?: number;
  /** DR:当日 */
  dr?: number;
  /** 报告日期时间:日 */
  baoGaoRiQiShiJian?: string;
}
/**
 * 区域设备统计查询
 */
export interface QuYuSheBeiTongJi{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期:日 */
  riQi?: string;
  /** 机构名称 */
  jiGouMingCheng?: string;
  /** 设备类型 */
  sheBeiLeiXing?: string;
  /** 拍片数量:按日统计区域内每个医院各个影像设备类型（例如CT，MR…）的拍片数量，当日 */
  paiPianShuLiang?: number;
}
/**
 * 区域影像平台统计查询
 */
export interface QuYuYingXiangTongJi{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 机构名称 */
  jiGouMingCheng?: string;
  /** 日期:日 */
  riQi?: string;
  /** 区域检查申请总数:按日统计上传到中心平台的各医院检查申请单总数 */
  qyjcShenQingZongShu?: number;
  /** 区域影像检查总数:按日统计上传到中心平台且已进行影像检查的各医院申请单总数 */
  qyyxJianChaZongShu?: number;
  /** 区域请求远程诊断总数:按日统计区域内各医院请求协助写报告的检查申请单总数 */
  qyqqycZhenDuanZongShu?: number;
  /** 远程诊断报告总数:按日统计区域内各医院完成远程诊断报告的总数 */
  yczdBaoGaoZongShu?: number;
  /** 区域报告总数:上传到中心平台的区域内各医院已审核的报告总数 */
  quYuBaoGaoZongShu?: number;
  /** 区域阳性率比例:中心平台已审核报告中诊断为阳性所占比例 */
  quYuYangXingLvBiLi?: number;
}
/**
 * 区域医生工作量统计查询
 */
export interface QuYuYiShengGongZuo{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期:日 */
  riQi?: string;
  /** 机构名称 */
  jiGouMingCheng?: string;
  /** 医院/医生:医生 */
  yiYuanYiSheng?: string;
  /** 报告数量:按日统计区域内各医院报告医师书写请求协助报告的数量，当日 */
  baoGaoShuLiang?: number;
}
/**
 * 医生明细
 */
export interface QuYuYiShengMingXi{
  /** 医师姓名 */
  yiShiXingMing?: string;
  /** 日期:日 */
  riQi?: string;
  /** 报告数量:当日 */
  baoGaoShuLiang?: number;
  /** 放射报告:当日 */
  fangSheBaoGao?: number;
  /** 超声报告:当日 */
  chaoShengBaoGao?: number;
}
/**
 * 人事统计查询
 */
export interface RenShiTongJiChaXun{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 科室 */
  keShi?: string;
  /** 工号 */
  gongHao?: string;
  /** 姓名 */
  xingMing?: string;
  /** 性别 */
  xingBie?: string;
  /** 出生日期 */
  chuShengRiQi?: string;
  /** 科室名称 */
  keShiMingCheng?: string;
  /** 管理职务 */
  guanLiZhiWu?: string;
  /** 聘任职务 */
  pinRenZhiWu?: string;
  /** 参加工作日期 */
  canJiaGongZuoRiQi?: string;
  /** 状态 */
  zhuangTai?: string;
  /** 身份证号 */
  shenFenZhengHao?: string;
}
/**
 * 日报汇总查询（全部）
 */
export interface RiBaoHuiZongChaXun{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 现金 */
  xianJin?: number;
  /** 支票 */
  zhiPiao?: number;
  /** 银联卡 */
  yinLianKa?: number;
  /** 微信 */
  weiXin?: number;
  /** 支付宝 */
  zhiFuBao?: number;
  /** 减免金额 */
  jianMianJinE?: number;
  /** 退现金 */
  tuiXianJin?: number;
  /** 退非现金 */
  tuiFeiXianJin?: number;
  /** 市民卡 */
  shiMinKa?: number;
  /** 省医保 */
  shengYiBao?: number;
  /**   普通省医保 */
  puTongShengYiBao?: number;
  /**   两费离休离保 */
  liangFeiLiXiuLiBao?: number;
  /**   公费离休离保 */
  gongFeiLiXiuLiBao?: number;
  /**   子女统筹 */
  ziNvTongChou?: number;
  /**   行业离休 */
  hangYeLiXiu?: number;
  /** 市医保 */
  shiYiBao?: number;
  /**  普通市医保 */
  puTongShiYiBao?: number;
  /**  两费离休 */
  lianagFeiLiXiu?: number;
  /**  子女统筹 */
  sybZiNvtongChou?: number;
  /** 省一卡通 */
  shengYiKaTong?: number;
  /** 公费重保（省） */
  gongFeiZhongBao?: number;
  /**   省双十 */
  shengShuangShi?: number;
  /**   冲预交款 */
  chongYuJiaoKuan?: number;
  /**   优惠金额 */
  youFeiJinE?: number;
  /**  挂账退费 */
  guaZhangTuiFei?: number;
  /**  挂账 */
  guaZhang?: number;
  /** 借方合计 */
  jieFangHeJi?: number;
  /** 1.门诊药品小计 */
  wenZhenYaoPinXiaoJi?: number;
  /**   西药费 */
  xiYaoFei?: number;
  /**   中成药费 */
  zhongChengYaoFei?: number;
  /**   中草药费 */
  zhongCaoYaoFei?: number;
  /** 2.门诊医疗小计 */
  menZhenYiLiaoXiaoJi?: number;
  /**   挂号费 */
  guaHaoFei?: number;
  /**   检查费 */
  jianChaFei?: number;
  /**   CT费 */
  ctFei?: number;
  /**   磁共振 */
  ciGongZhen?: number;
  /**   治疗费 */
  zhiLiaoFei?: number;
  /**   放射费 */
  fangSheFei?: number;
  /**   放疗费 */
  fangLiaoFei?: number;
  /**   手术费 */
  shouShuFei?: number;
  /**   化验费 */
  huaYanFei?: number;
  /**   输血费 */
  shuXueFei?: number;
  /**   输氧费 */
  shuYangFei?: number;
  /**   其它 */
  qiTa?: number;
  /**   诊疗费 */
  zhenLiaoFei?: number;
  /**   材料费 */
  caiLiaoFei?: number;
  /**   磁卡费 */
  ciKaFei?: number;
  /**   病历卡 */
  bingLiKa?: number;
  /**  预交款 */
  yuJiaoKuan?: number;
  /** 贷方合计 */
  daiFangHeJi?: number;
}
/**
 * 手术科室工作量统计
 */
export interface ShouShuKeShiGongZuoLiang{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 科室 */
  keShi?: string;
  /** 合计 */
  heJi?: number;
}
/**
 * 双向转诊
 */
export interface ShuangXiangZhuanZhen{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期:按月 */
  riQi?: string;
  /** 累计接受下级医疗机构患者数量（人次） */
  ljJieShouXiaJiJiGouShu?: number;
  /** 本月接受下级医疗机构患者数量（人次） */
  byJieShouXiaJiJiGouShu?: number;
  /** 累计上转患者数量（人次） */
  ljShangZhuanHuanZheShu?: number;
  /** 本月上转患者数量 */
  byShangZhuanHuanZheShu?: number;
}
/**
 * 本季度某监狱重点慢性病（高血压……）新犯发病情况
 */
export interface XinFanFaBingQingKuang{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期:格式：年份+季度 2018Q1 */
  riQi?: string;
  /** 慢病病种 */
  manBingBingZhong?: string;
  /** 本季发病数 */
  benJiFaBingShu?: number;
  /** 新投犯带病入监数 */
  xinFanDaiBingRuJianShu?: number;
  /** 狱内发病数 */
  yuNeiFaBingShu?: number;
}
/**
 * 药品库存查询
 */
export interface YaoPinKuCunChaXun{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 库房 */
  kuFang?: string;
  /** 库存 */
  kuCun?: string;
  /** 药品名称 */
  yaoPinMingCheng?: string;
  /** 药品规格 */
  yaoPinGuiGe?: string;
  /** 产地名称 */
  chanDiMingCheng?: string;
  /** 单位 */
  danWei?: string;
  /** 大包装数 */
  daBaoZhuangShu?: number;
  /** 零售数量 */
  lingShouShuLiang?: number;
  /** 进货价格 */
  jinHuoJiaGe?: number;
  /** 零售价格 */
  lingShouJiaGe?: number;
  /** 进价金额 */
  jinJiaJinE?: number;
  /** 零售价格 */
  lingShouJinE?: number;
  /** 高储量 */
  gaoChuLiang?: number;
  /** 低储量 */
  diChuLiang?: number;
  /** 账簿名称 */
  zhangBuMingCheng?: string;
}
/**
 * 药品收发存表
 */
export interface YaoPinShouFaCunBiao{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期:按月 */
  riQi?: string;
  /** 库房 */
  kuFang?: string;
  /** 药品类型 */
  yaoPinLeiXing?: string;
  /** 毒理分类 */
  duLiFeiLei?: string;
  /** 药品名称 */
  yaoPinMingCheng?: string;
  /** 药品规格 */
  yaoPinGuiGe?: string;
  /** 产地名称 */
  chanDiMingCheng?: string;
  /** 期初结转期初数量 */
  qcjzQiChuShuLiang?: number;
  /** 期初结转进价金额 */
  qcjzJinJiaJinE?: number;
  /** 期初结转零售金额 */
  qcjzLingShouJinE?: number;
  /** 本月收入入库数量 */
  bysrRuKuShuLiang?: number;
  /** 本月收入进价金额 */
  bysrJinJiaJinE?: number;
  /** 本月收入零售金额 */
  bysrLingShouJinE?: number;
  /** 本月支出出库数量 */
  byzcChuKuShuLiang?: number;
  /** 本月支出进价金额 */
  byzcJinJiaJinE?: number;
  /** 本月支出零售金额 */
  byzcLingShouJinE?: number;
  /** 本月结存结存数量 */
  byjcJieCunShuLiang?: number;
  /** 本月结存进价金额 */
  byjcJinJiaJinE?: number;
  /** 本月结存零售金额 */
  byjcLingShouJinE?: number;
  /** 尾差金额进价金额 */
  wcjeJinJiaJinE?: number;
  /** 尾差金额零售金额 */
  wcjeLingShouJinE?: number;
}
/**
 * 医保数据统计
 */
export interface YiBaoShuJuTongJi{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 结算类型 */
  jieSuanLeiXing?: string;
  /** 科  室 */
  keShi?: string;
  /** 药品总金额 */
  yaoPinZongJinE?: number;
  /** 人次数 */
  renCiShu?: number;
  /** 人头数 */
  renTouShu?: number;
  /** 人次人头比 */
  renTouRenCiBi?: number;
  /** 均次药品费用 */
  junCiYaoPinFeiYong?: number;
  /** 列支费用 */
  lieZhiFeiYong?: number;
  /** 医保均次费用 */
  yiBaoJunCiFeiYong?: number;
  /** 医疗总费用 */
  yiLiaoZongFeiYong?: number;
  /** 药品占比 */
  yaoPinZhanBi?: number;
  /** 草药均贴费用 */
  caoYaoJunTieFeiYong?: number;
}
/**
 * 医技科室工作量
 */
export interface YiJiKeShiGongZuoLiang{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 单据类型 */
  danJuLeiXing?: string;
  /** 门诊住院 */
  menZhenZhuYuan?: string;
  /** 执行科室 */
  zhiXingKeShi?: string;
  /** 项目 */
  xiangMu?: string;
  /** 数量 */
  shuLiang?: number;
  /** 单价 */
  danJia?: number;
  /** 金额 */
  jinE?: number;
}
/**
 * 医生明细
 */
export interface YiShengMingXi{
  /** 医师姓名 */
  yiShiXingMing?: string;
  /** 临检 */
  linJian?: number;
  /** 生化 */
  shengHua?: number;
  /** 免疫 */
  mianYi?: number;
  /** 细菌 */
  xiJun?: number;
}
/**
 * 医师工作量统计
 */
export interface YiShiGongZuoLiangTongJi{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 医生 */
  yiSheng?: string;
  /** 工号 */
  gongHao?: string;
  /** 患者满意度 */
  huanZheManYiDu?: number;
  /** 锦旗和感谢信数量 */
  jingQiGanXieXinShuLiang?: number;
  /** 预约就诊率 */
  yuYueJiuZhenLv?: number;
  /** 医疗纠纷发生率 */
  yiLiaoJiuFenFaShengLv?: number;
  /** 院内感染发生率 */
  yuanNeiGanRanFaShengLv?: number;
  /** 抗菌药物使用合格率 */
  kangJunYaoShiYongHeGeLv?: number;
  /** 手术一级创口愈合率 */
  shouShu_1ChuangKouYuHeLv?: number;
  /** 门诊收入 */
  menZhenShouRu?: number;
  /** 急诊挂号人次数 */
  jiZhenGuaHaoRanCiShu?: number;
  /** 门诊挂号人次数 */
  menZhenGuaHaoRenCiShu?: number;
  /** 门诊手术次数 */
  menZhenShouShuCiShu?: number;
  /** 入院人数 */
  ruYuanRenShu?: number;
  /** 出院人数 */
  chuYuanRenShu?: number;
  /** 出院床日 */
  chuYuanChuangRi?: number;
  /** 平均床日 */
  pingJunChuangRi?: number;
  /** 床位使用率 */
  chuangWeiShiYongLv?: string;
  /** ICU住院床日 */
  icuZhuYuanChuangRi?: number;
  /** ICU住院人次 */
  icuZhuYuanRenCi?: number;
  /** 手术人次 */
  shouShuRenCi?: number;
  /** 手术时间 */
  shouShuShiJian?: string;
  /** 手术级别 */
  shouShuJiBie?: string;
  /** 任务分类 */
  renWuFenLei?: string;
  /** 麻醉分类 */
  maZuiFenLei?: string;
  /** 常规心电图 */
  changGuiXinDianTu?: string;
  /** 动态心电图 */
  dognTaiXinDianTu?: string;
  /** 动态血压 */
  dongTaiXueYa?: string;
}
/**
 * 院病区费用动态统计汇总表
 */
export interface YuanBingQuFeiYong{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 病区 */
  bingQu?: string;
  /** 在院人数 */
  zaiYuanRenShu?: number;
  /** 预交款 */
  yuJiaoKuan?: number;
  /** 其中支票 */
  qiZhongZhiPiao?: number;
  /** 西药费 */
  xiYaoFei?: number;
  /** 中草药 */
  zhongCaoYao?: number;
  /** 中成药 */
  zhongChengYao?: number;
  /** 床位费 */
  chuangWeiFei?: number;
  /** 诊疗费 */
  zhenLiaoFei?: number;
  /** 检查费 */
  jianChaFei?: number;
  /** B超费 */
  bChaoFei?: number;
  /** 心电图费 */
  xinDianTuFei?: number;
  /** 放射费 */
  fangSheFei?: number;
  /** CT费 */
  ctFei?: number;
  /** MR费 */
  mrFei?: number;
  /** 化验费 */
  huaYanFei?: number;
  /** 治疗费 */
  zhiLiaoFei?: number;
  /** 注射费 */
  zhuSheFei?: number;
  /** 输氧费 */
  shuYangFei?: number;
  /** 手术费 */
  shouShuFei?: number;
  /** 接生费 */
  jieShengFei?: number;
  /** 护理费 */
  huLiFei?: number;
  /** 材料费 */
  caiLiaoFei?: number;
  /** 输血费 */
  shuXueFei?: number;
  /** 空调费 */
  kongTiaoFei?: number;
  /** 救护车费 */
  jiuHuCheFei?: number;
  /** 伙食费 */
  huoShiFei?: number;
  /** 煎药费 */
  jianYaoFei?: number;
  /** 陪客费 */
  peiKeFei?: number;
  /** 其它费 */
  qiTaFei?: number;
  /** 合  计 */
  heJi?: number;
}
/**
 * 远程会诊
 */
export interface YuanChengHuiZhen{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 时间 */
  shiJian?: string;
  /** 会诊学科 */
  huiZhenXueKe?: string;
  /** 会诊数量（人次） */
  huiZhenShuLiang?: number;
  /** 会诊时长(h) */
  huiZhenShiChang?: number;
  /** 会诊平均时长(h) */
  huiZhenPingJunShiChang?: number;
  /** 审核耗时(h) */
  shenHeHaoShi?: number;
  /** 审核平均耗时(h) */
  shenHePingJunHaoShi?: number;
  /** 会诊超时数量（人次） */
  huiZhenChaoShiShuLiang?: number;
}
/**
 * 远程门诊
 */
export interface YuanChengMenZhen{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 时间 */
  shiJian?: string;
  /** 接诊学科 */
  jieZhenXueKe?: string;
  /** 接诊量（人次） */
  jieZhenLiang?: number;
  /** 接诊时长(h) */
  jieZhenShiChang?: number;
  /** 接诊平均时长(h) */
  jieZhenPingJunShiChang?: number;
  /** 排队耗时(h) */
  paiDuiHaoShi?: number;
  /** 平均排队耗时(h) */
  pingJunPaiDuiHaoShi?: number;
}
/**
 * 预交款病人明细
 */
export interface YuJiaoKuanBingRenMingXi{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 交款方式 */
  jiaoKuanFangShi?: string;
  /** 姓名 */
  xingMing?: string;
  /** 住院号 */
  zhuYuanHao?: string;
  /** 金额 */
  jinE?: number;
}
/**
 * 在院病人分布状况
 */
export interface ZaiYuanBingRenFenBu{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 科室1 */
  keShi1?: string;
  /** 科室2 */
  keShi2?: string;
  /** 在院人数 */
  zaiYuanRenShu?: number;
}
/**
 * 在院病人总账报表
 */
export interface ZaiYuanBingRenZongZhang{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 病区 */
  bingQu?: string;
  /** 科室 */
  keShi?: string;
  /** 合计 */
  heJi?: number;
  /** 预交款 */
  yuJiaoKuan?: number;
  /** 西药费 */
  xiYaoFei?: number;
  /** 成药费 */
  chengYaoFei?: number;
  /** 检查费 */
  jianChaFei?: number;
  /** 治疗费 */
  zhiLiaoFei?: number;
  /** CT费 */
  ctFei?: number;
  /** 放射费 */
  fangSheFei?: number;
  /** 手术费 */
  shouShuFei?: number;
  /** 化验费 */
  huaYanFei?: number;
  /** 其他费 */
  qiTaFei?: number;
  /** 输氧费 */
  shuYangFei?: number;
  /** 诊察费 */
  zhenChaFei?: number;
  /** 卫生组套费 */
  weiShengZuTaoFei?: number;
  /** 床位费 */
  chuangWeiFei?: number;
  /** 伙食费 */
  huoShiFei?: number;
  /** 护理费 */
  huLiFei?: number;
  /** 材料费 */
  caiLiaoFei?: number;
  /** 麻醉费 */
  maZuiFei?: number;
  /** 外院检查 */
  waiYuanJianCha?: number;
  /** 会诊费 */
  huiZhenFei?: number;
  /** 其他 */
  qiTa?: number;
}
/**
 * 在院疾病分布情况
 */
export interface ZaiYuanJiBingFenBu{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 诊断ID */
  zhenDuanId?: string;
  /** ICD10码 */
  icd10Ma?: string;
  /** 诊断名称 */
  zhenDuanMingCheng?: string;
  /** 人次 */
  renCi?: number;
}
/**
 * 在院危急病人清单
 */
export interface ZaiYuanWeiJiBingRen{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 类型 */
  leiXing?: string;
  /** 床号 */
  chuangHao?: string;
  /** 姓名 */
  xingMing?: string;
  /** 病历号 */
  bingLiHao?: string;
  /** 当前状态 */
  dhangQianZhuangTai?: string;
  /** 开始时间 */
  kaiShiShiJian?: string;
  /** 医嘱名称 */
  yiZhuMingCheng?: string;
  /** 单次剂量 */
  danCiJiLiang?: string;
  /** 剂量单位 */
  jiLiangDanWei?: string;
  /** 一次量 */
  yiCiLiang?: string;
  /** 单位 */
  danWei?: string;
  /** 停止时间 */
  tingZhiShiJian?: string;
  /** 给药方式 */
  geiYaoFangShi?: string;
  /** 执行频率 */
  zhiXingPinLv?: string;
  /** 处方类型 */
  chuFangLeiXing?: string;
  /** 制剂类型 */
  zhiJiLeiXing?: string;
  /** 领药类型 */
  lingYaoLeiXing?: string;
  /** 父医嘱 */
  fuYiZhu?: string;
  /** 处理类型 */
  chuLiLeiXing?: string;
  /** 医生嘱托 */
  yiShengZhuTuo?: string;
  /** 皮试结果 */
  piShiJieGuo?: string;
  /** 当日次数 */
  dangRiCiShu?: number;
  /** 急诊 */
  jiZhen?: string;
  /** 描述说明 */
  miaoShuShuoMing?: string;
  /** 开单医生 */
  kaiDanYiSheng?: string;
}
/**
 * 全省监狱系统重点慢性病季度汇总表（每季度将季报表自动汇总）
 */
export interface ZhongDianManXingBing{
  /** 单位 */
  danWei?: string;
  /** 日期:格式：年份+季度 2018Q1 */
  riQi?: string;
  /** 季末押犯总数 */
  jiMoYaFanZongShu?: number;
  /** 本季入监新犯数 */
  benJiRuJianXinFanShu?: number;
  /** 季末通过保外鉴定而未保 */
  jiMoBaoWaiErWeiBao?: string;
  /** 精神类疾病人数 */
  jingShenLeiJiBingRenShu?: number;
  /** 心脑血管疾病—高血压-本季发病数 */
  xnxgGxyBenJiFaBingShu?: number;
  /** 心脑血管疾病—高血压-新投犯带病入监数 */
  xnxgGxyXinFanDaiBingShu?: number;
  /** 心脑血管疾病—高血压-季末患病数 */
  xnxgGxyJiMoHuanBingShu?: number;
  /** 心脑血管疾病—高血压-本年累计数 */
  xnxgGxyBenNianLeiJiShu?: number;
  /** 心脑血管疾病—高血压-本季死亡数 */
  xnxgGxyBenJiSiWangShu?: number;
  /** 心脑血管疾病—冠心病-本季发病数 */
  xnxgGxbBenJiFaBingShu?: number;
  /** 心脑血管疾病—冠心病-新投犯带病入监数 */
  xnxgGxbXinFanDaiBingShu?: number;
  /** 心脑血管疾病—冠心病-季末患病数 */
  xnxgGxbJiMoHuanBingShu?: number;
  /** 心脑血管疾病—冠心病-本年累计数 */
  xnxgGxbBenNianLeiJiShu?: number;
  /** 心脑血管疾病—冠心病-本季死亡数 */
  xnxgGxbBenJiSiWangShu?: number;
  /** 心脑血管疾病—脑卒中-本季发病数 */
  xnxgNzzBenJiFaBingShu?: number;
  /** 心脑血管疾病—脑卒中-新投犯带病入监数 */
  xnxgNzzXinFanDaiBingShu?: number;
  /** 心脑血管疾病—脑卒中-季末患病数 */
  xnxgNzzJiMoHuanBingShu?: number;
  /** 心脑血管疾病—脑卒中-本年累计数 */
  xnxgNzzBenNianLeiJiShu?: number;
  /** 心脑血管疾病—脑卒中-本季死亡数 */
  xnxgNzzBenJiSiWangShu?: number;
  /** 心脑血管疾病—其他-本季发病数 */
  xnxgQtBenJiFaBingShu?: number;
  /** 心脑血管疾病—其他-新投犯带病入监数 */
  xnxgQtXinFanDaiBingShu?: number;
  /** 心脑血管疾病—其他-季末患病数 */
  xnxgQtJiMoHuanBingShu?: number;
  /** 心脑血管疾病—其他-本年累计数 */
  xnxgQtBenNianLeiJiShu?: number;
  /** 心脑血管疾病—其他-本季死亡数 */
  xnxgQtBenJiSiWangShu?: number;
  /** 内分泌营养代谢疾病—糖尿病-本季发病数 */
  nfmTnbBenJiFaBingShu?: number;
  /** 内分泌营养代谢疾病—糖尿病-新投犯带病入监数 */
  nfmTnbXinFanDaiBingShu?: number;
  /** 内分泌营养代谢疾病—糖尿病-季末患病数 */
  nfmTnbJiMoHuanBingShu?: number;
  /** 内分泌营养代谢疾病—糖尿病-本年累计数 */
  nfmTnbBenNianLeiJiShu?: number;
  /** 内分泌营养代谢疾病—糖尿病-本季死亡数 */
  nfmTnbBenJiSiWangShu?: number;
  /** 内分泌营养代谢疾病—其他-本季发病数 */
  nfmQtBenJiFaBingShu?: number;
  /** 内分泌营养代谢疾病—其他-新投犯带病入监数 */
  nfmQtXinFanDaiBingShu?: number;
  /** 内分泌营养代谢疾病—其他-季末患病数 */
  nfmQtJiMoHuanBingShu?: number;
  /** 内分泌营养代谢疾病—其他-本年累计数 */
  nfmQtBenNianLeiJiShu?: number;
  /** 内分泌营养代谢疾病—其他-本季死亡数 */
  nfmQtBenJiSiWangShu?: number;
  /** 精神疾病-本季发病数 */
  jsjbBenJiFaBingShu?: number;
  /** 精神疾病-新投犯带病入监数 */
  jsjbXinFanDaiBingShu?: number;
  /** 精神疾病-季末患病数 */
  jsjbJiMoHuanBingShu?: number;
  /** 精神疾病-本年累计数 */
  jsjbBenNianLeiJiShu?: number;
  /** 精神疾病-本季死亡数 */
  jsjbBenJiSiWangShu?: number;
  /** 运动系统疾病-本季发病数 */
  ydxtjbBenJiFaBingShu?: number;
  /** 运动系统疾病-新投犯带病入监数 */
  ydxtjbXinFanDaiBingShu?: number;
  /** 运动系统疾病-季末患病数 */
  ydxtjbJiMoHuanBingShu?: number;
  /** 运动系统疾病-本年累计数 */
  ydxtjbBenNianLeiJiShu?: number;
  /** 运动系统疾病-本季死亡数 */
  ydxtjbBenJiSiWangShu?: number;
  /** 消化系统疾病-本季发病数 */
  xhxtjbBenJiFaBingShu?: number;
  /** 消化系统疾病-新投犯带病入监数 */
  xhxtjbXinFanDaiBingShu?: number;
  /** 消化系统疾病-季末患病数 */
  xhxtjbJiMoHuanBingShu?: number;
  /** 消化系统疾病-本年累计数 */
  xhxtjbBenNianLeiJiShu?: number;
  /** 消化系统疾病-本季死亡数 */
  xhxtjbBenJiSiWangShu?: number;
  /** 呼吸系统疾病-本季发病数 */
  hxxtjbBenJiFaBingShu?: number;
  /** 呼吸系统疾病-新投犯带病入监数 */
  hxxtjbXinFanDaiBingShu?: number;
  /** 呼吸系统疾病-季末患病数 */
  hxxtjbJiMoHuanBingShu?: number;
  /** 呼吸系统疾病-本年累计数 */
  hxxtjbBenNianLeiJiShu?: number;
  /** 呼吸系统疾病-本季死亡数 */
  hxxtjbBenJiSiWangShu?: number;
  /** 泌尿系统疾病-本季发病数 */
  mnxtjbBenJiFaBingShu?: number;
  /** 泌尿系统疾病-新投犯带病入监数 */
  mnxtjbXinFanDaiBingShu?: number;
  /** 泌尿系统疾病-季末患病数 */
  mnxtjbJiMoHuanBingShu?: number;
  /** 泌尿系统疾病-本年累计数 */
  mnxtjbBenNianLeiJiShu?: number;
  /** 泌尿系统疾病-本季死亡数 */
  mnxtjbBenJiSiWangShu?: number;
  /** 神经系统疾病-本季发病数 */
  sjxtjbBenJiFaBingShu?: number;
  /** 神经系统疾病-新投犯带病入监数 */
  sjxtjbXinFanDaiBingShu?: number;
  /** 神经系统疾病-季末患病数 */
  sjxtjbJiMoHuanBingShu?: number;
  /** 神经系统疾病-本年累计数 */
  sjxtjbBenNianLeiJiShu?: number;
  /** 神经系统疾病-本季死亡数 */
  sjxtjbBenJiSiWangShu?: number;
  /** 血液造血系统疾病-本季发病数 */
  xyzxxtjbBenJiFaBingShu?: number;
  /** 血液造血系统疾病-新投犯带病入监数 */
  xyzxxtjbXinFanDaiBingShu?: number;
  /** 血液造血系统疾病-季末患病数 */
  xyzxxtjbJiMoHuanBingShu?: number;
  /** 血液造血系统疾病-本年累计数 */
  xyzxxtjbBenNianLeiJiShu?: number;
  /** 血液造血系统疾病-本季死亡数 */
  xyzxxtjbBenJiSiWangShu?: number;
  /** 恶性肿瘤-本季发病数 */
  exzlBenJiFaBingShu?: number;
  /** 恶性肿瘤-新投犯带病入监数 */
  exzlXinFanDaiBingShu?: number;
  /** 恶性肿瘤-季末患病数 */
  exzlJiMoHuanBingShu?: number;
  /** 恶性肿瘤-本年累计数 */
  exzlBenNianLeiJiShu?: number;
  /** 恶性肿瘤-本季死亡数 */
  exzlBenJiSiWangShu?: number;
  /** 免疫风湿性疾病-本季发病数 */
  myfsxjbBenJiFaBingShu?: number;
  /** 免疫风湿性疾病-新投犯带病入监数 */
  myfsxjbXinFanDaiBingShu?: number;
  /** 免疫风湿性疾病-季末患病数 */
  myfsxjbJiMoHuanBingShu?: number;
  /** 免疫风湿性疾病-本年累计数 */
  myfsxjbBenNianLeiJiShu?: number;
  /** 免疫风湿性疾病-本季死亡数 */
  myfsxjbBenJiSiWangShu?: number;
  /** 其他-本季发病数 */
  qtBenJiFaBingShu?: number;
  /** 其他-新投犯带病入监数 */
  qtXinFanDaiBingShu?: number;
  /** 其他-季末患病数 */
  qtJiMoHuanBingShu?: number;
  /** 其他-本年累计数 */
  qtBenNianLeiJiShu?: number;
  /** 其他-本季死亡数 */
  qtBenJiSiWangShu?: number;
  /** 合计-本季发病数 */
  hjBenJiFaBingShu?: number;
  /** 合计-新投犯带病入监数 */
  hjXinFanDaiBingShu?: number;
  /** 合计-季末患病数 */
  hjJiMoHuanBingShu?: number;
  /** 合计-本年累计数 */
  hjBenNianLeiJiShu?: number;
  /** 合计-本季死亡数 */
  hjBenJiSiWangShu?: number;
  /** 审核人 */
  shenHeRen?: string;
  /** 填报人 */
  tianBaoRen?: string;
  /** 填报人警务通 */
  tianBaoRenJingWuTong?: string;
  /** 填报日期 */
  tianBaoRenRiQi?: string;
}
/**
 * 双向转诊明细页
 */
export interface ZhuanZhenMingXi{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 转诊类型:本月接受下级医院患者本月上转患者 */
  zhuanZhenLeiXing?: string;
  /** 转诊时间 */
  zhuanZhenShiJian?: string;
  /** 患者姓名 */
  huanZheXingMing?: string;
  /** 性别 */
  xingMing?: string;
  /** 转诊医生 */
  zhuanZhenYiSheng?: string;
  /** 接诊医生 */
  jieZhenYiSheng?: string;
}
/**
 * 查询住院病人资料
 */
export interface ZhuYuanBingRenZiLiao{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 病历号 */
  bingLiHao?: string;
  /** 姓名 */
  xingMing?: string;
  /** 性别 */
  xingBie?: string;
  /** 年龄 */
  nianLing?: string;
  /** 病人类别 */
  bingRenLeiBie?: string;
  /** 病人性质 */
  bingRenXingZhi?: string;
  /** 当前科室 */
  dangQianKeShi?: string;
  /** 当前病区 */
  dangQianBingQu?: string;
  /** 床位 */
  chuangWei?: string;
  /** 入院日期 */
  ruYuanRiQi?: string;
  /** 单位名称 */
  danWeiMingCheng?: string;
  /** 收治医生 */
  shouZhiYiSheng?: string;
  /** 主治医生 */
  zhuZhiYiSheng?: string;
  /** 担保人 */
  danBaoRen?: string;
  /** 担保金额 */
  danBaoJinE?: number;
  /** 住院天数 */
  zhuYuanTianShu?: number;
  /** 操作员 */
  caoZuoYuan?: string;
}
/**
 * 住院伙食费挂账清单
 */
export interface ZhuYuanHuoShiFeiGuaZhang{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 病区 */
  bingQu?: string;
  /** 科室 */
  keShi?: string;
  /** 监管费 */
  jianGuanFei?: number;
  /** 卫生费 */
  weiShengFei?: number;
  /** 伙食费 */
  huoShiFei?: number;
  /** 合  计 */
  heJi?: number;
}
/**
 * 住院清单
 */
export interface ZhuYuanQingDan{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 工号 */
  gongHao?: string;
  /** 预交款现金 */
  yuJiaoKuanXianJin?: number;
  /** 预交款支票 */
  yuJiaoKuanZhiPiao?: number;
  /** 预交款银行卡 */
  yuJiaoKuanYinHangKa?: number;
  /** 预交款其他 */
  yuJiaoKuanQiTa?: number;
  /** 出院现金 */
  chuYuanXianJin?: number;
  /** 出院支票 */
  chuYuanZhiPiao?: number;
  /** 出院银行卡 */
  chuYuanYinHangKa?: number;
  /** 现金合计 */
  xianJinHeJi?: number;
  /** 支票合计 */
  zhiPiaoHeJi?: number;
  /** 银行卡合计 */
  jinHangKaHeJi?: number;
}
/**
 * 住院日报
 */
export interface ZhuYuanRiBao{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 一、冲预交款 */
  chongYuJiaoKuan?: number;
  /**     病人预交款 */
  bingRenYuJiaoKuan?: number;
  /**     退预交款 */
  tuiYuJiaoKuan?: number;
  /**     零用金 */
  lingYongJin?: number;
  /** 二、挂账 */
  guaZhgang?: number;
  /**     挂账欠款 */
  guaZhangQianZhang?: number;
  /**     挂账余款 */
  guaZhangYuKuan?: number;
  /** 三、记账 */
  jiZhang?: number;
  /**     记账金额 */
  jiZhangJinE?: number;
  /**  减免金额 */
  jianMianJinE?: number;
  /** 四、省医保 */
  shengYiBao?: number;
  /**  普通省医保 */
  puTongShengYiBao?: number;
  /**  两费离休离保 */
  liangFeiLiXiuLiBao?: number;
  /**  公费离休离保 */
  gongFeiLiXiuLiBao?: number;
  /**  行业离休离保 */
  hangYeLiXiuLiBao?: number;
  /**  子女统筹 */
  ziNvTongChou?: number;
  /**  公费重保 */
  gongFeiZhongBao?: number;
  /** 五、市医保 */
  shiYiBao?: number;
  /**  普通市医保 */
  puTongShiYiBao?: number;
  /**  离休医保 */
  liXiuYiBao?: number;
  /**  子女统筹 */
  sybZiNvTongChou?: number;
  /**  透析 */
  touXi?: number;
  /** 六、省一卡通 */
  shengYiKaTong?: number;
  /** 九、实收小计 */
  shiShouXiaoJi?: number;
  /**     现金 */
  xianJin?: number;
  /**     支票 */
  zhiPiao?: number;
  /**     银行卡 */
  yinHangKa?: number;
  /**     无线POS */
  wuXianPos?: number;
  /**     微信支付 */
  weiXinZhiFu?: number;
  /**     支付宝 */
  zhiFuBao?: number;
  /**     零用金 */
  shiShouLingYongJin?: number;
  /** 借方合计 */
  jieFangHeJi?: number;
  /** 一、合计住院收入 */
  heJiZhuYuanShouRu?: number;
  /**  药品收入小计 */
  yaoPinShouRuXiaoJi?: number;
  /**   西药费 */
  xiYaoFei?: number;
  /**   中成药 */
  zhongChengYao?: number;
  /**   中草药 */
  zhongCaoYao?: number;
  /**  医疗收入小计 */
  yiLiaoShouRuXiaoJi?: number;
  /**   床位费 */
  chuangWeiFei?: number;
  /**   检查费 */
  jianChaFei?: number;
  /**   CT费用 */
  ctFei?: number;
  /**   治疗费 */
  zhiLiaoFei?: number;
  /**   血透费 */
  xueTouFei?: number;
  /**   手术费 */
  shouShuFei?: number;
  /**   材料费 */
  caiLiaoFei?: number;
  /**   化验费 */
  huaYanFei?: number;
  /**   输血费 */
  shuXueFei?: number;
  /**   输氧费 */
  shuYangFei?: number;
  /**   护理费 */
  huLiFei?: number;
  /**   其他费 */
  qiTaFei?: number;
  /**   会诊费 */
  huiZhenFei?: number;
  /**   诊疗费 */
  zhenLiaoFei?: number;
  /** 其他收入小计 */
  qiTaShouRuXiaoJi?: number;
  /**   空调费 */
  kongTiaoFei?: number;
  /** 卫生组套费 */
  weiShengZhuTaoFei?: number;
  /**   陪客费 */
  peiKeFei?: number;
  /**   外院费 */
  waiYuanFei?: number;
  /** 伙食费 */
  huoShiFei?: number;
  /**   监管费 */
  jianGuanFei?: number;
  /**   零用金收入 */
  lingYongJinShouRu?: number;
  /** 二、预交款 */
  yuJiaoKuan?: number;
  /**     微信支付 */
  yjkWeiXinZhiFu?: number;
  /**     预交现金 */
  yuJiaoXianJin?: number;
  /**     预交支票 */
  yuJiaoZhiPiao?: number;
  /**     预交银行 */
  yuJiaoYinHang?: number;
  /**     无线pos */
  yjkWuXianPos?: number;
  /**     支付宝 */
  yjkZhiFuBao?: number;
  /** 三、应付小计 */
  yinFuXiaoJi?: number;
  /**     现金 */
  yfxjXianJin?: number;
  /**     支票 */
  yfxjZhiPiao?: number;
  /** 银行卡 */
  yfxjYinHangKa?: number;
  /** 贷方合计 */
  daiFangHeJi?: number;
}
/**
 * 综合查询
 */
export interface ZongHeChaXun{
  /** 医疗机构 */
  yiLiaoJiGou?: string;
  /** 日期 */
  riQi?: string;
  /** 机构名称 */
  jiGouMingCheng?: string;
  /** 标本量 */
  biaoBenLiang?: number;
  /** 检验人次 */
  jianYanRenCi?: number;
}
