import * as React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routerConfigs from "./router/routerConfigs";
import JssProvider from "react-jss/lib/JssProvider";
import createGenerateClassName from "@material-ui/core/styles/createGenerateClassName";
import jssPreset from "@material-ui/core/styles/jssPreset";
import { create } from "jss";

import withRoot from "./withRoot";
/**
 * 使用material-ui的jss in js 解决方案
 */
const generateClassName = createGenerateClassName();
const jss = create(jssPreset());

/**
 * @constructor {
 *   采用react-router配置的方式来控制路由，将路由配置分离开来
 *   JssProvider是material-ui的css-in-js组件，使用这个才不会导致生产环境和线上环境不一样
 * }
 *  线上环境最好用BowerRouter
 * @return JSX.Element
 */
class App extends React.Component {
  public render() {
    return <div className="App">
        <JssProvider jss={jss} generateClassName={generateClassName}>
          <HashRouter>{renderRoutes(routerConfigs)}</HashRouter>
        </JssProvider>
      </div>;
  }
}

export default withRoot(App);
