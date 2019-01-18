import * as React from "react";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import { Tabs } from "antd";
import BocoTable from "./BocoTable";
import MoreTableTitleConfig from "../config/MoreTableTitleConfig";
import NotifiableDiseaseTable from "./notifiable-disease/NotifiableDiseaseTable";
import StatutoryReportingTable from "./notifiable-disease/StatutoryReportingTable";

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    myChart: {
      padding: "20px"
    }
  });
interface Istate {
  key: string;
}
interface Iprops extends WithStyles<typeof styles> {}
/**
 * 描述：
 *  传染病统计查询
 * @author sunshixiong
 * @date 2019/1/9-10:16
 */
class InfectiousDiseaseStatisticsTable extends React.Component<Iprops, Istate> {
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
          onChange={activeKey => {
            this.setState({
              key: activeKey
            });
          }}
        >
          <Tabs.TabPane tab={<span>法定传染病发病、死亡统计表</span>} key="1">
            {this.state.key === "1" ? (
              <BocoTable
                title={"法定传染病发病、死亡统计表"}
                url={"faDingChuanRanTongJi/page"}
                tableTitle={MoreTableTitleConfig.get("FaDingChuanRanTongJi")}
                org={true}
                formStructure={[
                  {
                    value: "quarter",
                    text: "选择季度",
                    data: [
                      { value: "Q1", key: "第一季度" },
                      { value: "Q2", key: "第二季度" },
                      { value: "Q3", key: "第三季度" },
                      { value: "Q4", key: "第四季度" }
                    ],
                    initialValue: "Q1"
                  }
                ]}
                timeFormat={2}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>法定传染病报告发病情况</span>} key="2">
            {this.state.key === "2" ? <NotifiableDiseaseTable /> : <div />}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>各机构法定传染病报告发病分布</span>} key="3">
            {this.state.key === "3" ? <StatutoryReportingTable /> : <div />}
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default withStyles(styles)(InfectiousDiseaseStatisticsTable);
