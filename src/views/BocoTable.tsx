import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Button, DatePicker, Form, Select, Table } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTableDataSource } from "../redux/action/ActionSaga";
import * as moment from "moment";
import ReactHTMLTableToExcel from "../component/ReactHTMLTableToExcel";
import * as ReactDOM from "react-dom";
import { BocoPage, FormStructure } from "../typings/tablePropsData";
import {
  getTransformFormData,
  getTransformTableData
} from "../redux/reselect/selectors";

const styles = (theme: Theme) =>
  createStyles<"root">({
    root: {
      padding: 20,
      "& .ant-table-middle > .ant-table-title": {
        padding: "20px 8px"
      },
      "& .ant-table": {
        "& td": {
          whiteSpace: "nowrap"
        }
      },
      "& form": {
        marginBottom: 20
      }
    }
  });

interface IProps extends WithStyles<typeof styles>, FormComponentProps {
  url?: string;
  title?: string;
  formStructure?: FormStructure[];
  tableTitle?: [];
  data: BocoPage<any>;
  formData?: any;
  serchData: (param: any) => void;
  timeFormat?: number;
  spin?: boolean;
  org: boolean;
  orgList: any[];
  orgDefortValue: boolean;
  orgPassable: boolean;
}
/**
 * 描述：
 *  公用表格
 * @author sunshixiong
 * @date 2018/12/6-15:20
 */
class BocoTable extends React.Component<IProps> {
  private tableRefs: any;
  constructor(props: IProps) {
    super(props);
  }

  public componentDidMount(): void {
    this.getData(this.getFormDataValue(), true);
    const tableCon = ReactDOM.findDOMNode(this.tableRefs);
    if (tableCon instanceof Element) {
      const table = tableCon.querySelector("table");
      if (table) {
        table.setAttribute("id", "table-to-xls");
        table.setAttribute("border", "1");
      }
    }
  }

