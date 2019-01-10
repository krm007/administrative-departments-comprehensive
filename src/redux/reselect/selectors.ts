import { createSelector } from "reselect";

const getTableData = (state: any) =>
  state.get("tableDataResource").get("dataResource");
/**
 * 获取表格数据
 */
export const getTransformTableData = createSelector(
  [getTableData],
  data => {
    const dataTable = data.get("data");
    if (dataTable) {
      return dataTable.toJS();
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
    const dataForm = data.get("formData");
    if (dataForm) {
      return dataForm.toJS();
    } else {
      return {};
    }
  }
);
