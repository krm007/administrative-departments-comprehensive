import { createSelector } from "reselect";

const getTableData = (state: any) =>
  state.get("tableDataResource").get("dataResource");
/**
 * 获取表格数据
 */
export const getTransformData = createSelector(
  [getTableData],
  data => {
    return [];
  }
);