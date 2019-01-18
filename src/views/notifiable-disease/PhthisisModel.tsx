import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Card, Col, Modal, Row, Table } from "antd";
import Line from "../bizchart/Line";
import * as moment from "moment";

const styles = (theme: Theme) =>
  createStyles<"root">({
    root: {
      "& .ant-table": {
        "& td": {
          whiteSpace: "nowrap"
        }
      }
    }
  });

interface Iprops extends WithStyles<typeof styles> {
  model: boolean;
  onOk: () => void;
  onCancel: () => void;
  bingZhong: any[][];
  text: string;
  feiJieHeiTable?: any[];
  textData: {
    chuanRanBingMingCheng?: string;
    nanXIngBaoGaoHuanBingShu?: number;
    nvXIngBaoGaoHuanBingShu?: number;
    riQi?: string;
    xinTouFanBaoGaoShu?: number;
    yiGanBaoGaoFaBingShu?: number;
    yiLiaoJiGou?: string;
    zongBaoGaoShu?: number;
  };
}

export interface FeiJieHeBoco {
  fenLei: string;
  /** 入监体检-例数 */
  fxfsRuJianTiJianLiShu?: number;
  /** 因症就诊-例数 */
  fxfsJiuZhenLiShu?: number;
  /** 健康体检-例数 */
  fxfsJianKangTiJianLiShu?: number;
  /** 接触者检查-例数 */
  fxfsJianChaLiShu?: number;
  /** 结核普查-例数 */
  fxfsJieHePuChaLiShu?: number;
  /** 其他-例数 */
  fxfsQiTaLiShu?: number;
  /** 合计-例数 */
  fxfsHeJiLiShu?: number;
  /** 新患者-例数 */
  djflXinHuanZheLiShu?: number;
  /** 复发-例数 */
  djflFuFaLiShu?: number;
  /** 返回-例数 */
  djflFanHuiLiShu?: number;
  /** 初治失败-例数 */
  djflChuZhiShiBaiLiShu?: number;
  /** 其他-例数 */
  djflQiTaLiShu?: number;
  /** 合计-例数 */
  djflHeJiLiShu?: number;
  /** 痰涂片-阴性-例数 */
  ttpYinXingLiShu?: number;
  /** 痰涂片-阳性-例数 */
  ttpYangXingLiShu?: number;
  /** 合计-例数 */
  ttpHeJiLiShu?: number;
}
const listName = [
  "fxfsRuJianTiJianLiShu",
  "fxfsJiuZhenLiShu",
  "fxfsJianKangTiJianLiShu",
  "fxfsJianChaLiShu",
  "fxfsJieHePuChaLiShu",
  "fxfsQiTaLiShu",
  "fxfsHeJiLiShu",
  "djflXinHuanZheLiShu",
  "djflFuFaLiShu",
  "djflFanHuiLiShu",
  "djflChuZhiShiBaiLiShu",
  "djflQiTaLiShu",
  "djflHeJiLiShu",
  "ttpYinXingLiShu",
  "ttpYangXingLiShu",
  "ttpHeJiLiShu"
];
/**
 * 描述：
 *  肺结核弹框
 * @author sunshixiong
 * @date 2019/1/16-20:28
 */
