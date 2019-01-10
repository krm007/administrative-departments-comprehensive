import * as React from "react";
import { Select } from "antd";
import service from "../request/Service";

/**
 * 描述：
 *  自定义select
 * @author sunshixiong
 * @date 2019/1/9-21:10
 */
interface Iprops {
  url?: string;
  value?: string;
  text?: string;
}
interface Istatus {
  selectData: Array<{ key: string; value: string }>;
}
class MySelect extends React.Component<Iprops, Istatus> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      selectData: []
    };
  }

  public componentDidMount(): void {
    if (this.props.url) {
      service.post(this.props.url).then(value => {
        this.setState({
          selectData: value.data
        });
      });
    }
  }

  public render() {
    return (
      <Select placeholder={this.props.text} style={{ width: 174 }}>
        {this.state.selectData.map((value1, index1) => {
          return (
            <Select.Option value={value1.value} key={value1.value}>
              {value1.key}
            </Select.Option>
          );
        })}
        }
      </Select>
    );
  }
}

export default MySelect;
