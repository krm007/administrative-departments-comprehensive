import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import {Tabs, Button, Row, Col, Table, Modal} from "antd";
import BocoTable from "./BocoTable";
import MoreTableTitleConfig from "../config/MoreTableTitleConfig";

const styles = (theme: Theme) =>
    createStyles({
      root: {
      },
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
 *  远程影像查询
 * @author sunshixiong
 * @date 2019/1/8-20:25
 */
@(withStyles as any)(styles)
class RemoteImageQueryTable extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      visible: false
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
    const ModalColumns: any[] = [
      {
        title: "医师姓名",
        dataIndex: "yishixingming"
      },
      {
        title: "报告数量",
        dataIndex: "baogaoshuliang"
      },
      {
        title: "放射报告",
        dataIndex: "fangshebaogao"
      },
      {
        title: "超声报告",
        dataIndex: "chaoshengbaogao"
      }
    ];
    const ModalData: any[] = [
      {
        key: "1",
        yishixingming: "张三",
        baogaoshuliang:"480",
        fangshebaogao:"123",
        chaoshengbaogao:"456"
      }
    ];
    return (
      <div className={classes.root}>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab={<span>区域影像平台统计查询</span>} key="1">
            <BocoTable
              title={"区域影像平台统计查询"}
              tableTitle={MoreTableTitleConfig.get("QuYuYingXiangTongJi")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>区域设备统计查询</span>} key="2">
            <BocoTable
              title={"区域设备统计查询"}
              tableTitle={MoreTableTitleConfig.get("QuYuSheBeiTongJi")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>区域医生工作量统计查询</span>} key="3">
            <BocoTable
              title={"区域医生工作量统计查询"}
              tableTitle={MoreTableTitleConfig.get("QuYuYiShengGongZuo")}
            />
            <Button onClick={this.showModal} type={"primary"} style={{margin:"20px"}}>触发弹框</Button>
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
                                附表：医生工作量统计明细
                              </span>
                        )}
                    />
                  </Col>
                </Row>
              </div>
            </Modal>
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>区域跨院写报告统计</span>} key="4">
            <BocoTable
              title={"区域跨院写报告统计"}
              tableTitle={MoreTableTitleConfig.get("QuYuKuaYuanBaoGao")}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default RemoteImageQueryTable;
