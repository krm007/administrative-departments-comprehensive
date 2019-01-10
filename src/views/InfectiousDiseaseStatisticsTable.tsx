import * as React from "react";
import { Tabs } from "antd";
import BocoTable from "./BocoTable";
import MoreTableTitleConfig from "../config/MoreTableTitleConfig";

/**
 * 描述：
 *  传染病统计查询
 * @author sunshixiong
 * @date 2019/1/9-10:16
 */
class InfectiousDiseaseStatisticsTable extends React.Component {
  public render() {
    return (
      <div>
        <Tabs defaultActiveKey="2">
          <Tabs.TabPane tab={<span>法定传染病发病、死亡统计表</span>} key="1">
            <BocoTable
              title={"法定传染病发病、死亡统计表"}
              tableTitle={MoreTableTitleConfig.get("FaDingChuanRanTongJi")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>法定传染病报告发病情况</span>} key="2">
            <BocoTable
              title={"法定传染病报告发病情况"}
              tableTitle={MoreTableTitleConfig.get("FaDingChuanRanFaBing")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>各机构法定传染病报告发病分布</span>} key="3">
            <BocoTable
              title={"各机构法定传染病报告发病分布"}
              tableTitle={MoreTableTitleConfig.get("FaDingChuanRanFenBu")}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default InfectiousDiseaseStatisticsTable;
