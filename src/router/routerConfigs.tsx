import * as loadable from "react-loadable";
import { RouteConfig } from "react-router-config";
import Loading from "../component/Loading";
import BocoApp from "../views/BocoApp";
import RegulationConfigs from "./RegulationConfigs";

const Login = loadable({
  loader: () => import("../views/Login"),
  loading: Loading
});

/**
 * 路由配置：其路由的详情可以路由的递归关系查看相应的地址到相应的组件
 */
const routerConfigs: RouteConfig[] = [
  {
    component: Login,
    exact: true,
    path: "/login"
  },
  {
    component: BocoApp,
    path: "/",
    routes: RegulationConfigs
  }
];
export default routerConfigs;
