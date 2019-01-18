import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Tabs } from "antd";
import BocoTable from "./BocoTable";
import MoreTableTitleConfig from "../config/MoreTableTitleConfig";
import JianYanWorkStatics from "./jianYanWorkStatic/JianYanWorkStatics";

const styles = (theme: Theme) =>
  createStyles<"root">({
    root: {}
  });
interface Istate {
  key?: string;
}
interface Iprops extends WithStyles<typeof styles> {}

/**
 * 描述：
 *  检验查询
 * @author sunshixiong
 * @date 2019/1/8-20:31
 */
class CheckQueryTable extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      key: "1"
    };
  }
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Tabs
          activeKey={this.state.key}
          onChange={activeKey => this.setState({ key: activeKey })}
        >
          <Tabs.TabPane tab={<span>检验工作量统计查询</span>} key="1">
            {this.state.key === "1" ? (
              <JianYanWorkStatics title={"检验工作量统计"}/>
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>检验标本可接受性统计查询</span>} key="2">
            {this.state.key === "2" ? (
              <BocoTable
                title={"检验标本可接受性统计查询"}
                url={"/jianYanBiaoBenTongJi/page1"}
                tableTitle={MoreTableTitleConfig.get("JianYanBiaoBenTongJi")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>检验报告质量统计查询</span>} key="3">
            {this.state.key === "3" ? (
              <BocoTable
                title={"检验报告质量统计查询"}
                url={"/jianYanBiaoBenTongJi/page2"}
                tableTitle={MoreTableTitleConfig.get("JianYanBiaoBenTongJi")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>检验周转时间统计查询</span>} key="4">
            {this.state.key === "4" ? (
              <BocoTable
                title={"检验周转时间统计查询"}
                url={"/jianYanBiaoBenTongJi/page3"}
                tableTitle={MoreTableTitleConfig.get("JianYanBiaoBenTongJi")}
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

export default withStyles(styles)(CheckQueryTable);
