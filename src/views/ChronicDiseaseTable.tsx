import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Tabs } from "antd";
import BocoTable from "./BocoTable";
import MoreTableTitleConfig from "../config/MoreTableTitleConfig";
import Pie from "./bizchart/Pie";
import GroupBar from "./bizchart/GroupBar";

const styles = (theme: Theme) =>
  createStyles<"root">({
    root: {}
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
  public render() {
    const { classes } = this.props;
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
                title={"本季度慢性病分布情况表"}
                tableTitle={MoreTableTitleConfig.get("")}
            />
            <Pie titleChart={"本季度慢性病分布情况"}/>
            <GroupBar titleChart={"本季度重点慢性病发病情况"}/>
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default ChronicDiseaseTable;
