import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Tabs } from "antd";
import BocoTable from "../BocoTable";
import VirtualTableTitleConfig from "../../config/VirtualTableTitleConfig";


const styles = (theme: Theme) =>
    createStyles<"root">({
        root: {}
    });
interface Istate {
    key?: string;
}
interface Iprops extends WithStyles<typeof styles> {}

/**
 * 描述：
 *  挂号分账
 * @author sunshixiong
 * @date 2019/1/8-20:37
 */
class NeiHanZhiLiang extends React.Component<Iprops, Istate> {
    constructor(props: Iprops) {
        super(props);
        this.state = {
            key: "1"
        };
    }
    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Tabs
                    activeKey={this.state.key}
                    onChange={activeKey => this.setState({ key: activeKey })}
                >
                    <Tabs.TabPane tab={<span>医疗文书评分</span>} key="1">
                        {this.state.key === "1" ? (
                            <BocoTable
                                title={"医疗文书评分"}
                                url={"/menZhenHuiZongGeRen/page"}
                                tableTitle={VirtualTableTitleConfig.get("yiliaowenshupingfen")}
                            />
                        ) : (
                            <div />
                        )}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span>处方质量评分</span>} key="2">
                        {this.state.key === "2" ? (
                            <BocoTable
                                title={"处方质量评分"}
                                url={"/menZhenGuaZhangHuiZong/page"}
                                tableTitle={VirtualTableTitleConfig.get("chufangzhiliangpingfen")}
                                orgPassable={true}
                            />
                        ) : (
                            <div />
                        )}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span>医保问题调查</span>} key="3">
                        {this.state.key === "3" ? (
                            <BocoTable
                                title={"医保问题调查"}
                                url={"/menZhenHuiZongYue/page"}
                                tableTitle={VirtualTableTitleConfig.get("yibaowentidiaocha")}
                                timeFormat={1}
                            />
                        ) : (
                            <div />
                        )}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span>申请单问题</span>} key="4">
                        {this.state.key === "4" ? (
                            <BocoTable
                                title={"申请单问题"}
                                url={"/guaHaoRiBaoGeRenHuiZong/page"}
                                tableTitle={VirtualTableTitleConfig.get("shenqingdanwenti")}
                            />
                        ) : (
                            <div />
                        )}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span>病案管理</span>} key="5">
                        {this.state.key === "5" ? (
                            <BocoTable
                                title={"病案管理"}
                                url={"/menZhenYeWuShouRu/page"}
                                tableTitle={VirtualTableTitleConfig.get("binganguanli")}
                            />
                        ) : (
                            <div />
                        )}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span>出诊管理</span>} key="6">
                        {this.state.key === "6" ? (
                            <BocoTable
                                title={"出诊管理"}
                                url={"/menZhenYeWuShouRu/page"}
                                tableTitle={VirtualTableTitleConfig.get("chuzhenguanli")}
                            />
                        ) : (
                            <div />
                        )}
                    </Tabs.TabPane>
                </Tabs>
            </div>
        );
    }
}

export default withStyles(styles)(NeiHanZhiLiang);