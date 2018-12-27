import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Icon, Layout } from "antd";

const styles = (theme: Theme) =>
  createStyles<"root" | "trigger">({
    root: {
      padding: 0
    },
    trigger: {
      color: "#fff",
      cursor: "pointer",
      fontSize: "18px",
      lineHeight: "45px",
      padding: "0 24px",
      transition: "color .3s",
      verticalAlign: "0.35em"
    }
  });

interface Iprops extends WithStyles<typeof styles> {
  collapsed: boolean;
  toggle: () => void;
}

/**
 * 描述：
 *  头部组件
 * @author 12859
 * @date 2018/12/5-10:59
 */
class MyHeader extends React.Component<Iprops> {
  public render() {
    const { classes } = this.props;
    return (
      <Layout.Header className={classes.root}>
        <Icon
          className={classes.trigger}
          type={this.props.collapsed ? "menu-unfold" : "menu-fold"}
          onClick={this.props.toggle}
        />
      </Layout.Header>
    );
  }
}

export default withStyles(styles)(MyHeader);
