import * as React from "react";
import { Tabs } from "antd";
import BocoTable from "./BocoTable";
import MoreTableTitleConfig from "../config/MoreTableTitleConfig";

/**
 * 描述：
 *  财务分账
 * @author sunshixiong
 * @date 2019/1/8-20:43
 */
class FinancialCollectingTable extends React.Component {
  public render() {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab={<span>在院病人费用汇总报表</span>} key="1">
            <BocoTable
              title={"在院病人费用汇总报表"}
              url={"/yuanBingQuFeiYong/page"}
              tableTitle={MoreTableTitleConfig.get("YuanBingQuFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>出院病人费用统计表</span>} key="2">
            <BocoTable
              title={"出院病人费用统计表"}
              url={"/bingQuChuYuanYingShou/page"}
              tableTitle={MoreTableTitleConfig.get("BingQuChuYuanYingShou")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊医药费开单医生汇总</span>} key="3">
            <BocoTable
              title={"门诊医药费开单医生汇总"}
              url={"/menZhenKeShiFeiYong/page"}
              tableTitle={MoreTableTitleConfig.get("MenZhenKeShiFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊医药费开单科室汇总表</span>} key="4">
            <BocoTable
              title={"门诊医药费开单科室汇总表"}
              url={"/menZhenKaiDanKeShiFei/page"}
              tableTitle={MoreTableTitleConfig.get("MenZhenKaiDanKeShiFei")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊日报汇总</span>} key="5">
            <BocoTable
              title={"门诊日报汇总"}
              url={"/riBaoHuiZongChaXun/page"}
              tableTitle={MoreTableTitleConfig.get("RiBaoHuiZongChaXun")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊清单汇总</span>} key="6">
            <BocoTable
              title={"门诊清单汇总"}
              url={"/menZhenHuiZongQingDan/page"}
              tableTitle={MoreTableTitleConfig.get("MenZhenHuiZongQingDan")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>住院日报汇总</span>} key="7">
            <BocoTable
              title={"住院日报汇总"}
              url={"/zhuYuanRiBao/report"}
              tableTitle={MoreTableTitleConfig.get("ZhuYuanRiBao")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>住院清单汇总</span>} key="8">
            <BocoTable
              title={"住院清单汇总"}
              url={"/zhuYuanQingDan/page"}
              tableTitle={MoreTableTitleConfig.get("ZhuYuanQingDan")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊挂账统计明细</span>} key="9">
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
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊挂账统计单位汇总</span>} key="10">
            <BocoTable
              title={"门诊挂账统计单位汇总"}
              url={"/menZhenGuaZhangHuiZong/page"}
              tableTitle={MoreTableTitleConfig.get("MenZhenGuaZhangHuiZong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>住院挂账统计</span>} key="11">
            <BocoTable
              title={"住院挂账统计"}
              url={"/zhuYuanHuoShiFeiGuaZhang/page"}
              tableTitle={MoreTableTitleConfig.get("ZhuYuanHuoShiFeiGuaZhang")}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default FinancialCollectingTable;
