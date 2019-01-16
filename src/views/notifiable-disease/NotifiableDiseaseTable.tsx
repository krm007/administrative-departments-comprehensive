import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Button, Col, DatePicker, Form, Modal, Row, Select, Table } from "antd";
import { FormComponentProps } from "antd/lib/form";
import * as moment from "moment";
import ReactHTMLTableToExcel from "../../component/ReactHTMLTableToExcel";
import * as ReactDOM from "react-dom";
import Line from "../bizchart/Line";
import Pie from "../bizchart/Pie";
import service from "../../request/Service";
import { ColumnProps } from "antd/lib/table";

const styles = (theme: Theme) =>
  createStyles<"root" | "myChart">({
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
    },
    myChart: {
      padding: "20px"
    }
  });

interface Iprops extends WithStyles<typeof styles>, FormComponentProps {}
interface Istatus {
  tableData: any;
  model: boolean;
}
/**
 * 描述：
 *  法定传染病报告发病情况
 * @author sunshixiong
 * @date 2019/1/16-11:28
 */
class NotifiableDiseaseTable extends React.Component<Iprops, Istatus> {
  private tableRefs: any;
  private tableTiele: Array<ColumnProps<any>> = [
    {
      title: "病种",
      align: "center",
      dataIndex: "bingZhong",
      key: "bingZhong",
      render: (text, record) => {
        return (
          <a
            onClick={() => {
              this.openModel(text);
            }}
          >
            {text}
          </a>
        );
      }
    },
    {
      title: "本季报告数",
      align: "center",
      dataIndex: "benJiBaoGaoShu",
      key: "benJiBaoGaoShu"
    },
    {
      title: "上季报告数",
      align: "center",
      dataIndex: "shangJiBaoGaoShu",
      key: "shangJiBaoGaoShu"
    },
    {
      title: "环比（%）",
      align: "center",
      dataIndex: "huanBi",
      key: "huanBi"
    },
    {
      title: "去年同季报告数",
      align: "center",
      dataIndex: "quNianTongJiBaoGaoShu",
      key: "quNianTongJiBaoGaoShu"
    },
    {
      title: "同比（%）",
      align: "center",
      dataIndex: "tongBi",
      key: "tongBi"
    }
  ];
  /** modal数据 */
  private ModalColumns: any[] = [
    {
      title: "",
      dataIndex: "name"
    },
    {
      title: "2014",
      dataIndex: "bing_1"
    },
    {
      title: "2015",
      dataIndex: "bing_2"
    },
    {
      title: "2016",
      dataIndex: "bing_3"
    },
    {
      title: "2017",
      dataIndex: "bing_4"
    },
    {
      title: "2018",
      dataIndex: "bing_5"
    }
  ];
  private ModalData: any[] = [
    {
      key: "1",
      name: "第一季度",
      bing_1: "170",
      bing_2: "100",
      bing_3: "160",
      bing_4: "170",
      bing_5: "100"
    },
    {
      key: "2",
      name: "第二季度",
      bing_1: "170",
      bing_2: "100",
      bing_3: "160",
      bing_4: "170",
      bing_5: "100"
    },
    {
      key: "3",
      name: "第三季度",
      bing_1: "170",
      bing_2: "100",
      bing_3: "160",
      bing_4: "170",
      bing_5: "100"
    },
    {
      key: "4",
      name: "第4季度",
      bing_1: "170",
      bing_2: "100",
      bing_3: "160",
      bing_4: "170",
      bing_5: "100"
    }
  ];
  /** 饼图数据 */
  private PieData = [
    {
      item: "肺结核",
      count: 0
    },
    {
      item: "病毒性肝炎",
      count: 38
    },
    {
      item: "HIV阳性",
      count: 66
    },
    {
      item: "梅毒",
      count: 78
    },
    {
      item: "淋病",
      count: 50
    }
  ];
  /** 折线图数据 */
  private lineData = [
    {
      item: "2014",
      一季度: "2",
      二季度: "5",
      三季度: "4",
      四季度: "3"
    },
    {
      item: "2015",
      一季度: "0",
      二季度: "5",
      三季度: "3",
      四季度: "1"
    },
    {
      item: "2016",
      一季度: "5",
      二季度: "3",
      三季度: "4",
      四季度: "6"
    },
    {
      item: "2017",
      一季度: "4",
      二季度: "1",
      三季度: "5",
      四季度: "6"
    },
    {
      item: "2018",
      一季度: "2",
      二季度: "4",
      三季度: "6",
      四季度: "6"
    }
  ];
  constructor(props: Iprops) {
    super(props);
    this.state = {
      tableData: {},
      model: false
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

  /**
   * 按查询数据展示
   */
  public onSubmit = (event: React.FormEvent<any>) => {
    event.preventDefault();
    this.getData(this.props.form.getFieldsValue())
  };
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
  public openModel(value: string) {
    this.setState({
      model: true
    });
  }
  public getData(params: any) {
    service.post("/faDingChuanRanFaBing/page", {}, { params }).then(value => {
      this.setState({
        tableData: value.data
      });
    });
  }
  public render() {
    const { classes } = this.props;
    const { tableData } = this.state;
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
          dataSource={tableData.list}
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
        <Modal
          // title="Basic Modal"
          visible={this.state.model}
          onOk={() => {
            this.setState({
              model: false
            });
          }}
          onCancel={() => {
            this.setState({
              model: false
            });
          }}
          width={"70vw"}
        >
          <div style={{ padding: "20px" }}>
            <Row>
              <Col span={20} offset={2}>
                <Table
                  columns={this.ModalColumns}
                  size="middle"
                  dataSource={this.ModalData}
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
                      附表：近5年发病情况
                    </span>
                  )}
                />
              </Col>
            </Row>
          </div>
          <div style={{ padding: "20px" }}>
            <Row>
              <Col span={20} offset={2}>
                <line />
                <Line
                  titleChart={"报告发病情况"}
                  chartData={this.lineData}
                  lineXAxis={["一季度", "二季度", "三季度", "四季度"]}
                />
              </Col>
            </Row>
          </div>
        </Modal>
        <div className={classes.myChart}>
          <Row>
            <Col span={16} offset={4}>
              <Pie
                titleChart={"法定传染病发情况比例图"}
                chartData={this.PieData}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Form.create()(withStyles(styles)(NotifiableDiseaseTable));
