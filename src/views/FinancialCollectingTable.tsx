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
 *  财务分账
 * @author sunshixiong
 * @date 2019/1/8-20:43
 */
@(withStyles as any)(styles)
class FinancialCollectingTable extends React.Component<Iprops, Istate> {
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
          <Tabs.TabPane tab={<span>在院病人费用汇总报表</span>} key="1">
            {this.state.key === "1" ? (
              <BocoTable
                title={"在院病人费用汇总报表"}
                url={"/yuanBingQuFeiYong/page"}
                tableTitle={MoreTableTitleConfig.get("YuanBingQuFeiYong")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>出院病人费用统计表</span>} key="2">
            {this.state.key === "2" ? (
              <BocoTable
                title={"出院病人费用统计表"}
                url={"/bingQuChuYuanYingShou/page"}
                tableTitle={MoreTableTitleConfig.get("BingQuChuYuanYingShou")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊医药费开单医生汇总</span>} key="3">
            {this.state.key === "3" ? (
              <BocoTable
                title={"门诊医药费开单医生汇总"}
                url={"/menZhenKeShiFeiYong/page"}
                tableTitle={MoreTableTitleConfig.get("MenZhenKeShiFeiYong")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊医药费开单科室汇总表</span>} key="4">
            {this.state.key === "4" ? (
              <BocoTable
                title={"门诊医药费开单科室汇总表"}
                url={"/menZhenKaiDanKeShiFei/page"}
                tableTitle={MoreTableTitleConfig.get("MenZhenKaiDanKeShiFei")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊日报汇总</span>} key="5">
            {this.state.key === "5" ? (
              <BocoTable
                title={"门诊日报汇总"}
                url={"/riBaoHuiZongChaXun/page"}
                tableTitle={MoreTableTitleConfig.get("RiBaoHuiZongChaXun")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊清单汇总</span>} key="6">
            {this.state.key === "6" ? (
              <BocoTable
                title={"门诊清单汇总"}
                url={"/menZhenHuiZongQingDan/page"}
                tableTitle={MoreTableTitleConfig.get("MenZhenHuiZongQingDan")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>住院日报汇总</span>} key="7">
            {this.state.key === "7" ? (
              <BocoTable
                title={"住院日报汇总"}
                url={"/zhuYuanRiBao/report"}
                tableTitle={MoreTableTitleConfig.get("ZhuYuanRiBao")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>住院清单汇总</span>} key="8">
            {this.state.key === "8" ? (
              <BocoTable
                title={"住院清单汇总"}
                url={"/zhuYuanQingDan/page"}
                tableTitle={MoreTableTitleConfig.get("ZhuYuanQingDan")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊挂账统计明细</span>} key="9">
            {this.state.key === "9" ? (
              <BocoTable
                title={"门诊挂账统计明细"}
                url={"menZhenGuaZhangTongJi/page"}
                tableTitle={MoreTableTitleConfig.get("MenZhenGuaZhangTongJi")}
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
          <Tabs.TabPane tab={<span>门诊挂账统计单位汇总</span>} key="10">
            {this.state.key === "10" ? (
              <BocoTable
                title={"门诊挂账统计单位汇总"}
                url={"/menZhenGuaZhangHuiZong/page"}
                tableTitle={MoreTableTitleConfig.get("MenZhenGuaZhangHuiZong")}
              />
            ) : (
              <div />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>住院挂账统计</span>} key="11">
            {this.state.key === "11" ? (
              <BocoTable
                title={"住院挂账统计"}
                url={"/zhuYuanHuoShiFeiGuaZhang/page"}
                tableTitle={MoreTableTitleConfig.get(
                  "ZhuYuanHuoShiFeiGuaZhang"
                )}
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

export default FinancialCollectingTable;
