import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Button, Col, Form, Row, Table, Select, DatePicker } from "antd";
import Pie from "../bizchart/Pie";
import ReactHTMLTableToExcel from "../../component/ReactHTMLTableToExcel";
import * as ReactDOM from "react-dom";
import { ColumnProps } from "antd/lib/table";
import service from "../../request/Service";
import { FormComponentProps } from "antd/lib/form";
import * as moment from "moment";
import MorbidityModal from "./MorbidityModal";

const styles = (theme: Theme) =>
  createStyles({
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
interface Istate {
  tableData: TabledataInfo[];
  visible: boolean;
  childrenData: any;
  PieData?: any[];
}
interface Iprops extends WithStyles<typeof styles>, FormComponentProps {}
/** 接口数据类型 */
export interface TabledataInfo {
  xinNaoXueGuan: number;
  neiFenMiYingYangDaiXie: number;
  jingShen: number;
  yunDongXiTong: number;
  xiaoHuaXiTong: number;
  huXiXiTong: number;
  miNiaoShengZhiXiTong: number;
  shenJingXiTong: number;
  xueYeZaoXueXiTong: number;
  mianYiFengShi: number;
  qiTa: number;
  exingZhongLiu: number;
}

class ChronicChart extends React.Component<Iprops, Istate> {
  /** 表格节点 */
  private tableRefs: any;
  /** 表头 */
  private tableTiele: Array<ColumnProps<TabledataInfo>> = [
    {
      title: "",
      align: "center",
      dataIndex: "bingZhong",
      key: "bingZhong"
    },

    {
      title: "心脑血管病",
      align: "center",
      dataIndex: "xinNaoXueGuan",
      key: "xinNaoXueGuan"
    },
    {
      title: "内分泌营养代谢疾病",
      align: "center",
      dataIndex: "neiFenMiYingYangDaiXie",
      key: "neiFenMiYingYangDaiXie"
    },
    {
      title: "精神疾病",
      align: "center",
      dataIndex: "jingShen",
      key: "jingShen"
    },
    {
      title: "运动系统疾病",
      align: "center",
      dataIndex: "yunDongXiTong",
      key: "yunDongXiTong"
    },
    {
      title: "消化系统疾病",
      align: "center",
      dataIndex: "xiaoHuaXiTong",
      key: "xiaoHuaXiTong"
    },
    {
      title: "呼吸系统疾病",
      align: "center",
      dataIndex: "huXiXiTong",
      key: "huXiXiTong"
    },
    {
      title: "泌尿生殖系统疾病",
      align: "center",
      dataIndex: "miNiaoShengZhiXiTong",
      key: "miNiaoShengZhiXiTong"
    },
    {
      title: "神经系统疾病",
      align: "center",
      dataIndex: "shenJingXiTong",
      key: "shenJingXiTong"
    },
    {
      title: "血液造血系统疾病",
      align: "center",
      dataIndex: "xueYeZaoXueXiTong",
      key: "xueYeZaoXueXiTong"
    },
    {
      title: "恶性肿瘤",
      align: "center",
      dataIndex: "exingZhongLiu",
      key: "exingZhongLiu"
    },
    {
      title: "免疫风湿性疾病",
      align: "center",
      dataIndex: "mianYiFengShi",
      key: "mianYiFengShi"
    },
    {
      title: "其他",
      align: "center",
      dataIndex: "qiTa",
      key: "qiTa"
    }
  ];

  constructor(props: Iprops) {
    super(props);
    this.state = {
      tableData: [],
      visible: false,
      childrenData: [],
      PieData: []
    };
  }

  /** 提交表单 */
  public onSubmit = (event: React.FormEvent<any>) => {
    event.preventDefault();
    this.getData(this.props.form.getFieldsValue());
  };
  /** 获取表格数据 */
  public getData = (params: any) => {
    service
      .post<TabledataInfo>("/benJiManXingFenBu/page", {}, { params })
      .then(value => {
        // console.log(value.data);
        const data = new Array();
        data.push(value.data);
        this.setState({
          tableData: data,
          PieData: data.map((item: any) => {
            return [
              {
                item: "心脑血管病",
                count: item.xinNaoXueGuan
              },
              {
                item: "内分泌营养代谢疾病",
                count: item.neiFenMiYingYangDaiXie
              },
              {
                item: "精神疾病",
                count: item.jingShen
              },
              {
                item: "运动系统疾病",
                count: item.yunDongXiTong
              },
              {
                item: "消化系统疾病",
                count: item.xiaoHuaXiTong
              },
              {
                item: "呼吸系统疾病",
                count: item.huXiXiTong
              },
              {
                item: "泌尿生殖系统疾病",
                count: item.miNiaoShengZhiXiTong
              },
              {
                item: "神经系统疾病",
                count: item.shenJingXiTong
              },
              {
                item: "血液造血系统疾病",
                count: item.xueYeZaoXueXiTong
              },
              {
                item: "恶性肿瘤",
                count: item.exingZhongLiu
              },
              {
                item: "免疫风湿性疾病",
                count: item.mianYiFengShi
              },
              {
                item: "其他",
                count: item.qiTa
              }
            ];
          })
        });
      });
    service
      .post("/xinFanFaBingQingKuang/queryMain", {}, { params })
      .then(value => {
        this.setState({ childrenData: value.data });
      });
  };

  /** 导出表格 */
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

  /** 表格标题 */
  public tableTitle = () => (
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
      {"慢性病季度分布情况"}
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
              查询
            </Button>
          </Form.Item>
        </Form>
        {/** 统计表 */}
        <Table
          dataSource={this.state.tableData}
          columns={this.tableTiele}
          ref={ref => {
            this.tableRefs = ref;
          }}
          scroll={{
            x: true
          }}
          title={this.tableTitle}
          size={"small"}
          bordered={true}
        />
        {/** 饼图 */}
        <div className={classes.myChart}>
          <Row>
            <Col span={20} offset={2}>
              <Pie
                titleChart={"本季度慢性病分布情况"}
                chartData={this.state.PieData}
              />
            </Col>
          </Row>
        </div>
        {/** 表格加条形图 */}
        <MorbidityModal childrenData={this.state.childrenData} />
      </div>
    );
  }
}

export default Form.create()(withStyles(styles)(ChronicChart));
