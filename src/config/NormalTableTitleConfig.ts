import { ColumnProps } from "antd/lib/table";

/**
 * 没有单元格合并的表
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
        key: "id",
        render: (text: any, record: any, index: number) => index
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
  ]
]);
export default NormalTableTitleConfig;
