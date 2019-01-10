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
 *  挂号分账
 * @author sunshixiong
 * @date 2019/1/8-20:37
 */
class RegisteredFashionableTable extends React.Component<Iprops> {
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Tabs defaultActiveKey="2">
          <Tabs.TabPane tab={<span>门诊汇总个人日报表</span>} key="1">
            <BocoTable
              title={"门诊汇总个人日报表"}
              tableTitle={MoreTableTitleConfig.get("MenZhenHuiZongGeRen")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊挂账统计</span>} key="2">
            <BocoTable
              title={"门诊挂账统计"}
              tableTitle={MoreTableTitleConfig.get("MenZhenGuaZhangHuiZong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊汇总月报表</span>} key="3">
            <BocoTable
              title={"门诊汇总月报表"}
              tableTitle={MoreTableTitleConfig.get("MenZhenHuiZongYue")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>挂号日报个人汇总报表</span>} key="4">
            <BocoTable
              title={"挂号日报个人汇总报表"}
              tableTitle={MoreTableTitleConfig.get("GuaHaoRiBaoGeRenHuiZong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊业务收入凭证</span>} key="5">
            <BocoTable
              title={"门诊业务收入凭证"}
              tableTitle={MoreTableTitleConfig.get("MenZhenYeWuShouRu")}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default withStyles(styles)(RegisteredFashionableTable);
