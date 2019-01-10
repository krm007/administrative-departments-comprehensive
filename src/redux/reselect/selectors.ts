import { createSelector } from "reselect";

const getTableData = (state: any) =>
  state.get("tableDataResource").get("dataResource");
/**
 * 获取表格数据
 */
export const getTransformTableData = createSelector(
  [getTableData],
  data => {
    const dataTable = data.toJS();
    if (dataTable) {
      return dataTable.data;
    } else {
      return null;
    }
  }
);
/**
 * 获取表格数据
 */
export const getTransformFormData = createSelector(
  [getTableData],
  data => {
    const dataForm = data.toJS();
    if (dataForm) {
      return dataForm.dataForm;
    } else {
      return {};
    }
  }
);
