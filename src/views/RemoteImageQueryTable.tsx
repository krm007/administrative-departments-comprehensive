import * as React from "react";
import { Tabs } from "antd";
import NormalTableTitleConfig from "../config/NormalTableTitleConfig";
import BocoTable from "./BocoTable";

/**
 * 描述：
 *  远程影像查询
 * @author sunshixiong
 * @date 2019/1/8-20:25
 */
class RemoteImageQueryTable extends React.Component {
  public render() {
    return (
      <div>
        <Tabs defaultActiveKey="2">
          <Tabs.TabPane tab={<span>区域影像平台统计查询</span>} key="1">
            <BocoTable
              title={"慢性病月度汇总表"}
              tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>区域设备统计查询</span>} key="2">
            <BocoTable
              title={"慢性病季度汇总表"}
              tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>区域医生工作量统计查询</span>} key="3">
            <BocoTable
              title={"慢性病季度汇总表"}
              tableTitle={NormalTableTitleConfig.get("MenZhenKaiDanFeiYong")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>区域跨院写报告统计</span>} key="4">
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

export default RemoteImageQueryTable;
