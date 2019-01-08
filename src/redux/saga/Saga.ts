import { all, call, put, takeEvery } from "redux-saga/effects";
import service from "../../request/Service";
import { Action } from "redux-action";
import { tableDataSource } from "../action/Actions";
import { getTableDataSource } from "../action/ActionSaga";
/**
 * 获取输入存入srote
 */
function* getTableDataSaga(action: Action<any>) {
  let res;
  let resLast;
  try {
    res = yield call(
      service.post,
      action.payload.url,
      {},
      {
        params: action.payload.params
      }
    );

    resLast = yield call(
      service.post,
      action.payload.url,
      {},
      {
        params: Object.assign(action.payload.params, {
          createTime: action.payload.timeLast
        })
      }
    );
    yield put(
      tableDataSource(
        res.data,
        resLast.data,
        action.payload.type ? action.payload.type : "no"
      )
    );
  } catch (e) {
    yield put(
      tableDataSource({}, {}, action.payload.type ? action.payload.type : "no")
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
