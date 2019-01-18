import {createStyles, Theme, withStyles} from '@material-ui/core/styles';
import {WithStyles} from "@material-ui/core/styles/withStyles";
import * as React from "react";
// import * as moment from "moment";
import {Form, Select, Table, DatePicker, Button, Modal, Spin} from "antd";
import {FormComponentProps} from "antd/lib/form";
import {ColumnProps} from "antd/lib/table";
import service from '../../request/Service';
import ReactHTMLTableToExcel from "../../component/ReactHTMLTableToExcel";
import { yuanChengModalPost, yuanchengPagePost} from "../../request/Request";
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
    title:string
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
            title: '医院/医生',
            dataIndex: 'yiYuanYiSheng',
            key: 'yiYuanYiSheng',
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
            title: '报告数量',
            dataIndex: 'baoGaoShuLiang',
            key: 'baoGaoShuLiang'
        }
    ];
    public modalColumns: Array<ColumnProps<any>> = [
        {
            title: "医师名称",
            align: "center",
            dataIndex: "yiShiMingCheng",
            key: "yiShiMingCheng"
        }, {
            title: '报告数量',
            align:"center",
            dataIndex: 'baoGaoShuLiang',
            key: 'baoGaoShuLiang'
        }, {
            title: "放射报告",
            align: "center",
            dataIndex: "fangSheBaoGao",
            key: "fangSheBaoGao"
        }, {
            title: "超声报告",
            align: "center",
            dataIndex: "chaoShengBaoGao",
            key: "chaoShengBaoGao"
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
            {this.state.show?"附表：医生工作量统计明细":this.props.title}
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
        yuanchengPagePost(params).then((value) => {
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
        yuanChengModalPost({orgId:val}).then(value => {
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
                            title={this.tableTitle}
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