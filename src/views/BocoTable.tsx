import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Button, DatePicker, Form, Select, Spin, Table } from "antd";
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
      "& form": {
        marginBottom: 20
      }
    }
  });

interface IProps extends WithStyles<typeof styles>, FormComponentProps {
  url?: string;
  tableName?: string;
  title?: string;
  formStructure?: FormStructure[];
  tableTitle?: [];
  data?: BocoPage<any>;
  formData?: any;
  serchData: (param: any) => void;
  month?: boolean;
  spin?: boolean;
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
    this.getData(this.getFormDataValue());
    const tableCon = ReactDOM.findDOMNode(this.tableRefs);
    if (tableCon instanceof Element) {
      const table = tableCon.querySelector("table");
      if (table) {
        table.setAttribute("id", "table-to-xls");
      }
    }
  }

  public getData(params: any) {
    this.props.serchData({
      url: this.props.url,
      params,
      formStructure: this.props.formStructure
    });
  }
  /**
   * 分页、排序、筛选变化时触发
   */
  public handleTableChange = (page: number, size?: number) => {
    const formData = this.getFormDataValue();
    this.getData({ offset: page, limit: size, ...formData });
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
              {this.props.form.getFieldDecorator(value.value)(
                <Select placeholder={value.text} style={{ width: 174 }}>
                  {(() => {
                    const selectList = this.props.formData[value.value];
                    if (selectList) {
                      return selectList.map((value1: any) => {
                        return (
                          <Select.Option
                            value={value1.value}
                            key={value1.value}
                          >
                            {value1.key}
                          </Select.Option>
                        );
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

  /**
   * 获取表单数据
   */
  public getFormDataValue() {
    const timeNow = this.props.form.getFieldValue("timeOrder");

    let timeOrder: any;
    if (timeNow !== null && timeNow !== "" && timeNow.length !== 0) {
      if (this.props.month) {
        timeOrder = {
          month: moment(timeNow).format("YYYY-MM"),
          timeOrder: null
        };
      } else {
        timeOrder = {
          startTime: moment(timeNow[0]).format("YYYY-MM-DD"),
          endTime: moment(timeNow[1]).format("YYYY-MM-DD"),
          timeOrder: null
        };
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
    return (
      <div className={classes.root}>
        <Spin
          tip="开发中！敬请期待....."
          spinning={this.props.spin ? true : false}
        >
          <Form layout={"inline"} onSubmit={this.onSubmit}>
            <Form.Item>
              {getFieldDecorator("orgId")(
                <Select placeholder={"机构选择"} style={{ width: 174 }}>
                  <Select.Option value={1}>人民医院</Select.Option>
                  <Select.Option value={2}>二人民医院</Select.Option>
                </Select>
              )}
            </Form.Item>
            {this.FormBuild()}
            {this.props.month ? (
              <Form.Item>
                {getFieldDecorator("timeOrder", {
                  initialValue: moment()
                })(<DatePicker.MonthPicker />)}
              </Form.Item>
            ) : (
              <Form.Item>
                {getFieldDecorator("timeOrder", {
                  initialValue: [moment().subtract(1, "days"), moment()]
                })(<DatePicker.RangePicker />)}
              </Form.Item>
            )}
            <Form.Item>
              <Button htmlType={"submit"} type={"primary"}>
                搜索
              </Button>
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
            size={"small"}
            pagination={{
              pageSize: dataSoruce.pageSize,
              current: dataSoruce.pageNum,
              total: dataSoruce.total,
              showSizeChanger: true,
              showQuickJumper: true,
              pageSizeOptions: ["10", "20", "30", "40", "10000000"],
              onShowSizeChange: (current: number, size: number) => {
                this.handleTableChange(current, size);
              },
              onChange: (page, pageSize) => {
                this.handleTableChange(page, pageSize);
              },
              showTotal: total => `共 ${total} 条数据`
            }}
          />
        </Spin>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    data: getTransformTableData(state),
    formData: getTransformFormData(state)
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
