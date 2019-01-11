import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Tabs } from "antd";
import BocoTable from "./BocoTable";
import MoreTableTitleConfig from "../config/MoreTableTitleConfig";

const styles = (theme: Theme) =>
  createStyles<"root">({
    root: {}
  });

interface Iprops extends WithStyles<typeof styles> {}

/**
 * 描述：
 *  检验查询
 * @author sunshixiong
 * @date 2019/1/8-20:31
 */
class CheckQueryTable extends React.Component<Iprops> {
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab={<span>检验工作量统计查询</span>} key="1">
            <BocoTable
              title={"检验工作量统计查询"}
              tableTitle={MoreTableTitleConfig.get("")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>检验标本可接受性统计查询</span>} key="2">
            <BocoTable
              title={"检验标本可接受性统计查询"}
              tableTitle={MoreTableTitleConfig.get("JianYanBiaoBenTongJi")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>检验报告质量统计查询</span>} key="3">
            <BocoTable
              title={"检验报告质量统计查询"}
              tableTitle={MoreTableTitleConfig.get("JianYanBiaoBenTongJi")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>检验周转时间统计查询</span>} key="4">
            <BocoTable
              title={"检验周转时间统计查询"}
              tableTitle={MoreTableTitleConfig.get("JianYanBiaoBenTongJi")}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default withStyles(styles)(CheckQueryTable);
