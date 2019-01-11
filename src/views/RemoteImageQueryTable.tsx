import * as React from "react";
import { Tabs } from "antd";
import BocoTable from "./BocoTable";
import MoreTableTitleConfig from "../config/MoreTableTitleConfig";

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
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab={<span>区域影像平台统计查询</span>} key="1">
            <BocoTable
              title={"区域影像平台统计查询"}
              tableTitle={MoreTableTitleConfig.get("QuYuYingXiangTongJi")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>区域设备统计查询</span>} key="2">
            <BocoTable
              title={"区域设备统计查询"}
              tableTitle={MoreTableTitleConfig.get("QuYuSheBeiTongJi")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>区域医生工作量统计查询</span>} key="3">
            <BocoTable
              title={"区域医生工作量统计查询"}
              tableTitle={MoreTableTitleConfig.get("QuYuYiShengGongZuo")}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>区域跨院写报告统计</span>} key="4">
            <BocoTable
              title={"区域跨院写报告统计"}
              tableTitle={MoreTableTitleConfig.get("QuYuKuaYuanBaoGao")}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default RemoteImageQueryTable;
