import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Tabs } from "antd";

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
            慢性病月度汇总表
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>慢性病季度汇总表</span>} key="2">
            慢性病季度汇总表
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>慢性病图表分析</span>} key="3">
            慢性病图表分析
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default ChronicDiseaseTable;
