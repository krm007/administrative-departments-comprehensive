import { createAction } from "redux-actions";
import { GETTABLEDATASOURCE } from "../ActionTypes";
import {  FilterData } from "../../typings/CommonData";

/**
 * 获取表格数据
 */
export const getTableDataSource = createAction(
    GETTABLEDATASOURCE,
    (params:FilterData) => {
      return params;
    }
);
