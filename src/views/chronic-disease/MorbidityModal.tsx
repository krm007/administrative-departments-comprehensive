import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Col, Modal, Row, Table } from "antd";
import Line from "../bizchart/Line";
import GroupBar from "../bizchart/GroupBar";
import * as ReactDOM from "react-dom";
import { ColumnProps } from "antd/lib/table";
import ReactHTMLTableToExcel from "../../component/ReactHTMLTableToExcel";

const styles = (theme: Theme) =>
  createStyles<"root">({
    root: {}
  });

interface Istate {
  visible: boolean;
}

interface Iprops extends WithStyles<typeof styles> {
  childrenData: any;
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

class MorbidityModal extends React.Component<Iprops, Istate> {
  /** 表格节点 */
  private tableRefs: any;
  /** 表头 */
  private samallTableTiele: Array<ColumnProps<SmallTableDataInfo>> = [
    {
      title: "",
      dataIndex: "manBingBingZhong",
      render: (text: any) => <a onClick={this.showModal}>{text}</a>
    },
    {
      title: "本季发病数",
      dataIndex: "benJiFaBingShu"
    },
    {
      title: "新投犯带病入监数",
      dataIndex: "xinFanDaiBingRuJianShu"
    },
    {
      title: "狱内发病数",
      dataIndex: "yuNeiFaBingShu"
    }
  ];

  constructor(props: Iprops) {
    super(props);
    this.state = {
      visible: false
    };
  }

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
  public showModal = () => {
    this.setState({ visible: true });
  };

  public render() {
    const { classes } = this.props;

    /** 分组柱状图数据 */
    const groupBarData =this.props.childrenData.map((item:any)=>{
      console.log(item.manBingBingZhong);
      return [
        {
          label: "manBingBingZhong",
          狱内发病数: "yuNeiFaBingShu",
          新投犯带病入监数: "xinFanDaiBingRuJianShu",
          本季发病数: "benJiFaBingShu"
        },
        {
          label: "恶性肿瘤",
          狱内发病数: 1800,
          新投犯带病入监数: 1300,
          本季发病数: 960
        },
        {
          label: "糖尿病",
          狱内发病数: 950,
          新投犯带病入监数: 900,
          本季发病数: 2160
        },
        {
          label: "脑卒中",
          狱内发病数: 500,
          新投犯带病入监数: 390,
          本季发病数: 1060
        },
        {
          label: "冠心病",
          狱内发病数: 170,
          新投犯带病入监数: 100,
          本季发病数: 1660
        },
        {
          label: "高血压",
          狱内发病数: 170,
          新投犯带病入监数: 100,
          本季发病数: 160
        }
      ];
    })
    /** 折线图数据 */
    const lineData = [
      {
        item: "本季发病数",
        一季度: "4800",
        二季度: "4800",
        三季度: "5600",
        四季度: "5400"
      },
      {
        item: "新投犯带病数",
        一季度: "2000",
        二季度: "2100",
        三季度: "2000",
        四季度: "2000"
      },
      {
        item: "季末患病数",
        一季度: "8000",
        二季度: "8000",
        三季度: "7500",
        四季度: "8100"
      },
      {
        item: "本季押犯总数",
        一季度: "7000",
        二季度: "7500",
        三季度: "6800",
        四季度: "9000"
      },
      {
        item: "本季新犯数",
        一季度: "10000",
        二季度: "9000",
        三季度: "9500",
        四季度: "10000"
      },
      {
        item: "发病数比例",
        一季度: "12000",
        二季度: "13000",
        三季度: "12000",
        四季度: "13000"
      },
      {
        item: "患病数比例",
        一季度: "8600",
        二季度: "8500",
        三季度: "7900",
        四季度: "8000"
      },
      {
        item: "新犯带病比例",
        一季度: "6000",
        二季度: "6000",
        三季度: "6400",
        四季度: "6100"
      }
    ];
    /** modal数据 */
    const ModalColumns: any[] = [
      {
        title: "",
        dataIndex: "name"
      },
      {
        title: "本季发病数",
        dataIndex: "bing_1"
      },
      {
        title: "新投犯带病入监数",
        dataIndex: "bing_2"
      },
      {
        title: "季末患病数",
        dataIndex: "bing_3"
      },
      {
        title: "当季押犯总数",
        dataIndex: "bing_4"
      },
      {
        title: "当新犯数",
        dataIndex: "bing_5"
      },
      {
        title: "发病数比例",
        dataIndex: "bing_6"
      },
      {
        title: "患病数比例",
        dataIndex: "bing_7"
      },
      {
        title: "新犯带病比例",
        dataIndex: "bing_8"
      }
    ];
    const ModalData: any[] = [
      {
        key: "1",
        name: "第一季度",
        bing_1: "170",
        bing_2: "100",
        bing_3: "160",
        bing_4: "170",
        bing_5: "100",
        bing_6: "160",
        bing_7: "100",
        bing_8: "160"
      },
      {
        key: "2",
        name: "第二季度",
        bing_1: "170",
        bing_2: "100",
        bing_3: "160",
        bing_4: "170",
        bing_5: "100",
        bing_6: "160",
        bing_7: "100",
        bing_8: "160"
      },
      {
        key: "3",
        name: "第三季度",
        bing_1: "170",
        bing_2: "100",
        bing_3: "160",
        bing_4: "170",
        bing_5: "100",
        bing_6: "160",
        bing_7: "100",
        bing_8: "160"
      },
      {
        key: "4",
        name: "第4季度",
        bing_1: "170",
        bing_2: "100",
        bing_3: "160",
        bing_4: "170",
        bing_5: "100",
        bing_6: "160",
        bing_7: "100",
        bing_8: "160"
      }
    ];
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
              // title="Basic Modal"
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
                      columns={ModalColumns}
                      size="middle"
                      dataSource={ModalData}
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
                      titleChart={"本季度重点慢性病发病情况"}
                      chartData={lineData}
                      lineXAxis={["一季度", "二季度", "三季度", "四季度"]}
                    />
                  </Col>
                </Row>
              </div>
            </Modal>
          </Col>
          <Col span={11} offset={1}>
            <GroupBar
              titleChart={"本季度重点慢性病发病情况"}
              chartData={groupBarData}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default withStyles(styles)(MorbidityModal);
