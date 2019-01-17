import {createStyles, Theme, withStyles} from '@material-ui/core/styles';
import {WithStyles} from "@material-ui/core/styles/withStyles";
import * as React from "react";
// import * as moment from "moment";
import {Form, Select, Table, DatePicker, Button, Modal, Spin} from "antd";
import {FormComponentProps} from "antd/lib/form";
import {ColumnProps} from "antd/lib/table";
import service from '../../request/Service';
import ReactHTMLTableToExcel from "../../component/ReactHTMLTableToExcel";
import {shuangxiangModalPost, shuangxiangPagePost} from "../../request/Request";
import {BocoPage} from "../../typings/tablePropsData";

const RangePicker = DatePicker.RangePicker;

const styles = (theme: Theme) => createStyles<"TwoWayTransOutPatientTable" | "form">({
    TwoWayTransOutPatientTable: {
        padding: "20px"
    },
    form: {
        marginBottom: "20px"
    }
});

interface Iprops extends WithStyles<typeof styles>, FormComponentProps {
}

interface Istate {
    data: BocoPage<any>,
    formData: any,
    show: boolean,
    modalData: any,
    sping:boolean
}

/**
 * 双向转诊统计表
 */
class QuYuDoctorWork extends React.Component<Iprops, Istate> {
    /**
     * 配置表头格式
     */
    public columns: Array<ColumnProps<any>> = [
        {
            title: '机构',
            dataIndex: 'yiLiaoJiGou',
            key: 'yiLiaoJiGou'
        },
        {
            title: '累计接受下级医疗机构患者数（人次）',
            dataIndex: 'ljJieShouXiaJiJiGouShu',
            key: 'ljJieShouXiaJiJiGouShu'
        },
        {
            title: '本月接受下级医疗机构患者数量（人次）',
            dataIndex: 'byJieShouXiaJiJiGouShu',
            key: 'byJieShouXiaJiJiGouShu',
            render: (text, row, index) => {
                return (
                    <a
                        onClick={() => {
                            this.showModel(row.yiLiaoJiGou)
                        }}
                    >
                        {text}
                    </a>
                )
            }
        },
        {
            title: '累计上转患者数量（人次）',
            dataIndex: "ljShangZhuanHuanZheShu",
            key: "ljShangZhuanHuanZheShu"
        },
        {
            title: "本月上转患者数量",
            align: "center",
            dataIndex: "byShangZhuanHuanZheShu",
            key: "byShangZhuanHuanZheShu"
        }
    ];
    public modalColumns: Array<ColumnProps<any>> = [
        {
            title: "序号",
            align: "center",
            dataIndex: "id",
            key: "id",
            render: (value, row, index) => {
                return `${index + 1}`;
            }
        }, {
            title: "转诊时间",
            align: "center",
            dataIndex: "zhuanZhenShiJian",
            key: "zhuanZhenShiJian"
        }, {
            title: "患者姓名",
            align: "center",
            dataIndex: "huanZheXingMing",
            key: "huanZheXingMing"
        }, {
            title: "性别",
            align: "center",
            dataIndex: "xingBie",
            key: "xingBie"
        }, {
            title: "转诊医生",
            align: "center",
            dataIndex: "zhuanZhenYiSheng",
            key: "zhuanZhenYiSheng"
        }, {
            title: "接诊医生",
            align: "center",
            dataIndex: "jieZhenYiSheng",
            key: "jieZhenYiSheng"
        }
    ];

    constructor(props: Iprops) {
        super(props);
        this.state = {
            data:{},
            formData: [],
            show: false,
            modalData: [],
            sping:false
        }
    }

    /**
     * 表格的title
     */
    public tableTitle = (currentPageData: any[]) => (
        <span style={{padding: "10px"}}>
      <img
          src={require("../../images/chartIcon.png")}
          alt=""
          style={{
              float: "left",
              marginLeft: "1vw",
              marginRight: "0.5vw"
          }}
      />
            {"双向转诊"}
            <span style={{float: "right"}}>
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
     * 分页、排序、筛选变化时触发
     */
    public handleTableChange = (page: number, size?: number) => {
        const formData = this.getFormDataValue();
        this.getData({ offset: page, limit: size, ...formData });
    };
    public getData(params:any){
        shuangxiangPagePost(params).then((value) => {
            this.setState({
                data:value.data
            })
        })
    }
    /**
     * 获取表单数据
     */
    public getFormDataValue() {
        const timeNow = this.props.form.getFieldValue("timeOrder");
        const formDataPre = this.props.form.getFieldsValue();
        return Object.assign(formDataPre, timeNow);
    }
    public showModel = (val: any) => {
        shuangxiangModalPost({orgId:val}).then(value => {
            const modalList = value.data.list;
            this.setState({
                modalData:modalList
            },()=>{
                this.setState({
                    sping:false
                })
            })
        });
        this.setState({
            show: true,
            sping:true
        });
    };

    public componentWillMount() {
        this.getData({});
        service.post("/yiLiaoJiGou/getYiLiaoJiGou").then(value => {
            const selectoptions = value.data;
            this.setState({
                formData:selectoptions
            })
        })
    };

    public onSubmit = (event: React.FormEvent<any>) => {
        event.preventDefault();
        this.getData(this.getFormDataValue())
    };

    public render() {
        const {classes} = this.props;
        const {getFieldDecorator} = this.props.form;
        const dataSoruce: any = this.state.data ? this.state.data : {};
        return (
            <div className={classes.TwoWayTransOutPatientTable}>
                <Form layout={"inline"} onSubmit={this.onSubmit} className={classes.form}>
                    <Form.Item>
                        {getFieldDecorator("orgId", {})(
                            <Select placeholder={"机构选择"} style={{width: 174}}>
                                {(() => {
                                    if (this.state.formData) {
                                        return this.state.formData.map(
                                            (value1: any) => {
                                                return (
                                                    <Select.Option
                                                        value={value1.value}
                                                        key={value1.value}
                                                    >
                                                        {value1.key}
                                                    </Select.Option>
                                                );
                                            }
                                        );
                                    }
                                })()}
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator("timeOrder", {
                            // initialValue: moment()
                        })(
                            <RangePicker/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType={"submit"} type={"primary"}>
                            搜索
                        </Button>
                    </Form.Item>
                </Form>
                <Table
                    bordered={true}
                    size={"small"}
                    title={this.tableTitle}
                    dataSource={this.state.data.list}
                    columns={this.columns}
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
                <Modal visible={this.state.show}
                       width={"800px"}
                       onCancel={() => {
                           this.setState({show: false})
                       }}
                       onOk={()=>{
                           this.setState({show:false,modalData:[]})
                       }}
                >
                    <Spin spinning={this.state.sping}>
                        <Table
                            columns={this.modalColumns}
                            bordered={true} size={"small"}
                            dataSource={this.state.modalData}/>
                    </Spin>
                </Modal>
            </div>
        );
    }
}

export default Form.create()(withStyles(styles)(QuYuDoctorWork));