import * as React from "react";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import { Tabs, Table, Row, Col, Modal, Button } from "antd";
import BocoTable from "./BocoTable";
import MoreTableTitleConfig from "../config/MoreTableTitleConfig";
import Pie from "./bizchart/Pie";
import Bar from "./bizchart/Bar";
import Line from "./bizchart/Line";

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    myChart: {
      padding: "20px"
    }
  });
interface Istate {
  visible?: boolean;
}
interface Iprops extends WithStyles<typeof styles> {}
/**
 * 描述：
 *  传染病统计查询
 * @author sunshixiong
 * @date 2019/1/9-10:16
 */
class InfectiousDiseaseStatisticsTable extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      visible: false
    };
  }
  public showModal = () => {
    this.setState({
      visible: true
    });
  };

  public handleOk = (e: any) => {
    // console.log(e);
    this.setState({
      visible: false
    });
  };

  public handleCancel = (e: any) => {
    // console.log(e);
    this.setState({
      visible: false
    });
  };

  public render() {
    const { classes } = this.props;
    /** 表头 */
    const columns = [
      {
        title: "",
        dataIndex: "name"
      },
      {
        title: "肺结核",
        dataIndex: "bing_1"
      },
      {
        title: "HIV阳性",
        dataIndex: "bing_2"
      },
      {
        title: "病毒性肝炎",
        dataIndex: "bing_3"
      },
      {
        title: "梅毒",
        dataIndex: "bing_4"
      },
      {
        title: "淋病",
        dataIndex: "bing_5"
      }
    ];
    /** 表格数据 */
    const data = [
      {
        key: "1",
        name: "总报告数",
        bing_1: "0",
        bing_2: "0",
        bing_3: "0",
        bing_4: "0",
        bing_5: "0"
      },
      {
        key: "2",
        name: "新投犯报告数",
        bing_1: "0",
        bing_2: "0",
        bing_3: "0",
        bing_4: "0",
        bing_5: "0"
      }
    ];
    /** 饼图数据 */
    const PieData = [
      {
        item: "肺结核",
        count: 0
      },
      {
        item: "病毒性肝炎",
        count: 38
      },
      {
        item: "HIV阳性",
        count: 66
      },
      {
        item: "梅毒",
        count: 78
      },
      {
        item: "淋病",
        count: 50
      }
    ];
    /** 分组柱状图数据 */
    const BarData = [
      {
        name: "总报告数",
        肺结核: 10,
        HIV阳性: 11,
        病毒性肝炎: 12,
        梅毒: 13,
        淋病: 14
      },
      {
        name: "新投犯报告数",
        肺结核: 5,
        HIV阳性: 6,
        病毒性肝炎: 7,
        梅毒: 8,
        淋病: 9
      }
    ];
    /** 分组柱状图的x轴显示字段 */
    const barXAxis = ["肺结核", "HIV阳性", "病毒性肝炎", "梅毒", "淋病"];
    /** 折线图数据 */
    const lineData = [
      {
        item: "2014",
        一季度: "2",
        二季度: "5",
        三季度: "4",
        四季度: "3"
      },
      {
        item: "2015",
        一季度: "0",
        二季度: "5",
        三季度: "3",
        四季度: "1"
      },
      {
        item: "2016",
        一季度: "5",
        二季度: "3",
        三季度: "4",
        四季度: "6"
      },
      {
        item: "2017",
        一季度: "4",
        二季度: "1",
        三季度: "5",
        四季度: "6"
      },
      {
        item: "2018",
        一季度: "2",
        二季度: "4",
        三季度: "6",
        四季度: "6"
      }
    ];
    /** modal数据 */
    const ModalColumns: any[] = [
      {
        title: "",
        dataIndex: "name"
      },
      {
        title: "2014",
        dataIndex: "bing_1"
      },
      {
        title: "2015",
        dataIndex: "bing_2"
      },
      {
        title: "2016",
        dataIndex: "bing_3"
      },
      {
        title: "2017",
        dataIndex: "bing_4"
      },
      {
        title: "2018",
        dataIndex: "bing_5"
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
        name: "第4季度",
        bing_1: "170",
        bing_2: "100",
        bing_3: "160",
        bing_4: "170",
        bing_5: "100"
      }
    ];
    return (
      <div className={classes.root}>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab={<span>法定传染病发病、死亡统计表</span>} key="1">
            <BocoTable
              title={"法定传染病发病、死亡统计表"}
              url={"/faDingChuanRanFaBing/page"}
              tableTitle={MoreTableTitleConfig.get("FaDingChuanRanTongJi")}
              timeFormat={1}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>法定传染病报告发病情况</span>} key="2">
            <BocoTable
              title={"法定传染病报告发病情况"}
              url={"/faDingChuanRanFaBing/page"}
              tableTitle={MoreTableTitleConfig.get("FaDingChuanRanFaBing")}
              timeFormat={1}
            />
            <Button
              type="primary"
              onClick={this.showModal}
              style={{ margin: "20px" }}
            >
              表头触发
            </Button>
            <Modal
              // title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
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
                            src={require("../images/chartIcon.png")}
                            alt=""
                            style={{
                              float: "left",
                              marginLeft: "1vw",
                              marginRight: "0.5vw"
                            }}
                          />
                          附表：近5年发病情况
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
                      titleChart={"报告发病情况"}
                      chartData={lineData}
                      lineXAxis={["一季度", "二季度", "三季度", "四季度"]}
                    />
                  </Col>
                </Row>
              </div>
            </Modal>
            <div className={classes.myChart}>
              <Row>
                <Col span={16} offset={4}>
                  <Pie
                    titleChart={"法定传染病发情况比例图"}
                    chartData={PieData}
                  />
                </Col>
              </Row>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>各机构法定传染病报告发病分布</span>} key="3">
            <BocoTable
              title={"各机构法定传染病报告发病分布"}
              url={"/faDingChuanRanFenBu/page"}
              tableTitle={MoreTableTitleConfig.get("FaDingChuanRanFenBu")}
              timeFormat={1}
              formStructure={[
                {
                  value: "quarter",
                  text: "选择季度",
                  data: [
                    { value: "Q1", key: "第一季度" },
                    { value: "Q2", key: "第二季度" },
                    { value: "Q3", key: "第三季度" },
                    { value: "Q4", key: "第四季度" }
                  ],
                  initialValue: true
                }
              ]}
            />
            <div className={classes.myChart}>
              <Row>
                <Col span={12}>
                  <Table
                    columns={columns}
                    size="middle"
                    dataSource={data}
                    pagination={false}
                    bordered={true}
                    title={() => (
                      <span style={{ padding: "10px" }}>
                        <img
                          src={require("../images/chartIcon.png")}
                          alt=""
                          style={{
                            float: "left",
                            marginLeft: "1vw",
                            marginRight: "0.5vw"
                          }}
                        />
                        法定传染病发病报告
                      </span>
                    )}
                  />
                </Col>
                <Col span={11} offset={1}>
                  <Bar
                    titleChart={"法定传染病发病报告"}
                    chartData={BarData}
                    barXAxis={barXAxis}
                  />
                </Col>
              </Row>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default withStyles(styles)(InfectiousDiseaseStatisticsTable);
