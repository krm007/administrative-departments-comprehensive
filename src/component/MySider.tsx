import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import Sider from "antd/lib/layout/Sider";
import { Link } from "react-router-dom";
import { Icon, Menu } from "antd";
import backgroundBg from "src/images/backgroundBg.png";
import Logo from "../images/logo.png";
import LogoMini from "../images/logo-mini.png";
import { ClickParam } from "antd/lib/menu";

const styles = (theme: Theme) =>
  createStyles<"root" | "logo" | "menu">({
    root: {
      backgroundImage: `url(${backgroundBg})`,
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "center",
      "& .ant-menu-inline": {
        width: 200
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
    }
  });
export interface menuArray {
  path?: string;
  name?: string;
  IconType?: string;
  children?: menuArray[];
}
interface BasicServiceMenues {
  parentId: number;
  moduleId: number;
  url: string;
  name: string;
  icon: string;
}
interface Iprops extends WithStyles<typeof styles> {
  collapsed?: boolean;
  menuList: menuArray[];
  logo: boolean;
}
interface Istatus {
  openKeys: string[];
}
// @ts-ignore
function getChildren(list: BasicServiceMenues[], root: number): menuArray[] {
  const newList: menuArray[] = [];
  list.forEach(value => {
    if (root === value.parentId) {
      const data = getChildren(list, value.moduleId);
      newList.push({
        path: value.url,
        IconType: value.icon,
        name: value.name,
        children: data
      });
    }
  });
  return newList;
}
function RecursionMenu(params: menuArray[]): any {
  return params.map((value, index) => {
    if (!value.children) {
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
      openKeys: []
    };
  }

  public handerChange = (openKeys: string[]) => {
    this.setState({
      openKeys
    });
  };
  public onClickMenue = (param: ClickParam) => {
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
        width={240}
        style={{maxHeight:"100vh",overflowY:"scroll"}}
      >
        <div className={classes.logo} onClick={()=>{
          console.log(JSON.stringify(getChildren([{"moduleId":21,"parentId":0,"url":"","name":"转诊业务处理","icon":"fa fa-desktop"},{"moduleId":22,"parentId":21,"url":"/boco-health-hms/upTransferApplication/goToAddUpTransferApplication","name":"上转申请","icon":""},{"moduleId":23,"parentId":21,"url":"/boco-health-hms/upTransferOperate/toQueryInfos","name":"上转审核","icon":""},{"moduleId":24,"parentId":21,"url":"/boco-health-hms/downTransferApplication/toAdd","name":"下转申请","icon":""},{"moduleId":25,"parentId":21,"url":"/boco-health-hms/downTransferOperate/gridView","name":"下转审核","icon":""},{"moduleId":26,"parentId":21,"url":"/boco-health-hms/userTask/toMyUserTask","name":"待办业务","icon":""},{"moduleId":27,"parentId":21,"url":"/boco-health-hms/userTask/toMyDoneTask","name":"已办业务","icon":""},{"moduleId":28,"parentId":21,"url":"/boco-health-hms/doctor/toMyReceived","name":"接诊记录","icon":""},{"moduleId":30,"parentId":21,"url":"/boco-health-hms/transferApplicationHistory/toApplicationHistory","name":"申请记录","icon":""},{"moduleId":31,"parentId":0,"url":"","name":"转诊事务配置","icon":"fa fa-share-alt"},{"moduleId":32,"parentId":31,"url":"/boco-health-hms/hospital/open/openTransferHospital","name":"转诊医院管理","icon":""},{"moduleId":33,"parentId":31,"url":"/boco-health-hms/payment/open/openPayment","name":"转诊费用结算","icon":""},{"moduleId":39,"parentId":31,"url":"/boco-health-hms/diseaseReferralHint/toDiseaseReferralHint","name":"转诊疾病知识库","icon":""},{"moduleId":34,"parentId":0,"url":"---","name":"报表统计","icon":"fa fa-bar-chart-o"},{"moduleId":35,"parentId":34,"url":"/boco-health-hms/rank/toUpRankList","name":"转诊病种统计","icon":""},{"moduleId":36,"parentId":34,"url":"/boco-health-hms/queryTable/toQueryTable","name":"转诊患者统计","icon":""},{"moduleId":49,"parentId":34,"url":"/boco-health-hms/transferApplicationRecord/index","name":"双向转诊登记统计","icon":""},{"moduleId":50,"parentId":34,"url":"/boco-health-hms/statistics/show","name":"医院及科室转诊统计","icon":""},{"moduleId":51,"parentId":34,"url":"/boco-health-hms/patientShuntFigure/index","name":"患者分流图 ","icon":""},{"moduleId":37,"parentId":0,"url":"","name":"医疗资源查询","icon":"fa fa-folder"},{"moduleId":38,"parentId":37,"url":"/boco-health-hms/views/medicalResource/medicalResourceQuery.jsp","name":"医疗资源查询","icon":""}],0)))
        }}>
          <img src={this.props.logo ? Logo : LogoMini} />
        </div>
        <Menu
          theme={"dark"}
          mode={"inline"}
          className={classes.menu}
          openKeys={this.state.openKeys}
          onOpenChange={this.handerChange}
          onClick={this.onClickMenue}
        >
          {RecursionMenu(this.props.menuList)}
        </Menu>
      </Sider>
    );
  }
}

export default withStyles(styles)(MySider);
