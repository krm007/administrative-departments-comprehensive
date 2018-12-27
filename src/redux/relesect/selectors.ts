import { createSelector } from "reselect";
import TableDataConfig from "../../config/TableDataConfig";
import MixTableDataConfig from "../../config/MixTableDataConfigs";

const getTableData = (state: any) =>
  state.get("tableDataResource").get("dataResource");
// 获取转换的数据
export const getTransformData = createSelector(
  [getTableData],
  data => {
    let dataSource = TableDataConfig.get(data.get("type"));
    if(!dataSource){
        dataSource = MixTableDataConfig.get(data.get("type"))
    }
    const tableValue = data.get("data");
    if (dataSource) {
      const changeData = dataSource.map((value, index: number) => {
        value.value = tableValue.get(value.sign);
        value.key = index;
        return value;
      });
      return changeData;
    } else {
      return [];
    }
  }
);