class PhthisisModel extends React.Component<Iprops> {
  /** modal数据 */
  private ModalColumns: any[] = [
    {
      title: "病种",
      dataIndex: "name"
    },
    {
      title: `${moment()
        .subtract(4, "years")
        .format("YYYY")}`,
      dataIndex: "bing_1"
    },
    {
      title: `${moment()
        .subtract(3, "years")
        .format("YYYY")}`,
      dataIndex: "bing_2"
    },
    {
      title: `${moment()
        .subtract(2, "years")
        .format("YYYY")}`,
      dataIndex: "bing_3"
    },
    {
      title: `${moment()
        .subtract(1, "years")
        .format("YYYY")}`,
      dataIndex: "bing_4"
    },
    {
      title: `${moment().format("YYYY")}`,
      dataIndex: "bing_5"
    }
  ];
  private ModalData = [
    {
      key: "1",
      name: "第一季度",
      bing_1: "170",
      bing_2: "100",
      bing_3: "160",
      bing_4: "170",
      bing_5: "100"
    },
    {
      key: "2",
      name: "第二季度",
      bing_1: "170",
      bing_2: "100",
      bing_3: "160",
      bing_4: "170",
      bing_5: "100"
    },
    {
      key: "3",
      name: "第三季度",
      bing_1: "170",
      bing_2: "100",
      bing_3: "160",
      bing_4: "170",
      bing_5: "100"
    },
    {
      key: "4",
      name: "第四季度",
      bing_1: "170",
      bing_2: "100",
      bing_3: "160",
      bing_4: "170",
      bing_5: "100"
    }
  ];
  /** 折线图数据 */
  private lineData = [
    {
      item: "2014",
      quarter1: "2",
      quarter2: "5",
      quarter3: "4",
      quarter4: "3"
    },
    {
      item: "2015",
      quarter1: "0",
      quarter2: "5",
      quarter3: "3",
      quarter4: "1"
    },
    {
      item: "2016",
      quarter1: "5",
      quarter2: "3",
      quarter3: "4",
      quarter4: "6"
    },
    {
      item: "2017",
      quarter1: "4",
      quarter2: "1",
      quarter3: "5",
      quarter4: "6"
    },
    {
      item: "2018",
      quarter1: "2",
      quarter2: "4",
      quarter3: "6",
      quarter4: "6"
    }
  ];
  private FeiJieHe: any = [
    {
      title: "",
      align: "center",
      dataIndex: "fenLei",
      key: "fenLei"
    },
    {
      title: "入监体检",
      align: "center",
      dataIndex: "fxfsRuJianTiJianLiShu",
      key: "fxfsRuJianTiJianLiShu"
    },
    {
      title: "因症就诊",
      align: "center",
      dataIndex: "fxfsJiuZhenLiShu",
      key: "fxfsJiuZhenLiShu"
    },
    {
      title: "健康体检",
      align: "center",
      dataIndex: "fxfsJianKangTiJianLiShu",
      key: "fxfsJianKangTiJianLiShu"
    },
    {
      title: "接触者检查",
      align: "center",
      dataIndex: "fxfsJianChaLiShu",
      key: "fxfsJianChaLiShu"
    },
    {
      title: "结核普查",
      align: "center",
      dataIndex: "fxfsJieHePuChaLiShu",
      key: "fxfsJieHePuChaLiShu"
    },
    {
      title: "其他",
      align: "center",
      dataIndex: "fxfsQiTaLiShu",
      key: "fxfsQiTaLiShu"
    },
    {
      title: "发现方式合计",
      align: "center",
      dataIndex: "fxfsHeJiLiShu",
      key: "fxfsHeJiLiShu"
    },
    {
      title: "新患者",
      align: "center",
      dataIndex: "djflXinHuanZheLiShu",
      key: "djflXinHuanZheLiShu"
    },
    {
      title: "复发",
      align: "center",
      dataIndex: "djflFuFaLiShu",
      key: "djflFuFaLiShu"
    },
    {
      title: "返回",
      align: "center",
      dataIndex: "djflFanHuiLiShu",
      key: "djflFanHuiLiShu"
    },
    {
      title: "初治失败",
      align: "center",
      dataIndex: "djflChuZhiShiBaiLiShu",
      key: "djflChuZhiShiBaiLiShu"
    },
    {
      title: "其他",
      align: "center",
      dataIndex: "djflQiTaLiShu",
      key: "djflQiTaLiShu"
    },
    {
      title: "登记分类合计",
      align: "center",
      dataIndex: "djflHeJiLiShu",
      key: "djflHeJiLiShu"
    },
    {
      title: "痰涂片-阴性",
      align: "center",
      dataIndex: "ttpYinXingLiShu",
      key: "ttpYinXingLiShu"
    },
    {
      title: "痰涂片-阳性",
      align: "center",
      dataIndex: "ttpYangXingLiShu",
      key: "ttpYangXingLiShu"
    },
    {
      title: "痰涂片合计",
      align: "center",
      dataIndex: "ttpHeJiLiShu",
      key: "ttpHeJiLiShu"
    }
  ];

