import { Modal } from "antd";
import Axios from "axios";
import createHashHistory from "history/createHashHistory";

const service = Axios.create({
  timeout: 15000,
  baseURL: "/api"
});

/**
 * 添加请求拦截器(在发送请求之前或之后做什么)
 */
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/**
 * 添加响应拦截器
 */
service.interceptors.response.use(
  response => {
    if (response.status === 401) {
      Modal.confirm({ content: "登录信息已过期！请重新登录" });
      createHashHistory().push("/login");
    }
    return response;
  },
  error => {
    if (error.response.status === 500) {
      if (error.response.data.message) {
        Modal.error({ content: error.response.data.message });
      } else {
        Modal.error({ content: error.response.data });
      }
    }
    if (error.response.status === 504 || error.response.status === 404) {
      Modal.error({ content: "找不到服务器" });
    }
    if (error.response.status === 401) {
      const historyApp = createHashHistory();
      historyApp.push("/login");
    }
    return Promise.reject(error);
  }
);
export default service;
