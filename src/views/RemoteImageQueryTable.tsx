import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Tabs } from "antd";
import BocoTable from "./BocoTable";
import MoreTableTitleConfig from "../config/MoreTableTitleConfig";

const styles = (theme: Theme) =>
  createStyles({
    root: {},
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
 *  远程影像查询
 * @author sunshixiong
 * @date 2019/1/8-20:25
 */
@(withStyles as any)(styles)
class RemoteImageQueryTable extends React.Component<Iprops, Istate> {
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
    return (
      <div className={classes.root}>
        <Tabs
          activeKey={this.state.key}
          onChange={activeKey => this.setState({ key: activeKey })}
        >
          <Tabs.TabPane tab={<span>区域影像平台统计查询</span>} key="1">
            {this.state.key === "1" ? (
              <BocoTable
                title={"区域影像平台统计查询"}
                url={"/quYuYingXiangTongJi/page"}
                tableTitle={MoreTableTitleConfig.get("QuYuYingXiangTongJi")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>区域设备统计查询</span>} key="2">
            {this.state.key === "2" ? (
              <BocoTable
                title={"区域设备统计查询"}
                url={"/quYuSheBeiTongJi/page"}
                tableTitle={MoreTableTitleConfig.get("QuYuSheBeiTongJi")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>区域医生工作量统计查询</span>} key="3">
            {}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>区域跨院写报告统计</span>} key="4">
            {this.state.key === "4" ? (
              <BocoTable
                title={"区域跨院写报告统计"}
                url={"/quYuKuaYuanBaoGao/page"}
                tableTitle={MoreTableTitleConfig.get("QuYuKuaYuanBaoGao")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default RemoteImageQueryTable;
