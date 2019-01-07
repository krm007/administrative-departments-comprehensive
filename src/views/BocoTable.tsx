import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Icon,
  Row,
  Select,
  Table,
  Tooltip
} from "antd";
import { Bocotable, FilterData } from "../typings/CommonData";
import { ReactNode } from "react";
import { ColumnProps } from "antd/lib/table";
import { FormComponentProps } from "antd/lib/form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTableDataSource } from "../redux/action/ActionSaga";
import { getTransformData } from "../redux/relesect/selectors";
import infoIcon from "../images/info.png";
import * as moment from "moment";

const styles = (theme: Theme) =>
  createStyles<"root"|"title">({
    root: {
      padding: 20,
      "& .ant-table-small > .ant-table-title": {
        padding: "20px 8px"
      }
    },
      title:{
        margin:"10px 0"
      }
  });

interface Iprops extends WithStyles<typeof styles>, FormComponentProps {
  url: string;
  tableName?: string;
  chart?: ReactNode;
  chartTitle?: string;
  title: string;
  data: Bocotable[];
  serchData: (param: FilterData) => void;
}
/**
 * 描述：
 *  所有的二维表
 * @author 12859
 * @date 2018/12/6-15:20
 */
class BocoTable extends React.Component<Iprops> {
  private table: Array<ColumnProps<Bocotable>> = [
    {
      title: "指标",
      align: "center",
      dataIndex: "name",
      key: "name",
      render: (text, record, index) => {
        return (
          <span>
            <span>{text}</span>
            <Tooltip
              style={{ backgroundColor: "yellow" }}
              placement="leftBottom"
              title={record.explain}
            >
              <img src={infoIcon} style={{ float: "right" }} alt="" />
            </Tooltip>
          </span>
        );
      }
    },
    {
      title: "指标值",
      align: "center",
      dataIndex: "value",
      key: "explain",
      render: (text, record, index) => {
        if (record.status) {
          return (
            <div>
              {text}
              {record.status === undefined ? (
                ""
              ) : (
                <Icon type="arrow-up" style={{ color: "red" }} />
              )}
            </div>
          );
        } else {
          return (
            <div>
              {text}
              {record.status === undefined ? "" : <Icon type="arrow-down" />}
            </div>
          );
        }
      }
    }
  ];
  private urlDO: string;
  public componentDidMount(): void {
    this.getData({});
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
              initialValue: moment()
            })(<DatePicker.MonthPicker />)}
          </Form.Item>
          <Form.Item>
            <Button htmlType={"submit"} type={"primary"}>
              搜索
            </Button>
          </Form.Item>
        </Form>
        <div className={classes.title}>{this.tableTitle([])}</div>
        {this.props.chart ? (
          <Row>
            <Col span={10}>
              <Table
                dataSource={this.props.data}
                columns={this.table}
                // title={this.tableTitle}
                size={"small"}
                pagination={false}
              />
            </Col>
            <Col span={11} offset={1}>
              <br />
              <img
                src={require("../images/chartIcon.png")}
                style={{ float: "left", marginLeft: "1vw" }}
              />
              <p style={{ marginLeft: "1vw", float: "left" }}>
                {this.props.chartTitle}
              </p>
              <br />
              <br />
              {this.props.chart}
            </Col>
          </Row>
        ) : (
          <Table
            dataSource={this.props.data}
            columns={this.table}
            bordered={true}
            // title={this.tableTitle}
            size={"small"}
            pagination={false}
            rowKey="id"
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    data: getTransformData(state)
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
