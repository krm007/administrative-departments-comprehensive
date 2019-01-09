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
import { PaginationConfig } from "antd/lib/pagination";
import { SorterResult } from "antd/lib/table";
import { FormSelectData, FormStructure } from "../typings/tablePropsData";

const styles = (theme: Theme) =>
  createStyles<"root">({
    root: {
      padding: 20,
      "& .ant-table-middle > .ant-table-title": {
        padding: "20px 8px"
      }
    }
  });

interface IProps extends WithStyles<typeof styles>, FormComponentProps {
  url?: string;
  tableName?: string;
  title?: string;
  formStructure?: FormStructure[];
  tableTitle?: [];
  data?: [];
  formData?: Map<string, FormSelectData[]>;
  serchData: (param: any) => void;
  month?: boolean;
}
/**
 * 描述：
 *  公用表格
 * @author sunshixiong
 * @date 2018/12/6-15:20
 */
class BocoTable extends React.Component<IProps> {
  private urlDO?: string;
  private tableRefs: any;

  constructor(props: IProps) {
    super(props);
  }

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
  /**
   * 分页、排序、筛选变化时触发
   */
  public handleTableChange = (
    pagination: PaginationConfig,
    filters: Record<keyof any, string[]>,
    sorter: SorterResult<any>
  ) => {
    this.props.serchData(pagination);
  };
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

  /**
   * 动态生成表单
   */
  public FormBuild = (): any => {
    if (this.props.formStructure) {
      return this.props.formStructure.map((value, index) => {
        return (
          <Form.Item key={value.text}>
            {this.props.form.getFieldDecorator(value.value)(
              <Select placeholder={value.text} style={{ width: 174 }}>
                {() => {
                  if (this.props.formData) {
                    const selectList = this.props.formData.get(value.value);
                    if (selectList) {
                      selectList.map((value1, index1) => {
                        return (
                          <Select.Option
                            value={value1.value}
                            key={value1.value}
                          >
                            {value1.text}
                          </Select.Option>
                        );
                      });
                    }
                  }
                }}
              </Select>
            )}
          </Form.Item>
        );
      });
    } else {
      return;
    }
  };

  /**
   * 按查询数据展示
   */
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
          {this.FormBuild()}
          {this.props.month ? (
            <Form.Item>
              {getFieldDecorator("riQi", {
                initialValue: moment()
              })(<DatePicker.MonthPicker />)}
            </Form.Item>
          ) : (
            <Form.Item>
              {getFieldDecorator("riQi", {
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
          pagination={{}}
          onChange={this.props.serchData}
        />
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    data: state.data,
    formData: state.toJS()
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
