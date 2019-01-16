import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Col, Row, Table, Tabs, Modal } from "antd";
import BocoTable from "./BocoTable";
import MoreTableTitleConfig from "../config/MoreTableTitleConfig";
import Pie from "./bizchart/Pie";
import GroupBar from "./bizchart/GroupBar";
import Line from "./bizchart/Line";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      // "& .ant-modal":{
      //     width:"80vw!important",
      //     "& .ant-modal-content":{
      //         width: "50vw!important"
      //     }
      // }
    },
    myChart: {
      padding: "20px"
    }
  });
interface Istate {
  visible?: boolean;
  key?: string;
}
interface Iprops extends WithStyles<typeof styles> {}

/**
 * 描述：
 *  慢病统计查询
 * @author 12859
 * @date 2019/1/8-17:11
 */
@(withStyles as any)(styles)
class ChronicDiseaseTable extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      visible: false,
      key: "1"
    };
  }
  public showModal = () => {
    this.setState({ visible: true });
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
    /** 饼图数据 */
    const PieData = [
      {
        item: "心脑血管病",
        count: 701
      },
      {
        item: "内分泌营养代谢疾病",
        count: 185
      },
      {
        item: "精神疾病",
        count: 57
      },
      {
        item: "运动系统疾病",
        count: 48
      },
      {
        item: "消化系统疾病",
        count: 121
      },
      {
        item: "呼吸系统疾病",
        count: 91
      },
      {
        item: "泌尿生殖系统疾病",
        count: 36
      },
      {
        item: "神经系统疾病",
        count: 20
      },
      {
        item: "血液造血系统疾病",
        count: 6
      },
      {
        item: "恶性肿瘤",
        count: 0
      },
      {
        item: "免疫风湿性疾病",
        count: 0
      },
      {
        item: "其他",
        count: 10
      }
    ];
    /** 表头 */
    const columns = [
      {
        title: "",
        dataIndex: "name",
        render: (text: any) => <a onClick={this.showModal}>{text}</a>
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
        title: "狱内发病数",
        dataIndex: "bing_3"
      }
    ];
    /** 表格数据 */
    const data = [
      {
        key: "1",
        name: "高血压",
        bing_1: "170",
        bing_2: "100",
        bing_3: "160"
      },
      {
        key: "2",
        name: "冠心病",
        bing_1: "170",
        bing_2: "100",
        bing_3: "1660"
      },
      {
        key: "3",
        name: "脑卒中",
        bing_1: "500",
        bing_2: "390",
        bing_3: "1060"
      },
      {
        key: "4",
        name: "糖尿病",
        bing_1: "950",
        bing_2: "900",
        bing_3: "2160"
      },
      {
        key: "5",
        name: "恶性肿瘤",
        bing_1: "1800",
        bing_2: "130",
        bing_3: "960"
      },
      {
        key: "6",
        name: "精神病",
        bing_1: "2800",
        bing_2: "2260",
        bing_3: "2060"
      }
    ];
    /** 分组柱状图数据 */
    const groupBarData = [
      {
        label: "精神病",
        狱内发病数: 2800,
        新投犯带病入监数: 2260,
        本季发病数: 2060
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
        <Tabs
          activeKey={this.state.key}
          onChange={activeKey => this.setState({ key: activeKey })}
        >
          <Tabs.TabPane tab={<span>慢性病月度汇总表</span>} key="1">
            {this.state.key === "1" ? (
              <BocoTable
                title={"慢性病月度汇总表"}
                url={"/hisZhongDianManXingBing/page"}
                tableTitle={MoreTableTitleConfig.get("HisZhongDianManXingBing")}
                timeFormat={1}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>慢性病季度汇总表</span>} key="2">
            {this.state.key === "2" ? (
              <BocoTable
                title={"慢性病季度汇总表"}
                url={"/zhongDianManXingBing/page"}
                tableTitle={MoreTableTitleConfig.get("ZhongDianManXingBing")}
                timeFormat={1}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>慢性病图表分析</span>} key="3">
            {this.state.key === "3" ? (
              <div>
                <BocoTable
                  title={"慢性病季度分布情况"}
                  tableTitle={MoreTableTitleConfig.get("")}
                  timeFormat={1}
                />
                <div className={classes.myChart}>
                  <Row>
                    <Col span={20} offset={2}>
                      <Pie
                        titleChart={"本季度慢性病分布情况"}
                        chartData={PieData}
                      />
                    </Col>
                  </Row>
                </div>
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
                            重点慢性病发病、患病情况
                          </span>
                        )}
                      />
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
                                lineXAxis={[
                                  "一季度",
                                  "二季度",
                                  "三季度",
                                  "四季度"
                                ]}
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
              </div>
            ) : (
              <div />
            )}
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default ChronicDiseaseTable;
