import * as React from "react";
import * as ReactDOM from "react-dom";
import "babel-polyfill";
import * as moment from "moment";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { LocaleProvider } from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";
import "moment/locale/zh-cn";
import { Provider } from "react-redux";
import stroe from "./redux/Store";

moment.locale("zh-cn");
/**
 * @author sunshixiong
 * @description {
 *   Provider配置redux，LocaleProvider配置antd为中文主题
 * }
 */
ReactDOM.render(
    <Provider store={stroe}>
  <LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>
    </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
