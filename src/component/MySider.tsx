import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import Sider from "antd/lib/layout/Sider";
import { Link } from "react-router-dom";
import { Icon, Menu } from "antd";
import backgroundBg from "src/images/backgroundBg.png";
import Logo from "../images/logo.png";
import LogoMini from "../images/logo-mini.png";

const styles = (theme: Theme) =>
  createStyles<"root" | "logo" | "menu">({
    root: {
      backgroundImage: `url(${backgroundBg})`,
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "center",
      "& .ant-menu-inline": {
        width: 220
      },

    },
    logo: {
      "& img": {
        backgroundRepeat: "no-repeat",
        width: "95.8%",
        padding: 10
      }
    },
    menu: {
      margin: "20px 10px 0 10px",
      borderRadius: 4,
      "& .ant-menu-submenu-title":{
        paddingLeft:"12px!important",
      },
      "& .ant-menu-item":{
        paddingLeft:"35px!important",
      }
    }
  });
export interface menuArray {
  path?: string;
  name?: string;
  IconType?: string;
  children?: menuArray[];
}
interface Iprops extends WithStyles<typeof styles> {
  collapsed?: boolean;
  menuList: menuArray[];
  logo: boolean;
}
function RecursionMenu(params: menuArray[]): any {
  return params.map((value, index) => {
    if (!value.children) {
      return (
        <Menu.Item key={value.name}>
          <Link to={value.path?value.path:""}>
            <Icon type={value.IconType} />
            <span>{value.name}</span>
          </Link>
        </Menu.Item>
      );
    } else {
      return (
        <Menu.SubMenu
          key={value.name}
          title={
            <span>
              <Icon type={value.IconType} />
              <span>{value.name}</span>
            </span>
          }
        >
          {RecursionMenu(value.children)}
        </Menu.SubMenu>
      );
    }
  });
}
/**
 * 描述：
 *  左边菜单栏
 * @author 12859
 * @date 2018/12/5-11:00
 */
class MySider extends React.Component<Iprops> {

  public render() {
    const { classes } = this.props;
    return (
      <Sider
        trigger={null}
        collapsible={true}
        collapsed={this.props.collapsed}
        theme={"dark"}
        className={classes.root}
        width={240}
      >
        <div className={classes.logo}>
          <img src={(this.props.logo)?Logo:LogoMini} />
        </div>
        <Menu theme={"dark"} mode={"inline"} className={classes.menu}>
          {RecursionMenu(this.props.menuList)}
        </Menu>
      </Sider>
    );
  }
}

export default withStyles(styles)(MySider);
