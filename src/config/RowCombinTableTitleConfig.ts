import {ColumnProps} from "antd/lib/table";

/**
 * 有合并单元格table
 */
const RowCombinTableTitleConfig: Map<string, Array<ColumnProps<any>>> = new Map<string, Array<ColumnProps<any>>>([
    [
        "AnYaoPinLeiXingTongJi",
        [
            {
                title: "医疗机构",
                align: "center",
                dataIndex: "yiLiaoJiGou",
                key: "yiLiaoJiGou",
            }, {
            title: "日期:按月",
            align: "center",
            dataIndex: "riQi",
            key: "riQi",
        }, {
            title: "库房",
            align: "center",
            dataIndex: "kuFang",
            key: "kuFang",
        }, {
            title: "分类名称",
            align: "center",
            dataIndex: "feiLeiMingCheng",
            key: "feiLeiMingCheng",
        }, {
            title: "方式名称",
            align: "center",
            dataIndex: "fangShiMingCheng",
            key: "fangShiMingCheng",
        }, {
            title: "西药",
            align: "center",
            dataIndex: "xiYao",
            key: "xiYao",
        }, {
            title: "成药",
            align: "center",
            dataIndex: "chengYao",
            key: "chengYao",
        }, {
            title: "卫材",
            align: "center",
            dataIndex: "weiCai",
            key: "weiCai",
        }, {
            title: "合计金额",
            align: "center",
            dataIndex: "heJiJinE",
            key: "heJiJinE",
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
            }, {
            title: "日期:按月",
            align: "center",
            dataIndex: "riQi",
            key: "riQi",
        }, {
            title: "库房",
            align: "center",
            dataIndex: "kuFang",
            key: "kuFang",
        }, {
            title: "分类名称",
            align: "center",
            dataIndex: "fenLeiMingCheng",
            key: "fenLeiMingCheng",
        }, {
            title: "方式名称",
            align: "center",
            dataIndex: "fangShiMingCheng",
            key: "fangShiMingCheng",
        }, {
            title: "西药",
            align: "center",
            dataIndex: "xiYao",
            key: "xiYao",
        }, {
            title: "成药",
            align: "center",
            dataIndex: "chengYao",
            key: "chengYao",
        }, {
            title: "氧气",
            align: "center",
            dataIndex: "yangQi",
            key: "yangQi",
        }, {
            title: "卫材",
            align: "center",
            dataIndex: "weiCai",
            key: "weiCai",
        }, {
            title: "合计金额",
            align: "center",
            dataIndex: "heJiJinE",
            key: "heJiJinE",
        }
        ]
    ]
]);
export default RowCombinTableTitleConfig;