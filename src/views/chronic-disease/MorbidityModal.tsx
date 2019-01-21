import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Col, Modal, Row, Table } from "antd";
import Line from "../bizchart/Line";
import GroupBar from "../bizchart/GroupBar";
import * as ReactDOM from "react-dom";
import { ColumnProps } from "antd/lib/table";
import ReactHTMLTableToExcel from "../../component/ReactHTMLTableToExcel";
import service from "../../request/Service";

const styles = (theme: Theme) =>
  createStyles<"root">({
    root: {}
  });

interface Istate {
  visible: boolean;
  ModalTableData: any[];
  lineDataOne: any[];
  lineDataTwo: any[];
}

interface Iprops extends WithStyles<typeof styles> {
  childrenData: any[];
  groupBarData: any[];
  modalParam: any;
}

/** 接口数据类型 */
export interface SmallTableDataInfo {
  benJiFaBingShu: number;
  manBingBingZhong: string;
  riQi: string;
  xinFanDaiBingRuJianShu: number;
  yiLiaoJiGou: string;
  yuNeiFaBingShu: number;
}
export interface ModalTableTitleType {
  benJiFaBingShu: number;
  benJiXinFanShu: number;
  benJiYaFanShu: number;
  faBingShuBiLi: string;
  huanBingShuBiLi: string;
  jiMoHuanBingShu: number;
  riQi: string;
  xinFaDaiBingBiLi: string;
  xinTouFanDaiBingShu: number;
  yiLiaoJiGou: string;
}
class MorbidityModal extends React.Component<Iprops, Istate> {
  /** 表格节点 */
  private tableRefs: any;
  /** 表头 */
  private samallTableTiele: Array<ColumnProps<SmallTableDataInfo>> = [
    {
      title: "",
      align: "center",
      dataIndex: "manBingBingZhong",
      key: "manBingBingZhong",
      render: (text: any) => (
        <a
          onClick={() => {
            this.showModal(text, this.props.modalParam);
          }}
        >
          {text}
        </a>
      )
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
      title: "狱内发病数",
      align: "center",
      dataIndex: "yuNeiFaBingShu",
      key: "yuNeiFaBingShu"
    }
  ];
  /** 弹出层表头 */
  private ModalTableTitle: Array<ColumnProps<ModalTableTitleType>> = [
    {
      title: "季度",
      align: "center",
      dataIndex: "jiDu",
      key: "jiDu"
    },
    {
      title: "当季发病数",
      align: "center",
      dataIndex: "benJiFaBingShu",
      key: "benJiFaBingShu"
    },
    {
      title: "新投犯带病数",
      align: "center",
      dataIndex: "xinTouFanDaiBingShu",
      key: "xinTouFanDaiBingShu"
    },
    {
      title: "季末患病数",
      align: "center",
      dataIndex: "jiMoHuanBingShu",
      key: "jiMoHuanBingShu"
    },
    {
      title: "当季押犯总数",
      align: "center",
      dataIndex: "benJiYaFanShu",
      key: "benJiYaFanShu"
    },
    {
      title: "当新犯数",
      align: "center",
      dataIndex: "benJiXinFanShu",
      key: "benJiXinFanShu"
    },
    {
      title: "发病数比例",
      align: "center",
      dataIndex: "faBingShuBiLi",
      key: "faBingShuBiLi"
    },
    {
      title: "患病数比例",
      align: "center",
      dataIndex: "huanBingShuBiLi",
      key: "huanBingShuBiLi"
    },
    {
      title: "新犯带病比例",
      align: "center",
      dataIndex: "xinFaDaiBingBiLi",
      key: "xinFaDaiBingBiLi"
    }
  ];
  /** 折线图-1构造数据 */
  // private lineDataOneList = [
  //   {
  //     item: "本季发病数",
  //     quarter1: "4800",
  //     quarter2: "4800",
  //     quarter3: "5600",
  //     quarter4: "5400",
  //     name: "benJiFaBingShu"
  //   },
  //   {
  //     item: "新投犯带病数",
  //     quarter1: "2000",
  //     quarter2: "2100",
  //     quarter3: "2000",
  //     quarter4: "2000",
  //     name: "xinTouFanDaiBingShu"
  //   },
  //   {
  //     item: "季末患病数",
  //     quarter1: "8000",
  //     quarter2: "8000",
  //     quarter3: "7500",
  //     quarter4: "8100",
  //     name: "jiMoHuanBingShu"
  //   },
  //   {
  //     item: "本季押犯总数",
  //     quarter1: "7000",
  //     quarter2: "7500",
  //     quarter3: "6800",
  //     quarter4: "9000",
  //     name: "benJiYaFanShu"
  //   },
  //   {
  //     item: "本季新犯数",
  //     quarter1: "10000",
  //     quarter2: "9000",
  //     quarter3: "9500",
  //     quarter4: "10000",
  //     name: "benJiXinFanShu"
  //   }
  // ];
  // private lineDataOneList = [
  //   {
  //     item: "一季度",
  //     本季发病数: 1,
  //     新投犯带病数: 2,
  //     季末患病数: 5,
  //     本季押犯总数: 6,
  //     本季新犯数: 6
  //   },
  //   {
  //     item: "二季度",
  //     本季发病数: 6,
  //     新投犯带病数: 2,
  //     季末患病数: 5,
  //     本季押犯总数: 5,
  //     本季新犯数: 6
  //   },
  //   {
  //     item: "三季度",
  //     本季发病数: 4,
  //     新投犯带病数: 2,
  //     季末患病数: 5,
  //     本季押犯总数: 5,
  //     本季新犯数: 6
  //   },
  //   {
  //     item: "四季度",
  //     本季发病数: 2,
  //     新投犯带病数: 2,
  //     季末患病数: 5,
  //     本季押犯总数: 6,
  //     本季新犯数: 6
  //   }
  // ];
  /** 折线图-2构造数据 */
  // private lineDataTwoList = [
  //   {
  //     item: "发病数比例",
  //     quarter1: "12000",
  //     quarter2: "13000",
  //     quarter3: "12000",
  //     quarter4: "13000",
  //     name: "faBingShuBiLi"
  //   },
  //   {
  //     item: "患病数比例",
  //     quarter1: "8600",
  //     quarter2: "8500",
  //     quarter3: "7900",
  //     quarter4: "8000",
  //     name: "huanBingShuBiLi"
  //   },
  //   {
  //     item: "新犯带病比例",
  //     quarter1: "6000",
  //     quarter2: "6000",
  //     quarter3: "6400",
  //     quarter4: "6100",
  //     name: "xinFaDaiBingBiLi"
  //   }
  // ];

