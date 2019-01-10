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
  let res;
  let formData: any;
  try {
    res = yield call(
      service.post,
      action.payload.url,
      {},
      {
        params: action.payload.params
      }
    );
    const structure = action.payload.formStructure;
    for (let i = 0; i < structure.length; i++) {
      const response = yield call(service.post, structure[i].url);
      formData[structure[i].value] = response.data;
    }
    yield put(tableDataSource({ data: res.data, formData }));
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
