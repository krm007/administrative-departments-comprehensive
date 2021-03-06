import * as React from "react";
import { Tabs } from "antd";
import BocoTable from "./BocoTable";
import MoreTableTitleConfig from "../config/MoreTableTitleConfig";

interface Istatus {
  key: string;
}
/**
 * 描述：
 *  药库收支月报
 * @author sunshixiong
 * @date 2019/1/8-20:58
 */
class PharmacyPaymentsTable extends React.Component<any, Istatus> {
  constructor(props: any) {
    super(props);
    this.state = {
      key: "1"
    };
  }

  public render() {
    const { key } = this.state;
    return (
      <div>
        <Tabs
          activeKey={this.state.key}
          onChange={activeKey => {
            this.setState({
              key: activeKey
            });
          }}
        >
          <Tabs.TabPane tab={<span>按药品类型统计</span>} key="1">
            {key === "1" ? (
              <BocoTable
                title={"按药品类型统计"}
                timeFormat={1}
                url={"/anYaoPinLeiXingTongJi/page"}
                tableTitle={MoreTableTitleConfig.get("AnYaoPinLeiXingTongJi")}
                formStructure={[
                  {
                    value: "kuFang",
                    text: "库房",
                    url: "/yaoPinShouFaCunBiao/getKuFang"
                  }
                ]}
              />
            ) : (
              <div>{}</div>
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>按账簿类型统计</span>} key="2">
            {key === "2" ? (
              <BocoTable
                title={"按账簿类型统计"}
                timeFormat={1}
                url={"/anZhangBoLeiXingTongJi/page"}
                tableTitle={MoreTableTitleConfig.get("AnZhangBoLeiXingTongJi")}
                formStructure={[
                  {
                    value: "kuFang",
                    text: "库房",
                    url: "/yaoPinShouFaCunBiao/getKuFang"
                  }
                ]}
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

export default PharmacyPaymentsTable;
