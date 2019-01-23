import * as React from "react";
import { Layout } from "antd";
import MySider, { MenuArray } from "../component/MySider";
import MyHeader from "../component/MyHeader";
import MyFooter from "../component/MyFooter";
import MenuConfig from "../config/MenuConfig";
import { RouteConfig } from "react-router-config";
import MyContent from "../component/MyContent";
import breadcrumbNameMap from "../router/BreadCrumbLinks";
import { RouteComponentProps } from "react-router";
import { bindActionCreators } from "redux";
import { getOrgList } from "../redux/action/ActionSaga";
import { connect } from "react-redux";
import { getMenuList } from "../request/Request";

interface BasicServiceMenues {
  parentId: number;
  id: number;
  url: string;
  name: string;
  icon: string;
}
interface Istatus {
  collapse: boolean;
  logo: boolean;
  menueList: MenuArray[];
}
interface Iprops extends RouteComponentProps {
  route: RouteConfig;
  getOrgList: () => void;
}
function getChildren(list: BasicServiceMenues[], root: number): MenuArray[] {
  const newList: MenuArray[] = [];
  list.forEach(value => {
    if (root === value.parentId) {
      const data = getChildren(list, value.id);
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
/**
 * 描述：
 *  主页面
 * @author 12859
 * @date 2018/12/5-15:26
 * @description{
 *   menuList:菜单的数据，
 *   toggle:关闭时间
 * }
 */
class BocoApp extends React.Component<Iprops, Istatus> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      collapse: false,
      logo: true,
      menueList: []
    };
  }
  public componentDidMount(): void {
    this.props.getOrgList();
    getMenuList().then(value => {
      if (value.data && typeof value.data === "object") {
        this.setState({
          menueList: getChildren(value.data, 0)
        });
      }
    });
  }

  public render() {
    /**
     *  TODO 正式修改
     */
    return (
      <Layout>
        <MySider
            breadcrumbNameMap={breadcrumbNameMap}
          menuList={MenuConfig}
          logo={this.state.logo}
          collapsed={this.state.collapse}
        />
        <Layout style={{ overflowY: "auto", height: "100vh" }}>
          <MyHeader
            toggle={() => {
              this.setState({
                collapse: !this.state.collapse,
                logo: !this.state.logo
              });
            }}
            collapsed={this.state.collapse}
          />
          <MyContent
            breadcrumbNameMap={breadcrumbNameMap}
            routes={this.props.route.routes}
          />
          <MyFooter />
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = ({} = (dispatch: any, ownProps: any) => {
  return bindActionCreators(
    {
      getOrgList
    },
    dispatch
  );
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BocoApp);
