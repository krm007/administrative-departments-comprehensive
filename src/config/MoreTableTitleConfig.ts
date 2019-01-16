import { ColumnProps } from "antd/lib/table";
import { hejiColumns } from "../util/tableRender";

/**
 * 一个页面多个表格的表头配置文件
 */
const MoreTableTitleConfig: Map<string, Array<ColumnProps<any>>> = new Map<
  string,
  Array<ColumnProps<any>>
>([
  [
    "AnYaoPinLeiXingTongJi",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou",
        render: (value: string, row: any, index) =>
          hejiColumns(row.fangShiMingCheng, 0, value)
      },
      {
        title: "日期:按月",
        align: "center",
        dataIndex: "riQi",
        key: "riQi",
        render: (value: string, row: any, index) =>
          hejiColumns(row.fangShiMingCheng, 0, value)
      },
      {
        title: "库房",
        align: "center",
        dataIndex: "kuFang",
        key: "kuFang",
        render: (value: string, row: any, index) =>
          hejiColumns(row.fangShiMingCheng, 0, value)
      },
      {
        title: "分类名称",
        align: "center",
        dataIndex: "feiLeiMingCheng",
        key: "feiLeiMingCheng",
        render: (value: string, row: any, index) =>
          hejiColumns(row.fangShiMingCheng, 0, value)
      },
      {
        title: "方式名称",
        align: "center",
        dataIndex: "fangShiMingCheng",
        key: "fangShiMingCheng",
        render: (value: string, row: any, index) => hejiColumns(value, 5)
      },
      {
        title: "西药",
        align: "center",
        dataIndex: "xiYao",
        key: "xiYao"
      },
      {
        title: "成药",
        align: "center",
        dataIndex: "chengYao",
        key: "chengYao"
      },
      {
        title: "卫材",
        align: "center",
        dataIndex: "weiCai",
        key: "weiCai"
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
    "AnZhangBoLeiXingTongJi",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou",
        render: (value: string, row: any, index) =>
          hejiColumns(row.fangShiMingCheng, 0, value)
      },
      {
        title: "日期:按月",
        align: "center",
        dataIndex: "riQi",
        key: "riQi",
        render: (value: string, row: any, index) =>
          hejiColumns(row.fangShiMingCheng, 0, value)
      },
      {
        title: "库房",
        align: "center",
        dataIndex: "kuFang",
        key: "kuFang",
        render: (value: string, row: any, index) =>
          hejiColumns(row.fangShiMingCheng, 0, value)
      },
      {
        title: "分类名称",
        align: "center",
        dataIndex: "fenLeiMingCheng",
        key: "fenLeiMingCheng",
        render: (value: string, row: any, index) =>
          hejiColumns(row.fangShiMingCheng, 0, value)
      },
      {
        title: "方式名称",
        align: "center",
        dataIndex: "fangShiMingCheng",
        key: "fangShiMingCheng",
        render: (value: string, row: any, index) => hejiColumns(value, 5)
      },
      {
        title: "西药",
        align: "center",
        dataIndex: "xiYao",
        key: "xiYao"
      },
      {
        title: "成药",
        align: "center",
        dataIndex: "chengYao",
        key: "chengYao"
      },
      {
        title: "氧气",
        align: "center",
        dataIndex: "yangQi",
        key: "yangQi"
      },
      {
        title: "卫材",
        align: "center",
        dataIndex: "weiCai",
        key: "weiCai"
      },
      {
        title: "合计金额",
        align: "center",
        dataIndex: "heJiJinE",
        key: "heJiJinE"
      }
    ]
  ],
  /** 传染病 */
  [
    "FaDingChuanRanTongJi",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
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
        title: "本年累计数",
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
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
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
        title: "去年同季报告数",
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
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
      },
      {
        title: "地区",
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
  /** 慢病 */
  [
    "HisZhongDianManXingBing",
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
        title: "疾病三级预警人数",
        align: "center",
        children: [
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
          }
        ]
      },
      {
        title: "高血压",
        align: "center",
        children: [
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
          }
        ]
      },
      {
        title: "冠心病",
        align: "center",
        children: [
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
          }
        ]
      },
      {
        title: "脑卒中",
        align: "center",
        children: [
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
          }
        ]
      },
      {
        title: "糖尿病",
        align: "center",
        children: [
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
          }
        ]
      },
      {
        title: "慢阻肺",
        align: "center",
        children: [
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
          }
        ]
      },
      {
        title: "恶性肿瘤",
        align: "center",
        children: [
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
          }
        ]
      },
      {
        title: "精神病",
        align: "center",
        children: [
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
      }
    ]
  ],
  [
    "ZhongDianManXingBing",
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
        title: "心脑血管病",
        align: "center",
        children: [
          {
            title: "高血压",
            align: "center",
            children: [
              {
                title: "本季发病数",
                align: "center",
                dataIndex: "xnxgGxyBenJiFaBingShu",
                key: "xnxgGxyBenJiFaBingShu"
              },
              {
                title: "新投犯带病入监数",
                align: "center",
                dataIndex: "xnxgGxyXinFanDaiBingShu",
                key: "xnxgGxyXinFanDaiBingShu"
              },
              {
                title: "季末患病数",
                align: "center",
                dataIndex: "xnxgGxyJiMoHuanBingShu",
                key: "xnxgGxyJiMoHuanBingShu"
              },
              {
                title: "本年累计数",
                align: "center",
                dataIndex: "xnxgGxyBenNianLeiJiShu",
                key: "xnxgGxyBenNianLeiJiShu"
              },
              {
                title: "本季死亡数",
                align: "center",
                dataIndex: "xnxgGxyBenJiSiWangShu",
                key: "xnxgGxyBenJiSiWangShu"
              }
            ]
          },
          {
            title: "冠心病",
            align: "center",
            children: [
              {
                title: "本季发病数",
                align: "center",
                dataIndex: "xnxgGxbBenJiFaBingShu",
                key: "xnxgGxbBenJiFaBingShu"
              },
              {
                title: "新投犯带病入监数",
                align: "center",
                dataIndex: "xnxgGxbXinFanDaiBingShu",
                key: "xnxgGxbXinFanDaiBingShu"
              },
              {
                title: "季末患病数",
                align: "center",
                dataIndex: "xnxgGxbJiMoHuanBingShu",
                key: "xnxgGxbJiMoHuanBingShu"
              },
              {
                title: "本年累计数",
                align: "center",
                dataIndex: "xnxgGxbBenNianLeiJiShu",
                key: "xnxgGxbBenNianLeiJiShu"
              },
              {
                title: "本季死亡数",
                align: "center",
                dataIndex: "xnxgGxbBenJiSiWangShu",
                key: "xnxgGxbBenJiSiWangShu"
              }
            ]
          },
          {
            title: "脑卒中",
            align: "center",
            children: [
              {
                title: "本季发病数",
                align: "center",
                dataIndex: "xnxgNzzBenJiFaBingShu",
                key: "xnxgNzzBenJiFaBingShu"
              },
              {
                title: "新投犯带病入监数",
                align: "center",
                dataIndex: "xnxgNzzXinFanDaiBingShu",
                key: "xnxgNzzXinFanDaiBingShu"
              },
              {
                title: "季末患病数",
                align: "center",
                dataIndex: "xnxgNzzJiMoHuanBingShu",
                key: "xnxgNzzJiMoHuanBingShu"
              },
              {
                title: "本年累计数",
                align: "center",
                dataIndex: "xnxgNzzBenNianLeiJiShu",
                key: "xnxgNzzBenNianLeiJiShu"
              },
              {
                title: "本季死亡数",
                align: "center",
                dataIndex: "xnxgNzzBenJiSiWangShu",
                key: "xnxgNzzBenJiSiWangShu"
              }
            ]
          },
          {
            title: "其他",
            align: "center",
            children: [
              {
                title: "本季发病数",
                align: "center",
                dataIndex: "xnxgQtBenJiFaBingShu",
                key: "xnxgQtBenJiFaBingShu"
              },
              {
                title: "新投犯带病入监数",
                align: "center",
                dataIndex: "xnxgQtXinFanDaiBingShu",
                key: "xnxgQtXinFanDaiBingShu"
              },
              {
                title: "季末患病数",
                align: "center",
                dataIndex: "xnxgQtJiMoHuanBingShu",
                key: "xnxgQtJiMoHuanBingShu"
              },
              {
                title: "本年累计数",
                align: "center",
                dataIndex: "xnxgQtBenNianLeiJiShu",
                key: "xnxgQtBenNianLeiJiShu"
              },
              {
                title: "本季死亡数",
                align: "center",
                dataIndex: "xnxgQtBenJiSiWangShu",
                key: "xnxgQtBenJiSiWangShu"
              }
            ]
          }
        ]
      },
      {
        title: "内分泌营养代谢疾病",
        align: "center",
        children: [
          {
            title: "糖尿病",
            align: "center",
            children: [
              {
                title: "本季发病数",
                align: "center",
                dataIndex: "nfmTnbBenJiFaBingShu",
                key: "nfmTnbBenJiFaBingShu"
              },
              {
                title: "新投犯带病入监数",
                align: "center",
                dataIndex: "nfmTnbXinFanDaiBingShu",
                key: "nfmTnbXinFanDaiBingShu"
              },
              {
                title: "季末患病数",
                align: "center",
                dataIndex: "nfmTnbJiMoHuanBingShu",
                key: "nfmTnbJiMoHuanBingShu"
              },
              {
                title: "本年累计数",
                align: "center",
                dataIndex: "nfmTnbBenNianLeiJiShu",
                key: "nfmTnbBenNianLeiJiShu"
              },
              {
                title: "本季死亡数",
                align: "center",
                dataIndex: "nfmTnbBenJiSiWangShu",
                key: "nfmTnbBenJiSiWangShu"
              }
            ]
          },
          {
            title: "其他",
            align: "center",
            children: [
              {
                title: "本季发病数",
                align: "center",
                dataIndex: "nfmQtBenJiFaBingShu",
                key: "nfmQtBenJiFaBingShu"
              },
              {
                title: "新投犯带病入监数",
                align: "center",
                dataIndex: "nfmQtXinFanDaiBingShu",
                key: "nfmQtXinFanDaiBingShu"
              },
              {
                title: "季末患病数",
                align: "center",
                dataIndex: "nfmQtJiMoHuanBingShu",
                key: "nfmQtJiMoHuanBingShu"
              },
              {
                title: "本年累计数",
                align: "center",
                dataIndex: "nfmQtBenNianLeiJiShu",
                key: "nfmQtBenNianLeiJiShu"
              },
              {
                title: "本季死亡数",
                align: "center",
                dataIndex: "nfmQtBenJiSiWangShu",
                key: "nfmQtBenJiSiWangShu"
              }
            ]
          }
        ]
      },
      {
        title: "精神疾病",
        align: "center",
        children: [
          {
            title: "本季发病数",
            align: "center",
            dataIndex: "jsjbBenJiFaBingShu",
            key: "jsjbBenJiFaBingShu"
          },
          {
            title: "新投犯带病入监数",
            align: "center",
            dataIndex: "jsjbXinFanDaiBingShu",
            key: "jsjbXinFanDaiBingShu"
          },
          {
            title: "季末患病数",
            align: "center",
            dataIndex: "jsjbJiMoHuanBingShu",
            key: "jsjbJiMoHuanBingShu"
          },
          {
            title: "本年累计数",
            align: "center",
            dataIndex: "jsjbBenNianLeiJiShu",
            key: "jsjbBenNianLeiJiShu"
          },
          {
            title: "本季死亡数",
            align: "center",
            dataIndex: "jsjbBenJiSiWangShu",
            key: "jsjbBenJiSiWangShu"
          }
        ]
      },
      {
        title: "运动系统疾病",
        align: "center",
        children: [
          {
            title: "本季发病数",
            align: "center",
            dataIndex: "ydxtjbBenJiFaBingShu",
            key: "ydxtjbBenJiFaBingShu"
          },
          {
            title: "新投犯带病入监数",
            align: "center",
            dataIndex: "ydxtjbXinFanDaiBingShu",
            key: "ydxtjbXinFanDaiBingShu"
          },
          {
            title: "季末患病数",
            align: "center",
            dataIndex: "ydxtjbJiMoHuanBingShu",
            key: "ydxtjbJiMoHuanBingShu"
          },
          {
            title: "本年累计数",
            align: "center",
            dataIndex: "ydxtjbBenNianLeiJiShu",
            key: "ydxtjbBenNianLeiJiShu"
          },
          {
            title: "本季死亡数",
            align: "center",
            dataIndex: "ydxtjbBenJiSiWangShu",
            key: "ydxtjbBenJiSiWangShu"
          }
        ]
      },
      {
        title: "消化系统疾病",
        align: "center",
        children: [
          {
            title: "本季发病数",
            align: "center",
            dataIndex: "xhxtjbBenJiFaBingShu",
            key: "xhxtjbBenJiFaBingShu"
          },
          {
            title: "新投犯带病入监数",
            align: "center",
            dataIndex: "xhxtjbXinFanDaiBingShu",
            key: "xhxtjbXinFanDaiBingShu"
          },
          {
            title: "季末患病数",
            align: "center",
            dataIndex: "xhxtjbJiMoHuanBingShu",
            key: "xhxtjbJiMoHuanBingShu"
          },
          {
            title: "本年累计数",
            align: "center",
            dataIndex: "xhxtjbBenNianLeiJiShu",
            key: "xhxtjbBenNianLeiJiShu"
          },
          {
            title: "本季死亡数",
            align: "center",
            dataIndex: "xhxtjbBenJiSiWangShu",
            key: "xhxtjbBenJiSiWangShu"
          }
        ]
      },
      {
        title: "呼吸系统疾病",
        align: "center",
        children: [
          {
            title: "本季发病数",
            align: "center",
            dataIndex: "hxxtjbBenJiFaBingShu",
            key: "hxxtjbBenJiFaBingShu"
          },
          {
            title: "新投犯带病入监数",
            align: "center",
            dataIndex: "hxxtjbXinFanDaiBingShu",
            key: "hxxtjbXinFanDaiBingShu"
          },
          {
            title: "季末患病数",
            align: "center",
            dataIndex: "hxxtjbJiMoHuanBingShu",
            key: "hxxtjbJiMoHuanBingShu"
          },
          {
            title: "本年累计数",
            align: "center",
            dataIndex: "hxxtjbBenNianLeiJiShu",
            key: "hxxtjbBenNianLeiJiShu"
          },
          {
            title: "本季死亡数",
            align: "center",
            dataIndex: "hxxtjbBenJiSiWangShu",
            key: "hxxtjbBenJiSiWangShu"
          }
        ]
      },
      {
        title: "泌尿生殖系统疾病",
        align: "center",
        children: [
          {
            title: "本季发病数",
            align: "center",
            dataIndex: "mnxtjbBenJiFaBingShu",
            key: "mnxtjbBenJiFaBingShu"
          },
          {
            title: "新投犯带病入监数",
            align: "center",
            dataIndex: "mnxtjbXinFanDaiBingShu",
            key: "mnxtjbXinFanDaiBingShu"
          },
          {
            title: "季末患病数",
            align: "center",
            dataIndex: "mnxtjbJiMoHuanBingShu",
            key: "mnxtjbJiMoHuanBingShu"
          },
          {
            title: "本年累计数",
            align: "center",
            dataIndex: "mnxtjbBenNianLeiJiShu",
            key: "mnxtjbBenNianLeiJiShu"
          },
          {
            title: "本季死亡数",
            align: "center",
            dataIndex: "mnxtjbBenJiSiWangShu",
            key: "mnxtjbBenJiSiWangShu"
          }
        ]
      },
      {
        title: "神经系统疾病",
        align: "center",
        children: [
          {
            title: "本季发病数",
            align: "center",
            dataIndex: "sjxtjbBenJiFaBingShu",
            key: "sjxtjbBenJiFaBingShu"
          },
          {
            title: "新投犯带病入监数",
            align: "center",
            dataIndex: "sjxtjbXinFanDaiBingShu",
            key: "sjxtjbXinFanDaiBingShu"
          },
          {
            title: "季末患病数",
            align: "center",
            dataIndex: "sjxtjbJiMoHuanBingShu",
            key: "sjxtjbJiMoHuanBingShu"
          },
          {
            title: "本年累计数",
            align: "center",
            dataIndex: "sjxtjbBenNianLeiJiShu",
            key: "sjxtjbBenNianLeiJiShu"
          },
          {
            title: "本季死亡数",
            align: "center",
            dataIndex: "sjxtjbBenJiSiWangShu",
            key: "sjxtjbBenJiSiWangShu"
          }
        ]
      },
      {
        title: "血液造血系统疾病",
        align: "center",
        children: [
          {
            title: "本季发病数",
            align: "center",
            dataIndex: "xyzxxtjbBenJiFaBingShu",
            key: "xyzxxtjbBenJiFaBingShu"
          },
          {
            title: "新投犯带病入监数",
            align: "center",
            dataIndex: "xyzxxtjbXinFanDaiBingShu",
            key: "xyzxxtjbXinFanDaiBingShu"
          },
          {
            title: "季末患病数",
            align: "center",
            dataIndex: "xyzxxtjbJiMoHuanBingShu",
            key: "xyzxxtjbJiMoHuanBingShu"
          },
          {
            title: "本年累计数",
            align: "center",
            dataIndex: "xyzxxtjbBenNianLeiJiShu",
            key: "xyzxxtjbBenNianLeiJiShu"
          },
          {
            title: "本季死亡数",
            align: "center",
            dataIndex: "xyzxxtjbBenJiSiWangShu",
            key: "xyzxxtjbBenJiSiWangShu"
          }
        ]
      },
      {
        title: "恶性肿瘤",
        align: "center",
        children: [
          {
            title: "本季发病数",
            align: "center",
            dataIndex: "exzlBenJiFaBingShu",
            key: "exzlBenJiFaBingShu"
          },
          {
            title: "新投犯带病入监数",
            align: "center",
            dataIndex: "exzlXinFanDaiBingShu",
            key: "exzlXinFanDaiBingShu"
          },
          {
            title: "季末患病数",
            align: "center",
            dataIndex: "exzlJiMoHuanBingShu",
            key: "exzlJiMoHuanBingShu"
          },
          {
            title: "本年累计数",
            align: "center",
            dataIndex: "exzlBenNianLeiJiShu",
            key: "exzlBenNianLeiJiShu"
          },
          {
            title: "本季死亡数",
            align: "center",
            dataIndex: "exzlBenJiSiWangShu",
            key: "exzlBenJiSiWangShu"
          }
        ]
      },
      {
        title: "免疫风湿性疾病",
        align: "center",
        children: [
          {
            title: "本季发病数",
            align: "center",
            dataIndex: "myfsxjbBenJiFaBingShu",
            key: "myfsxjbBenJiFaBingShu"
          },
          {
            title: "新投犯带病入监数",
            align: "center",
            dataIndex: "myfsxjbXinFanDaiBingShu",
            key: "myfsxjbXinFanDaiBingShu"
          },
          {
            title: "季末患病数",
            align: "center",
            dataIndex: "myfsxjbJiMoHuanBingShu",
            key: "myfsxjbJiMoHuanBingShu"
          },
          {
            title: "本年累计数",
            align: "center",
            dataIndex: "myfsxjbBenNianLeiJiShu",
            key: "myfsxjbBenNianLeiJiShu"
          },
          {
            title: "本季死亡数",
            align: "center",
            dataIndex: "myfsxjbBenJiSiWangShu",
            key: "myfsxjbBenJiSiWangShu"
          }
        ]
      },
      {
        title: "其他",
        align: "center",
        children: [
          {
            title: "本季发病数",
            align: "center",
            dataIndex: "qtBenJiFaBingShu",
            key: "qtBenJiFaBingShu"
          },
          {
            title: "新投犯带病入监数",
            align: "center",
            dataIndex: "qtXinFanDaiBingShu",
            key: "qtXinFanDaiBingShu"
          },
          {
            title: "季末患病数",
            align: "center",
            dataIndex: "qtJiMoHuanBingShu",
            key: "qtJiMoHuanBingShu"
          },
          {
            title: "本年累计数",
            align: "center",
            dataIndex: "qtBenNianLeiJiShu",
            key: "qtBenNianLeiJiShu"
          },
          {
            title: "本季死亡数",
            align: "center",
            dataIndex: "qtBenJiSiWangShu",
            key: "qtBenJiSiWangShu"
          }
        ]
      },
      {
        title: "合计",
        align: "center",
        children: [
          {
            title: "本季发病数",
            align: "center",
            dataIndex: "hjBenJiFaBingShu",
            key: "hjBenJiFaBingShu"
          },
          {
            title: "新投犯带病入监数",
            align: "center",
            dataIndex: "hjXinFanDaiBingShu",
            key: "hjXinFanDaiBingShu"
          },
          {
            title: "季末患病数",
            align: "center",
            dataIndex: "hjJiMoHuanBingShu",
            key: "hjJiMoHuanBingShu"
          },
          {
            title: "本年累计数",
            align: "center",
            dataIndex: "hjBenNianLeiJiShu",
            key: "hjBenNianLeiJiShu"
          },
          {
            title: "本季死亡数",
            align: "center",
            dataIndex: "hjBenJiSiWangShu",
            key: "hjBenJiSiWangShu"
          }
        ]
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
      }
    ]
  ],
  /** 远程医疗 */
  [
    "YuanChengHuiZhen",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
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
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
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
  /** 远程影像 */
  [
    "QuYuYingXiangTongJi",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "机构名称",
        align: "center",
        dataIndex: "jiGouMingCheng",
        key: "jiGouMingCheng"
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
      },
      {
        title: "区域检查申请总数",
        align: "center",
        dataIndex: "qyjcShenQingZongShu",
        key: "qyjcShenQingZongShu"
      },
      {
        title: "区域影像检查总数",
        align: "center",
        dataIndex: "qyyxJianChaZongShu",
        key: "qyyxJianChaZongShu"
      },
      {
        title: "区域请求远程诊断总数",
        align: "center",
        dataIndex: "qyqqycZhenDuanZongShu",
        key: "qyqqycZhenDuanZongShu"
      },
      {
        title: "远程诊断报告总数",
        align: "center",
        dataIndex: "yczdBaoGaoZongShu",
        key: "yczdBaoGaoZongShu"
      },
      {
        title: "区域报告总数",
        align: "center",
        dataIndex: "quYuBaoGaoZongShu",
        key: "quYuBaoGaoZongShu"
      },
      {
        title: "区域阳性率比例",
        align: "center",
        dataIndex: "quYuYangXingLvBiLi",
        key: "quYuYangXingLvBiLi"
      }
    ]
  ],
  [
    "QuYuSheBeiTongJi",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
      },
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
        title: "拍片数量",
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
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
      },
      {
        title: "机构名称",
        align: "center",
        dataIndex: "jiGouMingCheng",
        key: "jiGouMingCheng"
      },
      {
        title: "医院/医生",
        align: "center",
        dataIndex: "yiYuanYiSheng",
        key: "yiYuanYiSheng"
      },
      {
        title: "报告数量",
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
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "机构名称",
        align: "center",
        dataIndex: "jiGouMingCheng",
        key: "jiGouMingCheng"
      },
      {
        title: "报告医生",
        align: "center",
        dataIndex: "baoGaoYiSheng",
        key: "baoGaoYiSheng"
      },
      {
        title: "DX",
        align: "center",
        dataIndex: "dx",
        key: "dx"
      },
      {
        title: "CR",
        align: "center",
        dataIndex: "cr",
        key: "cr"
      },
      {
        title: "DR",
        align: "center",
        dataIndex: "dr",
        key: "dr"
      },
      {
        title: "报告日期时间",
        align: "center",
        dataIndex: "baoGaoRiQiShiJian",
        key: "baoGaoRiQiShiJian"
      }
    ]
  ],
  /** 检验查询???? */
  [
    "JianYanBiaoBenTongJi",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
      },
      {
        title: "指标值",
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
  /** 挂号分账 */
  [
    "MenZhenHuiZongGeRen",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
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
    "MenZhenGuaZhangHuiZong",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou",
        render: (value: string, row: any, index) =>
            hejiColumns(row.danWei, 0, value)
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi",
        render: (value: string, row: any, index) =>
            hejiColumns(row.danWei, 0, value)
      },
      {
        title: "单位",
        align: "center",
        dataIndex: "danWei",
        key: "danWei",
        render: (value: string, row: any, index) =>
            hejiColumns(value, 3)
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
    "MenZhenHuiZongYue",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
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
    "GuaHaoRiBaoGeRenHuiZong",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
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
    "MenZhenYeWuShouRu",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
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
  /** 财务分账 */
  [
    "YuanBingQuFeiYong",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
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
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou",
        render: (value: string, row: any, index) =>
            hejiColumns(row.danWeiMingCheng, 0, value)
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi",
        render: (value: string, row: any, index) =>
            hejiColumns(row.danWeiMingCheng, 0, value)
      },
      {
        title: "单位名称",
        align: "center",
        dataIndex: "danWeiMingCheng",
        key: "danWeiMingCheng",
        render: (value: string, row: any, index) =>
            hejiColumns(value, 6)
      },
      {
        title: "姓名",
        align: "center",
        dataIndex: "xingMing",
        key: "xingMing",
        render: (value: string, row: any, index) =>
            hejiColumns(row.danWeiMingCheng, 0, value)
      },
      {
        title: "病区",
        align: "center",
        dataIndex: "bingQu",
        key: "bingQu",
        render: (value: string, row: any, index) =>
            hejiColumns(row.danWeiMingCheng, 0, value)
      },
      {
        title: "科室",
        align: "center",
        dataIndex: "keShi",
        key: "keShi",
        render: (value: string, row: any, index) =>
            hejiColumns(row.danWeiMingCheng, 0, value)
      },
      {
        title: "医疗费",
        align: "center",
        dataIndex: "yiLiaoFei",
        key: "yiLiaoFei"
      }
    ]
  ],
  [
    "MenZhenKeShiFeiYong",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
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
    "MenZhenKaiDanKeShiFei",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
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
    "RiBaoHuiZongChaXun",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
      },
      {
        title: "现金",
        align: "center",
        dataIndex: "xianJin",
        key: "xianJin"
      },
      {
        title: "支票",
        align: "center",
        dataIndex: "zhiPiao",
        key: "zhiPiao"
      },
      {
        title: "银联卡",
        align: "center",
        dataIndex: "yinLianKa",
        key: "yinLianKa"
      },
      {
        title: "微信",
        align: "center",
        dataIndex: "weiXin",
        key: "weiXin"
      },
      {
        title: "支付宝",
        align: "center",
        dataIndex: "zhiFuBao",
        key: "zhiFuBao"
      },
      {
        title: "减免金额",
        align: "center",
        dataIndex: "jianMianJinE",
        key: "jianMianJinE"
      },
      {
        title: "退现金",
        align: "center",
        dataIndex: "tuiXianJin",
        key: "tuiXianJin"
      },
      {
        title: "退非现金",
        align: "center",
        dataIndex: "tuiFeiXianJin",
        key: "tuiFeiXianJin"
      },
      {
        title: "市民卡",
        align: "center",
        dataIndex: "shiMinKa",
        key: "shiMinKa"
      },
      {
        title: "省医保",
        align: "center",
        dataIndex: "shengYiBao",
        key: "shengYiBao"
      },
      {
        title: "普通省医保",
        align: "center",
        dataIndex: "puTongShengYiBao",
        key: "puTongShengYiBao"
      },
      {
        title: "两费离休离保",
        align: "center",
        dataIndex: "liangFeiLiXiuLiBao",
        key: "liangFeiLiXiuLiBao"
      },
      {
        title: "公费离休离保",
        align: "center",
        dataIndex: "gongFeiLiXiuLiBao",
        key: "gongFeiLiXiuLiBao"
      },
      {
        title: "子女统筹",
        align: "center",
        dataIndex: "ziNvTongChou",
        key: "ziNvTongChou"
      },
      {
        title: "行业离休",
        align: "center",
        dataIndex: "hangYeLiXiu",
        key: "hangYeLiXiu"
      },
      {
        title: "市医保",
        align: "center",
        dataIndex: "shiYiBao",
        key: "shiYiBao"
      },
      {
        title: "普通市医保",
        align: "center",
        dataIndex: "puTongShiYiBao",
        key: "puTongShiYiBao"
      },
      {
        title: "两费离休",
        align: "center",
        dataIndex: "lianagFeiLiXiu",
        key: "lianagFeiLiXiu"
      },
      {
        title: "子女统筹",
        align: "center",
        dataIndex: "sybZiNvtongChou",
        key: "sybZiNvtongChou"
      },
      {
        title: "省一卡通",
        align: "center",
        dataIndex: "shengYiKaTong",
        key: "shengYiKaTong"
      },
      {
        title: "公费重保（省）",
        align: "center",
        dataIndex: "gongFeiZhongBao",
        key: "gongFeiZhongBao"
      },
      {
        title: "省双十",
        align: "center",
        dataIndex: "shengShuangShi",
        key: "shengShuangShi"
      },
      {
        title: "冲预交款",
        align: "center",
        dataIndex: "chongYuJiaoKuan",
        key: "chongYuJiaoKuan"
      },
      {
        title: "优惠金额",
        align: "center",
        dataIndex: "youFeiJinE",
        key: "youFeiJinE"
      },
      {
        title: "挂账退费",
        align: "center",
        dataIndex: "guaZhangTuiFei",
        key: "guaZhangTuiFei"
      },
      {
        title: "挂账",
        align: "center",
        dataIndex: "guaZhang",
        key: "guaZhang"
      },
      {
        title: "借方合计",
        align: "center",
        dataIndex: "jieFangHeJi",
        key: "jieFangHeJi"
      },
      {
        title: "门诊药品小计",
        align: "center",
        dataIndex: "wenZhenYaoPinXiaoJi",
        key: "wenZhenYaoPinXiaoJi"
      },
      {
        title: "西药费",
        align: "center",
        dataIndex: "xiYaoFei",
        key: "xiYaoFei"
      },
      {
        title: "中成药费",
        align: "center",
        dataIndex: "zhongChengYaoFei",
        key: "zhongChengYaoFei"
      },
      {
        title: "中草药费",
        align: "center",
        dataIndex: "zhongCaoYaoFei",
        key: "zhongCaoYaoFei"
      },
      {
        title: "门诊医疗小计",
        align: "center",
        dataIndex: "menZhenYiLiaoXiaoJi",
        key: "menZhenYiLiaoXiaoJi"
      },
      {
        title: "挂号费",
        align: "center",
        dataIndex: "guaHaoFei",
        key: "guaHaoFei"
      },
      {
        title: "检查费",
        align: "center",
        dataIndex: "jianChaFei",
        key: "jianChaFei"
      },
      {
        title: "CT费",
        align: "center",
        dataIndex: "ctFei",
        key: "ctFei"
      },
      {
        title: "磁共振",
        align: "center",
        dataIndex: "ciGongZhen",
        key: "ciGongZhen"
      },
      {
        title: "治疗费",
        align: "center",
        dataIndex: "zhiLiaoFei",
        key: "zhiLiaoFei"
      },
      {
        title: "放射费",
        align: "center",
        dataIndex: "fangSheFei",
        key: "fangSheFei"
      },
      {
        title: "放疗费",
        align: "center",
        dataIndex: "fangLiaoFei",
        key: "fangLiaoFei"
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
        title: "其它",
        align: "center",
        dataIndex: "qiTa",
        key: "qiTa"
      },
      {
        title: "诊疗费",
        align: "center",
        dataIndex: "zhenLiaoFei",
        key: "zhenLiaoFei"
      },
      {
        title: "材料费",
        align: "center",
        dataIndex: "caiLiaoFei",
        key: "caiLiaoFei"
      },
      {
        title: "磁卡费",
        align: "center",
        dataIndex: "ciKaFei",
        key: "ciKaFei"
      },
      {
        title: "病历卡",
        align: "center",
        dataIndex: "bingLiKa",
        key: "bingLiKa"
      },
      {
        title: "预交款",
        align: "center",
        dataIndex: "yuJiaoKuan",
        key: "yuJiaoKuan"
      },
      {
        title: "贷方合计",
        align: "center",
        dataIndex: "daiFangHeJi",
        key: "daiFangHeJi"
      }
    ]
  ],
  [
    "MenZhenHuiZongQingDan",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
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
    "ZhuYuanRiBao",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
      },
      {
        title: "冲预交款",
        align: "center",
        dataIndex: "chongYuJiaoKuan",
        key: "chongYuJiaoKuan"
      },
      {
        title: "病人预交款",
        align: "center",
        dataIndex: "bingRenYuJiaoKuan",
        key: "bingRenYuJiaoKuan"
      },
      {
        title: "退预交款",
        align: "center",
        dataIndex: "tuiYuJiaoKuan",
        key: "tuiYuJiaoKuan"
      },
      {
        title: "零用金",
        align: "center",
        dataIndex: "lingYongJin",
        key: "lingYongJin"
      },
      {
        title: "挂账",
        align: "center",
        dataIndex: "guaZhgang",
        key: "guaZhgang"
      },
      {
        title: "挂账欠款",
        align: "center",
        dataIndex: "guaZhangQianZhang",
        key: "guaZhangQianZhang"
      },
      {
        title: "挂账余款",
        align: "center",
        dataIndex: "guaZhangYuKuan",
        key: "guaZhangYuKuan"
      },
      {
        title: "记账",
        align: "center",
        dataIndex: "jiZhang",
        key: "jiZhang"
      },
      {
        title: "记账金额",
        align: "center",
        dataIndex: "jiZhangJinE",
        key: "jiZhangJinE"
      },
      {
        title: "减免金额",
        align: "center",
        dataIndex: "jianMianJinE",
        key: "jianMianJinE"
      },
      {
        title: "省医保",
        align: "center",
        dataIndex: "shengYiBao",
        key: "shengYiBao"
      },
      {
        title: "普通省医保",
        align: "center",
        dataIndex: "puTongShengYiBao",
        key: "puTongShengYiBao"
      },
      {
        title: "两费离休离保",
        align: "center",
        dataIndex: "liangFeiLiXiuLiBao",
        key: "liangFeiLiXiuLiBao"
      },
      {
        title: "公费离休离保",
        align: "center",
        dataIndex: "gongFeiLiXiuLiBao",
        key: "gongFeiLiXiuLiBao"
      },
      {
        title: "行业离休离保",
        align: "center",
        dataIndex: "hangYeLiXiuLiBao",
        key: "hangYeLiXiuLiBao"
      },
      {
        title: "子女统筹",
        align: "center",
        dataIndex: "ziNvTongChou",
        key: "ziNvTongChou"
      },
      {
        title: "公费重保",
        align: "center",
        dataIndex: "gongFeiZhongBao",
        key: "gongFeiZhongBao"
      },
      {
        title: "市医保",
        align: "center",
        dataIndex: "shiYiBao",
        key: "shiYiBao"
      },
      {
        title: "普通市医保",
        align: "center",
        dataIndex: "puTongShiYiBao",
        key: "puTongShiYiBao"
      },
      {
        title: "离休医保",
        align: "center",
        dataIndex: "liXiuYiBao",
        key: "liXiuYiBao"
      },
      {
        title: "子女统筹",
        align: "center",
        dataIndex: "sybZiNvTongChou",
        key: "sybZiNvTongChou"
      },
      {
        title: "透析",
        align: "center",
        dataIndex: "touXi",
        key: "touXi"
      },
      {
        title: "省一卡通",
        align: "center",
        dataIndex: "shengYiKaTong",
        key: "shengYiKaTong"
      },
      {
        title: "实收小计",
        align: "center",
        dataIndex: "shiShouXiaoJi",
        key: "shiShouXiaoJi"
      },
      {
        title: "现金",
        align: "center",
        dataIndex: "xianJin",
        key: "xianJin"
      },
      {
        title: "支票",
        align: "center",
        dataIndex: "zhiPiao",
        key: "zhiPiao"
      },
      {
        title: "银行卡",
        align: "center",
        dataIndex: "yinHangKa",
        key: "yinHangKa"
      },
      {
        title: "无线POS",
        align: "center",
        dataIndex: "wuXianPos",
        key: "wuXianPos"
      },
      {
        title: "微信支付",
        align: "center",
        dataIndex: "weiXinZhiFu",
        key: "weiXinZhiFu"
      },
      {
        title: "支付宝",
        align: "center",
        dataIndex: "zhiFuBao",
        key: "zhiFuBao"
      },
      {
        title: "零用金",
        align: "center",
        dataIndex: "shiShouLingYongJin",
        key: "shiShouLingYongJin"
      },
      {
        title: "借方合计",
        align: "center",
        dataIndex: "jieFangHeJi",
        key: "jieFangHeJi"
      },
      {
        title: "合计住院收入",
        align: "center",
        dataIndex: "heJiZhuYuanShouRu",
        key: "heJiZhuYuanShouRu"
      },
      {
        title: "药品收入小计",
        align: "center",
        dataIndex: "yaoPinShouRuXiaoJi",
        key: "yaoPinShouRuXiaoJi"
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
        title: "医疗收入小计",
        align: "center",
        dataIndex: "yiLiaoShouRuXiaoJi",
        key: "yiLiaoShouRuXiaoJi"
      },
      {
        title: "床位费",
        align: "center",
        dataIndex: "chuangWeiFei",
        key: "chuangWeiFei"
      },
      {
        title: "检查费",
        align: "center",
        dataIndex: "jianChaFei",
        key: "jianChaFei"
      },
      {
        title: "CT费用",
        align: "center",
        dataIndex: "ctFei",
        key: "ctFei"
      },
      {
        title: "治疗费",
        align: "center",
        dataIndex: "zhiLiaoFei",
        key: "zhiLiaoFei"
      },
      {
        title: "血透费",
        align: "center",
        dataIndex: "xueTouFei",
        key: "xueTouFei"
      },
      {
        title: "手术费",
        align: "center",
        dataIndex: "shouShuFei",
        key: "shouShuFei"
      },
      {
        title: "材料费",
        align: "center",
        dataIndex: "caiLiaoFei",
        key: "caiLiaoFei"
      },
      {
        title: "化验费",
        align: "center",
        dataIndex: "huaYanFei",
        key: "huaYanFei"
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
        title: "护理费",
        align: "center",
        dataIndex: "huLiFei",
        key: "huLiFei"
      },
      {
        title: "其他费",
        align: "center",
        dataIndex: "qiTaFei",
        key: "qiTaFei"
      },
      {
        title: "会诊费",
        align: "center",
        dataIndex: "huiZhenFei",
        key: "huiZhenFei"
      },
      {
        title: "诊疗费",
        align: "center",
        dataIndex: "zhenLiaoFei",
        key: "zhenLiaoFei"
      },
      {
        title: "其他收入小计",
        align: "center",
        dataIndex: "qiTaShouRuXiaoJi",
        key: "qiTaShouRuXiaoJi"
      },
      {
        title: "空调费",
        align: "center",
        dataIndex: "kongTiaoFei",
        key: "kongTiaoFei"
      },
      {
        title: "卫生组套费",
        align: "center",
        dataIndex: "weiShengZhuTaoFei",
        key: "weiShengZhuTaoFei"
      },
      {
        title: "陪客费",
        align: "center",
        dataIndex: "peiKeFei",
        key: "peiKeFei"
      },
      {
        title: "外院费",
        align: "center",
        dataIndex: "waiYuanFei",
        key: "waiYuanFei"
      },
      {
        title: "伙食费",
        align: "center",
        dataIndex: "huoShiFei",
        key: "huoShiFei"
      },
      {
        title: "监管费",
        align: "center",
        dataIndex: "jianGuanFei",
        key: "jianGuanFei"
      },
      {
        title: "零用金收入",
        align: "center",
        dataIndex: "lingYongJinShouRu",
        key: "lingYongJinShouRu"
      },
      {
        title: "预交款",
        align: "center",
        dataIndex: "yuJiaoKuan",
        key: "yuJiaoKuan"
      },
      {
        title: "微信支付",
        align: "center",
        dataIndex: "yjkWeiXinZhiFu",
        key: "yjkWeiXinZhiFu"
      },
      {
        title: "预交现金",
        align: "center",
        dataIndex: "yuJiaoXianJin",
        key: "yuJiaoXianJin"
      },
      {
        title: "预交支票",
        align: "center",
        dataIndex: "yuJiaoZhiPiao",
        key: "yuJiaoZhiPiao"
      },
      {
        title: "预交银行",
        align: "center",
        dataIndex: "yuJiaoYinHang",
        key: "yuJiaoYinHang"
      },
      {
        title: "无线pos",
        align: "center",
        dataIndex: "yjkWuXianPos",
        key: "yjkWuXianPos"
      },
      {
        title: "支付宝",
        align: "center",
        dataIndex: "yjkZhiFuBao",
        key: "yjkZhiFuBao"
      },
      {
        title: "应付小计",
        align: "center",
        dataIndex: "yinFuXiaoJi",
        key: "yinFuXiaoJi"
      },
      {
        title: "现金",
        align: "center",
        dataIndex: "yfxjXianJin",
        key: "yfxjXianJin"
      },
      {
        title: "支票",
        align: "center",
        dataIndex: "yfxjZhiPiao",
        key: "yfxjZhiPiao"
      },
      {
        title: "银行卡",
        align: "center",
        dataIndex: "yfxjYinHangKa",
        key: "yfxjYinHangKa"
      },
      {
        title: "贷方合计",
        align: "center",
        dataIndex: "daiFangHeJi",
        key: "daiFangHeJi"
      }
    ]
  ],
  [
    "ZhuYuanQingDan",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
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
  [
    "MenZhenGuaZhangTongJi",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "监狱",
        align: "center",
        dataIndex: "jianYu",
        key: "jianYu"
      },
      {
        title: "监区",
        align: "center",
        dataIndex: "jianQu",
        key: "jianQu"
      },
      {
        title: "姓名",
        align: "center",
        dataIndex: "xingMing",
        key: "xingMing"
      },
      {
        title: "编号",
        align: "center",
        dataIndex: "bianHao",
        key: "bianHao"
      },
      {
        title: "挂账时间",
        align: "center",
        dataIndex: "guaZhangShiJian",
        key: "guaZhangShiJian"
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
    "ZhuYuanHuoShiFeiGuaZhang",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
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
        title: "监管费",
        align: "center",
        dataIndex: "jianGuanFei",
        key: "jianGuanFei"
      },
      {
        title: "卫生费",
        align: "center",
        dataIndex: "weiShengFei",
        key: "weiShengFei"
      },
      {
        title: "伙食费",
        align: "center",
        dataIndex: "huoShiFei",
        key: "huoShiFei"
      },
      {
        title: "合  计",
        align: "center",
        dataIndex: "heJi",
        key: "heJi"
      }
    ]
  ],
  /** 住院分账 */
  [
    "ChuYuanBingRenFeiYong",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
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
    "ChuYuanBingRenShouRu",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
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
    "ZhuYuanRiBao",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
      },
      {
        title: "冲预交款",
        align: "center",
        dataIndex: "chongYuJiaoKuan",
        key: "chongYuJiaoKuan"
      },
      {
        title: "病人预交款",
        align: "center",
        dataIndex: "bingRenYuJiaoKuan",
        key: "bingRenYuJiaoKuan"
      },
      {
        title: "退预交款",
        align: "center",
        dataIndex: "tuiYuJiaoKuan",
        key: "tuiYuJiaoKuan"
      },
      {
        title: "零用金",
        align: "center",
        dataIndex: "lingYongJin",
        key: "lingYongJin"
      },
      {
        title: "挂账",
        align: "center",
        dataIndex: "guaZhgang",
        key: "guaZhgang"
      },
      {
        title: "挂账欠款",
        align: "center",
        dataIndex: "guaZhangQianZhang",
        key: "guaZhangQianZhang"
      },
      {
        title: "挂账余款",
        align: "center",
        dataIndex: "guaZhangYuKuan",
        key: "guaZhangYuKuan"
      },
      {
        title: "记账",
        align: "center",
        dataIndex: "jiZhang",
        key: "jiZhang"
      },
      {
        title: "记账金额",
        align: "center",
        dataIndex: "jiZhangJinE",
        key: "jiZhangJinE"
      },
      {
        title: "减免金额",
        align: "center",
        dataIndex: "jianMianJinE",
        key: "jianMianJinE"
      },
      {
        title: "省医保",
        align: "center",
        dataIndex: "shengYiBao",
        key: "shengYiBao"
      },
      {
        title: "普通省医保",
        align: "center",
        dataIndex: "puTongShengYiBao",
        key: "puTongShengYiBao"
      },
      {
        title: "两费离休离保",
        align: "center",
        dataIndex: "liangFeiLiXiuLiBao",
        key: "liangFeiLiXiuLiBao"
      },
      {
        title: "公费离休离保",
        align: "center",
        dataIndex: "gongFeiLiXiuLiBao",
        key: "gongFeiLiXiuLiBao"
      },
      {
        title: "行业离休离保",
        align: "center",
        dataIndex: "hangYeLiXiuLiBao",
        key: "hangYeLiXiuLiBao"
      },
      {
        title: "子女统筹",
        align: "center",
        dataIndex: "ziNvTongChou",
        key: "ziNvTongChou"
      },
      {
        title: "公费重保",
        align: "center",
        dataIndex: "gongFeiZhongBao",
        key: "gongFeiZhongBao"
      },
      {
        title: "市医保",
        align: "center",
        dataIndex: "shiYiBao",
        key: "shiYiBao"
      },
      {
        title: "普通市医保",
        align: "center",
        dataIndex: "puTongShiYiBao",
        key: "puTongShiYiBao"
      },
      {
        title: "离休医保",
        align: "center",
        dataIndex: "liXiuYiBao",
        key: "liXiuYiBao"
      },
      {
        title: "子女统筹",
        align: "center",
        dataIndex: "sybZiNvTongChou",
        key: "sybZiNvTongChou"
      },
      {
        title: " 透析",
        align: "center",
        dataIndex: "touXi",
        key: "touXi"
      },
      {
        title: "省一卡通",
        align: "center",
        dataIndex: "shengYiKaTong",
        key: "shengYiKaTong"
      },
      {
        title: "实收小计",
        align: "center",
        dataIndex: "shiShouXiaoJi",
        key: "shiShouXiaoJi"
      },
      {
        title: "现金",
        align: "center",
        dataIndex: "xianJin",
        key: "xianJin"
      },
      {
        title: "支票",
        align: "center",
        dataIndex: "zhiPiao",
        key: "zhiPiao"
      },
      {
        title: "银行卡",
        align: "center",
        dataIndex: "yinHangKa",
        key: "yinHangKa"
      },
      {
        title: "无线POS",
        align: "center",
        dataIndex: "wuXianPos",
        key: "wuXianPos"
      },
      {
        title: "微信支付",
        align: "center",
        dataIndex: "weiXinZhiFu",
        key: "weiXinZhiFu"
      },
      {
        title: "支付宝",
        align: "center",
        dataIndex: "zhiFuBao",
        key: "zhiFuBao"
      },
      {
        title: "零用金",
        align: "center",
        dataIndex: "shiShouLingYongJin",
        key: "shiShouLingYongJin"
      },
      {
        title: "借方合计",
        align: "center",
        dataIndex: "jieFangHeJi",
        key: "jieFangHeJi"
      },
      {
        title: "合计住院收入",
        align: "center",
        dataIndex: "heJiZhuYuanShouRu",
        key: "heJiZhuYuanShouRu"
      },
      {
        title: "药品收入小计",
        align: "center",
        dataIndex: "yaoPinShouRuXiaoJi",
        key: "yaoPinShouRuXiaoJi"
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
        title: "医疗收入小计",
        align: "center",
        dataIndex: "yiLiaoShouRuXiaoJi",
        key: "yiLiaoShouRuXiaoJi"
      },
      {
        title: "床位费",
        align: "center",
        dataIndex: "chuangWeiFei",
        key: "chuangWeiFei"
      },
      {
        title: "检查费",
        align: "center",
        dataIndex: "jianChaFei",
        key: "jianChaFei"
      },
      {
        title: "CT费用",
        align: "center",
        dataIndex: "ctFei",
        key: "ctFei"
      },
      {
        title: "治疗费",
        align: "center",
        dataIndex: "zhiLiaoFei",
        key: "zhiLiaoFei"
      },
      {
        title: "血透费",
        align: "center",
        dataIndex: "xueTouFei",
        key: "xueTouFei"
      },
      {
        title: "手术费",
        align: "center",
        dataIndex: "shouShuFei",
        key: "shouShuFei"
      },
      {
        title: "材料费",
        align: "center",
        dataIndex: "caiLiaoFei",
        key: "caiLiaoFei"
      },
      {
        title: "化验费",
        align: "center",
        dataIndex: "huaYanFei",
        key: "huaYanFei"
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
        title: "护理费",
        align: "center",
        dataIndex: "huLiFei",
        key: "huLiFei"
      },
      {
        title: "其他费",
        align: "center",
        dataIndex: "qiTaFei",
        key: "qiTaFei"
      },
      {
        title: "会诊费",
        align: "center",
        dataIndex: "huiZhenFei",
        key: "huiZhenFei"
      },
      {
        title: "诊疗费",
        align: "center",
        dataIndex: "zhenLiaoFei",
        key: "zhenLiaoFei"
      },
      {
        title: "其他收入小计",
        align: "center",
        dataIndex: "qiTaShouRuXiaoJi",
        key: "qiTaShouRuXiaoJi"
      },
      {
        title: "空调费",
        align: "center",
        dataIndex: "kongTiaoFei",
        key: "kongTiaoFei"
      },
      {
        title: "卫生组套费",
        align: "center",
        dataIndex: "weiShengZhuTaoFei",
        key: "weiShengZhuTaoFei"
      },
      {
        title: "陪客费",
        align: "center",
        dataIndex: "peiKeFei",
        key: "peiKeFei"
      },
      {
        title: "外院费",
        align: "center",
        dataIndex: "waiYuanFei",
        key: "waiYuanFei"
      },
      {
        title: "伙食费",
        align: "center",
        dataIndex: "huoShiFei",
        key: "huoShiFei"
      },
      {
        title: "监管费",
        align: "center",
        dataIndex: "jianGuanFei",
        key: "jianGuanFei"
      },
      {
        title: "零用金收入",
        align: "center",
        dataIndex: "lingYongJinShouRu",
        key: "lingYongJinShouRu"
      },
      {
        title: "预交款",
        align: "center",
        dataIndex: "yuJiaoKuan",
        key: "yuJiaoKuan"
      },
      {
        title: "微信支付",
        align: "center",
        dataIndex: "yjkWeiXinZhiFu",
        key: "yjkWeiXinZhiFu"
      },
      {
        title: "预交现金",
        align: "center",
        dataIndex: "yuJiaoXianJin",
        key: "yuJiaoXianJin"
      },
      {
        title: "预交支票",
        align: "center",
        dataIndex: "yuJiaoZhiPiao",
        key: "yuJiaoZhiPiao"
      },
      {
        title: "预交银行",
        align: "center",
        dataIndex: "yuJiaoYinHang",
        key: "yuJiaoYinHang"
      },
      {
        title: "无线pos",
        align: "center",
        dataIndex: "yjkWuXianPos",
        key: "yjkWuXianPos"
      },
      {
        title: "支付宝",
        align: "center",
        dataIndex: "yjkZhiFuBao",
        key: "yjkZhiFuBao"
      },
      {
        title: "应付小计",
        align: "center",
        dataIndex: "yinFuXiaoJi",
        key: "yinFuXiaoJi"
      },
      {
        title: "现金",
        align: "center",
        dataIndex: "yfxjXianJin",
        key: "yfxjXianJin"
      },
      {
        title: "支票",
        align: "center",
        dataIndex: "yfxjZhiPiao",
        key: "yfxjZhiPiao"
      },
      {
        title: "银行卡",
        align: "center",
        dataIndex: "yfxjYinHangKa",
        key: "yfxjYinHangKa"
      },
      {
        title: "贷方合计",
        align: "center",
        dataIndex: "daiFangHeJi",
        key: "daiFangHeJi"
      }
    ]
  ],
  [
    "ZhuYuanQingDan",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
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
  [
    "ZhuYuanHuoShiFeiGuaZhang",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
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
        title: "监管费",
        align: "center",
        dataIndex: "jianGuanFei",
        key: "jianGuanFei"
      },
      {
        title: "卫生费",
        align: "center",
        dataIndex: "weiShengFei",
        key: "weiShengFei"
      },
      {
        title: "伙食费",
        align: "center",
        dataIndex: "huoShiFei",
        key: "huoShiFei"
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
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
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
    "QianFeiKongZhiChaXun",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
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
    "DingDianShenQingHeDui",
    [
      {
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
      {
        title: "日期",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
      },
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
  ]
]);

export default MoreTableTitleConfig;