  public getData(params: any, status?: boolean) {
    this.props.serchData({
      url: this.props.url,
      params,
      formStructure: this.props.formStructure,
      status
    });
  }
  /**
   * 分页、排序、筛选变化时触发
   */
  public handleTableChange = (page: number, size?: number) => {
    const formData = this.getFormDataValue();
    this.getData({ offset: page, limit: size, ...formData },true);
  };
  public previousAction = async () => {
    const formData = this.getFormDataValue();
    let total = 1000;
    if (this.props.data && this.props.data.total) {
      total = this.props.data.total;
    }
    await this.getData({ offset: 1, limit: total, ...formData });

    alert(this.props.data.size+"++"+this.props.data.total);
  };
  /**
   * 表格的title
   */
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
      <span style={{ float: "right" }}>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="table-to-xls"
          previousAction={this.previousAction}
          filename="tablexls"
          sheet="tablexls"
          buttonText="导出"
        />
      </span>
    </span>
  );

  /**
   * 动态生成表单
   */
  public FormBuild = (): any => {
    if (this.props.formStructure) {
      return this.props.formStructure.map((value, index) => {
        if (this.props.formData) {
          return (
            <Form.Item key={value.text}>
              {this.props.form.getFieldDecorator(value.value, {
                initialValue: value.initialValue
              })(
                <Select
                  placeholder={value.text}
                  style={{ width: 174 }}
                  showSearch={true}
                  allowClear={!value.must}
                >
                  {(() => {
                    let selectList;
                    if (value.data) {
                      selectList = value.data;
                    } else {
                      selectList = this.props.formData[value.value];
                    }
                    if (selectList) {
                      return selectList.map((value1: any) => {
                        if (value1 && value1.value && value1.key) {
                          return (
                            <Select.Option
                              value={value1.value}
                              key={value1.value}
                            >
                              {value1.key}
                            </Select.Option>
                          );
                        } else {
                          return;
                        }
                      });
                    }
                  })()}
                </Select>
              )}
            </Form.Item>
          );
        } else {
          return null;
        }
      });
    } else {
      return;
    }
  };
  public timeOfForm = () => {
    if (this.props.timeFormat === 1) {
      return (
        <Form.Item>
          {this.props.form.getFieldDecorator("timeOrder", {
            initialValue: moment()
          })(<DatePicker.MonthPicker allowClear={true} />)}
        </Form.Item>
      );
    } else if (this.props.timeFormat === 10) {
      return (
        <Form.Item>
          {this.props.form.getFieldDecorator("timeOrder", {
            initialValue: moment()
          })(<DatePicker.MonthPicker allowClear={true} />)}
        </Form.Item>
      );
    } else if (this.props.timeFormat === 0) {
      return null;
    } else if (this.props.timeFormat === 2) {
      return (
        <Form.Item>
          {this.props.form.getFieldDecorator("timeOrder", {
            initialValue: moment()
          })(<DatePicker.MonthPicker format={"YYYY"} />)}
        </Form.Item>
      );
    } else if (!this.props.timeFormat) {
      return (
        <Form.Item>
          {this.props.form.getFieldDecorator("timeOrder", {
            initialValue: [moment().startOf("year"), moment()]
          })(<DatePicker.RangePicker />)}
        </Form.Item>
      );
    } else {
      return null;
    }
  };
  /**
   * 获取表单数据
   */
  public getFormDataValue() {
    const timeNow = this.props.form.getFieldValue("timeOrder");

    let timeOrder: any;
    if (timeNow !== null && timeNow !== undefined && timeNow.length !== 0) {
      if (this.props.timeFormat === 1) {
        timeOrder = {
          month: moment(timeNow).format("YYYY-MM"),
          timeOrder: null
        };
      } else if (this.props.timeFormat === 10) {
        timeOrder = {
          month: moment(timeNow).format("MM"),
          year: moment(timeNow).format("YYYY"),
          timeOrder: null
        };
      } else if (this.props.timeFormat === 2) {
        timeOrder = {
          year: moment(timeNow).format("YYYY"),
          timeOrder: null
        };
      } else if (!this.props.timeFormat) {
        timeOrder = {
          startTime: moment(timeNow[0]).format("YYYY-MM-DD"),
          endTime: moment(timeNow[1]).format("YYYY-MM-DD"),
          timeOrder: null
        };
      } else {
        timeOrder = {};
      }
    }
    const formDataPre = this.props.form.getFieldsValue();
    return Object.assign(formDataPre, timeOrder);
  }

  /**
   * 按查询数据展示
   */
  public onSubmit = (event: React.FormEvent<any>) => {
    event.preventDefault();
    this.getData(this.getFormDataValue());
  };
  public render() {
    const { classes } = this.props;
    const { getFieldDecorator } = this.props.form;
    const dataSoruce: any = this.props.data ? this.props.data : {};
    const orgdefortValue = this.props.orgDefortValue ? null : "浙江省青春医院";
    return (
      <div className={classes.root}>
        <Form layout={"inline"} onSubmit={this.onSubmit}>
          {this.props.org ? (
            ""
          ) : (
            <Form.Item>
              {getFieldDecorator("orgId", {
                initialValue: orgdefortValue
              })(
                <Select
                  placeholder={"机构选择"}
                  showSearch={true}
                  allowClear={this.props.orgPassable}
                  style={{ width: 174 }}
                >
                  {(() => {
                    if (this.props.orgList) {
                      return this.props.orgList.map((value1: any) => {
                        return (
                          <Select.Option
                            value={value1.value}
                            key={value1.value}
                          >
                            {value1.key}
                          </Select.Option>
                        );
                      });
                    } else {
                      return null;
                    }
                  })()}
                </Select>
              )}
            </Form.Item>
          )}
          {this.FormBuild()}
          {this.timeOfForm()}
          <Form.Item>
            <Button htmlType={"submit"} type={"primary"}>
              搜索
            </Button>
            <button onClick={()=>{this.previousAction()}}>点击我</button>
          </Form.Item>
        </Form>
        <Table
          dataSource={dataSoruce.list}
          columns={this.props.tableTitle}
          bordered={true}
          ref={ref => {
            this.tableRefs = ref;
          }}
          title={this.tableTitle}
          scroll={{
            x: true
          }}
          size={"small"}
          pagination={{
            pageSize: dataSoruce.pageSize,
            current: dataSoruce.pageNum,
            total: dataSoruce.total,
            showSizeChanger: true,
            showQuickJumper: true,
            pageSizeOptions: ["10", "20", "30", "40", "10000"],
            onShowSizeChange: (current: number, size: number) => {
              this.handleTableChange(current, size);
            },
            onChange: (page, pageSize) => {
              this.handleTableChange(page, pageSize);
            },
            showTotal: total => `共 ${total} 行数据`
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    data: getTransformTableData(state),
    formData: getTransformFormData(state),
    orgList: state
      .get("orgList")
      .get("orgList")
      .toJS()
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
