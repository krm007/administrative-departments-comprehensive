import { createAction } from "redux-actions";
import { LOGOUT, SETTABLEDATASOURCE } from "../ActionTypes";

/**
 * 登出
 */
export const logOut = createAction(LOGOUT);

/**
 * 设置表格数据
 */
export const tableDataSource = createAction(
  SETTABLEDATASOURCE,
  (data:any) => {
    return data;
  }
);
