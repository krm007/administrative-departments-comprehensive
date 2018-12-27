import {createStyles, Theme, withStyles} from '@material-ui/core/styles';
import {WithStyles} from "@material-ui/core/styles/withStyles";
import * as React from "react";
import {Button, Form, Select, DatePicker} from 'antd';
import {FormComponentProps} from 'antd/lib/form';
import MixTable from "../component/MixTable"
import {BocoMixtable, FilterData} from "../typings/CommonData";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTableDataSource } from "../redux/action/ActionSaga";
import { getTransformData }  from "../redux/relesect/selectors";

const styles = (theme: Theme) => createStyles<"ComprehensiveWorkWatch">({
    ComprehensiveWorkWatch: {
        padding: "20px"
    }
});

const FormItem = Form.Item;
const SelectOption = Select.Option;

interface Iprops extends WithStyles<typeof styles>, FormComponentProps {
    url: string;
    tableName: string;
    title: string;
    data: BocoMixtable[];
    serchData: (param: FilterData) => void;
}

class ComprehensiveWorkWatch extends React.Component<Iprops> {
    public componentDidMount(): void {
        this.getData({});

    }
    public getData(params: any) {
        let tableName = this.props.url;
        if (this.props.tableName) {
            tableName = this.props.tableName;
        }
        this.props.serchData({
            type: tableName,
            url: `/business/${this.props.url}/sums`,
            params
        });
    }
    public render() {
        const {classes} = this.props;
        const {getFieldDecorator} = this.props.form;
        return (
            <div className={classes.ComprehensiveWorkWatch}>
                <Form layout={"inline"}>
                    <FormItem label={"机构"}>
                        {
                            getFieldDecorator("org")(
                                <Select id={"org"} style={{width: "172px"}}>
                                    <SelectOption value="0">卫生院</SelectOption>
                                    <SelectOption value="1">卫计委</SelectOption>
                                </Select>
                            )
                        }
                    </FormItem>
                    <FormItem label={"日期"}>
                        {
                            getFieldDecorator("time")(
                                <DatePicker/>
                            )
                        }
                    </FormItem>
                    <FormItem>
                        <Button htmlType={"submit"}>查询</Button>
                    </FormItem>

                </Form>
                <MixTable title={this.props.title} mixData={this.props.data}/>
            </div>
        );
    }
}
const mapStateToProps = (state:any) =>{
    return {
        data:getTransformData(state)
    }
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
)(Form.create()(withStyles(styles)(ComprehensiveWorkWatch)));