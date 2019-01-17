import * as React from "react";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import { Tabs, Table, Row, Col } from "antd";
import BocoTable from "./BocoTable";
import MoreTableTitleConfig from "../config/MoreTableTitleConfig";
import Bar from "./bizchart/Bar";
import NotifiableDiseaseTable from "./notifiable-disease/NotifiableDiseaseTable";

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    myChart: {
      padding: "20px"
    }
  });
interface Istate {
  visible?: boolean;
  key: string;
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
      visible: false,
      key: "1"
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

    return (
      <div className={classes.root}>
        <Tabs
          activeKey={this.state.key}
          onChange={activeKey => {
            this.setState({
              key: activeKey
            });
          }}
        >
          <Tabs.TabPane tab={<span>法定传染病发病、死亡统计表</span>} key="1">
            {this.state.key === "1" ? (
              <BocoTable
                title={"法定传染病发病、死亡统计表"}
                url={"faDingChuanRanTongJi/page"}
                tableTitle={MoreTableTitleConfig.get("FaDingChuanRanTongJi")}
                org={true}
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
                    initialValue: "Q1"
                  }
                ]}
                timeFormat={2}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>法定传染病报告发病情况</span>} key="2">
            {this.state.key === "2" ? <NotifiableDiseaseTable /> : <div />}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>各机构法定传染病报告发病分布</span>} key="3">
            {this.state.key === "3" ? (
              <div>
                <BocoTable
                  title={"各机构法定传染病报告发病分布"}
                  url={"/faDingChuanRanFenBu/page"}
                  tableTitle={MoreTableTitleConfig.get("FaDingChuanRanFenBu")}
                  timeFormat={2}
                  org={true}
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

export default withStyles(styles)(InfectiousDiseaseStatisticsTable);
