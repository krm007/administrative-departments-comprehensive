import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Col, Row, Table, Tabs } from "antd";
import BocoTable from "./BocoTable";
import MoreTableTitleConfig from "../config/MoreTableTitleConfig";
import Pie from "./bizchart/Pie";
import GroupBar from "./bizchart/GroupBar";

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
 *  慢病统计查询
 * @author 12859
 * @date 2019/1/8-17:11
 */
@(withStyles as any)(styles)
class ChronicDiseaseTable extends React.Component<Iprops> {
    public getDieasaInfo:()=>{

    }
  public render() {
    const { classes } = this.props;
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
        render: (text:any) => <span onClick={this.getDieasaInfo}>{text}</span>,
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
    /** 条形图数据 */
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
    return (
      <div className={classes.root}>
        <Tabs defaultActiveKey="2">
          <Tabs.TabPane tab={<span>慢性病月度汇总表</span>} key="1">
            <BocoTable
              title={"慢性病月度汇总表"}
              tableTitle={MoreTableTitleConfig.get("HisZhongDianManXingBing")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>慢性病季度汇总表</span>} key="2">
            <BocoTable
              title={"慢性病季度汇总表"}
              tableTitle={MoreTableTitleConfig.get("ZhongDianManXingBing")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>慢性病图表分析</span>} key="3">
            <BocoTable
              title={"慢性病季度分布情况"}
              tableTitle={MoreTableTitleConfig.get("")}
            />
            <div className={classes.myChart}>
              <Row>
                <Col span={11}>
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
                </Col>
                <Col span={11} offset={1}>
                  <GroupBar titleChart={"本季度重点慢性病发病情况"} chartData={groupBarData}/>
                </Col>
              </Row>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default ChronicDiseaseTable;
