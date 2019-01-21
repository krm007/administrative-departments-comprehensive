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
class TongQi extends React.Component<Iprops, Istate> {
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
                    <Tabs.TabPane tab={<span>按科室</span>} key="1">
                        {this.state.key === "1" ? (
                            <BocoTable
                                title={"按科室"}
                                tableTitle={VirtualTableTitleConfig.get("ankeshi")}
                            />
                        ) : (
                            <div />
                        )}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span>按机构</span>} key="2">
                        {this.state.key === "2" ? (
                            <BocoTable
                                title={"按机构"}
                                tableTitle={VirtualTableTitleConfig.get("anjigou")}
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

export default withStyles(styles)(TongQi);