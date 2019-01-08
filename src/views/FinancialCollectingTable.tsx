import * as React from "react";
import { Tabs } from "antd";
import NormalTableTitleConfig from "../config/NormalTableTitleConfig";
import BocoTable from "./BocoTable";

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
        <Tabs defaultActiveKey="2">
          <Tabs.TabPane tab={<span>在院病人费用汇总报表</span>} key="1">
            <BocoTable
              title={"慢性病月度汇总表"}
              tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>出院病人费用统计表</span>} key="2">
            <BocoTable
              title={"慢性病季度汇总表"}
              tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊医药费开单医生汇总</span>} key="3">
            <BocoTable
              title={"慢性病季度汇总表"}
              tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊医药费开单科室汇总表</span>} key="4">
            <BocoTable
              title={"慢性病季度汇总表"}
              tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊日报汇总</span>} key="5">
            <BocoTable
                title={"慢性病季度汇总表"}
                tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊清单汇总</span>} key="6">
            <BocoTable
                title={"慢性病季度汇总表"}
                tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>住院日报汇总</span>} key="7">
            <BocoTable
                title={"慢性病季度汇总表"}
                tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>住院清单汇总</span>} key="8">
            <BocoTable
                title={"慢性病季度汇总表"}
                tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊挂账统计明细</span>} key="9">
            <BocoTable
                title={"慢性病季度汇总表"}
                tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>门诊挂账统计单位汇总</span>} key="10">
            <BocoTable
                title={"慢性病季度汇总表"}
                tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>住院挂账统计</span>} key="11">
            <BocoTable
                title={"慢性病季度汇总表"}
                tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default FinancialCollectingTable;