  constructor(props: Iprops) {
    super(props);
    this.state = {
      visible: false,
      ModalTableData: [],
      lineDataOne: [],
      lineDataTwo: []
    };
  }
  // /** 处理折线图-1数据 */
  // public covertDataOne = (ResData: ModalTableTitleType[]) => {
  //   return this.lineDataOneList.map((value, index) => {
  //     ResData.forEach((value1, index1) => {
  //       const sub = "quarter" + `${index1 + 1}`;
  //       value[sub] = value1[value.name];
  //     });
  //   });
  // };
  // /** 处理折线图-2数据 */
  // public covertDataTwo = (ResData: ModalTableTitleType[]) => {
  //   return this.lineDataTwoList.map((value, index) => {
  //     ResData.forEach((value1, index1) => {
  //       const sub = "quarter" + `${index1 + 1}`;
  //       value[sub] = value1[value.name];
  //     });
  //   });
  // };

  /** 表格标题 */
  public tableTitle = () => (
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
      {"重点慢性病发病、患病情况"}
      <span style={{ float: "right" }}>
        <ReactHTMLTableToExcel
          id="test-table-xls-button-2"
          className="download-table-xls-button"
          table="table-to-xls-2"
          filename="tablexls"
          sheet="tablexls"
          buttonText="导出"
        />
      </span>
    </span>
  );

  /** 导出表格 */
  public componentDidMount(): void {
    const tableCon = ReactDOM.findDOMNode(this.tableRefs);
    if (tableCon instanceof Element) {
      const table = tableCon.querySelector("table");
      if (table) {
        table.setAttribute("id", "table-to-xls-2");
      }
    }
  }

