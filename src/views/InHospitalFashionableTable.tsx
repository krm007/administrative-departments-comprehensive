import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Tabs } from "antd";
import BocoTable from "./BocoTable";
import MoreTableTitleConfig from "../config/MoreTableTitleConfig";

const styles = (theme: Theme) => createStyles({ root: {} });

interface Istate {
  key?: string;
}

interface Iprops extends WithStyles<typeof styles> {}
/**
 * 描述：
 *  住院分账
 * @author sunshixiong
 * @date 2019/1/8-20:52
 */
@(withStyles as any)(styles)
class InHospitalFashionableTable extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      key: "1"
    };
  }
  public render() {
    return (
      <div>
        <Tabs
          activeKey={this.state.key}
          onChange={activeKey => this.setState({ key: activeKey })}
        >
          <Tabs.TabPane tab={<span>出院病人费用统计表</span>} key="1">
            {this.state.key === "1" ? (
              <BocoTable
                title={"出院病人费用统计表"}
                url={"/chuYuanBingRenFeiYong/page"}
                tableTitle={MoreTableTitleConfig.get("ChuYuanBingRenFeiYong")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>出院病人收入统计表</span>} key="2">
            {this.state.key === "2" ? (
              <BocoTable
                title={"出院病人收入统计表"}
                url={"/chuYuanBingRenShouRu/page"}
                tableTitle={MoreTableTitleConfig.get("ChuYuanBingRenShouRu")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>住院日报汇总</span>} key="3">
            {this.state.key === "3" ? (
              <BocoTable
                title={"住院日报汇总"}
                url={"zhuYuanRiBao/report"}
                tableTitle={MoreTableTitleConfig.get("ZhuYuanRiBao")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>住院清单汇总</span>} key="4">
            {this.state.key === "4" ? (
              <BocoTable
                title={"住院清单汇总"}
                url={"zhuYuanQingDan/page"}
                tableTitle={MoreTableTitleConfig.get("ZhuYuanQingDan")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>住院挂账统计</span>} key="5">
            {this.state.key === "5" ? (
              <BocoTable
                title={"住院挂账统计"}
                url={"heJi/ZhuYuanHuoShiFeiGuaZhang/queryPage"}
                tableTitle={MoreTableTitleConfig.get(
                  "ZhuYuanHuoShiFeiGuaZhang"
                )}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>出院病人结账汇总明细</span>} key="6">
            {this.state.key === "6" ? (
              <BocoTable
                title={"出院病人结账汇总明细"}
                url={"heJi/ChuYuanBingRenJieZhang/queryPage"}
                tableTitle={MoreTableTitleConfig.get("ChuYuanBingRenJieZhang")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>欠费查询</span>} key="7">
            {this.state.key === "7" ? (
              <BocoTable
                title={"欠费查询"}
                url={"heJi/QianFeiKongZhiChaXun/queryPage"}
                tableTitle={MoreTableTitleConfig.get("QianFeiKongZhiChaXun")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>医疗费申请核拨表</span>} key="8">
            {this.state.key === "8" ? (
              <BocoTable
                title={"医疗费申请核拨表"}
                url={"heJi/DingDianShenQingHeDui/queryPage"}
                tableTitle={MoreTableTitleConfig.get("DingDianShenQingHeDui")}
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

export default InHospitalFashionableTable;