  public componentDidMount(): void {}
  public convertData = (value: any[][]) => {
    return this.ModalData.map((value1, index) => {
      const columndata = value[index];
      for (let i = 1; i <= 5; i++) {
        const key = "bing_" + `${i}`;
        value1[key] = columndata[i];
      }
      return value1;
    });
  };
  public render() {
    const { classes, textData } = this.props;
    let dataSource = this.ModalData;
    let LineHartData = this.lineData;
    if (this.props.bingZhong) {
      dataSource = this.convertData(this.props.bingZhong);
      LineHartData = LineHartData.map((value, index) => {
        dataSource.forEach((value1, index1) => {
          const loactionD = "quarter" + `${index1 + 1}`;
          const loactionC = "bing_" + `${index + 1}`;
          value[loactionD] = value1[loactionC];
        });
        return value;
      });
    }
    let lastDataText = null;
    if (textData && textData.zongBaoGaoShu && textData.xinTouFanBaoGaoShu) {
      lastDataText =
        (textData.zongBaoGaoShu / textData.xinTouFanBaoGaoShu) * 100;
    }
    const feijieheData = [];
    if (this.props.feiJieHeiTable) {
      const dataValue = this.props.feiJieHeiTable;
      const valueOne: any = { fenLei: "列数" };
      const valueTwo: any = { fenLei: "占比" };
      listName.forEach((value, index) => {
        valueOne[value] = dataValue[value];
      });
      feijieheData.push(valueOne);
      listName.forEach((value, index) => {
        const substring = value.substr(value.length - 5) + "ZhanBi";
        valueTwo[value] = dataValue[substring];
      });
      feijieheData.push(valueTwo);
    }
    return (
      <div className={classes.root}>
        <Modal
          visible={this.props.model}
          onOk={this.props.onOk}
          onCancel={this.props.onCancel}
          width={"70vw"}
        >
          <div style={{ padding: "20px" }}>
            <Row>
              <Col span={20} offset={2}>
                {this.props.feiJieHeiTable ? (
                  <Table
                    columns={this.FeiJieHe}
                    dataSource={feijieheData}
                    scroll={{
                      x: true
                    }}
                    pagination={false}
                    size={"middle"}
                    bordered={true}
                  />
                ) : null}
                <Card style={{ marginTop: 40, marginBottom: 40 }}>
                  {`本季报告发病 ${textData.zongBaoGaoShu} 例（男性 ${
                    textData.nanXIngBaoGaoHuanBingShu
                  } 例、女性 ${textData.nvXIngBaoGaoHuanBingShu}
                  例）。其中，新投犯报告发病数 ${
                    textData.xinTouFanBaoGaoShu
                  }例，占总报告发病数的 ${lastDataText}%`}
                </Card>
                <Table
                  columns={this.ModalColumns}
                  size="middle"
                  dataSource={dataSource}
                  pagination={false}
                  bordered={true}
                  title={() => (
                    <span style={{ padding: "10px" }}>
                      <img
                        src={require("../../images/chartIcon.png")}
                        alt=""
                        style={{
                          float: "left",
                          marginLeft: "1vw",
                          marginRight: "0.5vw"
                        }}
                      />
                      附表：近5年{this.props.text}发病情况
                    </span>
                  )}
                />
              </Col>
            </Row>
          </div>
          <div style={{ padding: "20px" }}>
            <Row>
              <Col span={20} offset={2}>
                <line />
                <Line
                  titleChart={"报告发病情况"}
                  chartData={LineHartData}
                  lineXAxis={["一季度", "二季度", "三季度", "四季度"]}
                />
              </Col>
            </Row>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(PhthisisModel);
