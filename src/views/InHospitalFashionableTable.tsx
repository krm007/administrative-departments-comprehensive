import * as React from "react";
import { Tabs } from "antd";
import NormalTableTitleConfig from "../config/NormalTableTitleConfig";
import BocoTable from "./BocoTable";

/**
 * 描述：
 *  住院分账
 * @author sunshixiong
 * @date 2019/1/8-20:52
 */
class InHospitalFashionableTable extends React.Component {
  public render() {
    return (
      <div>
        <Tabs defaultActiveKey="2">
          <Tabs.TabPane tab={<span>出院病人费用统计表</span>} key="1">
            <BocoTable
              title={"慢性病月度汇总表"}
              tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>出院病人收入统计表</span>} key="2">
            <BocoTable
              title={"慢性病季度汇总表"}
              tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>住院日报汇总</span>} key="3">
            <BocoTable
              title={"慢性病季度汇总表"}
              tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>住院清单汇总</span>} key="4">
            <BocoTable
              title={"慢性病季度汇总表"}
              tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>住院挂账统计</span>} key="5">
            <BocoTable
              title={"慢性病季度汇总表"}
              tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>出院病人结账汇总明细</span>} key="6">
            <BocoTable
              title={"慢性病季度汇总表"}
              tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>欠费查询</span>} key="7">
            <BocoTable
              title={"慢性病季度汇总表"}
              tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>医疗费申请核拨表</span>} key="8">
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

export default InHospitalFashionableTable;
