import { ColumnProps } from "antd/lib/table";
import { hejiColumns } from "../util/tableRender";
/**
 * 没有合并单元格table
 */
const NormalTableTitleConfig: Map<string, Array<ColumnProps<any>>> = new Map<
  string,
  Array<ColumnProps<any>>
>([
  [
    "MenZhenKaiDanFeiYong",
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
        dataIndex: "keShi",
        key: "keShi"
      },
      {
        title: "人次",
        align: "center",
        dataIndex: "renCi",
        key: "renCi"
      },
      {
        title: "西药费",
        align: "center",
        dataIndex: "xiYaoFei",
        key: "xiYaoFei"
      },
      {
        title: "成药费",
        align: "center",
        dataIndex: "chengYaoFei",
        key: "chengYaoFei"
      },
      {
        title: "草药费",
        align: "center",
        dataIndex: "caoYaoFei",
        key: "caoYaoFei"
      },
      {
        title: "检查费",
        align: "center",
        dataIndex: "jianChaFei",
        key: "jianChaFei"
      },
      {
        title: "治疗费",
        align: "center",
        dataIndex: "zhiLiaoFei",
        key: "zhiLiaoFei"
      },
      {
        title: "CT费",
        align: "center",
        dataIndex: "ctFei",
        key: "ctFei"
      },
      {
        title: "放射费",
        align: "center",
        dataIndex: "fangSheFei",
        key: "fangSheFei"
      },
      {
        title: "手术费",
        align: "center",
        dataIndex: "shouShuFei",
        key: "shouShuFei"
      },
      {
        title: "化验费",
        align: "center",
        dataIndex: "huaYanFei",
        key: "huaYanFei"
      },
      {
        title: "其他费",
        align: "center",
        dataIndex: "qiTaFei",
        key: "qiTaFei"
      },
      {
        title: "诊察费",
        align: "center",
        dataIndex: "zhenChaFei",
        key: "zhenChaFei"
      },
      {
        title: "护理费",
        align: "center",
        dataIndex: "huLiFei",
        key: "huLiFei"
      },
      {
        title: "材料费",
        align: "center",
        dataIndex: "caiLiaoFei",
        key: "caiLiaoFei"
      },
      {
        title: "麻醉费",
        align: "center",
        dataIndex: "maZuiFei",
        key: "maZuiFei"
      },
      {
        title: "合计",
        align: "center",
        dataIndex: "heJi",
        key: "heJi"
      }
    ]
  ],
  [
    "YuJiaoKuanBingRenMingXi",
    [
      {
        title: "编号",
        align: "center",
        key: "text",
        render: (value, row, index) => {
          return `${index + 1}`;
        }
      },

      {
        title: "交款方式",
        align: "center",
        dataIndex: "jiaoKuanFangShi",
        key: "jiaoKuanFangShi",
        render: (value: string, row: any, index) => hejiColumns(value, 3)
      },
      {
        title: "姓名",
        align: "center",
        dataIndex: "xingMing",
        key: "xingMing",
        render: (value: string, row: any, index) =>
          hejiColumns(row.jiaoKuanFangShi, 0, value)
      },
      {
        title: "住院号",
        align: "center",
        dataIndex: "zhuYuanHao",
        key: "zhuYuanHao",
        render: (value: string, row: any, index) =>
          hejiColumns(row.jiaoKuanFangShi, 0, value)
      },
      {
        title: "金额",
        align: "center",
        dataIndex: "jinE",
        key: "jinE"
      }
    ]
  ],
  [
    "ChuYuanBingRenBingQu",
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
        title: "病区",
        align: "center",
        dataIndex: "bingQu",
        key: "bingQu",
        render: (value: string, row: any, index) => hejiColumns(value, 2)
      },
      {
        title: "科室",
        align: "center",
        dataIndex: "keShi",
        key: "keShi",
        render: (value: string, row: any, index) =>
          hejiColumns(row.bingQu, 0, value)
      },
      {
        title: "人次",
        align: "center",
        dataIndex: "renCi",
        key: "renCi"
      },
      {
        title: "西药费",
        align: "center",
        dataIndex: "xiYaoFei",
        key: "xiYaoFei"
      },
      {
        title: "成药费",
        align: "center",
        dataIndex: "chengYaoFei",
        key: "chengYaoFei"
      },
      {
        title: "检查费",
        align: "center",
        dataIndex: "jianChaFei",
        key: "jianChaFei"
      },
      {
        title: "治疗费",
        align: "center",
        dataIndex: "zhiLiaoFei",
        key: "zhiLiaoFei"
      },
      {
        title: "CT费",
        align: "center",
        dataIndex: "ctFei",
        key: "ctFei"
      },
      {
        title: "放射费",
        align: "center",
        dataIndex: "fangSheFei",
        key: "fangSheFei"
      },
      {
        title: "手术费",
        align: "center",
        dataIndex: "shouShuFei",
        key: "shouShuFei"
      },
      {
        title: "化验费",
        align: "center",
        dataIndex: "huaYanFei",
        key: "huaYanFei"
      },
      {
        title: "其他费",
        align: "center",
        dataIndex: "qiTaFei",
        key: "qiTaFei"
      },
      {
        title: "输氧费",
        align: "center",
        dataIndex: "shuYangFei",
        key: "shuYangFei"
      },
      {
        title: "诊察费",
        align: "center",
        dataIndex: "zhenChaFei",
        key: "zhenChaFei"
      },
      {
        title: "卫生组套费",
        align: "center",
        dataIndex: "weiShengZuTaoFei",
        key: "weiShengZuTaoFei"
      },
      {
        title: "床位费",
        align: "center",
        dataIndex: "chuangWeiFei",
        key: "chuangWeiFei"
      },
      {
        title: "伙食费",
        align: "center",
        dataIndex: "huoShiFei",
        key: "huoShiFei"
      },
      {
        title: "护理费",
        align: "center",
        dataIndex: "huLiFei",
        key: "huLiFei"
      },
      {
        title: "材料费",
        align: "center",
        dataIndex: "caiLiaoFei",
        key: "caiLiaoFei"
      },
      {
        title: "麻醉费",
        align: "center",
        dataIndex: "maZuiFei",
        key: "maZuiFei"
      },
      {
        title: "合计",
        align: "center",
        dataIndex: "heJi",
        key: "heJi"
      }
    ]
  ],
  [
    "ZaiYuanBingRenZongZhang",
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
        title: "病区",
        align: "center",
        dataIndex: "bingQu",
        key: "bingQu"
      },
      {
        title: "科室",
        align: "center",
        dataIndex: "keShi",
        key: "keShi"
      },
      {
        title: "合计",
        align: "center",
        dataIndex: "heJi",
        key: "heJi"
      },
      {
        title: "预交款",
        align: "center",
        dataIndex: "yuJiaoKuan",
        key: "yuJiaoKuan"
      },
      {
        title: "西药费",
        align: "center",
        dataIndex: "xiYaoFei",
        key: "xiYaoFei"
      },
      {
        title: "成药费",
        align: "center",
        dataIndex: "chengYaoFei",
        key: "chengYaoFei"
      },
      {
        title: "检查费",
        align: "center",
        dataIndex: "jianChaFei",
        key: "jianChaFei"
      },
      {
        title: "治疗费",
        align: "center",
        dataIndex: "zhiLiaoFei",
        key: "zhiLiaoFei"
      },
      {
        title: "CT费",
        align: "center",
        dataIndex: "ctFei",
        key: "ctFei"
      },
      {
        title: "放射费",
        align: "center",
        dataIndex: "fangSheFei",
        key: "fangSheFei"
      },
      {
        title: "手术费",
        align: "center",
        dataIndex: "shouShuFei",
        key: "shouShuFei"
      },
      {
        title: "化验费",
        align: "center",
        dataIndex: "huaYanFei",
        key: "huaYanFei"
      },
      {
        title: "其他费",
        align: "center",
        dataIndex: "qiTaFei",
        key: "qiTaFei"
      },
      {
        title: "输氧费",
        align: "center",
        dataIndex: "shuYangFei",
        key: "shuYangFei"
      },
      {
        title: "诊察费",
        align: "center",
        dataIndex: "zhenChaFei",
        key: "zhenChaFei"
      },
      {
        title: "卫生组套费",
        align: "center",
        dataIndex: "weiShengZuTaoFei",
        key: "weiShengZuTaoFei"
      },
      {
        title: "床位费",
        align: "center",
        dataIndex: "chuangWeiFei",
        key: "chuangWeiFei"
      },
      {
        title: "伙食费",
        align: "center",
        dataIndex: "huoShiFei",
        key: "huoShiFei"
      },
      {
        title: "护理费",
        align: "center",
        dataIndex: "huLiFei",
        key: "huLiFei"
      },
      {
        title: "材料费",
        align: "center",
        dataIndex: "caiLiaoFei",
        key: "caiLiaoFei"
      },
      {
        title: "麻醉费",
        align: "center",
        dataIndex: "maZuiFei",
        key: "maZuiFei"
      },
      {
        title: "外院检查",
        align: "center",
        dataIndex: "waiYuanJianCha",
        key: "waiYuanJianCha"
      },
      {
        title: "会诊费",
        align: "center",
        dataIndex: "huiZhenFei",
        key: "huiZhenFei"
      },
      {
        title: "其他",
        align: "center",
        dataIndex: "qiTa",
        key: "qiTa"
      }
    ]
  ],
  [
    "YaoPinShouFaCunBiao",
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
        dataIndex: "yaoPinMingCheng",
        key: "yaoPinMingCheng"
      },
      {
        title: "药品规格",
        align: "center",
        dataIndex: "yaoPinGuiGe",
        key: "yaoPinGuiGe"
      },
      {
        title: "产地名称",
        align: "center",
        dataIndex: "chanDiMingCheng",
        key: "chanDiMingCheng"
      },
      {
        title: "期初结转",
        align: "center",
        children: [
          {
            title: "期初数量",
            align: "center",
            dataIndex: "qcjzQiChuShuLiang",
            key: "qcjzQiChuShuLiang"
          },
          {
            title: "进价金额",
            align: "center",
            dataIndex: "qcjzJinJiaJinE",
            key: "qcjzJinJiaJinE"
          },
          {
            title: "零售金额",
            align: "center",
            dataIndex: "qcjzLingShouJinE",
            key: "qcjzLingShouJinE"
          }
        ]
      },
      {
        title: "本月收入",
        align: "center",
        children: [
          {
            title: "入库数量",
            align: "center",
            dataIndex: "bysrRuKuShuLiang",
            key: "bysrRuKuShuLiang"
          },
          {
            title: "进价金额",
            align: "center",
            dataIndex: "bysrJinJiaJinE",
            key: "bysrJinJiaJinE"
          },
          {
            title: "零售金额",
            align: "center",
            dataIndex: "bysrLingShouJinE",
            key: "bysrLingShouJinE"
          }
        ]
      },
      {
        title: "本月支出",
        align: "center",
        children: [
          {
            title: "本月支出出库数量",
            align: "center",
            dataIndex: "byzcChuKuShuLiang",
            key: "byzcChuKuShuLiang"
          },
          {
            title: "本月支出进价金额",
            align: "center",
            dataIndex: "byzcJinJiaJinE",
            key: "byzcJinJiaJinE"
          },
          {
            title: "本月支出零售金额",
            align: "center",
            dataIndex: "byzcLingShouJinE",
            key: "byzcLingShouJinE"
          }
        ]
      },
      {
        title: "本月结存",
        align: "center",
        children: [
          {
            title: "本月结存结存数量",
            align: "center",
            dataIndex: "byjcJieCunShuLiang",
            key: "byjcJieCunShuLiang"
          },
          {
            title: "本月结存进价金额",
            align: "center",
            dataIndex: "byjcJinJiaJinE",
            key: "byjcJinJiaJinE"
          },
          {
            title: "本月结存零售金额",
            align: "center",
            dataIndex: "byjcLingShouJinE",
            key: "byjcLingShouJinE"
          }
        ]
      },
      {
        title: "尾差金额",
        align: "center",
        children: [
          {
            title: "进价金额",
            align: "center",
            dataIndex: "wcjeJinJiaJinE",
            key: "wcjeJinJiaJinE"
          },
          {
            title: "零售金额",
            align: "center",
            dataIndex: "wcjeLingShouJinE",
            key: "wcjeLingShouJinE"
          }
        ]
      },
      {
        title: "库房",
        align: "center",
        dataIndex: "kuFang",
        key: "kuFang"
      },
      {
        title: "药品类型",
        align: "center",
        dataIndex: "yaoPinLeiXing",
        key: "yaoPinLeiXing"
      },
      {
        title: "毒理分类",
        align: "center",
        dataIndex: "duLiFeiLei",
        key: "duLiFeiLei"
      }
    ]
  ],
  [
    "YaoPinKuCunChaXun",
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
        title: "库房",
        align: "center",
        dataIndex: "kuFang",
        key: "kuFang"
      },
      {
        title: "药品名称",
        align: "center",
        dataIndex: "yaoPinMingCheng",
        key: "yaoPinMingCheng"
      },
      {
        title: "药品规格",
        align: "center",
        dataIndex: "yaoPinGuiGe",
        key: "yaoPinGuiGe"
      },
      {
        title: "产地名称",
        align: "center",
        dataIndex: "chanDiMingCheng",
        key: "chanDiMingCheng"
      },
      {
        title: "单位",
        align: "center",
        dataIndex: "danWei",
        key: "danWei"
      },
      {
        title: "大包装数",
        align: "center",
        dataIndex: "daBaoZhuangShu",
        key: "daBaoZhuangShu"
      },
      {
        title: "零售数量",
        align: "center",
        dataIndex: "lingShouShuLiang",
        key: "lingShouShuLiang"
      },
      {
        title: "进货价格",
        align: "center",
        dataIndex: "jinHuoJiaGe",
        key: "jinHuoJiaGe"
      },
      {
        title: "零售价格",
        align: "center",
        dataIndex: "lingShouJiaGe",
        key: "lingShouJiaGe"
      },
      {
        title: "进价金额",
        align: "center",
        dataIndex: "jinJiaJinE",
        key: "jinJiaJinE"
      },
      {
        title: "零售价格",
        align: "center",
        dataIndex: "lingShouJinE",
        key: "lingShouJinE"
      },
      {
        title: "高储量",
        align: "center",
        dataIndex: "gaoChuLiang",
        key: "gaoChuLiang"
      },
      {
        title: "低储量",
        align: "center",
        dataIndex: "diChuLiang",
        key: "diChuLiang"
      },
      {
        title: "账簿名称",
        align: "center",
        dataIndex: "zhangBuMingCheng",
        key: "zhangBuMingCheng"
      }
    ]
  ],
  [
    "RenShiTongJiChaXun",
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
        dataIndex: "keShi",
        key: "keShi"
      },
      {
        title: "工号",
        align: "center",
        dataIndex: "gongHao",
        key: "gongHao"
      },
      {
        title: "姓名",
        align: "center",
        dataIndex: "xingMing",
        key: "xingMing"
      },
      {
        title: "性别",
        align: "center",
        dataIndex: "xingBie",
        key: "xingBie"
      },
      {
        title: "出生日期",
        align: "center",
        dataIndex: "chuShengRiQi",
        key: "chuShengRiQi"
      },
      {
        title: "科室名称",
        align: "center",
        dataIndex: "keShiMingCheng",
        key: "keShiMingCheng"
      },
      {
        title: "管理职务",
        align: "center",
        dataIndex: "guanLiZhiWu",
        key: "guanLiZhiWu"
      },
      {
        title: "聘任职务",
        align: "center",
        dataIndex: "pinRenZhiWu",
        key: "pinRenZhiWu"
      },
      {
        title: "参加工作日期",
        align: "center",
        dataIndex: "canJiaGongZuoRiQi",
        key: "canJiaGongZuoRiQi"
      },
      {
        title: "状态",
        align: "center",
        dataIndex: "zhuangTai",
        key: "zhuangTai",
          render:(text,row,index) => {
            if(text === 0){
              return "在职"
            }else if(text === 1){
              return "离职"
            }else{
              return "退休"
            }
          }
      },
      {
        title: "身份证号",
        align: "center",
        dataIndex: "shenFenZhengHao",
        key: "shenFenZhengHao"
      }
    ]
  ],
  [
    "GuaHaoRiBaoGeRenHuiZong",
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
        title: "挂号数量",
        align: "center",
        dataIndex: "guaHaoShuLiang",
        key: "guaHaoShuLiang"
      },
      {
        title: "挂号金额",
        align: "center",
        dataIndex: "guaHaoJinE",
        key: "guaHaoJinE"
      },
      {
        title: "挂号诊疗费",
        align: "center",
        dataIndex: "guaHaoZhenLiaoFei",
        key: "guaHaoZhenLiaoFei"
      },
      {
        title: "挂号磁卡费",
        align: "center",
        dataIndex: "guaHaoCiKaFei",
        key: "guaHaoCiKaFei"
      },
      {
        title: "挂号病历费",
        align: "center",
        dataIndex: "guaHaoBingLiFei",
        key: "guaHaoBingLiFei"
      },
      {
        title: "退号数量",
        align: "center",
        dataIndex: "tuiHaoShuLiang",
        key: "tuiHaoShuLiang"
      },
      {
        title: "退号金额",
        align: "center",
        dataIndex: "tuiHaoJinE",
        key: "tuiHaoJinE"
      },
      {
        title: "退号诊疗费",
        align: "center",
        dataIndex: "tuiHaoZhenLiaoFei",
        key: "tuiHaoZhenLiaoFei"
      },
      {
        title: "退号磁卡费",
        align: "center",
        dataIndex: "tuiHaoCiKaFei",
        key: "tuiHaoCiKaFei"
      },
      {
        title: "退号病历费",
        align: "center",
        dataIndex: "tuiHaoBingLiFei",
        key: "tuiHaoBingLiFei"
      },
      {
        title: "实际数量",
        align: "center",
        dataIndex: "shiJiShuLiang",
        key: "shiJiShuLiang"
      },
      {
        title: "实际挂号金额",
        align: "center",
        dataIndex: "shiJiGuaHaoJinE",
        key: "shiJiGuaHaoJinE"
      },
      {
        title: "实际诊疗费",
        align: "center",
        dataIndex: "shiJiZhenLiaoFei",
        key: "shiJiZhenLiaoFei"
      },
      {
        title: "实际磁卡费",
        align: "center",
        dataIndex: "shiJiCiKaFei",
        key: "shiJiCiKaFei"
      },
      {
        title: "实际病历费",
        align: "center",
        dataIndex: "shiJiBingLiFei",
        key: "shiJiBingLiFei"
      }
    ]
  ],
  [
    "GuaHaoJiLu",
    [
      {
        title: "就诊科室",
        align: "center",
        dataIndex: "jiuZhenKeShi",
        key: "jiuZhenKeShi"
      },

      {
        title: "操作工号",
        align: "center",
        dataIndex: "caoZuoGongHao",
        key: "caoZuoGongHao"
      },
      {
        title: "操作人员",
        align: "center",
        dataIndex: "caoZuoRenYuan",
        key: "caoZuoRenYuan"
      },
      {
        title: "挂号人次",
        align: "center",
        dataIndex: "guaHaoRenCi",
        key: "guaHaoRenCi"
      },
      {
        title: "退号人次",
        align: "center",
        dataIndex: "tuiHaoRenCi",
        key: "tuiHaoRenCi"
      },
      {
        title: "挂号金额",
        align: "center",
        dataIndex: "guaHaoJinE",
        key: "guaHaoJinE"
      },
      {
        title: "收费人次",
        align: "center",
        dataIndex: "shouFeiRenCi",
        key: "shouFeiRenCi"
      },
      {
        title: "退费人次",
        align: "center",
        dataIndex: "tuiFeiRenCi",
        key: "tuiFeiRenCi"
      },
      {
        title: "收费金额",
        align: "center",
        dataIndex: "shouFeiJinE",
        key: "shouFeiJinE"
      },
      {
        title: "合计金额",
        align: "center",
        dataIndex: "heJiJinE",
        key: "heJiJinE"
      }
    ]
  ],
  [
    "YiShiGongZuoLiangTongJi",
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
        title: "医生",
        align: "center",
        dataIndex: "yiSheng",
        key: "yiSheng"
      },
      {
        title: "工号",
        align: "center",
        dataIndex: "gongHao",
        key: "gongHao"
      },
      {
        title: "患者满意度",
        align: "center",
        dataIndex: "huanZheManYiDu",
        key: "huanZheManYiDu"
      },
      {
        title: "锦旗和感谢信数量",
        align: "center",
        dataIndex: "jingQiGanXieXinShuLiang",
        key: "jingQiGanXieXinShuLiang"
      },
      {
        title: "预约就诊率",
        align: "center",
        dataIndex: "yuYueJiuZhenLv",
        key: "yuYueJiuZhenLv"
      },
      {
        title: "医疗纠纷发生率",
        align: "center",
        dataIndex: "yiLiaoJiuFenFaShengLv",
        key: "yiLiaoJiuFenFaShengLv"
      },
      {
        title: "院内感染发生率",
        align: "center",
        dataIndex: "yuanNeiGanRanFaShengLv",
        key: "yuanNeiGanRanFaShengLv"
      },
      {
        title: "抗菌药物使用合格率",
        align: "center",
        dataIndex: "kangJunYaoShiYongHeGeLv",
        key: "kangJunYaoShiYongHeGeLv"
      },
      {
        title: "手术一级创口愈合率",
        align: "center",
        dataIndex: "shouShu_1ChuangKouYuHeLv",
        key: "shouShu_1ChuangKouYuHeLv"
      },
      {
        title: "门诊收入",
        align: "center",
        dataIndex: "menZhenShouRu",
        key: "menZhenShouRu"
      },
      {
        title: "急诊挂号人次数",
        align: "center",
        dataIndex: "jiZhenGuaHaoRanCiShu",
        key: "jiZhenGuaHaoRanCiShu"
      },
      {
        title: "门诊挂号人次数",
        align: "center",
        dataIndex: "menZhenGuaHaoRenCiShu",
        key: "menZhenGuaHaoRenCiShu"
      },
      {
        title: "门诊手术次数",
        align: "center",
        dataIndex: "menZhenShouShuCiShu",
        key: "menZhenShouShuCiShu"
      },
      {
        title: "入院人数",
        align: "center",
        dataIndex: "ruYuanRenShu",
        key: "ruYuanRenShu"
      },
      {
        title: "出院人数",
        align: "center",
        dataIndex: "chuYuanRenShu",
        key: "chuYuanRenShu"
      },
      {
        title: "出院床日",
        align: "center",
        dataIndex: "chuYuanChuangRi",
        key: "chuYuanChuangRi"
      },
      {
        title: "平均床日",
        align: "center",
        dataIndex: "pingJunChuangRi",
        key: "pingJunChuangRi"
      },
      {
        title: "床位使用率",
        align: "center",
        dataIndex: "chuangWeiShiYongLv",
        key: "chuangWeiShiYongLv"
      },
      {
        title: "ICU",
        align: "center",
        children: [
          {
            title: "ICU住院床日",
            align: "center",
            dataIndex: "icuZhuYuanChuangRi",
            key: "icuZhuYuanChuangRi"
          },
          {
            title: "ICU住院人次",
            align: "center",
            dataIndex: "icuZhuYuanRenCi",
            key: "icuZhuYuanRenCi"
          }
        ]
      },
      {
        title: "手术人次",
        align: "center",
        dataIndex: "shouShuRenCi",
        key: "shouShuRenCi"
      },
      {
        title: "手术时间",
        align: "center",
        dataIndex: "shouShuShiJian",
        key: "shouShuShiJian"
      },
      {
        title: "手术级别",
        align: "center",
        dataIndex: "shouShuJiBie",
        key: "shouShuJiBie"
      },
      {
        title: "任务分类",
        align: "center",
        dataIndex: "renWuFenLei",
        key: "renWuFenLei"
      },
      {
        title: "麻醉分类",
        align: "center",
        dataIndex: "maZuiFenLei",
        key: "maZuiFenLei"
      },
      {
        title: "常规心电图",
        align: "center",
        dataIndex: "changGuiXinDianTu",
        key: "changGuiXinDianTu"
      },
      {
        title: "动态心电图",
        align: "center",
        dataIndex: "dognTaiXinDianTu",
        key: "dognTaiXinDianTu"
      },
      {
        title: "动态血压",
        align: "center",
        dataIndex: "dongTaiXueYa",
        key: "dongTaiXueYa"
      }
    ]
  ],
  [
    "YiBaoShuJuTongJi",
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
        title: "科  室",
        align: "center",
        dataIndex: "keShi",
        key: "keShi"
      },
      {
        title: "药品总金额",
        align: "center",
        dataIndex: "yaoPinZongJinE",
        key: "yaoPinZongJinE"
      },
      {
        title: "人次数",
        align: "center",
        dataIndex: "renCiShu",
        key: "renCiShu"
      },
      {
        title: "人头数",
        align: "center",
        dataIndex: "renTouShu",
        key: "renTouShu"
      },
      {
        title: "人次人头比",
        align: "center",
        dataIndex: "renTouRenCiBi",
        key: "renTouRenCiBi"
      },
      {
        title: "均次药品费用",
        align: "center",
        dataIndex: "junCiYaoPinFeiYong",
        key: "junCiYaoPinFeiYong"
      },
      {
        title: "列支费用",
        align: "center",
        dataIndex: "lieZhiFeiYong",
        key: "lieZhiFeiYong"
      },
      {
        title: "医保均次费用",
        align: "center",
        dataIndex: "yiBaoJunCiFeiYong",
        key: "yiBaoJunCiFeiYong"
      },
      {
        title: "医疗总费用",
        align: "center",
        dataIndex: "yiLiaoZongFeiYong",
        key: "yiLiaoZongFeiYong"
      },
      {
        title: "药品占比",
        align: "center",
        dataIndex: "yaoPinZhanBi",
        key: "yaoPinZhanBi"
      },
      {
        title: "草药均贴费用",
        align: "center",
        dataIndex: "caoYaoJunTieFeiYong",
        key: "caoYaoJunTieFeiYong"
      }
    ]
  ],
  [
    "MenJiZhenZhenDuan",
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
        title: "诊断ID",
        align: "center",
        dataIndex: "zhenDuanId",
        key: "zhenDuanId"
      },
      {
        title: "ICD10码",
        align: "center",
        dataIndex: "icd10Ma",
        key: "icd10Ma"
      },
      {
        title: "诊断名称",
        align: "center",
        dataIndex: "zhenDuanMingCheng",
        key: "zhenDuanMingCheng"
      },
      {
        title: "人次",
        align: "center",
        dataIndex: "renCi",
        key: "renCi"
      }
    ]
  ],
  [
    "YiJiKeShiGongZuoLiang",
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
        title: "单据类型",
        align: "center",
        dataIndex: "danJuLeiXing",
        key: "danJuLeiXing",
        render: (value: string, row: any, index) =>
          hejiColumns(row.zhiXingKeShi, 0, value)
      },
      {
        title: "门诊住院",
        align: "center",
        dataIndex: "menZhenZhuYuan",
        key: "menZhenZhuYuan",
        render: (value: string, row: any, index) =>
          hejiColumns(row.zhiXingKeShi, 0, value)
      },
      {
        title: "执行科室",
        align: "center",
        dataIndex: "zhiXingKeShi",
        key: "zhiXingKeShi",
        render: (value: string, row: any, index) => hejiColumns(value, 4)
      },
      {
        title: "项目",
        align: "center",
        dataIndex: "xiangMu",
        key: "xiangMu",
        render: (value: string, row: any, index) =>
          hejiColumns(row.zhiXingKeShi, 0, value)
      },
      {
        title: "数量",
        align: "center",
        dataIndex: "shuLiang",
        key: "shuLiang"
      },
      {
        title: "单价",
        align: "center",
        dataIndex: "danJia",
        key: "danJia"
      },
      {
        title: "金额",
        align: "center",
        dataIndex: "jinE",
        key: "jinE"
      }
    ]
  ],
  [
    "ShouShuKeShiGongZuoLiang",
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
        dataIndex: "keShi",
        key: "keShi"
      },
      {
        title: "合计",
        align: "center",
        dataIndex: "heJi",
        key: "heJi"
      }
    ]
  ],
  [
    "ZaiYuanBingRenFenBu",
    [
      {
        title: "科室1",
        align: "center",
        dataIndex: "keShi1",
        key: "keShi1"
      },
      {
        title: "科室2",
        align: "center",
        dataIndex: "keShi2",
        key: "keShi2"
      },
      {
        title: "在院人数",
        align: "center",
        dataIndex: "zaiYuanRenShu",
        key: "zaiYuanRenShu"
      }
    ]
  ],
  [
    "ZaiYuanJiBingFenBu",
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
        title: "诊断ID",
        align: "center",
        dataIndex: "zhenDuanId",
        key: "zhenDuanId"
      },
      {
        title: "ICD10码",
        align: "center",
        dataIndex: "icd10Ma",
        key: "icd10Ma"
      },
      {
        title: "诊断名称",
        align: "center",
        dataIndex: "zhenDuanMingCheng",
        key: "zhenDuanMingCheng"
      },
      {
        title: "人次",
        align: "center",
        dataIndex: "renCi",
        key: "renCi"
      }
    ]
  ],
  [
    "ZaiYuanWeiJiBingRen",
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
        title: "类型",
        align: "center",
        dataIndex: "leiXing",
        key: "leiXing"
      },
      {
        title: "床号",
        align: "center",
        dataIndex: "chuangHao",
        key: "chuangHao"
      },
      {
        title: "姓名",
        align: "center",
        dataIndex: "xingMing",
        key: "xingMing"
      },
      {
        title: "病历号",
        align: "center",
        dataIndex: "bingLiHao",
        key: "bingLiHao"
      },
      {
        title: "当前状态",
        align: "center",
        dataIndex: "dhangQianZhuangTai",
        key: "dhangQianZhuangTai"
      },
      {
        title: "开始时间",
        align: "center",
        dataIndex: "kaiShiShiJian",
        key: "kaiShiShiJian"
      },
      {
        title: "医嘱名称",
        align: "center",
        dataIndex: "yiZhuMingCheng",
        key: "yiZhuMingCheng"
      },
      {
        title: "单次剂量",
        align: "center",
        dataIndex: "danCiJiLiang",
        key: "danCiJiLiang"
      },
      {
        title: "剂量单位",
        align: "center",
        dataIndex: "jiLiangDanWei",
        key: "jiLiangDanWei"
      },
      {
        title: "一次量",
        align: "center",
        dataIndex: "yiCiLiang",
        key: "yiCiLiang"
      },
      {
        title: "单位",
        align: "center",
        dataIndex: "danWei",
        key: "danWei"
      },
      {
        title: "停止时间",
        align: "center",
        dataIndex: "tingZhiShiJian",
        key: "tingZhiShiJian"
      },
      {
        title: "给药方式",
        align: "center",
        dataIndex: "geiYaoFangShi",
        key: "geiYaoFangShi"
      },
      {
        title: "执行频率",
        align: "center",
        dataIndex: "zhiXingPinLv",
        key: "zhiXingPinLv"
      },
      {
        title: "处方类型",
        align: "center",
        dataIndex: "chuFangLeiXing",
        key: "chuFangLeiXing"
      },
      {
        title: "制剂类型",
        align: "center",
        dataIndex: "zhiJiLeiXing",
        key: "zhiJiLeiXing"
      },
      {
        title: "领药类型",
        align: "center",
        dataIndex: "lingYaoLeiXing",
        key: "lingYaoLeiXing"
      },
      {
        title: "父医嘱",
        align: "center",
        dataIndex: "fuYiZhu",
        key: "fuYiZhu"
      },
      {
        title: "处理类型",
        align: "center",
        dataIndex: "chuLiLeiXing",
        key: "chuLiLeiXing"
      },
      {
        title: "医生嘱托",
        align: "center",
        dataIndex: "yiShengZhuTuo",
        key: "yiShengZhuTuo"
      },
      {
        title: "皮试结果",
        align: "center",
        dataIndex: "piShiJieGuo",
        key: "piShiJieGuo"
      },
      {
        title: "当日次数",
        align: "center",
        dataIndex: "dangRiCiShu",
        key: "dangRiCiShu"
      },
      {
        title: "急诊",
        align: "center",
        dataIndex: "jiZhen",
        key: "jiZhen"
      },
      {
        title: "描述说明",
        align: "center",
        dataIndex: "miaoShuShuoMing",
        key: "miaoShuShuoMing"
      },
      {
        title: "开单医生",
        align: "center",
        dataIndex: "kaiDanYiSheng",
        key: "kaiDanYiSheng"
      }
    ]
  ],
  [
    "ChuYuanSiWangBingRen",
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
        title: "病案号",
        align: "center",
        dataIndex: "bingAnHao",
        key: "bingAnHao"
      },
      {
        title: "姓名",
        align: "center",
        dataIndex: "xingMing",
        key: "xingMing"
      },
      {
        title: "年龄",
        align: "center",
        dataIndex: "nianLing",
        key: "nianLing"
      },
      {
        title: "科室",
        align: "center",
        dataIndex: "keShi",
        key: "keShi"
      },
      {
        title: "主治医生",
        align: "center",
        dataIndex: "zhuZhiYiSheng",
        key: "zhuZhiYiSheng"
      },
      {
        title: "死亡诊断",
        align: "center",
        dataIndex: "siWangZhenDuan",
        key: "siWangZhenDuan"
      },
      {
        title: "死亡日期",
        align: "center",
        dataIndex: "siWangRiQi",
        key: "siWangRiQi"
      }
    ]
  ],
  [
    "ChuangWeiShiYong",
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
        title: "病区",
        align: "center",
        dataIndex: "bingQu",
        key: "bingQu"
      },
      {
        title: "病人数",
        align: "center",
        dataIndex: "bingRenShu",
        key: "bingRenShu"
      },
      {
        title: "总床数",
        align: "center",
        dataIndex: "zongChuangShu",
        key: "zongChuangShu"
      },
      {
        title: "空床数",
        align: "center",
        dataIndex: "kongChuangShu",
        key: "kongChuangShu"
      },
      {
        title: "占床数",
        align: "center",
        dataIndex: "zhanChuangShu",
        key: "zhanChuangShu"
      },
      {
        title: "包床数",
        align: "center",
        dataIndex: "baoChuangShu",
        key: "baoChuangShu"
      },
      {
        title: "原有人数",
        align: "center",
        dataIndex: "yuanYouRenShu",
        key: "yuanYouRenShu"
      },
      {
        title: "入院人数",
        align: "center",
        dataIndex: "ruYuanRenShu",
        key: "ruYuanRenShu"
      },
      {
        title: "出院人数",
        align: "center",
        dataIndex: "chuYuanRenShu",
        key: "chuYuanRenShu"
      },
      {
        title: "转入人数",
        align: "center",
        dataIndex: "zhuanRuRenShu",
        key: "zhuanRuRenShu"
      },
      {
        title: "转出人数",
        align: "center",
        dataIndex: "zhuanChuRenShu",
        key: "zhuanChuRenShu"
      },
      {
        title: "待入科",
        align: "center",
        dataIndex: "daiRuKe",
        key: "daiRuKe"
      }
    ]
  ],
  [
    "ZhuYuanBingRenZiLiao",
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
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "病历号",
        align: "center",
        dataIndex: "bingLiHao",
        key: "bingLiHao"
      },
      {
        title: "姓名",
        align: "center",
        dataIndex: "xingMing",
        key: "xingMing"
      },
      {
        title: "性别",
        align: "center",
        dataIndex: "xingBie",
        key: "xingBie"
      },
      {
        title: "年龄",
        align: "center",
        dataIndex: "nianLing",
        key: "nianLing"
      },
      {
        title: "病人类别",
        align: "center",
        dataIndex: "bingRenLeiBie",
        key: "bingRenLeiBie"
      },
      {
        title: "病人性质",
        align: "center",
        dataIndex: "bingRenXingZhi",
        key: "bingRenXingZhi"
      },
      {
        title: "当前科室",
        align: "center",
        dataIndex: "dangQianKeShi",
        key: "dangQianKeShi"
      },
      {
        title: "当前病区",
        align: "center",
        dataIndex: "dangQianBingQu",
        key: "dangQianBingQu"
      },
      {
        title: "床位",
        align: "center",
        dataIndex: "chuangWei",
        key: "chuangWei"
      },
      {
        title: "入院日期",
        align: "center",
        dataIndex: "ruYuanRiQi",
        key: "ruYuanRiQi"
      },
      {
        title: "单位名称",
        align: "center",
        dataIndex: "danWeiMingCheng",
        key: "danWeiMingCheng"
      },
      {
        title: "首治医生",
        align: "center",
        dataIndex: "shouZhiYiSheng",
        key: "shouZhiYiSheng"
      },
      {
        title: "主治医生",
        align: "center",
        dataIndex: "zhuZhiYiSheng",
        key: "zhuZhiYiSheng"
      },
      {
        title: "担保人",
        align: "center",
        dataIndex: "danBaoRen",
        key: "danBaoRen"
      },
      {
        title: "担保金额",
        align: "center",
        dataIndex: "danBaoJinE",
        key: "danBaoJinE"
      },
      {
        title: "住院天数",
        align: "center",
        dataIndex: "zhuYuanTianShu",
        key: "zhuYuanTianShu"
      },
      {
        title: "操作员",
        align: "center",
        dataIndex: "caoZuoYuan",
        key: "caoZuoYuan"
      }
    ]
  ],
  [
    "FaDingChuanRanTongJi",
    [
      {
        title: "日期:格式：年份+季度 2018Q1",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
      },
      {
        title: "疾病名",
        align: "center",
        dataIndex: "jiBingMingCheng",
        key: "jiBingMingCheng"
      },
      {
        title: "本季发病数",
        align: "center",
        dataIndex: "benJiFaBingShu",
        key: "benJiFaBingShu"
      },
      {
        title: "新投犯带病入监数",
        align: "center",
        dataIndex: "xinFanDaiBingRuJianShu",
        key: "xinFanDaiBingRuJianShu"
      },
      {
        title: "季末患病数",
        align: "center",
        dataIndex: "jiMoHuanBingShu",
        key: "jiMoHuanBingShu"
      },
      {
        title: "本年累计数:对方取不出来，后台取",
        align: "center",
        dataIndex: "benNianLeiJiShu",
        key: "benNianLeiJiShu"
      },
      {
        title: "本季死亡数",
        align: "center",
        dataIndex: "benJiSiWangShu",
        key: "benJiSiWangShu"
      }
    ]
  ],
  [
    "FaDingChuanRanFaBing",
    [
      {
        title: "日期:格式：年份+季度 2018Q1",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
      },
      {
        title: "病种",
        align: "center",
        dataIndex: "bingZhong",
        key: "bingZhong"
      },
      {
        title: "本季报告数",
        align: "center",
        dataIndex: "benJiBaoGaoShu",
        key: "benJiBaoGaoShu"
      },
      {
        title: "上季报告数",
        align: "center",
        dataIndex: "shangJiBaoGaoShu",
        key: "shangJiBaoGaoShu"
      },
      {
        title: "环比（%）",
        align: "center",
        dataIndex: "huanBi",
        key: "huanBi"
      },
      {
        title: "去年同季报告数:对方取不出来，后台取",
        align: "center",
        dataIndex: "quNianTongJiBaoGaoShu",
        key: "quNianTongJiBaoGaoShu"
      },
      {
        title: "同比（%）",
        align: "center",
        dataIndex: "tongBi",
        key: "tongBi"
      }
    ]
  ],
  [
    "FaDingChuanRanFenBu",
    [
      {
        title: "地区:包括：杭州，宁波，湖州，金华，衢州，台州，丽水",
        align: "center",
        dataIndex: "diQu",
        key: "diQu"
      },
      {
        title: "病种",
        align: "center",
        dataIndex: "bingZhong",
        key: "bingZhong"
      },
      {
        title: "患病人数",
        align: "center",
        dataIndex: "huanBingRenShu",
        key: "huanBingRenShu"
      }
    ]
  ],
  [
    "ManXingBingJiDuHuiZong",
    [
      {
        title: "单位",
        align: "center",
        dataIndex: "danWei",
        key: "danWei"
      },
      {
        title: "日期:格式：年份+季度 2018Q1",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
      },
      {
        title: "季末押犯总数",
        align: "center",
        dataIndex: "jiMoYaFanZongShu",
        key: "jiMoYaFanZongShu"
      },
      {
        title: "本季入监新犯数",
        align: "center",
        dataIndex: "benJiRuJianXinFanShu",
        key: "benJiRuJianXinFanShu"
      },
      {
        title: "季末通过保外鉴定而未保",
        align: "center",
        dataIndex: "jiMoBaoWaiErWeiBao",
        key: "jiMoBaoWaiErWeiBao"
      },
      {
        title: "精神类疾病人数",
        align: "center",
        dataIndex: "jingShenLeiJiBingRenShu",
        key: "jingShenLeiJiBingRenShu"
      },
      {
        title: "心脑血管疾病—高血压-本季发病数",
        align: "center",
        dataIndex: "xlxgGxyBenJiFaBingShu",
        key: "xlxgGxyBenJiFaBingShu"
      },
      {
        title: "心脑血管疾病—高血压-新投犯带病入监数",
        align: "center",
        dataIndex: "xlxgGxyXinFanDaiBingShu",
        key: "xlxgGxyXinFanDaiBingShu"
      },
      {
        title: "心脑血管疾病—高血压-季末患病数",
        align: "center",
        dataIndex: "xlxgGxyJiMoHuanBingShu",
        key: "xlxgGxyJiMoHuanBingShu"
      },
      {
        title: "心脑血管疾病—高血压-本年累计数",
        align: "center",
        dataIndex: "xlxgGxyBenNianLeiJiShu",
        key: "xlxgGxyBenNianLeiJiShu"
      },
      {
        title: "心脑血管疾病—高血压-本季死亡数",
        align: "center",
        dataIndex: "xlxgGxyBenJiSiWangShu",
        key: "xlxgGxyBenJiSiWangShu"
      },
      {
        title: "心脑血管疾病—冠心病-本季发病数",
        align: "center",
        dataIndex: "xlxgGxbBenJiFaBingShu",
        key: "xlxgGxbBenJiFaBingShu"
      },
      {
        title: "心脑血管疾病—冠心病-新投犯带病入监数",
        align: "center",
        dataIndex: "xlxgGxbXinFanDaiBingShu",
        key: "xlxgGxbXinFanDaiBingShu"
      },
      {
        title: "心脑血管疾病—冠心病-季末患病数",
        align: "center",
        dataIndex: "xlxgGxbJiMoHuanBingShu",
        key: "xlxgGxbJiMoHuanBingShu"
      },
      {
        title: "心脑血管疾病—冠心病-本年累计数",
        align: "center",
        dataIndex: "xlxgGxbBenNianLeiJiShu",
        key: "xlxgGxbBenNianLeiJiShu"
      },
      {
        title: "心脑血管疾病—冠心病-本季死亡数",
        align: "center",
        dataIndex: "xlxgGxbBenJiSiWangShu",
        key: "xlxgGxbBenJiSiWangShu"
      },
      {
        title: "心脑血管疾病—脑卒中-本季发病数",
        align: "center",
        dataIndex: "xlxgNzzBenJiFaBingShu",
        key: "xlxgNzzBenJiFaBingShu"
      },
      {
        title: "心脑血管疾病—脑卒中-新投犯带病入监数",
        align: "center",
        dataIndex: "xlxgNzzXinFanDaiBingShu",
        key: "xlxgNzzXinFanDaiBingShu"
      },
      {
        title: "心脑血管疾病—脑卒中-季末患病数",
        align: "center",
        dataIndex: "xlxgNzzJiMoHuanBingShu",
        key: "xlxgNzzJiMoHuanBingShu"
      },
      {
        title: "心脑血管疾病—脑卒中-本年累计数",
        align: "center",
        dataIndex: "xlxgNzzBenNianLeiJiShu",
        key: "xlxgNzzBenNianLeiJiShu"
      },
      {
        title: "心脑血管疾病—脑卒中-本季死亡数",
        align: "center",
        dataIndex: "xlxgNzzBenJiSiWangShu",
        key: "xlxgNzzBenJiSiWangShu"
      },
      {
        title: "心脑血管疾病—其他-本季发病数",
        align: "center",
        dataIndex: "xlxgQtBenJiFaBingShu",
        key: "xlxgQtBenJiFaBingShu"
      },
      {
        title: "心脑血管疾病—其他-新投犯带病入监数",
        align: "center",
        dataIndex: "xlxgQtXinFanDaiBingShu",
        key: "xlxgQtXinFanDaiBingShu"
      },
      {
        title: "心脑血管疾病—其他-季末患病数",
        align: "center",
        dataIndex: "xlxgQtJiMoHuanBingShu",
        key: "xlxgQtJiMoHuanBingShu"
      },
      {
        title: "心脑血管疾病—其他-本年累计数",
        align: "center",
        dataIndex: "xlxgQtBenNianLeiJiShu",
        key: "xlxgQtBenNianLeiJiShu"
      },
      {
        title: "心脑血管疾病—其他-本季死亡数",
        align: "center",
        dataIndex: "xlxgQtBenJiSiWangShu",
        key: "xlxgQtBenJiSiWangShu"
      },
      {
        title: "内分泌营养代谢疾病—糖尿病-本季发病数",
        align: "center",
        dataIndex: "nfmTnbBenJiFaBingShu",
        key: "nfmTnbBenJiFaBingShu"
      },
      {
        title: "内分泌营养代谢疾病—糖尿病-新投犯带病入监数",
        align: "center",
        dataIndex: "nfmTnbXinFanDaiBingShu",
        key: "nfmTnbXinFanDaiBingShu"
      },
      {
        title: "内分泌营养代谢疾病—糖尿病-季末患病数",
        align: "center",
        dataIndex: "nfmTnbJiMoHuanBingShu",
        key: "nfmTnbJiMoHuanBingShu"
      },
      {
        title: "内分泌营养代谢疾病—糖尿病-本年累计数",
        align: "center",
        dataIndex: "nfmTnbBenNianLeiJiShu",
        key: "nfmTnbBenNianLeiJiShu"
      },
      {
        title: "内分泌营养代谢疾病—糖尿病-本季死亡数",
        align: "center",
        dataIndex: "nfmTnbBenJiSiWangShu",
        key: "nfmTnbBenJiSiWangShu"
      },
      {
        title: "内分泌营养代谢疾病—其他-本季发病数",
        align: "center",
        dataIndex: "nfmQtBenJiFaBingShu",
        key: "nfmQtBenJiFaBingShu"
      },
      {
        title: "内分泌营养代谢疾病—其他-新投犯带病入监数",
        align: "center",
        dataIndex: "nfmQtXinFanDaiBingShu",
        key: "nfmQtXinFanDaiBingShu"
      },
      {
        title: "内分泌营养代谢疾病—其他-季末患病数",
        align: "center",
        dataIndex: "nfmQtJiMoHuanBingShu",
        key: "nfmQtJiMoHuanBingShu"
      },
      {
        title: "内分泌营养代谢疾病—其他-本年累计数",
        align: "center",
        dataIndex: "nfmQtBenNianLeiJiShu",
        key: "nfmQtBenNianLeiJiShu"
      },
      {
        title: "内分泌营养代谢疾病—其他-本季死亡数",
        align: "center",
        dataIndex: "nfmQtBenJiSiWangShu",
        key: "nfmQtBenJiSiWangShu"
      },
      {
        title: "精神疾病-本季发病数",
        align: "center",
        dataIndex: "jsjbBenJiFaBingShu",
        key: "jsjbBenJiFaBingShu"
      },
      {
        title: "精神疾病-新投犯带病入监数",
        align: "center",
        dataIndex: "jsjbXinFanDaiBingShu",
        key: "jsjbXinFanDaiBingShu"
      },
      {
        title: "精神疾病-季末患病数",
        align: "center",
        dataIndex: "jsjbJiMoHuanBingShu",
        key: "jsjbJiMoHuanBingShu"
      },
      {
        title: "精神疾病-本年累计数",
        align: "center",
        dataIndex: "jsjbBenNianLeiJiShu",
        key: "jsjbBenNianLeiJiShu"
      },
      {
        title: "精神疾病-本季死亡数",
        align: "center",
        dataIndex: "jsjbBenJiSiWangShu",
        key: "jsjbBenJiSiWangShu"
      },
      {
        title: "运动系统疾病-本季发病数",
        align: "center",
        dataIndex: "ydxtjbBenJiFaBingShu",
        key: "ydxtjbBenJiFaBingShu"
      },
      {
        title: "运动系统疾病-新投犯带病入监数",
        align: "center",
        dataIndex: "ydxtjbXinFanDaiBingShu",
        key: "ydxtjbXinFanDaiBingShu"
      },
      {
        title: "运动系统疾病-季末患病数",
        align: "center",
        dataIndex: "ydxtjbJiMoHuanBingShu",
        key: "ydxtjbJiMoHuanBingShu"
      },
      {
        title: "运动系统疾病-本年累计数",
        align: "center",
        dataIndex: "ydxtjbBenNianLeiJiShu",
        key: "ydxtjbBenNianLeiJiShu"
      },
      {
        title: "运动系统疾病-本季死亡数",
        align: "center",
        dataIndex: "ydxtjbBenJiSiWangShu",
        key: "ydxtjbBenJiSiWangShu"
      },
      {
        title: "消化系统疾病-本季发病数",
        align: "center",
        dataIndex: "xhxtjbBenJiFaBingShu",
        key: "xhxtjbBenJiFaBingShu"
      },
      {
        title: "消化系统疾病-新投犯带病入监数",
        align: "center",
        dataIndex: "xhxtjbXinFanDaiBingShu",
        key: "xhxtjbXinFanDaiBingShu"
      },
      {
        title: "消化系统疾病-季末患病数",
        align: "center",
        dataIndex: "xhxtjbJiMoHuanBingShu",
        key: "xhxtjbJiMoHuanBingShu"
      },
      {
        title: "消化系统疾病-本年累计数",
        align: "center",
        dataIndex: "xhxtjbBenNianLeiJiShu",
        key: "xhxtjbBenNianLeiJiShu"
      },
      {
        title: "消化系统疾病-本季死亡数",
        align: "center",
        dataIndex: "xhxtjbBenJiSiWangShu",
        key: "xhxtjbBenJiSiWangShu"
      },
      {
        title: "呼吸系统疾病-本季发病数",
        align: "center",
        dataIndex: "hxxtjbBenJiFaBingShu",
        key: "hxxtjbBenJiFaBingShu"
      },
      {
        title: "呼吸系统疾病-新投犯带病入监数",
        align: "center",
        dataIndex: "hxxtjbXinFanDaiBingShu",
        key: "hxxtjbXinFanDaiBingShu"
      },
      {
        title: "呼吸系统疾病-季末患病数",
        align: "center",
        dataIndex: "hxxtjbJiMoHuanBingShu",
        key: "hxxtjbJiMoHuanBingShu"
      },
      {
        title: "呼吸系统疾病-本年累计数",
        align: "center",
        dataIndex: "hxxtjbBenNianLeiJiShu",
        key: "hxxtjbBenNianLeiJiShu"
      },
      {
        title: "呼吸系统疾病-本季死亡数",
        align: "center",
        dataIndex: "hxxtjbBenJiSiWangShu",
        key: "hxxtjbBenJiSiWangShu"
      },
      {
        title: "泌尿系统疾病-本季发病数",
        align: "center",
        dataIndex: "mnxtjbBenJiFaBingShu",
        key: "mnxtjbBenJiFaBingShu"
      },
      {
        title: "泌尿系统疾病-新投犯带病入监数",
        align: "center",
        dataIndex: "mnxtjbXinFanDaiBingShu",
        key: "mnxtjbXinFanDaiBingShu"
      },
      {
        title: "泌尿系统疾病-季末患病数",
        align: "center",
        dataIndex: "mnxtjbJiMoHuanBingShu",
        key: "mnxtjbJiMoHuanBingShu"
      },
      {
        title: "泌尿系统疾病-本年累计数",
        align: "center",
        dataIndex: "mnxtjbBenNianLeiJiShu",
        key: "mnxtjbBenNianLeiJiShu"
      },
      {
        title: "泌尿系统疾病-本季死亡数",
        align: "center",
        dataIndex: "mnxtjbBenJiSiWangShu",
        key: "mnxtjbBenJiSiWangShu"
      },
      {
        title: "神经系统疾病-本季发病数",
        align: "center",
        dataIndex: "sjxtjbBenJiFaBingShu",
        key: "sjxtjbBenJiFaBingShu"
      },
      {
        title: "神经系统疾病-新投犯带病入监数",
        align: "center",
        dataIndex: "sjxtjbXinFanDaiBingShu",
        key: "sjxtjbXinFanDaiBingShu"
      },
      {
        title: "神经系统疾病-季末患病数",
        align: "center",
        dataIndex: "sjxtjbJiMoHuanBingShu",
        key: "sjxtjbJiMoHuanBingShu"
      },
      {
        title: "神经系统疾病-本年累计数",
        align: "center",
        dataIndex: "sjxtjbBenNianLeiJiShu",
        key: "sjxtjbBenNianLeiJiShu"
      },
      {
        title: "神经系统疾病-本季死亡数",
        align: "center",
        dataIndex: "sjxtjbBenJiSiWangShu",
        key: "sjxtjbBenJiSiWangShu"
      },
      {
        title: "血液造血系统疾病-本季发病数",
        align: "center",
        dataIndex: "xyzxxtjbBenJiFaBingShu",
        key: "xyzxxtjbBenJiFaBingShu"
      },
      {
        title: "血液造血系统疾病-新投犯带病入监数",
        align: "center",
        dataIndex: "xyzxxtjbXinFanDaiBingShu",
        key: "xyzxxtjbXinFanDaiBingShu"
      },
      {
        title: "血液造血系统疾病-季末患病数",
        align: "center",
        dataIndex: "xyzxxtjbJiMoHuanBingShu",
        key: "xyzxxtjbJiMoHuanBingShu"
      },
      {
        title: "血液造血系统疾病-本年累计数",
        align: "center",
        dataIndex: "xyzxxtjbBenNianLeiJiShu",
        key: "xyzxxtjbBenNianLeiJiShu"
      },
      {
        title: "血液造血系统疾病-本季死亡数",
        align: "center",
        dataIndex: "xyzxxtjbBenJiSiWangShu",
        key: "xyzxxtjbBenJiSiWangShu"
      },
      {
        title: "恶性肿瘤-本季发病数",
        align: "center",
        dataIndex: "exzlBenJiFaBingShu",
        key: "exzlBenJiFaBingShu"
      },
      {
        title: "恶性肿瘤-新投犯带病入监数",
        align: "center",
        dataIndex: "exzlXinFanDaiBingShu",
        key: "exzlXinFanDaiBingShu"
      },
      {
        title: "恶性肿瘤-季末患病数",
        align: "center",
        dataIndex: "exzlJiMoHuanBingShu",
        key: "exzlJiMoHuanBingShu"
      },
      {
        title: "恶性肿瘤-本年累计数",
        align: "center",
        dataIndex: "exzlBenNianLeiJiShu",
        key: "exzlBenNianLeiJiShu"
      },
      {
        title: "恶性肿瘤-本季死亡数",
        align: "center",
        dataIndex: "exzlBenJiSiWangShu",
        key: "exzlBenJiSiWangShu"
      },
      {
        title: "免疫风湿性疾病-本季发病数",
        align: "center",
        dataIndex: "myfsxjbBenJiFaBingShu",
        key: "myfsxjbBenJiFaBingShu"
      },
      {
        title: "免疫风湿性疾病-新投犯带病入监数",
        align: "center",
        dataIndex: "myfsxjbXinFanDaiBingShu",
        key: "myfsxjbXinFanDaiBingShu"
      },
      {
        title: "免疫风湿性疾病-季末患病数",
        align: "center",
        dataIndex: "myfsxjbJiMoHuanBingShu",
        key: "myfsxjbJiMoHuanBingShu"
      },
      {
        title: "免疫风湿性疾病-本年累计数",
        align: "center",
        dataIndex: "myfsxjbBenNianLeiJiShu",
        key: "myfsxjbBenNianLeiJiShu"
      },
      {
        title: "免疫风湿性疾病-本季死亡数",
        align: "center",
        dataIndex: "myfsxjbBenJiSiWangShu",
        key: "myfsxjbBenJiSiWangShu"
      },
      {
        title: "其他-本季发病数",
        align: "center",
        dataIndex: "qtBenJiFaBingShu",
        key: "qtBenJiFaBingShu"
      },
      {
        title: "其他-新投犯带病入监数",
        align: "center",
        dataIndex: "qtXinFanDaiBingShu",
        key: "qtXinFanDaiBingShu"
      },
      {
        title: "其他-季末患病数",
        align: "center",
        dataIndex: "qtJiMoHuanBingShu",
        key: "qtJiMoHuanBingShu"
      },
      {
        title: "其他-本年累计数",
        align: "center",
        dataIndex: "qtBenNianLeiJiShu",
        key: "qtBenNianLeiJiShu"
      },
      {
        title: "其他-本季死亡数",
        align: "center",
        dataIndex: "qtBenJiSiWangShu",
        key: "qtBenJiSiWangShu"
      },
      {
        title: "合计-本季发病数",
        align: "center",
        dataIndex: "hjBenJiFaBingShu",
        key: "hjBenJiFaBingShu"
      },
      {
        title: "合计-新投犯带病入监数",
        align: "center",
        dataIndex: "hjXinFanDaiBingShu",
        key: "hjXinFanDaiBingShu"
      },
      {
        title: "合计-季末患病数",
        align: "center",
        dataIndex: "hjJiMoHuanBingShu",
        key: "hjJiMoHuanBingShu"
      },
      {
        title: "合计-本年累计数",
        align: "center",
        dataIndex: "hjBenNianLeiJiShu",
        key: "hjBenNianLeiJiShu"
      },
      {
        title: "合计-本季死亡数",
        align: "center",
        dataIndex: "hjBenJiSiWangShu",
        key: "hjBenJiSiWangShu"
      },
      {
        title: "审核人",
        align: "center",
        dataIndex: "shenHeRen",
        key: "shenHeRen"
      },
      {
        title: "填报人",
        align: "center",
        dataIndex: "tianBaoRen",
        key: "tianBaoRen"
      },
      {
        title: "填报人警务通",
        align: "center",
        dataIndex: "tianBaoRenJingWuTong",
        key: "tianBaoRenJingWuTong"
      },
      {
        title: "填报日期",
        align: "center",
        dataIndex: "tianBaoRenRiQi",
        key: "tianBaoRenRiQi"
      },
      {
        title: "单位小计-本季总发病数",
        align: "center",
        dataIndex: "dwxjBenJiZongFaBingShu",
        key: "dwxjBenJiZongFaBingShu"
      },
      {
        title: "单位小计-总发病数占押犯之比",
        align: "center",
        dataIndex: "dwxjZongShuZhanYaFanBi",
        key: "dwxjZongShuZhanYaFanBi"
      },
      {
        title: "单位小计-新投犯带病入监总数",
        align: "center",
        dataIndex: "dwxjXinFanDaiBingRuJians",
        key: "dwxjXinFanDaiBingRuJians"
      },
      {
        title: "单位小计-新投犯带病数占总押犯数之比",
        align: "center",
        dataIndex: "dwxjXtfdbszzyfzb",
        key: "dwxjXtfdbszzyfzb"
      },
      {
        title: "单位小计-新投犯中带病数比例",
        align: "center",
        dataIndex: "dwxjXinFanDaiBingShuBi",
        key: "dwxjXinFanDaiBingShuBi"
      },
      {
        title: "单位小计-季末患病总数",
        align: "center",
        dataIndex: "dwxjJiMoHuanBingZongShu",
        key: "dwxjJiMoHuanBingZongShu"
      }
    ]
  ],
  [
    "HisZhongDianManXingBing",
    [
      {
        title: "日期:按月",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
      },
      {
        title: "一级",
        align: "center",
        dataIndex: "jiBingYuJingRenShu_1",
        key: "jiBingYuJingRenShu_1"
      },
      {
        title: "二级",
        align: "center",
        dataIndex: "jiBingYuJingRenShu_2",
        key: "jiBingYuJingRenShu_2"
      },
      {
        title: "三级",
        align: "center",
        dataIndex: "jiBingYuJingRenShu_3",
        key: "jiBingYuJingRenShu_3"
      },
      {
        title: "本月发病数",
        align: "center",
        dataIndex: "gxyBenYueFaBingShu",
        key: "gxyBenYueFaBingShu"
      },
      {
        title: "月末患病数",
        align: "center",
        dataIndex: "gxyYueMoHuanBingShu",
        key: "gxyYueMoHuanBingShu"
      },
      {
        title: "本月发病数",
        align: "center",
        dataIndex: "gxbBenYueFaBingShu",
        key: "gxbBenYueFaBingShu"
      },
      {
        title: "月末患病数",
        align: "center",
        dataIndex: "gxbYueMoHuanBingShu",
        key: "gxbYueMoHuanBingShu"
      },
      {
        title: "本月发病数",
        align: "center",
        dataIndex: "nzzBenYueFaBingShu",
        key: "nzzBenYueFaBingShu"
      },
      {
        title: "月末患病数",
        align: "center",
        dataIndex: "nzzYueMoHuanBingShu",
        key: "nzzYueMoHuanBingShu"
      },
      {
        title: "本月发病数",
        align: "center",
        dataIndex: "tnbBenYueFaBingShu",
        key: "tnbBenYueFaBingShu"
      },
      {
        title: "月末患病数",
        align: "center",
        dataIndex: "tnbYueMoHuanBingShu",
        key: "tnbYueMoHuanBingShu"
      },
      {
        title: "本月发病数",
        align: "center",
        dataIndex: "mzfBenYueFaBingShu",
        key: "mzfBenYueFaBingShu"
      },
      {
        title: "月末患病数",
        align: "center",
        dataIndex: "mzfYueMoHuanBingShu",
        key: "mzfYueMoHuanBingShu"
      },
      {
        title: "本月发病数",
        align: "center",
        dataIndex: "exzlBenYueFaBingShu",
        key: "exzlBenYueFaBingShu"
      },
      {
        title: "月末患病数",
        align: "center",
        dataIndex: "exzlYueMoHuanBingShu",
        key: "exzlYueMoHuanBingShu"
      },
      {
        title: "本月发病数",
        align: "center",
        dataIndex: "jsbBenYueFaBingShu",
        key: "jsbBenYueFaBingShu"
      },
      {
        title: "月末患病数",
        align: "center",
        dataIndex: "jsbYueMoHuanBingShu",
        key: "jsbYueMoHuanBingShu"
      }
    ]
  ],
  [
    "YuanChengHuiZhen",
    [
      {
        title: "时间",
        align: "center",
        dataIndex: "shiJian",
        key: "shiJian"
      },
      {
        title: "会诊学科",
        align: "center",
        dataIndex: "huiZhenXueKe",
        key: "huiZhenXueKe"
      },
      {
        title: "会诊数量（人次）",
        align: "center",
        dataIndex: "huiZhenShuLiang",
        key: "huiZhenShuLiang"
      },
      {
        title: "会诊时长(h)",
        align: "center",
        dataIndex: "huiZhenShiChang",
        key: "huiZhenShiChang"
      },
      {
        title: "会诊平均时长(h)",
        align: "center",
        dataIndex: "huiZhenPingJunShiChang",
        key: "huiZhenPingJunShiChang"
      },
      {
        title: "审核耗时(h)",
        align: "center",
        dataIndex: "shenHeHaoShi",
        key: "shenHeHaoShi"
      },
      {
        title: "审核平均耗时(h)",
        align: "center",
        dataIndex: "shenHePingJunHaoShi",
        key: "shenHePingJunHaoShi"
      },
      {
        title: "会诊超时数量（人次）",
        align: "center",
        dataIndex: "huiZhenChaoShiShuLiang",
        key: "huiZhenChaoShiShuLiang"
      }
    ]
  ],
  [
    "YuanChengMenZhen",
    [
      {
        title: "时间",
        align: "center",
        dataIndex: "shiJian",
        key: "shiJian"
      },
      {
        title: "接诊学科",
        align: "center",
        dataIndex: "jieZhenXueKe",
        key: "jieZhenXueKe"
      },
      {
        title: "接诊量（人次）",
        align: "center",
        dataIndex: "jieZhenLiang",
        key: "jieZhenLiang"
      },
      {
        title: "接诊时长(h)",
        align: "center",
        dataIndex: "jieZhenShiChang",
        key: "jieZhenShiChang"
      },
      {
        title: "接诊平均时长(h)",
        align: "center",
        dataIndex: "jieZhenPingJunShiChang",
        key: "jieZhenPingJunShiChang"
      },
      {
        title: "排队耗时(h)",
        align: "center",
        dataIndex: "paiDuiHaoShi",
        key: "paiDuiHaoShi"
      },
      {
        title: "平均排队耗时(h)",
        align: "center",
        dataIndex: "pingJunPaiDuiHaoShi",
        key: "pingJunPaiDuiHaoShi"
      }
    ]
  ],
  [
    "ShuangXiangZhuanZhen",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期:按月",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
      },
      {
        title: "累计接受下级医疗机构患者数量（人次）",
        align: "center",
        dataIndex: "ljJieShouXiaJiJiGouShu",
        key: "ljJieShouXiaJiJiGouShu"
      },
      {
        title: "本月接受下级医疗机构患者数量（人次）",
        align: "center",
        dataIndex: "byJieShouXiaJiJiGouShu",
        key: "byJieShouXiaJiJiGouShu"
      },
      {
        title: "累计上转患者数量（人次）",
        align: "center",
        dataIndex: "ljShangZhuanHuanZheShu",
        key: "ljShangZhuanHuanZheShu"
      },
      {
        title: "本月上转患者数量",
        align: "center",
        dataIndex: "byShangZhuanHuanZheShu",
        key: "byShangZhuanHuanZheShu"
      }
    ]
  ],
  [
    "ZhuYuanBingRenZiLiao",
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
        title: "病历号",
        align: "center",
        dataIndex: "bingLiHao",
        key: "bingLiHao"
      },
      {
        title: "姓名",
        align: "center",
        dataIndex: "xingMing",
        key: "xingMing"
      },
      {
        title: "性别",
        align: "center",
        dataIndex: "xingBie",
        key: "xingBie"
      },
      {
        title: "年龄",
        align: "center",
        dataIndex: "nianLing",
        key: "nianLing"
      },
      {
        title: "病人类别",
        align: "center",
        dataIndex: "bingRenLeiBie",
        key: "bingRenLeiBie"
      },
      {
        title: "病人性质",
        align: "center",
        dataIndex: "bingRenXingZhi",
        key: "bingRenXingZhi"
      },
      {
        title: "当前科室",
        align: "center",
        dataIndex: "dangQianKeShi",
        key: "dangQianKeShi"
      },
      {
        title: "当前病区",
        align: "center",
        dataIndex: "dangQianBingQu",
        key: "dangQianBingQu"
      },
      {
        title: "床位",
        align: "center",
        dataIndex: "chuangWei",
        key: "chuangWei"
      },
      {
        title: "入院日期",
        align: "center",
        dataIndex: "ruYuanRiQi",
        key: "ruYuanRiQi"
      },
      {
        title: "单位名称",
        align: "center",
        dataIndex: "danWeiMingCheng",
        key: "danWeiMingCheng"
      },
      {
        title: "收治医生",
        align: "center",
        dataIndex: "shouZhiYiSheng",
        key: "shouZhiYiSheng"
      },
      {
        title: "主治医生",
        align: "center",
        dataIndex: "zhuZhiYiSheng",
        key: "zhuZhiYiSheng"
      },
      {
        title: "担保人",
        align: "center",
        dataIndex: "danBaoRen",
        key: "danBaoRen"
      },
      {
        title: "担保金额",
        align: "center",
        dataIndex: "danBaoJinE",
        key: "danBaoJinE"
      },
      {
        title: "住院天数",
        align: "center",
        dataIndex: "zhuYuanTianShu",
        key: "zhuYuanTianShu"
      },
      {
        title: "操作员",
        align: "center",
        dataIndex: "caoZuoYuan",
        key: "caoZuoYuan"
      }
    ]
  ],
  [
    "QuYuYingXiangTongJi",
    [
      {
        title: "机构名称",
        align: "center",
        dataIndex: "jiGouMingCheng",
        key: "jiGouMingCheng"
      },

      {
        title: "区域检查申请总数:按日统计上传到中心平台的各医院检查申请单总数",
        align: "center",
        dataIndex: "qyjcShenQingZongShu",
        key: "qyjcShenQingZongShu"
      },
      {
        title:
          "区域影像检查总数:按日统计上传到中心平台且已进行影像检查的各医院申请单总数",
        align: "center",
        dataIndex: "qyyxJianChaZongShu",
        key: "qyyxJianChaZongShu"
      },
      {
        title:
          "区域请求远程诊断总数:按日统计区域内各医院请求协助写报告的检查申请单总数",
        align: "center",
        dataIndex: "qyqqycZhenDuanZongShu",
        key: "qyqqycZhenDuanZongShu"
      },
      {
        title: "远程诊断报告总数:按日统计区域内各医院完成远程诊断报告的总数",
        align: "center",
        dataIndex: "yczdBaoGaoZongShu",
        key: "yczdBaoGaoZongShu"
      },
      {
        title: "区域报告总数:上传到中心平台的区域内各医院已审核的报告总数",
        align: "center",
        dataIndex: "quYuBaoGaoZongShu",
        key: "quYuBaoGaoZongShu"
      },
      {
        title: "区域阳性率比例:中心平台已审核报告中诊断为阳性所占比例",
        align: "center",
        dataIndex: "quYuYangXingLvBiLi",
        key: "quYuYangXingLvBiLi"
      }
    ]
  ],
  [
    "QuYuYiShengGongZuo",
    [
      {
        title: "机构名称",
        align: "center",
        dataIndex: "jiGouMingCheng",
        key: "jiGouMingCheng"
      },
      {
        title: "医院/医生:医生",
        align: "center",
        dataIndex: "yiYuanYiSheng",
        key: "yiYuanYiSheng"
      },
      {
        title:
          "报告数量:按日统计区域内各医院报告医师书写请求协助报告的数量，当日",
        align: "center",
        dataIndex: "baoGaoShuLiang",
        key: "baoGaoShuLiang"
      }
    ]
  ],
  [
    "QuYuSheBeiTongJi",
    [
      {
        title: "机构名称",
        align: "center",
        dataIndex: "jiGouMingCheng",
        key: "jiGouMingCheng"
      },
      {
        title: "设备类型",
        align: "center",
        dataIndex: "sheBeiLeiXing",
        key: "sheBeiLeiXing"
      },
      {
        title:
          "拍片数量:按日统计区域内每个医院各个影像设备类型（例如CT，MR…）的拍片数量，当日",
        align: "center",
        dataIndex: "paiPianShuLiang",
        key: "paiPianShuLiang"
      }
    ]
  ],
  [
    "QuYuYiShengGongZuo",
    [
      {
        title: "机构名称",
        align: "center",
        dataIndex: "jiGouMingCheng",
        key: "jiGouMingCheng"
      },
      {
        title: "医院/医生:医生",
        align: "center",
        dataIndex: "yiYuanYiSheng",
        key: "yiYuanYiSheng"
      },
      {
        title:
          "报告数量:按日统计区域内各医院报告医师书写请求协助报告的数量，当日",
        align: "center",
        dataIndex: "baoGaoShuLiang",
        key: "baoGaoShuLiang"
      }
    ]
  ],
  [
    "QuYuKuaYuanBaoGao",
    [
      {
        title: "机构名称",
        align: "center",
        dataIndex: "jiGouMingCheng",
        key: "jiGouMingCheng"
      },
      {
        title: "报告医生:报告医生人员",
        align: "center",
        dataIndex: "baoGaoYiSheng",
        key: "baoGaoYiSheng"
      },
      {
        title: "DX:当日",
        align: "center",
        dataIndex: "dx",
        key: "dx"
      },
      {
        title: "CR:当日",
        align: "center",
        dataIndex: "cr",
        key: "cr"
      },
      {
        title: "DR:当日",
        align: "center",
        dataIndex: "dr",
        key: "dr"
      },
      {
        title: "报告日期时间:日",
        align: "center",
        dataIndex: "baoGaoRiQiShiJian",
        key: "baoGaoRiQiShiJian"
      }
    ]
  ],
  [
    "JianYanBiaoBenTongJi",
    [
      {
        title: "指标值:指标说明",
        align: "center",
        dataIndex: "zhiBiaoZhi",
        key: "zhiBiaoZhi"
      },
      {
        title: "临检",
        align: "center",
        dataIndex: "linJian",
        key: "linJian"
      },
      {
        title: "生化",
        align: "center",
        dataIndex: "shengHua",
        key: "shengHua"
      },
      {
        title: "免疫",
        align: "center",
        dataIndex: "minaYi",
        key: "minaYi"
      },
      {
        title: "细菌",
        align: "center",
        dataIndex: "xiJun",
        key: "xiJun"
      },
      {
        title: "下沙院区",
        align: "center",
        dataIndex: "xiaShaYuanQu",
        key: "xiaShaYuanQu"
      },
      {
        title: "血库",
        align: "center",
        dataIndex: "xueKu",
        key: "xueKu"
      },
      {
        title: "二监检验",
        align: "center",
        dataIndex: "erJianJianYan",
        key: "erJianJianYan"
      },
      {
        title: "三监检验",
        align: "center",
        dataIndex: "sanJianJianYuan",
        key: "sanJianJianYuan"
      },
      {
        title: "女监检验",
        align: "center",
        dataIndex: "nvJianJianYuan",
        key: "nvJianJianYuan"
      },
      {
        title: "外送",
        align: "center",
        dataIndex: "waiSong",
        key: "waiSong"
      },
      {
        title: "总计",
        align: "center",
        dataIndex: "zongJi",
        key: "zongJi"
      }
    ]
  ],
  [
    "MenZhenGuaZhangHuiZong",
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
        title: "单位",
        align: "center",
        dataIndex: "danWei",
        key: "danWei"
      },
      {
        title: "挂账金额",
        align: "center",
        dataIndex: "guaZhangJinE",
        key: "guaZhangJinE"
      }
    ]
  ],
  [
    "MenZhenGuaZhangTongJi",
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
        title: "监狱",
        align: "center",
        dataIndex: "jianYu",
        key: "jianYu",
        render: (value: string, row: any, index) => hejiColumns(value, 5)
      },
      {
        title: "监区",
        align: "center",
        dataIndex: "jianQu",
        key: "jianQu",
        render: (value: string, row: any, index) =>
          hejiColumns(row.jianYu, 0, value)
      },
      {
        title: "姓名",
        align: "center",
        dataIndex: "xingMing",
        key: "xingMing",
        render: (value: string, row: any, index) =>
          hejiColumns(row.jianYu, 0, value)
      },
      {
        title: "编号",
        align: "center",
        dataIndex: "bianHao",
        key: "bianHao",
        render: (value: string, row: any, index) =>
          hejiColumns(row.jianYu, 0, value)
      },
      {
        title: "挂账时间",
        align: "center",
        dataIndex: "guaZhangShiJian",
        key: "guaZhangShiJian",
        render: (value: string, row: any, index) =>
          hejiColumns(row.jianYu, 0, value)
      },
      {
        title: "挂账金额",
        align: "center",
        dataIndex: "guaZhangJinE",
        key: "guaZhangJinE"
      },
      {
        title: "制表人",
        align: "center",
        dataIndex: "zhiBiaoRen",
        key: "zhiBiaoRen"
      }
    ]
  ],
  [
    "MenZhenHuiZongGeRen",
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
        title: "日报ID",
        align: "center",
        dataIndex: "riBaoId",
        key: "riBaoId"
      },
      {
        title: "机构ID",
        align: "center",
        dataIndex: "jiGouId",
        key: "jiGouId"
      },
      {
        title: "日报类别",
        align: "center",
        dataIndex: "riBaoLeiBie",
        key: "riBaoLeiBie"
      },
      {
        title: "统计类别",
        align: "center",
        dataIndex: "tongJiLeiBie",
        key: "tongJiLeiBie"
      },
      {
        title: "日报日期",
        align: "center",
        dataIndex: "riBaoRiQi",
        key: "riBaoRiQi"
      },
      {
        title: "日报金额",
        align: "center",
        dataIndex: "riBaoJinE",
        key: "riBaoJinE"
      },
      {
        title: "记录总数",
        align: "center",
        dataIndex: "jiLuZongShu",
        key: "jiLuZongShu"
      },
      {
        title: "日报人员",
        align: "center",
        dataIndex: "riBaoGongHao",
        key: "riBaoGongHao"
      },
      {
        title: "汇总工号",
        align: "center",
        dataIndex: "huiZongGongHao",
        key: "huiZongGongHao"
      }
    ]
  ],
  [
    "MenZhenHuiZongQingDan",
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
        title: "工号",
        align: "center",
        dataIndex: "gongHao",
        key: "gongHao"
      },
      {
        title: "姓名",
        align: "center",
        dataIndex: "xingMing",
        key: "xingMing"
      },
      {
        title: "药品收入",
        align: "center",
        dataIndex: "yaoPinShouRu",
        key: "yaoPinShouRu"
      },
      {
        title: "医疗收入",
        align: "center",
        dataIndex: "yiLiaoShouRu",
        key: "yiLiaoShouRu"
      },
      {
        title: "其他收入",
        align: "center",
        dataIndex: "qiTaShouRu",
        key: "qiTaShouRu"
      },
      {
        title: "合计",
        align: "center",
        dataIndex: "heJi",
        key: "heJi"
      },
      {
        title: "记录数",
        align: "center",
        dataIndex: "jiLiShu",
        key: "jiLiShu"
      },
      {
        title: "现金",
        align: "center",
        dataIndex: "xianJin",
        key: "xianJin"
      }
    ]
  ],
  [
    "YuanBingQuFeiYong",
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
        title: "病区",
        align: "center",
        dataIndex: "bingQu",
        key: "bingQu"
      },
      {
        title: "在院人数",
        align: "center",
        dataIndex: "zaiYuanRenShu",
        key: "zaiYuanRenShu"
      },
      {
        title: "预交款",
        align: "center",
        dataIndex: "yuJiaoKuan",
        key: "yuJiaoKuan"
      },
      {
        title: "其中支票",
        align: "center",
        dataIndex: "qiZhongZhiPiao",
        key: "qiZhongZhiPiao"
      },
      {
        title: "西药费",
        align: "center",
        dataIndex: "xiYaoFei",
        key: "xiYaoFei"
      },
      {
        title: "中草药",
        align: "center",
        dataIndex: "zhongCaoYao",
        key: "zhongCaoYao"
      },
      {
        title: "中成药",
        align: "center",
        dataIndex: "zhongChengYao",
        key: "zhongChengYao"
      },
      {
        title: "床位费",
        align: "center",
        dataIndex: "chuangWeiFei",
        key: "chuangWeiFei"
      },
      {
        title: "诊疗费",
        align: "center",
        dataIndex: "zhenLiaoFei",
        key: "zhenLiaoFei"
      },
      {
        title: "检查费",
        align: "center",
        dataIndex: "jianChaFei",
        key: "jianChaFei"
      },
      {
        title: "B超费",
        align: "center",
        dataIndex: "bChaoFei",
        key: "bChaoFei"
      },
      {
        title: "心电图费",
        align: "center",
        dataIndex: "xinDianTuFei",
        key: "xinDianTuFei"
      },
      {
        title: "放射费",
        align: "center",
        dataIndex: "fangSheFei",
        key: "fangSheFei"
      },
      {
        title: "CT费",
        align: "center",
        dataIndex: "ctFei",
        key: "ctFei"
      },
      {
        title: "MR费",
        align: "center",
        dataIndex: "mrFei",
        key: "mrFei"
      },
      {
        title: "化验费",
        align: "center",
        dataIndex: "huaYanFei",
        key: "huaYanFei"
      },
      {
        title: "治疗费",
        align: "center",
        dataIndex: "zhiLiaoFei",
        key: "zhiLiaoFei"
      },
      {
        title: "注射费",
        align: "center",
        dataIndex: "zhuSheFei",
        key: "zhuSheFei"
      },
      {
        title: "输氧费",
        align: "center",
        dataIndex: "shuYangFei",
        key: "shuYangFei"
      },
      {
        title: "手术费",
        align: "center",
        dataIndex: "shouShuFei",
        key: "shouShuFei"
      },
      {
        title: "接生费",
        align: "center",
        dataIndex: "jieShengFei",
        key: "jieShengFei"
      },
      {
        title: "护理费",
        align: "center",
        dataIndex: "huLiFei",
        key: "huLiFei"
      },
      {
        title: "材料费",
        align: "center",
        dataIndex: "caiLiaoFei",
        key: "caiLiaoFei"
      },
      {
        title: "输血费",
        align: "center",
        dataIndex: "shuXueFei",
        key: "shuXueFei"
      },
      {
        title: "空调费",
        align: "center",
        dataIndex: "kongTiaoFei",
        key: "kongTiaoFei"
      },
      {
        title: "救护车费",
        align: "center",
        dataIndex: "jiuHuCheFei",
        key: "jiuHuCheFei"
      },
      {
        title: "伙食费",
        align: "center",
        dataIndex: "huoShiFei",
        key: "huoShiFei"
      },
      {
        title: "煎药费",
        align: "center",
        dataIndex: "jianYaoFei",
        key: "jianYaoFei"
      },
      {
        title: "陪客费",
        align: "center",
        dataIndex: "peiKeFei",
        key: "peiKeFei"
      },
      {
        title: "其它费",
        align: "center",
        dataIndex: "qiTaFei",
        key: "qiTaFei"
      },
      {
        title: "合  计",
        align: "center",
        dataIndex: "heJi",
        key: "heJi"
      }
    ]
  ],
  [
    "MenZhenHuiZongYue",
    [
      {
        title: "月份",
        align: "center",
        dataIndex: "yueFei",
        key: "yueFei"
      },
      {
        title: "西药费",
        align: "center",
        dataIndex: "xiYaoFei",
        key: "xiYaoFei"
      },
      {
        title: "成药费",
        align: "center",
        dataIndex: "chengYaoFei",
        key: "chengYaoFei"
      },
      {
        title: "草药费",
        align: "center",
        dataIndex: "caoYaoFei",
        key: "caoYaoFei"
      },
      {
        title: "检查费",
        align: "center",
        dataIndex: "jianChaFei",
        key: "jianChaFei"
      },
      {
        title: "治疗费",
        align: "center",
        dataIndex: "zhiLiaoFei",
        key: "zhiLiaoFei"
      },
      {
        title: "CT费",
        align: "center",
        dataIndex: "ctFei",
        key: "ctFei"
      },
      {
        title: "放射费",
        align: "center",
        dataIndex: "fangSheFei",
        key: "fangSheFei"
      },
      {
        title: "手术费",
        align: "center",
        dataIndex: "shouShuFei",
        key: "shouShuFei"
      },
      {
        title: "化验费",
        align: "center",
        dataIndex: "huaYanFei",
        key: "huaYanFei"
      },
      {
        title: "其它费",
        align: "center",
        dataIndex: "qiTaFei",
        key: "qiTaFei"
      },
      {
        title: "护理费",
        align: "center",
        dataIndex: "huLiFei",
        key: "huLiFei"
      },
      {
        title: "材料费",
        align: "center",
        dataIndex: "caiLiaoFei",
        key: "caiLiaoFei"
      },
      {
        title: "麻醉费",
        align: "center",
        dataIndex: "maZhuiFei",
        key: "maZhuiFei"
      },
      {
        title: "合  计",
        align: "center",
        dataIndex: "heJi",
        key: "heJi"
      }
    ]
  ],
  [
    "MenZhenKaiDanKeShiFei",
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
        dataIndex: "keShi",
        key: "keShi"
      },
      {
        title: "人次",
        align: "center",
        dataIndex: "renCi",
        key: "renCi"
      },
      {
        title: "合计",
        align: "center",
        dataIndex: "heJi",
        key: "heJi"
      },
      {
        title: "西药费",
        align: "center",
        dataIndex: "xiYaoFei",
        key: "xiYaoFei"
      },
      {
        title: "成药费",
        align: "center",
        dataIndex: "chengYaoFei",
        key: "chengYaoFei"
      },
      {
        title: "草药费",
        align: "center",
        dataIndex: "caoYaoFei",
        key: "caoYaoFei"
      },
      {
        title: "检查费",
        align: "center",
        dataIndex: "jianChaFei",
        key: "jianChaFei"
      },
      {
        title: "治疗费",
        align: "center",
        dataIndex: "zhiLiaoFei",
        key: "zhiLiaoFei"
      },
      {
        title: "CT费",
        align: "center",
        dataIndex: "ctFei",
        key: "ctFei"
      },
      {
        title: "放射费",
        align: "center",
        dataIndex: "fangSheFei",
        key: "fangSheFei"
      },
      {
        title: "手术费",
        align: "center",
        dataIndex: "shouShuFei",
        key: "shouShuFei"
      },
      {
        title: "化验费",
        align: "center",
        dataIndex: "huaYanFei",
        key: "huaYanFei"
      },
      {
        title: "其它费",
        align: "center",
        dataIndex: "qiTaFei",
        key: "qiTaFei"
      },
      {
        title: "诊察费",
        align: "center",
        dataIndex: "zhenChaFei",
        key: "zhenChaFei"
      },
      {
        title: "护理费",
        align: "center",
        dataIndex: "huLiFei",
        key: "huLiFei"
      },
      {
        title: "材料费",
        align: "center",
        dataIndex: "caiLiaoFei",
        key: "caiLiaoFei"
      },
      {
        title: "麻醉费",
        align: "center",
        dataIndex: "maZuiFei",
        key: "maZuiFei"
      }
    ]
  ],
  [
    "MenZhenKeShiFeiYong",
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
        dataIndex: "keShi",
        key: "keShi"
      },
      {
        title: "医生",
        align: "center",
        dataIndex: "yiSheng",
        key: "yiSheng"
      },
      {
        title: "人次",
        align: "center",
        dataIndex: "renCi",
        key: "renCi"
      },
      {
        title: "合计",
        align: "center",
        dataIndex: "heJi",
        key: "heJi"
      },
      {
        title: "西药费",
        align: "center",
        dataIndex: "xiYaoFei",
        key: "xiYaoFei"
      },
      {
        title: "成药费",
        align: "center",
        dataIndex: "chengYaoFei",
        key: "chengYaoFei"
      },
      {
        title: "草药费",
        align: "center",
        dataIndex: "caoYaoFei",
        key: "caoYaoFei"
      },
      {
        title: "检查费",
        align: "center",
        dataIndex: "jianChaFei",
        key: "jianChaFei"
      },
      {
        title: "治疗费",
        align: "center",
        dataIndex: "zhiLiaoFei",
        key: "zhiLiaoFei"
      },
      {
        title: "CT费",
        align: "center",
        dataIndex: "ctFei",
        key: "ctFei"
      },
      {
        title: "放射费",
        align: "center",
        dataIndex: "fangSheFei",
        key: "fangSheFei"
      },
      {
        title: "手术费",
        align: "center",
        dataIndex: "shouShuFei",
        key: "shouShuFei"
      },
      {
        title: "化验费",
        align: "center",
        dataIndex: "huaYanFei",
        key: "huaYanFei"
      },
      {
        title: "其它费",
        align: "center",
        dataIndex: "qiTaFei",
        key: "qiTaFei"
      },
      {
        title: "输血费",
        align: "center",
        dataIndex: "shuXueFei",
        key: "shuXueFei"
      },
      {
        title: "输氧费",
        align: "center",
        dataIndex: "shuYangFei",
        key: "shuYangFei"
      },
      {
        title: "诊察费",
        align: "center",
        dataIndex: "zhenChaFei",
        key: "zhenChaFei"
      },
      {
        title: "挂号费",
        align: "center",
        dataIndex: "guaHaoFei",
        key: "guaHaoFei"
      },
      {
        title: "监管费",
        align: "center",
        dataIndex: "jianGuanFei",
        key: "jianGuanFei"
      },
      {
        title: "卫生组套费",
        align: "center",
        dataIndex: "weiShengZuTaoFei",
        key: "weiShengZuTaoFei"
      },
      {
        title: "陪客费",
        align: "center",
        dataIndex: "peiKeFei",
        key: "peiKeFei"
      },
      {
        title: "床位费",
        align: "center",
        dataIndex: "chuangWeiFei",
        key: "chuangWeiFei"
      },
      {
        title: "伙食费",
        align: "center",
        dataIndex: "huoShiFei",
        key: "huoShiFei"
      },
      {
        title: "护理费",
        align: "center",
        dataIndex: "huLiFei",
        key: "huLiFei"
      },
      {
        title: "材料费",
        align: "center",
        dataIndex: "caiLiaoFei",
        key: "caiLiaoFei"
      },
      {
        title: "麻醉费",
        align: "center",
        dataIndex: "maZuiFei",
        key: "maZuiFei"
      },
      {
        title: "外院检查",
        align: "center",
        dataIndex: "waiYuanJianCha",
        key: "waiYuanJianCha"
      },
      {
        title: "外院治疗",
        align: "center",
        dataIndex: "waiYuanZhiLiao",
        key: "waiYuanZhiLiao"
      },
      {
        title: "外院化验",
        align: "center",
        dataIndex: "waiYuanHuaYan",
        key: "waiYuanHuaYan"
      },
      {
        title: "外院手术",
        align: "center",
        dataIndex: "waiYuanShouShu",
        key: "waiYuanShouShu"
      },
      {
        title: "会诊费",
        align: "center",
        dataIndex: "huiZhenFei",
        key: "huiZhenFei"
      },
      {
        title: "其他",
        align: "center",
        dataIndex: "qiTa",
        key: "qiTa"
      }
    ]
  ],
  [
    "MenZhenRiZhi",
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
        title: "医生",
        align: "center",
        dataIndex: "yiSheng",
        key: "yiSheng"
      },
      {
        title: "科室编码",
        align: "center",
        dataIndex: "keShiBianMa",
        key: "keShiBianMa"
      },
      {
        title: "科室名称",
        align: "center",
        dataIndex: "keShiMingCheng",
        key: "keShiMingCheng"
      },
      {
        title: "就诊日期",
        align: "center",
        dataIndex: "jiuZhenRiQi",
        key: "jiuZhenRiQi"
      },
      {
        title: "复诊",
        align: "center",
        dataIndex: "fuZhen",
        key: "fuZhen"
      },
      {
        title: "病人姓名",
        align: "center",
        dataIndex: "bingRenXingMing",
        key: "bingRenXingMing"
      },
      {
        title: "性别",
        align: "center",
        dataIndex: "xingBie",
        key: "xingBie"
      },
      {
        title: "年龄",
        align: "center",
        dataIndex: "nianLing",
        key: "nianLing"
      },
      {
        title: "现住址",
        align: "center",
        dataIndex: "xianZhuZhi",
        key: "xianZhuZhi"
      },
      {
        title: "单位(学校)",
        align: "center",
        dataIndex: "danWei",
        key: "danWei"
      },
      {
        title: "联系电话",
        align: "center",
        dataIndex: "lianXiDianHua",
        key: "lianXiDianHua"
      },
      {
        title: "初步诊断",
        align: "center",
        dataIndex: "chuBuZhenDuan",
        key: "chuBuZhenDuan"
      },
      {
        title: "发病日期",
        align: "center",
        dataIndex: "faBingRiQi",
        key: "faBingRiQi"
      },
      {
        title: "身份证",
        align: "center",
        dataIndex: "shenFenZheng",
        key: "shenFenZheng"
      }
    ]
  ],
  [
    "MenZhenYeWuShouRu",
    [
      {
        title: "月份",
        align: "center",
        dataIndex: "yueFei",
        key: "yueFei"
      },
      {
        title: "凭证类别编码",
        align: "center",
        dataIndex: "pingZhengLeiBieBianMa",
        key: "pingZhengLeiBieBianMa"
      },
      {
        title: "分录编号",
        align: "center",
        dataIndex: "fenLuBianHao",
        key: "fenLuBianHao"
      },
      {
        title: "凭证日期",
        align: "center",
        dataIndex: "pingZhengRiQi",
        key: "pingZhengRiQi"
      },
      {
        title: "附单据数(默认-1)",
        align: "center",
        dataIndex: "fuDanJuShu",
        key: "fuDanJuShu"
      },
      {
        title: "制单人",
        align: "center",
        dataIndex: "zhiDanRen",
        key: "zhiDanRen"
      },
      {
        title: "摘要",
        align: "center",
        dataIndex: "zhaiYao",
        key: "zhaiYao"
      },
      {
        title: "科目",
        align: "center",
        dataIndex: "keMu",
        key: "keMu"
      },
      {
        title: "借方",
        align: "center",
        dataIndex: "jieFang",
        key: "jieFang"
      },
      {
        title: "贷方",
        align: "center",
        dataIndex: "daiFang",
        key: "daiFang"
      },
      {
        title: "部门编码",
        align: "center",
        dataIndex: "buMenBianMa",
        key: "buMenBianMa"
      },
      {
        title: "个人编码",
        align: "center",
        dataIndex: "geRenBianMa",
        key: "geRenBianMa"
      },
      {
        title: "客户编码",
        align: "center",
        dataIndex: "keHuBianMa",
        key: "keHuBianMa"
      },
      {
        title: "供应商编码",
        align: "center",
        dataIndex: "gongYingShangBianMa",
        key: "gongYingShangBianMa"
      },
      {
        title: "项目编码",
        align: "center",
        dataIndex: "xiangMuBianMa",
        key: "xiangMuBianMa"
      },
      {
        title: "项目大类",
        align: "center",
        dataIndex: "xiangMuDaLei",
        key: "xiangMuDaLei"
      }
    ]
  ],
  [
    "QianFeiKongZhiChaXun",
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
        title: "病案号",
        align: "center",
        dataIndex: "bingAnHao",
        key: "bingAnHao"
      },
      {
        title: "病人类别",
        align: "center",
        dataIndex: "bingRenLeiBie",
        key: "bingRenLeiBie"
      },
      {
        title: "姓名",
        align: "center",
        dataIndex: "xingMing",
        key: "xingMing"
      },
      {
        title: "住院科室",
        align: "center",
        dataIndex: "zhuYuanKeShi",
        key: "zhuYuanKeShi"
      },
      {
        title: "住院病区",
        align: "center",
        dataIndex: "zhuYuanBingQy",
        key: "zhuYuanBingQy"
      },
      {
        title: "床位号",
        align: "center",
        dataIndex: "chuangWeiHao",
        key: "chuangWeiHao"
      },
      {
        title: "住院天数",
        align: "center",
        dataIndex: "zhuYuanTianShu",
        key: "zhuYuanTianShu"
      },
      {
        title: "总金额",
        align: "center",
        dataIndex: "zongJinE",
        key: "zongJinE"
      },
      {
        title: "预交合计",
        align: "center",
        dataIndex: "yuJiaoHeJi",
        key: "yuJiaoHeJi"
      }
    ]
  ],
  [
    "ChuYuanBingRenFeiYong",
    [
      {
        title: "病历号",
        align: "center",
        dataIndex: "bingLiHao",
        key: "bingLiHao"
      },
      {
        title: "姓名",
        align: "center",
        dataIndex: "xingMing",
        key: "xingMing"
      },
      {
        title: "西药费",
        align: "center",
        dataIndex: "xiYaoFei",
        key: "xiYaoFei"
      },
      {
        title: "成药费",
        align: "center",
        dataIndex: "chengYaoFei",
        key: "chengYaoFei"
      },
      {
        title: "检查费",
        align: "center",
        dataIndex: "jianCheFei",
        key: "jianCheFei"
      },
      {
        title: "治疗费",
        align: "center",
        dataIndex: "zhiLiaoFei",
        key: "zhiLiaoFei"
      },
      {
        title: "CT费",
        align: "center",
        dataIndex: "ctFei",
        key: "ctFei"
      },
      {
        title: "放射费",
        align: "center",
        dataIndex: "fangSheFei",
        key: "fangSheFei"
      },
      {
        title: "化验费",
        align: "center",
        dataIndex: "huaYanFei",
        key: "huaYanFei"
      },
      {
        title: "其它费",
        align: "center",
        dataIndex: "qiTaFei",
        key: "qiTaFei"
      },
      {
        title: "输氧费",
        align: "center",
        dataIndex: "shuYangFei",
        key: "shuYangFei"
      },
      {
        title: "诊察费",
        align: "center",
        dataIndex: "zhenChaFei",
        key: "zhenChaFei"
      },
      {
        title: "卫生组套费",
        align: "center",
        dataIndex: "weiShengZhuTaoFei",
        key: "weiShengZhuTaoFei"
      },
      {
        title: "床位费",
        align: "center",
        dataIndex: "chuangWeiFei",
        key: "chuangWeiFei"
      },
      {
        title: "伙食费",
        align: "center",
        dataIndex: "huoShiFei",
        key: "huoShiFei"
      },
      {
        title: "护理费",
        align: "center",
        dataIndex: "huLiFei",
        key: "huLiFei"
      },
      {
        title: "材料费",
        align: "center",
        dataIndex: "caiLiaoFei",
        key: "caiLiaoFei"
      },
      {
        title: "合  计",
        align: "center",
        dataIndex: "heJi",
        key: "heJi"
      }
    ]
  ],
  [
    "ChuYuanBingRenJieZhang",
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
        title: "病区",
        align: "center",
        dataIndex: "bingQu",
        key: "bingQu"
      },
      {
        title: "结算人次",
        align: "center",
        dataIndex: "jieSuanRenCi",
        key: "jieSuanRenCi"
      },
      {
        title: "合计金额",
        align: "center",
        dataIndex: "heJiJinE",
        key: "heJiJinE"
      },
      {
        title: "已付金额",
        align: "center",
        dataIndex: "yiFuJinE",
        key: "yiFuJinE"
      },
      {
        title: "现金挂账",
        align: "center",
        dataIndex: "xianJinGuaZhang",
        key: "xianJinGuaZhang"
      },
      {
        title: "省医保",
        align: "center",
        dataIndex: "shengYiBao",
        key: "shengYiBao"
      },
      {
        title: "市医保",
        align: "center",
        dataIndex: "shiYiBao",
        key: "shiYiBao"
      },
      {
        title: "省一卡通",
        align: "center",
        dataIndex: "shengYiKaTong",
        key: "shengYiKaTong"
      },
      {
        title: "其它金额",
        align: "center",
        dataIndex: "qiTaJinE",
        key: "qiTaJinE"
      }
    ]
  ],
  [
    "ChuYuanBingRenShouRu",
    [
      {
        title: "科室",
        align: "center",
        dataIndex: "keShi",
        key: "keShi"
      },
      {
        title: "住院人数",
        align: "center",
        dataIndex: "zhuYuanRenShu",
        key: "zhuYuanRenShu"
      },
      {
        title: "住院天数",
        align: "center",
        dataIndex: "zhuYuanTianShu",
        key: "zhuYuanTianShu"
      },
      {
        title: "合计金额",
        align: "center",
        dataIndex: "heJiJinE",
        key: "heJiJinE"
      },
      {
        title: "西药费",
        align: "center",
        dataIndex: "xiYaoFei",
        key: "xiYaoFei"
      },
      {
        title: "中成药",
        align: "center",
        dataIndex: "zhongChengYao",
        key: "zhongChengYao"
      },
      {
        title: "中草药",
        align: "center",
        dataIndex: "zhongCaoYao",
        key: "zhongCaoYao"
      },
      {
        title: "药品小计",
        align: "center",
        dataIndex: "yaoPinXiaoJi",
        key: "yaoPinXiaoJi"
      },
      {
        title: "床位费",
        align: "center",
        dataIndex: "chuangWeiFei",
        key: "chuangWeiFei"
      },
      {
        title: "诊疗费",
        align: "center",
        dataIndex: "zhenLiaoFei",
        key: "zhenLiaoFei"
      },
      {
        title: "科室检查费",
        align: "center",
        dataIndex: "keShiJianChaFei",
        key: "keShiJianChaFei"
      },
      {
        title: "治疗费",
        align: "center",
        dataIndex: "zhiLiaoFei",
        key: "zhiLiaoFei"
      },
      {
        title: "材料费",
        align: "center",
        dataIndex: "caiLiaoFei",
        key: "caiLiaoFei"
      },
      {
        title: "护理费",
        align: "center",
        dataIndex: "huLiFei",
        key: "huLiFei"
      },
      {
        title: "输氧费",
        align: "center",
        dataIndex: "shuYangFei",
        key: "shuYangFei"
      },
      {
        title: "接生费",
        align: "center",
        dataIndex: "jieShengFei",
        key: "jieShengFei"
      },
      {
        title: "其它费",
        align: "center",
        dataIndex: "qiTaFei",
        key: "qiTaFei"
      },
      {
        title: "手术",
        align: "center",
        dataIndex: "shouShu",
        key: "shouShu"
      },
      {
        title: "化验",
        align: "center",
        dataIndex: "huaYan",
        key: "huaYan"
      },
      {
        title: "放射",
        align: "center",
        dataIndex: "fangShe",
        key: "fangShe"
      },
      {
        title: "B超",
        align: "center",
        dataIndex: "bChao",
        key: "bChao"
      },
      {
        title: "内镜",
        align: "center",
        dataIndex: "neiJing",
        key: "neiJing"
      },
      {
        title: "心电图",
        align: "center",
        dataIndex: "xinDianTu",
        key: "xinDianTu"
      },
      {
        title: "血透费",
        align: "center",
        dataIndex: "xueTouTu",
        key: "xueTouTu"
      },
      {
        title: "体外循环费",
        align: "center",
        dataIndex: "tiWaiXunHuanFei",
        key: "tiWaiXunHuanFei"
      },
      {
        title: "麻醉费",
        align: "center",
        dataIndex: "maZhuiFei",
        key: "maZhuiFei"
      },
      {
        title: "输血费",
        align: "center",
        dataIndex: "shuXheFei",
        key: "shuXheFei"
      },
      {
        title: "手术材料费",
        align: "center",
        dataIndex: "shouShuCaiLiaoFei",
        key: "shouShuCaiLiaoFei"
      },
      {
        title: "麻醉材料费",
        align: "center",
        dataIndex: "maZhuiCaiLiaoFei",
        key: "maZhuiCaiLiaoFei"
      },
      {
        title: "检查材料费",
        align: "center",
        dataIndex: "jianChaCaiLiaoFei",
        key: "jianChaCaiLiaoFei"
      },
      {
        title: "化验材料费",
        align: "center",
        dataIndex: "huaYanCaiLiaoFei",
        key: "huaYanCaiLiaoFei"
      },
      {
        title: "其他医技费用",
        align: "center",
        dataIndex: "qiTaYiJiFeiYong",
        key: "qiTaYiJiFeiYong"
      },
      {
        title: "其他医技材料",
        align: "center",
        dataIndex: "qiTaYiJiCaiLiao",
        key: "qiTaYiJiCaiLiao"
      },
      {
        title: "其他非核算收入",
        align: "center",
        dataIndex: "qiTaFeiHeSuanShouRu",
        key: "qiTaFeiHeSuanShouRu"
      },
      {
        title: "医疗收入小计",
        align: "center",
        dataIndex: "yiIaoShouRuXiaoJi",
        key: "yiIaoShouRuXiaoJi"
      },
      {
        title: "期间",
        align: "center",
        dataIndex: "qiJian",
        key: "qiJian"
      },
      {
        title: "财务科室编码",
        align: "center",
        dataIndex: "caiWuKeShiBianMa",
        key: "caiWuKeShiBianMa"
      },
      {
        title: "核算单元",
        align: "center",
        dataIndex: "heSuanDanYuan",
        key: "heSuanDanYuan"
      },
      {
        title: "门诊住院",
        align: "center",
        dataIndex: "menZhenZhuYuan",
        key: "menZhenZhuYuan"
      }
    ]
  ],
  [
    "DingDianShenQingHeDui",
    [
      {
        title: "险种",
        align: "center",
        dataIndex: "xianZhong",
        key: "xianZhong"
      },
      {
        title: "病种/治疗方式",
        align: "center",
        dataIndex: "bingZhong",
        key: "bingZhong"
      },
      {
        title: "人次",
        align: "center",
        dataIndex: "renCi",
        key: "renCi"
      },
      {
        title: "医疗费总额",
        align: "center",
        dataIndex: "yiLiaoFeiZongE",
        key: "yiLiaoFeiZongE"
      },
      {
        title: "自理费用",
        align: "center",
        dataIndex: "ziLiFeiYong",
        key: "ziLiFeiYong"
      },
      {
        title: "列支金额",
        align: "center",
        dataIndex: "lieZhiJinE",
        key: "lieZhiJinE"
      },
      {
        title: "申请拨付",
        align: "center",
        dataIndex: "shenQingBoFu",
        key: "shenQingBoFu"
      }
    ]
  ],
  [
    "ZhuYuanQingDan",
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
        title: "工号",
        align: "center",
        dataIndex: "gongHao",
        key: "gongHao"
      },
      {
        title: "预交款现金",
        align: "center",
        dataIndex: "yuJiaoKuanXianJin",
        key: "yuJiaoKuanXianJin"
      },
      {
        title: "预交款支票",
        align: "center",
        dataIndex: "yuJiaoKuanZhiPiao",
        key: "yuJiaoKuanZhiPiao"
      },
      {
        title: "预交款银行卡",
        align: "center",
        dataIndex: "yuJiaoKuanYinHangKa",
        key: "yuJiaoKuanYinHangKa"
      },
      {
        title: "预交款其他",
        align: "center",
        dataIndex: "yuJiaoKuanQiTa",
        key: "yuJiaoKuanQiTa"
      },
      {
        title: "出院现金",
        align: "center",
        dataIndex: "chuYuanXianJin",
        key: "chuYuanXianJin"
      },
      {
        title: "出院支票",
        align: "center",
        dataIndex: "chuYuanZhiPiao",
        key: "chuYuanZhiPiao"
      },
      {
        title: "出院银行卡",
        align: "center",
        dataIndex: "chuYuanYinHangKa",
        key: "chuYuanYinHangKa"
      },
      {
        title: "现金合计",
        align: "center",
        dataIndex: "xianJinHeJi",
        key: "xianJinHeJi"
      },
      {
        title: "支票合计",
        align: "center",
        dataIndex: "zhiPiaoHeJi",
        key: "zhiPiaoHeJi"
      },
      {
        title: "银行卡合计",
        align: "center",
        dataIndex: "jinHangKaHeJi",
        key: "jinHangKaHeJi"
      }
    ]
  ],
  ["ZhuYuanRiBao", []],
  [
    "LinChuangJianYan",
    [
      {
        title: "确认日期",
        align: "center",
        dataIndex: "queRenRiQi",
        key: "queRenRiQi"
      },
      {
        title: "样本类型",
        align: "center",
        dataIndex: "yangBenLeiXinng",
        key: "yangBenLeiXinng"
      },
      {
        title: "标本日期",
        align: "center",
        dataIndex: "yangBenRiQi",
        key: "yangBenRiQi"
      },
      {
        title: "临床诊断",
        align: "center",
        dataIndex: "linChuangZhenDuan",
        key: "linChuangZhenDuan"
      },
      {
        title: "确认耗时(分钟)",
        align: "center",
        dataIndex: "queRenHaoShi",
        key: "queRenHaoShi"
      }
    ]
  ],
  [
    "YuanBingQuFeiYong",
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
        title: "病区",
        align: "center",
        dataIndex: "bingQu",
        key: "bingQu"
      },
      {
        title: "在院人数",
        align: "center",
        dataIndex: "zaiYuanRenShu",
        key: "zaiYuanRenShu"
      },
      {
        title: "预交款",
        align: "center",
        dataIndex: "yuJiaoKuan",
        key: "yuJiaoKuan"
      },
      {
        title: "其中支票",
        align: "center",
        dataIndex: "qiZhongZhiPiao",
        key: "qiZhongZhiPiao"
      },
      {
        title: "西药费",
        align: "center",
        dataIndex: "xiYaoFei",
        key: "xiYaoFei"
      },
      {
        title: "中草药",
        align: "center",
        dataIndex: "zhongCaoYao",
        key: "zhongCaoYao"
      },
      {
        title: "中成药",
        align: "center",
        dataIndex: "zhongChengYao",
        key: "zhongChengYao"
      },
      {
        title: "床位费",
        align: "center",
        dataIndex: "chuangWeiFei",
        key: "chuangWeiFei"
      },
      {
        title: "诊疗费",
        align: "center",
        dataIndex: "zhenLiaoFei",
        key: "zhenLiaoFei"
      },
      {
        title: "检查费",
        align: "center",
        dataIndex: "jianChaFei",
        key: "jianChaFei"
      },
      {
        title: "B超费",
        align: "center",
        dataIndex: "bChaoFei",
        key: "bChaoFei"
      },
      {
        title: "心电图费",
        align: "center",
        dataIndex: "xinDianTuFei",
        key: "xinDianTuFei"
      },
      {
        title: "放射费",
        align: "center",
        dataIndex: "fangSheFei",
        key: "fangSheFei"
      },
      {
        title: "CT费",
        align: "center",
        dataIndex: "ctFei",
        key: "ctFei"
      },
      {
        title: "MR费",
        align: "center",
        dataIndex: "mrFei",
        key: "mrFei"
      },
      {
        title: "化验费",
        align: "center",
        dataIndex: "huaYanFei",
        key: "huaYanFei"
      },
      {
        title: "治疗费",
        align: "center",
        dataIndex: "zhiLiaoFei",
        key: "zhiLiaoFei"
      },
      {
        title: "注射费",
        align: "center",
        dataIndex: "zhuSheFei",
        key: "zhuSheFei"
      },
      {
        title: "输氧费",
        align: "center",
        dataIndex: "shuYangFei",
        key: "shuYangFei"
      },
      {
        title: "手术费",
        align: "center",
        dataIndex: "shouShuFei",
        key: "shouShuFei"
      },
      {
        title: "接生费",
        align: "center",
        dataIndex: "jieShengFei",
        key: "jieShengFei"
      },
      {
        title: "护理费",
        align: "center",
        dataIndex: "huLiFei",
        key: "huLiFei"
      },
      {
        title: "材料费",
        align: "center",
        dataIndex: "caiLiaoFei",
        key: "caiLiaoFei"
      },
      {
        title: "输血费",
        align: "center",
        dataIndex: "shuXueFei",
        key: "shuXueFei"
      },
      {
        title: "空调费",
        align: "center",
        dataIndex: "kongTiaoFei",
        key: "kongTiaoFei"
      },
      {
        title: "救护车费",
        align: "center",
        dataIndex: "jiuHuCheFei",
        key: "jiuHuCheFei"
      },
      {
        title: "伙食费",
        align: "center",
        dataIndex: "huoShiFei",
        key: "huoShiFei"
      },
      {
        title: "煎药费",
        align: "center",
        dataIndex: "jianYaoFei",
        key: "jianYaoFei"
      },
      {
        title: "陪客费",
        align: "center",
        dataIndex: "peiKeFei",
        key: "peiKeFei"
      },
      {
        title: "其它费",
        align: "center",
        dataIndex: "qiTaFei",
        key: "qiTaFei"
      },
      {
        title: "合  计",
        align: "center",
        dataIndex: "heJi",
        key: "heJi"
      }
    ]
  ],
  [
    "BingQuChuYuanYingShou",
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
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },

      {
        title: "单位名称",
        align: "center",
        dataIndex: "danWeiMingCheng",
        key: "danWeiMingCheng"
      },
      {
        title: "姓名",
        align: "center",
        dataIndex: "xingMing",
        key: "xingMing"
      },
      {
        title: "病区",
        align: "center",
        dataIndex: "bingQu",
        key: "bingQu"
      },
      {
        title: "科室",
        align: "center",
        dataIndex: "keShi",
        key: "keShi"
      },
      {
        title: "医疗费",
        align: "center",
        dataIndex: "yiLiaoFei",
        key: "yiLiaoFei"
      }
    ]
  ]
]);
export default NormalTableTitleConfig;
