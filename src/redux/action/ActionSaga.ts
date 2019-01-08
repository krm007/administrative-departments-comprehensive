import { createAction } from "redux-actions";
import { GETTABLEDATASOURCE } from "../ActionTypes";

/**
 * 获取表格数据
 */
export const getTableDataSource = createAction(
    GETTABLEDATASOURCE,
    (params:any) => {
      return params;
    }
);
