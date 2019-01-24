import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import Sider from "antd/lib/layout/Sider";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { Icon, Menu } from "antd";
import backgroundBg from "src/images/backgroundBg.png";
import Logo from "../images/logo.png";
import LogoMini from "../images/logo-mini.png";
import { ClickParam } from "antd/lib/menu";

const styles = (theme: Theme) =>
  createStyles<"root" | "logo" | "menu" | "menuContainer">({
    root: {
      backgroundImage: `url(${backgroundBg})`,
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "center",
      "& .ant-menu-inline": {
        width: 220
      }
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
      "& .ant-menu-submenu-title": {
        paddingLeft: "12px!important"
      },
      "& .ant-menu-item": {
        paddingLeft: "35px!important"
      }
    },
    menuContainer: {
      overflow: "hidden",
      height: "100%",
      width: "100%",
      "&:hover": {
        overflow: "auto"
      }
    }
  });
export interface MenuArray {
  path?: string;
  name?: string;
  IconType?: string;
  children?: MenuArray[];
}
interface Iprops extends WithStyles<typeof styles>, RouteComponentProps {
  breadcrumbNameMap: object;
  collapsed?: boolean;
  menuList: MenuArray[];
  logo: boolean;
}
interface Istatus {
  current: string;
  openKeys: string[];
}

function RecursionMenu(params: MenuArray[]): any {
  return params.map((value, index) => {
    if (!value.children || (value.children && value.children.length === 0)) {
      return (
        <Menu.Item key={value.name}>
          <Link to={value.path ? value.path : ""}>
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
class MySider extends React.Component<Iprops, Istatus> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      current: "/",
      openKeys: []
    };
  }
  public componentWillMount() {
    const url = this.props.location.pathname;
    const url1 = url.split("/").filter(i => i);
    const nameList: any = [];
    url1.map((_, index) => {
      // 根据拆分的pathname匹配面包屑文件中的url取到汉字name,拼装成数组
      const $url = `/${url1.slice(0, index + 1).join("/")}`;
      if (this.props.breadcrumbNameMap[$url]) {
        return nameList.push(this.props.breadcrumbNameMap[$url]);
      } else {
        return "";
      }
    });
    this.setState({
      openKeys: nameList.slice(0, nameList.length - 1),
      current: nameList[nameList.length - 1]
    });
  }
  public handerChange = (openKeys: string[]) => {
    this.setState({
      openKeys
    });
  };
  public onClickMenu = (param: ClickParam) => {
    const openkeyMenu = param.keyPath.filter((value, index) => {
      return index !== 0;
    });
    this.setState({
      openKeys: openkeyMenu
    });
  };

  public render() {
    const { classes } = this.props;
    return (
      <Sider
        trigger={null}
        collapsible={true}
        collapsed={this.props.collapsed}
        theme={"dark"}
        className={classes.root}
        style={{ height: "100vh", overflowX: "hidden", overflowY: "hidden" }}
        width={240}
      >
        <div className={classes.menuContainer}>
          <div className={classes.logo}>
            <img src={this.props.logo ? Logo : LogoMini} />
          </div>
          <Menu
            theme={"dark"}
            mode={"inline"}
            className={classes.menu}
            openKeys={this.state.openKeys}
            onOpenChange={this.handerChange}
            defaultOpenKeys={this.state.openKeys}
            defaultSelectedKeys={[this.state.current]}
            onClick={this.onClickMenu}
          >
            {RecursionMenu(this.props.menuList)}
          </Menu>
        </div>
      </Sider>
    );
  }
}

export default withRouter(withStyles(styles)(MySider));
