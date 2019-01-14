import * as React from "react";
import { Tabs } from "antd";
import BocoTable from "./BocoTable";
import MoreTableTitleConfig from "../config/MoreTableTitleConfig";

/**
 * 描述：
 *  药库收支月报
 * @author sunshixiong
 * @date 2019/1/8-20:58
 */
class PharmacyPaymentsTable extends React.Component {
  public render() {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab={<span>按药品类型统计</span>} key="1">
            <BocoTable
              title={"按药品类型统计"}
              timeFormat={1}
              tableTitle={MoreTableTitleConfig.get("AnYaoPinLeiXingTongJi")}
              formStructure={[
                  {
                      value: "kuFang",
                      text: "库房",
                      url: "/yaoPinShouFaCunBiao/getKuFang"
                  }
              ]}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>按账簿类型统计</span>} key="2">
            <BocoTable
              title={"按账簿类型统计"}
              month={true}
              tableTitle={MoreTableTitleConfig.get("AnZhangBoLeiXingTongJi")}
              formStructure={[
                  {
                      value: "kuFang",
                      text: "库房",
                      url: "/yaoPinShouFaCunBiao/getKuFang"
                  }
              ]}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default PharmacyPaymentsTable;
