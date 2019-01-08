import {ColumnProps} from "antd/lib/table";

/**
 * 没有合并单元格table
 */
const NormalTableTitleConfig: Map<string, Array<ColumnProps<any>>> = new Map<string,
    Array<ColumnProps<any>>>([
    [
        "MenZhenKaiDanFeiYong",
        [
            {
                title: "编号",
                align: "center",
                key: "id",
                render: (text: any, record: any, index: number) => `${index + 1}`
            },
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
        "MenZhenGuaZhangTongJi",
        [
            {
                title: "医疗机构",
                align: "center",
                dataIndex: "yiLiaoJiGou",
                key: "yiLiaoJiGou",
            }, {
            title: "监狱",
            align: "center",
            dataIndex: "jianYu",
            key: "jianYu",
        }, {
            title: "监区",
            align: "center",
            dataIndex: "jianQu",
            key: "jianQu",
        }, {
            title: "姓名",
            align: "center",
            dataIndex: "xingMing",
            key: "xingMing",
        }, {
            title: "编号",
            align: "center",
            dataIndex: "bianHao",
            key: "bianHao",
        }, {
            title: "挂账时间",
            align: "center",
            dataIndex: "guaZhangShiJian",
            key: "guaZhangShiJian",
        }, {
            title: "挂账金额",
            align: "center",
            dataIndex: "guaZhangJinE",
            key: "guaZhangJinE",
        }, {
            title: "制表人",
            align: "center",
            dataIndex: "zhiBiaoRen",
            key: "zhiBiaoRen",
        }]
    ],
    [
        "YuJiaoKuanBingRenMingXi",
        [
            {
                title: "医疗机构",
                align: "center",
                dataIndex: "yiLiaoJiGou",
                key: "yiLiaoJiGou",
            }, {
            title: "日期",
            align: "center",
            dataIndex: "riQi",
            key: "riQi",
        }, {
            title: "交款方式",
            align: "center",
            dataIndex: "jiaoKuanFangShi",
            key: "jiaoKuanFangShi",
        }, {
            title: "姓名",
            align: "center",
            dataIndex: "xingMing",
            key: "xingMing",
        }, {
            title: "住院号",
            align: "center",
            dataIndex: "zhuYuanHao",
            key: "zhuYuanHao",
        }, {
            title: "金额",
            align: "center",
            dataIndex: "jinE",
            key: "jinE",
        }
        ]
    ],
    [
        "ChuYuanBingRenBingQu",
        [
            {
            title: "医疗机构",
            align: "center",
            dataIndex: "yiLiaoJiGou",
            key: "yiLiaoJiGou",
        }, {
            title: "日期",
            align: "center",
            dataIndex: "riQi",
            key: "riQi",
        }, {
            title: "病区",
            align: "center",
            dataIndex: "bingQu",
            key: "bingQu",
        }, {
            title: "科室",
            align: "center",
            dataIndex: "keShi",
            key: "keShi",
        }, {
            title: "人次",
            align: "center",
            dataIndex: "renCi",
            key: "renCi",
        }, {
            title: "西药费",
            align: "center",
            dataIndex: "xiYaoFei",
            key: "xiYaoFei",
        }, {
            title: "成药费",
            align: "center",
            dataIndex: "chengYaoFei",
            key: "chengYaoFei",
        }, {
            title: "检查费",
            align: "center",
            dataIndex: "jianChaFei",
            key: "jianChaFei",
        }, {
            title: "治疗费",
            align: "center",
            dataIndex: "zhiLiaoFei",
            key: "zhiLiaoFei",
        }, {
            title: "CT费",
            align: "center",
            dataIndex: "ctFei",
            key: "ctFei",
        }, {
            title: "放射费",
            align: "center",
            dataIndex: "fangSheFei",
            key: "fangSheFei",
        }, {
            title: "手术费",
            align: "center",
            dataIndex: "shouShuFei",
            key: "shouShuFei",
        }, {
            title: "化验费",
            align: "center",
            dataIndex: "huaYanFei",
            key: "huaYanFei",
        }, {
            title: "其他费",
            align: "center",
            dataIndex: "qiTaFei",
            key: "qiTaFei",
        }, {
            title: "输氧费",
            align: "center",
            dataIndex: "shuYangFei",
            key: "shuYangFei",
        }, {
            title: "诊察费",
            align: "center",
            dataIndex: "zhenChaFei",
            key: "zhenChaFei",
        }, {
            title: "卫生组套费",
            align: "center",
            dataIndex: "weiShengZuTaoFei",
            key: "weiShengZuTaoFei",
        }, {
            title: "床位费",
            align: "center",
            dataIndex: "chuangWeiFei",
            key: "chuangWeiFei",
        }, {
            title: "伙食费",
            align: "center",
            dataIndex: "huoShiFei",
            key: "huoShiFei",
        }, {
            title: "护理费",
            align: "center",
            dataIndex: "huLiFei",
            key: "huLiFei",
        }, {
            title: "材料费",
            align: "center",
            dataIndex: "caiLiaoFei",
            key: "caiLiaoFei",
        }, {
            title: "麻醉费",
            align: "center",
            dataIndex: "maZuiFei",
            key: "maZuiFei",
        }, {
            title: "合计",
            align: "center",
            dataIndex: "heJi",
            key: "heJi",
        }]
    ],
    [
        "ZaiYuanBingRenZongZhang",
        [
            {
            title: "医疗机构",
            align: "center",
            dataIndex: "yiLiaoJiGou",
            key: "yiLiaoJiGou",
        }, {
            title: "日期",
            align: "center",
            dataIndex: "riQi",
            key: "riQi",
        }, {
            title: "病区",
            align: "center",
            dataIndex: "bingQu",
            key: "bingQu",
        }, {
            title: "科室",
            align: "center",
            dataIndex: "keShi",
            key: "keShi",
        }, {
            title: "合计",
            align: "center",
            dataIndex: "heJi",
            key: "heJi",
        }, {
            title: "预交款",
            align: "center",
            dataIndex: "yuJiaoKuan",
            key: "yuJiaoKuan",
        }, {
            title: "西药费",
            align: "center",
            dataIndex: "xiYaoFei",
            key: "xiYaoFei",
        }, {
            title: "成药费",
            align: "center",
            dataIndex: "chengYaoFei",
            key: "chengYaoFei",
        }, {
            title: "检查费",
            align: "center",
            dataIndex: "jianChaFei",
            key: "jianChaFei",
        }, {
            title: "治疗费",
            align: "center",
            dataIndex: "zhiLiaoFei",
            key: "zhiLiaoFei",
        }, {
            title: "CT费",
            align: "center",
            dataIndex: "ctFei",
            key: "ctFei",
        }, {
            title: "放射费",
            align: "center",
            dataIndex: "fangSheFei",
            key: "fangSheFei",
        }, {
            title: "手术费",
            align: "center",
            dataIndex: "shouShuFei",
            key: "shouShuFei",
        }, {
            title: "化验费",
            align: "center",
            dataIndex: "huaYanFei",
            key: "huaYanFei",
        }, {
            title: "其他费",
            align: "center",
            dataIndex: "qiTaFei",
            key: "qiTaFei",
        }, {
            title: "输氧费",
            align: "center",
            dataIndex: "shuYangFei",
            key: "shuYangFei",
        }, {
            title: "诊察费",
            align: "center",
            dataIndex: "zhenChaFei",
            key: "zhenChaFei",
        }, {
            title: "卫生组套费",
            align: "center",
            dataIndex: "weiShengZuTaoFei",
            key: "weiShengZuTaoFei",
        }, {
            title: "床位费",
            align: "center",
            dataIndex: "chuangWeiFei",
            key: "chuangWeiFei",
        }, {
            title: "伙食费",
            align: "center",
            dataIndex: "huoShiFei",
            key: "huoShiFei",
        }, {
            title: "护理费",
            align: "center",
            dataIndex: "huLiFei",
            key: "huLiFei",
        }, {
            title: "材料费",
            align: "center",
            dataIndex: "caiLiaoFei",
            key: "caiLiaoFei",
        }, {
            title: "麻醉费",
            align: "center",
            dataIndex: "maZuiFei",
            key: "maZuiFei",
        }, {
            title: "外院检查",
            align: "center",
            dataIndex: "waiYuanJianCha",
            key: "waiYuanJianCha",
        }, {
            title: "会诊费",
            align: "center",
            dataIndex: "huiZhenFei",
            key: "huiZhenFei",
        }, {
            title: "其他",
            align: "center",
            dataIndex: "qiTa",
            key: "qiTa",
        }]
    ],
    [
        "",
        []
    ]
]);
export default NormalTableTitleConfig;
