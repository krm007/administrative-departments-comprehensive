import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Tabs } from "antd";
import BocoTable from "./BocoTable";
import MoreTableTitleConfig from "../config/MoreTableTitleConfig";

import ChronicChart from "./chronic-disease/ChronicChart";

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
 *  慢病统计查询
 * @author 12859
 * @date 2019/1/8-17:11
 */
@(withStyles as any)(styles)
class ChronicDiseaseTable extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      visible: false,
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
          <Tabs.TabPane tab={<span>慢性病月度汇总表</span>} key="1">
            {this.state.key === "1" ? (
              <BocoTable
                title={"慢性病月度汇总表"}
                url={"/hisZhongDianManXingBing/page"}
                tableTitle={MoreTableTitleConfig.get("HisZhongDianManXingBing")}
                timeFormat={1}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>慢性病季度汇总表</span>} key="2">
            {this.state.key === "2" ? (
              <BocoTable
                title={"慢性病季度汇总表"}
                url={"/zhongDianManXingBing/page"}
                tableTitle={MoreTableTitleConfig.get("ZhongDianManXingBing")}
                timeFormat={1}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>慢性病图表分析</span>} key="3">
            {this.state.key === "3" ? <ChronicChart /> : <div />}
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default ChronicDiseaseTable;
