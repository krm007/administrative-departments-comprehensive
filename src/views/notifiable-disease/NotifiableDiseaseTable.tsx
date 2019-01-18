import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Button, Col, DatePicker, Form, Row, Select, Table } from "antd";
import { FormComponentProps } from "antd/lib/form";
import * as moment from "moment";
import ReactHTMLTableToExcel from "../../component/ReactHTMLTableToExcel";
import * as ReactDOM from "react-dom";
import Pie from "../bizchart/Pie";
import service from "../../request/Service";
import { ColumnProps } from "antd/lib/table";
import PhthisisModel from "./PhthisisModel";
import Axios from "axios";

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
  PieData: any[];
  bingZhong: any;
  text: string;
  textData: any;
  feiJieHeiTable?: any[];
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
              this.clickOne(text);
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
  constructor(props: Iprops) {
    super(props);
    this.state = {
      tableData: {},
      model: false,
      PieData: this.PieData,
      bingZhong: "",
      text: "",
      textData: {}
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
  public clickOne = (text: string) => {
    const params = this.props.form.getFieldsValue();
    const newparams = Object.assign(params, { bingZhong: text });
    const axiosArray = [
      service.post(
        "/baoGaoFaBingQingKuang/queryLast5",
        {},
        { params: { bingZhong: text } }
      ),
      service.post(
        "/baoGaoFaBingQingKuang/queryByBingZhong",
        {},
        { params: newparams }
      )
    ];
    if (text === "肺结核") {
      axiosArray.push(service.post("/feiJieHe/page", {}, { params }));
    }
    Axios.all(axiosArray).then(
      Axios.spread((res1, res2, res3) => {
        if (res3) {
          this.setState({
            bingZhong: res1.data,
            textData: res2.data,
            model: true,
            feiJieHeiTable: res3.data.list
          });
        } else {
          this.setState({
            bingZhong: res1.data,
            textData: res2.data,
            model: true
          });
        }
      })
    );
  };
  /**
   * 按查询数据展示
   */
  public onSubmit = (event: React.FormEvent<any>) => {
    event.preventDefault();
    this.getData(this.props.form.getFieldsValue());
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
      if (value.data && value.data.list) {
        const list: any[] = value.data.list;
        list.forEach((value1, index, array) => {
          if (index < 5) {
            this.PieData[index].count = value1.benJiBaoGaoShu;
          }
        });
        this.setState({
          PieData: this.PieData,
          tableData: value.data
        });
      } else {
        this.setState({
          tableData: value.data
        });
      }
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
            {this.props.form.getFieldDecorator("select", {
              initialValue: "Q1"
            })(
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
        <PhthisisModel
          text={this.state.text}
          bingZhong={this.state.bingZhong}
          model={this.state.model}
          textData={this.state.textData}
          feiJieHeiTable={this.state.feiJieHeiTable}
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
        />
        <div className={classes.myChart}>
          <Row>
            <Col span={16} offset={4}>
              <Pie
                titleChart={"法定传染病发情况比例图"}
                chartData={this.state.PieData}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Form.create()(withStyles(styles)(NotifiableDiseaseTable));
