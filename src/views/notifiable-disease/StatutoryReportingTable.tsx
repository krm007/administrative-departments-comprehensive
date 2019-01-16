import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Button, Form, Select, DatePicker } from "antd";
import * as moment from "moment";
import { FormComponentProps } from "antd/lib/form";

const styles = (theme: Theme) => createStyles<"root">({
  root: {}
});

interface Iprops extends WithStyles<typeof styles>,FormComponentProps {
}

/**
 * 描述：
 *  各机构法定传染病报告发病分布
 * @author sunshixiong
 * @date 2019/1/16-15:25
 */
class StatutoryReportingTable extends React.Component<Iprops> {

  /**
   * 按查询数据展示
   */
  public onSubmit = (event: React.FormEvent<any>) => {
    event.preventDefault();
  };
  public render() {
    const {classes} = this.props;
    return (<div className={ classes.root }>
      <Form layout={"inline"} onSubmit={this.onSubmit}>
        <Form.Item>
          {this.props.form.getFieldDecorator("timeOrder", {
            initialValue: moment()
          })(<DatePicker.MonthPicker format={"YYYY"} />)}
        </Form.Item>
        <Form.Item>
          {this.props.form.getFieldDecorator("select")(
              <Select placeholder={"选择季度"} style={{ width: 174 }}>
                <Select.Option value={"Q1"}>{"第一季度"}</Select.Option>
                <Select.Option value={"Q2"}>{"第二季度"}</Select.Option>
                <Select.Option value={"Q3"}>{"第三季度"}</Select.Option>
                <Select.Option value={"Q4"}>{"第四季度"}</Select.Option>
              </Select>
          )}
        </Form.Item>
        <Form.Item>
          <Button htmlType={"submit"} type={"primary"}>
            搜索
          </Button>
        </Form.Item>
      </Form>
    </div>);
  }
}

export default Form.create()(withStyles(styles)(StatutoryReportingTable));
