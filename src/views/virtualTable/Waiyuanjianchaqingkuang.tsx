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
class Waiyuanjianchaqingkuang extends React.Component<Iprops, Istate> {
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
                    <Tabs.TabPane tab={<span>外院检查情况</span>} key="1">
                        {this.state.key === "1" ? (
                            <BocoTable
                                title={"外院检查情况"}
                                tableTitle={VirtualTableTitleConfig.get("waiyuanjianchaqingkuang")}
                            />
                        ) : (
                            <div />
                        )}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span>征求意见建议</span>} key="2">
                        {this.state.key === "2" ? (
                            <BocoTable
                                title={"征求意见建议"}
                                tableTitle={VirtualTableTitleConfig.get("zhengqiuyijianjianyi")}
                                orgPassable={true}
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

export default withStyles(styles)(Waiyuanjianchaqingkuang);