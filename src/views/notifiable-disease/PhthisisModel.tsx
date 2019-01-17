import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Col, Modal, Row, Table } from "antd";
import Line from "../bizchart/Line";

const styles = (theme: Theme) =>
  createStyles<"root">({
    root: {}
  });

interface Iprops extends WithStyles<typeof styles> {
  model: boolean;
  onOk: () => void;
  onCancel: () => void;
  bingZhong: any;
}

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
  private ModalData: any[] = [
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
  /** 折线图数据 */
  private lineData = [
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

  public componentDidMount(): void {

  }

  public render() {
    const { classes } = this.props;
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
                <Table
                  columns={this.ModalColumns}
                  size="middle"
                  dataSource={this.ModalData}
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
                <line />
                <Line
                  titleChart={"报告发病情况"}
                  chartData={this.lineData}
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
