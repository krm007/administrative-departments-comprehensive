import { all, call, put, takeEvery } from "redux-saga/effects";
import service from "../../request/Service";
import { Action } from "redux-action";
import { tableDataSource } from "../action/Actions";
import { getTableDataSource } from "../action/ActionSaga";
import { FormStructure } from "../../typings/tablePropsData";

/**
 * 获取输入存入srote
 */
function* getTableDataSaga(
  action: Action<{
    url: string;
    params: object;
    formStructure: FormStructure[];
  }>
) {
  let tableList;
  const formData: any = {};
  try {
    if (action.payload.url) {
      const res = yield call(
        service.post,
        action.payload.url,
        {},
        {
          params: action.payload.params
        }
      );
      tableList = res.data;
    }
    const structures = action.payload.formStructure;
    if (structures) {
      for (const structure of structures) {
        if (structure.url) {
          const response = yield call(service.post, structure.url);
          formData[structure.value] = response.data;
        }
      }
    }
    const orgList = yield call(service.post, "/yiLiaoJiGou/getYiLiaoJiGou");
    formData.orgList = orgList.data;
    yield put(tableDataSource({ data: tableList, formData }));
  } catch (e) {
    yield put(
      tableDataSource({
        data: {},
        formData: new Map()
      })
    );
  }
}
/**
 * 监听全局getTableDataSource的action
 */
function* watchFetchTableData() {
  yield takeEvery(getTableDataSource, getTableDataSaga);
}
/**
 * 将多个asgas合并，并导出
 */
export default function* sagas() {
  yield all([watchFetchTableData()]);
}
