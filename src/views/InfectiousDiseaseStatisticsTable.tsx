import * as React from "react";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import { Tabs, Table, Row, Col } from "antd";
import BocoTable from "./BocoTable";
import MoreTableTitleConfig from "../config/MoreTableTitleConfig";
import Pie from "./bizchart/Pie";
import Bar from "./bizchart/Bar";

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    myChart: {
      padding: "20px"
    }
  });

interface Iprops extends WithStyles<typeof styles> {}
/**
 * 描述：
 *  传染病统计查询
 * @author sunshixiong
 * @date 2019/1/9-10:16
 */
class InfectiousDiseaseStatisticsTable extends React.Component<Iprops> {
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
    return (
      <div className={classes.root}>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab={<span>法定传染病发病、死亡统计表</span>} key="1">
            <BocoTable
              title={"法定传染病发病、死亡统计表"}
              tableTitle={MoreTableTitleConfig.get("FaDingChuanRanTongJi")
              }
              month={true}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>法定传染病报告发病情况</span>} key="2">
            <BocoTable
              title={"法定传染病报告发病情况"}
              tableTitle={MoreTableTitleConfig.get("FaDingChuanRanFaBing")}
              month={true}
            />
            <div className={classes.myChart}>
              <Row>
                <Col span={11}>
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
              tableTitle={MoreTableTitleConfig.get("FaDingChuanRanFenBu")}
              month={true}
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
