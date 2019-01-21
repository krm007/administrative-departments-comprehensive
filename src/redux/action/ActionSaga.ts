import { createAction } from "redux-actions";
import { GETORGLIST, GETTABLEDATASOURCE } from "../ActionTypes";

/**
 * 异步获取表格数据
 */
export const getTableDataSource = createAction(
  GETTABLEDATASOURCE,
  (params: any) => {
    return params;
  }
);

/**
 * 异步获取机构的数据
 */
export const getOrgList = createAction(GETORGLIST);
