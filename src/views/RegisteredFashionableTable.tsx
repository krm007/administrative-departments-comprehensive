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
interface Istate {
  key?: string;
}
interface Iprops extends WithStyles<typeof styles> {}

/**
 * 描述：
 *  挂号分账
 * @author sunshixiong
 * @date 2019/1/8-20:37
 */
class RegisteredFashionableTable extends React.Component<Iprops, Istate> {
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
          <Tabs.TabPane tab={<span>门诊汇总个人日报表</span>} key="1">
            {this.state.key === "1" ? (
              <BocoTable
                title={"门诊汇总个人日报表"}
                url={"/menZhenHuiZongGeRen/page"}
                tableTitle={MoreTableTitleConfig.get("MenZhenHuiZongGeRen")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊挂账统计</span>} key="2">
            {this.state.key === "2" ? (
              <BocoTable
                title={"门诊挂账统计"}
                url={"/menZhenGuaZhangHuiZong/page"}
                tableTitle={MoreTableTitleConfig.get("MenZhenGuaZhangHuiZong")}
                formStructure={[
                  {
                    value: "xuanZeJianYu",
                    text: "选择监狱",
                    url: "/menZhenGuaZhangTongJi/getSelect"
                  }
                ]}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊汇总月报表</span>} key="3">
            {this.state.key === "3" ? (
              <BocoTable
                title={"门诊汇总月报表"}
                url={"/menZhenHuiZongYue/page"}
                tableTitle={MoreTableTitleConfig.get("MenZhenHuiZongYue")}
                timeFormat={1}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>挂号日报个人汇总报表</span>} key="4">
            {this.state.key === "4" ? (
              <BocoTable
                title={"挂号日报个人汇总报表"}
                url={"/guaHaoRiBaoGeRenHuiZong/page"}
                tableTitle={MoreTableTitleConfig.get("GuaHaoRiBaoGeRenHuiZong")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊业务收入凭证</span>} key="5">
            {this.state.key === "5" ? (
              <BocoTable
                title={"门诊业务收入凭证"}
                url={"/menZhenYeWuShouRu/page"}
                tableTitle={MoreTableTitleConfig.get("MenZhenYeWuShouRu")}
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

export default withStyles(styles)(RegisteredFashionableTable);
