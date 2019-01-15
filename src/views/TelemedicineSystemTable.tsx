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
 *  远程医疗统计查询
 * @author sunshixiong
 * @date 2019/1/8-17:11
 */
@(withStyles as any)(styles)
class TelemedicineSystemTable extends React.Component<Iprops> {
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab={<span>远程会诊统计</span>} key="1">
            <BocoTable
              title={"远程会诊统计"}
              url={"/yuanChengHuiZhen/page"}
              tableTitle={MoreTableTitleConfig.get("YuanChengHuiZhen")}
              formStructure={[
                {
                  value: "huiZhenLeiXing",
                  text: "会诊类型",
                  url: "/yuanChengHuiZhen/getHuiZhenXueKe"
                }
              ]}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>远程门诊统计</span>} key="2">
            <BocoTable
              title={"远程门诊统计"}
              tableTitle={MoreTableTitleConfig.get("YuanChengMenZhen")}
              url={"/yuanChengMenZhen/page"}
              formStructure={[
                {
                  value: "huiZhenLeiXing",
                  text: "会诊类型",
                  url: "/yuanChengHuiZhen/getHuiZhenXueKe"
                }
              ]}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default TelemedicineSystemTable;
