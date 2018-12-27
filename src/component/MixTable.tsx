import {createStyles, Theme, withStyles} from '@material-ui/core/styles';
import {WithStyles} from "@material-ui/core/styles/withStyles";
import * as React from "react";
import {Tooltip, Table, Icon,} from 'antd';
import {FormatData} from "../_util/util";
import infoIcon from "../images/info.png";
import {ColumnProps} from "antd/lib/table";
import {BocoMixtable} from "../typings/CommonData";



const styles = (theme: Theme) => createStyles<"MixTable">({
    MixTable: {}
});

interface Iprops extends WithStyles<typeof styles> {
    title:string,
    mixData:BocoMixtable[]
}

interface Istates {
    infoList: BocoMixtable[],
}

class MixTable extends React.Component<Iprops, Istates> {
    private tableColumns: Array<ColumnProps<BocoMixtable>> = [{
        title: '一级指标',
        dataIndex: 'kind',
        align:'center',
        render: (text: any, row: any) => {
            const obj = {
                children: text,
                props: {
                    rowSpan: ""
                },
            };
            // if (index === 0) {
            obj.props.rowSpan = row.num;
            // }
            return obj;
        },
    }, {
        title: '二级指标',
        dataIndex: 'name',
        align:'center',
        render: (text: any, record: any) => {
            return (
                <span>
                    <span>{record.name}</span>
                    <Tooltip style={{backgroundColor: "yellow"}} placement="leftBottom" title={record.explain}>
                    <img src={infoIcon} style={{float: "right"}} alt=""/>
                    </Tooltip>
                </span>
            )

        }
    }, {
        title: '指标值',
        dataIndex: 'value',
        align:'center',
        render:(text:any,record:any)=>{
            if(record.status){
                return (
                    <span>
                        <span>{text}</span>
                        <Icon type={"up"} style={{color:"red"}}/>
                    </span>
                )
            }else{
                return (
                    <span>{text}</span>
                )
            }
        }
    }];

    constructor(props: Iprops) {
        super(props)
    }

    public render() {
        const {classes} = this.props;
        return (
            <div className={classes.MixTable}>
                <Table dataSource={FormatData(this.props.mixData, "kind")}
                       size={"middle"}
                       columns={this.tableColumns}
                       title={()=>(this.props.title)}
                       bordered={true}
                       pagination={false}
                />
            </div>
        );
    }
}

export default withStyles(styles)(MixTable);