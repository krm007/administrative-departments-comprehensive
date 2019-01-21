import { all, call, put, takeEvery } from "redux-saga/effects";
import service from "../../request/Service";
import { Action } from "redux-action";
import { setOrgList, tableDataSource } from "../action/Actions";
import { getOrgList, getTableDataSource } from "../action/ActionSaga";
import { FormStructure } from "../../typings/tablePropsData";
import { message } from "antd";

/**
 * 获取输入存入srote
 */
function* getTableDataSaga(
  action: Action<{
    url: string;
    params: object;
    formStructure: FormStructure[];
    status?: boolean;
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
    if (structures && action.payload.status) {
      for (const structure of structures) {
        if (structure.url) {
          const response = yield call(service.post, structure.url);
          formData[structure.value] = response.data;
        }
      }
      yield put(tableDataSource({ data: tableList, formData, status: true }));
    } else {
      yield put(tableDataSource({ data: tableList, formData, status: false }));
    }
  } catch (e) {
    yield put(
      tableDataSource({
        data: {},
        formData: new Map(),
        status: true
      })
    );
  }
}

function* getOrgListSaga(action: Action<any>) {
  try {
    const res = yield call(service.post, "/yiLiaoJiGou/getYiLiaoJiGou");
    yield put(setOrgList(res.data));
  } catch (e) {
    message.error("机构数据请求失败");
  }
}
/**
 * 监听全局getTableDataSource的action
 */
function* watchFetchTableData() {
  yield takeEvery(getTableDataSource, getTableDataSaga);
}
/**
 * 监听全局getTableDataSource的action
 */
function* watchOrgList() {
  yield takeEvery(getOrgList, getOrgListSaga);
}
/**
 * 将多个asgas合并，并导出
 */
export default function* sagas() {
  yield all([watchFetchTableData(), watchOrgList()]);
}
