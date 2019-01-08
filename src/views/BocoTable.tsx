import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Button, DatePicker, Form, Select, Table } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTableDataSource } from "../redux/action/ActionSaga";
import { getTransformData } from "../redux/reselect/selectors";
import * as moment from "moment";
import ReactHTMLTableToExcel from "../component/ReactHTMLTableToExcel";
import * as ReactDOM from "react-dom";

const styles = (theme: Theme) =>
  createStyles<"root">({
    root: {
      padding: 20,
      "& .ant-table-middle > .ant-table-title": {
        padding: "20px 8px"
      }
    }
  });

export interface IBocoTableProps extends WithStyles<typeof styles>, FormComponentProps {
  url: string;
  tableName?: string;
  chartTitle?: string;
  title: string;
  tableTitle:[];
  data: [];
  serchData: (param:any) => void;
}
/**
 * 描述：
 *  所有的二维表
 * @author 12859
 * @date 2018/12/6-15:20
 */
class BocoTable extends React.Component<IBocoTableProps> {
  private urlDO: string;
  private tableRefs: any;
  public componentDidMount(): void {
    this.getData({});

    const tableCon = ReactDOM.findDOMNode(this.tableRefs);
    if (tableCon instanceof Element) {
      const table = tableCon.querySelector("table");
      if (table) {
        table.setAttribute("id", "table-to-xls");
      }
    }
  }

  public getData(params: any, timeLast?: any) {
    this.urlDO = this.props.url;
    if (this.props.tableName) {
      this.urlDO = this.props.tableName;
    }
    this.props.serchData({
      type: this.urlDO,
      timeLast,
      url: `/business/${this.props.url}/sums`,
      params
    });
  }
  public tableTitle = (currentPageData: any[]) => (
    <span style={{ padding: "10px" }}>
      <img
        src={require("../images/chartIcon.png")}
        alt=""
        style={{
          float: "left",
          marginLeft: "1vw",
          marginRight: "0.5vw"
        }}
      />
      {this.props.title}
      <br />
    </span>
  );

  public onSubmit = (event: React.FormEvent<any>) => {
    event.preventDefault();
    const timeNow = moment(this.props.form.getFieldValue("createTime"));
    this.getData(
      {
        yljgdm: this.props.form.getFieldValue("yljgdm"),
        createTime: timeNow.format("YYYY-MM")
      },
      timeNow.subtract(1, "M").format("YYYY-MM")
    );
  };
  public render() {
    const { classes } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={classes.root}>
        <Form layout={"inline"} onSubmit={this.onSubmit}>
          <Form.Item>
            {getFieldDecorator("yljgdm")(
              <Select placeholder={"机构选择"} style={{ width: 174 }}>
                <Select.Option value={1}>人民医院</Select.Option>
                <Select.Option value={2}>二人民医院</Select.Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("createTime", {
              initialValue: [moment().subtract(1, "days"), moment()]
            })(<DatePicker.RangePicker />)}
          </Form.Item>
          <Form.Item>
            <Button htmlType={"submit"} type={"primary"}>
              搜索
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: "end", marginBottom: "10px" }}>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="download-table-xls-button"
            table="table-to-xls"
            filename="tablexls"
            sheet="tablexls"
            buttonText="导出"
          />
        </div>
        <Table
          dataSource={this.props.data}
          columns={this.props.tableTitle}
          bordered={true}
          title={this.tableTitle}
          size={"small"}
          pagination={false}
        />
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    data: getTransformData(state),
    formData:state.toJS()
  };
};

const mapDispatchToProps = ({} = (dispatch: any, ownProps: any) => {
  return bindActionCreators(
    {
      serchData: getTableDataSource
    },
    dispatch
  );
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(withStyles(styles)(BocoTable)));
