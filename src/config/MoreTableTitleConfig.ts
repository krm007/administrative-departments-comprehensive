import { ColumnProps } from "antd/lib/table";

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
        key: "yiLiaoJiGou"
      },
      {
        title: "日期:按月",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
      },
      {
        title: "库房",
        align: "center",
        dataIndex: "kuFang",
        key: "kuFang"
      },
      {
        title: "分类名称",
        align: "center",
        dataIndex: "feiLeiMingCheng",
        key: "feiLeiMingCheng"
      },
      {
        title: "方式名称",
        align: "center",
        dataIndex: "fangShiMingCheng",
        key: "fangShiMingCheng"
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
        key: "yiLiaoJiGou"
      },
      {
        title: "日期:按月",
        align: "center",
        dataIndex: "riQi",
        key: "riQi"
      },
      {
        title: "库房",
        align: "center",
        dataIndex: "kuFang",
        key: "kuFang"
      },
      {
        title: "分类名称",
        align: "center",
        dataIndex: "fenLeiMingCheng",
        key: "fenLeiMingCheng"
      },
      {
        title: "方式名称",
        align: "center",
        dataIndex: "fangShiMingCheng",
        key: "fangShiMingCheng"
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
        title: "医疗机构",
        align: "center",
        dataIndex: "yiLiaoJiGou",
        key: "yiLiaoJiGou"
      },
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
        title:
          "区域影像检查总数",
        align: "center",
        dataIndex: "qyyxJianChaZongShu",
        key: "qyyxJianChaZongShu"
      },
      {
        title:
          "区域请求远程诊断总数",
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
        title:
          "拍片数量",
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
        title:
          "报告数量",
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
    /** 检验查询 */
    /** 挂号分账 */
    ["",[

    ]]
]);

export default MoreTableTitleConfig;
