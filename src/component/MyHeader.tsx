import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Avatar, Dropdown, Icon, Layout, Menu } from "antd";

const styles = (theme: Theme) =>
  createStyles<"root" | "trigger" | "layout">({
    root: {
      padding: "0px 20px 0px 0px"
    },
    trigger: {
      color: "#fff",
      cursor: "pointer",
      fontSize: "18px",
      lineHeight: "45px",
      padding: "0 24px",
      transition: "color .3s",
      verticalAlign: "0.35em"
    },
    layout: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%"
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
  private menu = (
    <Menu>
      <Menu.Item>注册</Menu.Item>
      <Menu.Item
        onClick={() => {
          console.log("退出");
        }}
      >
        退出
      </Menu.Item>
    </Menu>
  );

  public render() {
    const { classes } = this.props;
    return (
      <Layout.Header className={classes.root}>
        <div className={classes.layout}>
          <Icon
            className={classes.trigger}
            type={this.props.collapsed ? "menu-unfold" : "menu-fold"}
            onClick={this.props.toggle}
          />
          <Dropdown overlay={this.menu}>
            <Avatar size={"small"} icon={"user"} />
          </Dropdown>
        </div>
      </Layout.Header>
    );
  }
}

export default withStyles(styles)(MyHeader);