  /** 弹出层 */
  public showModal = (text: string, params: any) => {
    this.setState({ visible: true });
    service
      .post(
        "/manXingJiDuFaBing/queryByBingZhong",
        {},
        { params: { bingZhong: text, year: params } }
      )
      .then(value => {
        // console.log(value.data);//[{},{},{},{}]
        /** 配置表格数据 */
        const arryA = new Array();
        const lineDataOneList = new Array();
        const lineDataTwoList = new Array();
        value.data.forEach((item: any, index: any) => {
          arryA.push({
            jiDu: `第${index + 1}季度`,
            benJiFaBingShu: `${item.benJiFaBingShu}`,
            xinTouFanDaiBingShu: `${item.xinTouFanDaiBingShu}`,
            jiMoHuanBingShu: `${item.jiMoHuanBingShu}`,
            benJiYaFanShu: `${item.benJiYaFanShu}`,
            benJiXinFanShu: `${item.benJiXinFanShu}`,
            faBingShuBiLi: `${item.faBingShuBiLi}`,
            huanBingShuBiLi: `${item.huanBingShuBiLi}`,
            xinFaDaiBingBiLi: `${item.xinFaDaiBingBiLi}`
          });
          lineDataOneList.push({
            item: `${index + 1}季度`,
            本季发病数: `${item.benJiFaBingShu}`,
            新投犯带病数: `${item.xinTouFanDaiBingShu}`,
            季末患病数: `${item.jiMoHuanBingShu}`,
            本季押犯总数: `${item.benJiYaFanShu}`,
            本季新犯数: `${item.benJiXinFanShu}`
          });
          lineDataTwoList.push({
            item: `${index + 1}季度`,
            发病数比例: `${item.faBingShuBiLi}`,
            患病数比例: `${item.huanBingShuBiLi}`,
            新犯带病比例: `${item.xinFaDaiBingBiLi}`
          });
        });

        // this.covertDataOne(value.data);
        // console.log(value.data);
        // console.log(this.lineDataOneList);
        // this.covertDataTwo(value.data);
        this.setState({
          ModalTableData: arryA,
          lineDataOne: lineDataOneList,
          lineDataTwo:lineDataTwoList
        });
      });
  };

  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Row>
          <Col span={12}>
            <Table
              dataSource={this.props.childrenData}
              columns={this.samallTableTiele}
              ref={ref => {
                this.tableRefs = ref;
              }}
              scroll={{
                x: true
              }}
              title={this.tableTitle}
              size={"small"}
              bordered={true}
              pagination={false}
            />
            <Modal
              visible={this.state.visible}
              onOk={(e: any) => {
                this.setState({
                  visible: false
                });
              }}
              onCancel={(e: any) => {
                this.setState({
                  visible: false
                });
              }}
              width={"70vw"}
            >
              <div style={{ padding: "20px" }}>
                <Row>
                  <Col span={20} offset={2}>
                    <Table
                      columns={this.ModalTableTitle}
                      size="middle"
                      dataSource={this.state.ModalTableData}
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
                          附表：年度发病情况
                        </span>
                      )}
                    />
                  </Col>
                </Row>
              </div>
              <div style={{ padding: "20px" }}>
                <Row>
                  <Col span={20} offset={2}>
                    <Line
                      titleChart={"附图：年度发病情况"}
                      chartData={this.state.lineDataOne}
                      lineXAxis={[
                        "本季发病数",
                        "新投犯带病数",
                        "季末患病数",
                        "本季押犯总数",
                        "本季新犯数"
                      ]}
                    />
                  </Col>
                </Row>
              </div>
              <div style={{ padding: "20px" }}>
                <Row>
                  <Col span={20} offset={2}>
                    <Line
                      titleChart={"附图：年度发病情况"}
                      chartData={this.state.lineDataTwo}
                      lineXAxis={["发病数比例", "患病数比例", "新犯带病比例"]}
                    />
                  </Col>
                </Row>
              </div>
            </Modal>
          </Col>
          <Col span={11} offset={1}>
            <GroupBar
              titleChart={"本季度重点慢性病发病情况"}
              chartData={this.props.groupBarData}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default withStyles(styles)(MorbidityModal);
