import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Button, Form, Select, DatePicker, Table, Col, Row } from "antd";
import * as moment from "moment";
import { FormComponentProps } from "antd/lib/form";
import { ColumnProps } from "antd/lib/table";
import * as ReactDOM from "react-dom";
import ReactHTMLTableToExcel from "../../component/ReactHTMLTableToExcel";
import Bar from "../bizchart/Bar";
import service from "../../request/Service";
import Axios from "axios";

const styles = (theme: Theme) =>
  createStyles<"root">({
    root: {}
  });

interface Iprops extends WithStyles<typeof styles>, FormComponentProps {}
interface Istatus {
  tableData: [];
}
/**
 * 描述：
 *  各机构法定传染病报告发病分布
 * @author sunshixiong
 * @date 2019/1/16-15:25
 */
class StatutoryReportingTable extends React.Component<Iprops, Istatus> {
  private tableRefs: any;

  private tableTiele: Array<ColumnProps<any>> = [
    {
      title: "",
      align: "center",
      dataIndex: "key",
      key: "key"
    },
    {
      title: "杭州",
      align: "center",
      dataIndex: "data1",
      key: "data1"
    },
    {
      title: "宁波",
      align: "center",
      dataIndex: "data2",
      key: "data2"
    },
    {
      title: "湖州",
      align: "center",
      dataIndex: "data3",
      key: "data3"
    },
    {
      title: "金华",
      align: "center",
      dataIndex: "data4",
      key: "data4"
    },
    {
      title: "衢州",
      align: "center",
      dataIndex: "data5",
      key: "data5"
    },
    {
      title: "台州",
      align: "center",
      dataIndex: "data6",
      key: "data6"
    },
    {
      title: "丽水",
      align: "center",
      dataIndex: "data7",
      key: "data7"
    }
  ];
  /** 表头 */
  private columns: Array<ColumnProps<any>> = [
    {
      title: "",
      dataIndex: "name",
      render: (text, record, index) => {
        if (index === 0) {
          return "总报告数";
        } else {
          return "新投犯报告数";
        }
      }
    },
    {
      title: "肺结核",
      dataIndex: "bing_1"
    },
    {
      title: "HIV阳性",
      dataIndex: "bing_2"
    },
    {
      title: "病毒性肝炎",
      dataIndex: "bing_3"
    },
    {
      title: "梅毒",
      dataIndex: "bing_4"
    },
    {
      title: "淋病",
      dataIndex: "bing_5"
    }
  ];
  /** 表格数据 */
  private middleData = [
    {
      key: "1",
      name: "总报告数",
      bing_1: "0",
      bing_2: "0",
      bing_3: "0",
      bing_4: "0",
      bing_5: "0"
    },
    {
      key: "2",
      name: "新投犯报告数",
      bing_1: "0",
      bing_2: "0",
      bing_3: "0",
      bing_4: "0",
      bing_5: "0"
    }
  ];
  /** 分组柱状图数据 */
  private BarData = [
    {
      name: "总报告数",
      肺结核: 10,
      HIV阳性: 11,
      病毒性肝炎: 12,
      梅毒: 13,
      淋病: 14
    },
    {
      name: "新投犯报告数",
      肺结核: 5,
      HIV阳性: 6,
      病毒性肝炎: 7,
      梅毒: 8,
      淋病: 9
    }
  ];

  /** 分组柱状图的x轴显示字段 */
  private barXAxis = ["肺结核", "HIV阳性", "病毒性肝炎", "梅毒", "淋病"];
  constructor(props: Iprops) {
    super(props);
    this.state = {
      tableData: []
    };
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
  public getData(params: any) {
    const axiosArray = [
      service.post("faDingChuanRanFenBu/pageByQuarter", {}, { params }),
      service.post("baoGaoFaBingQingKuang/pageByQuarter", {}, { params })
    ];
    Axios.all(axiosArray).then(Axios.spread((res1, res2) => {}));
  }
  /**
   * 表格的title
   */
  public tableTitle = (currentPageData: any[]) => (
    <span style={{ padding: "10px" }}>
      <img
        src={require("../../images/chartIcon.png")}
        alt=""
        style={{
          float: "left",
          marginLeft: "1vw",
          marginRight: "0.5vw"
        }}
      />
      {"法定传染病报告发病情况"}
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
   * 按查询数据展示
   */
  public onSubmit = (event: React.FormEvent<any>) => {
    event.preventDefault();
  };
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
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
        <Table
          dataSource={this.state.tableData}
          columns={this.tableTiele}
          bordered={true}
          ref={ref => {
            this.tableRefs = ref;
          }}
          scroll={{
            x: true
          }}
          title={this.tableTitle}
          size={"small"}
        />
        <Row style={{ marginTop: 30 }}>
          <Col span={12}>
            <Table
              columns={this.columns}
              size="middle"
              dataSource={this.middleData}
              pagination={false}
              bordered={true}
              title={() => (
                <span style={{ padding: "10px" }}>
                  <img
                    src={require("../../images/chartIcon.png")}
                    alt=""
                    style={{
                      float: "left",
                      marginLeft: "1vw",
                      marginRight: "0.5vw"
                    }}
                  />
                  法定传染病发病报告
                </span>
              )}
            />
          </Col>
          <Col span={11} offset={1}>
            <Bar
              titleChart={"法定传染病发病报告"}
              chartData={this.BarData}
              barXAxis={this.barXAxis}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Form.create()(withStyles(styles)(StatutoryReportingTable));
