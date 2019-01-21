import { fromJS } from "immutable";
import { AnyAction } from "redux";
import { handleActions } from "redux-actions";
import { combineReducers } from "redux-immutable";
import { LOGIN, LOGOUT, SETORGLIST, SETTABLEDATASOURCE } from "../ActionTypes";
import { Action } from "redux-action";

/**
 * 登录或退出
 */
const loginOrLogoutReducer = handleActions<any>(
  {
    [LOGIN]: (state, action: AnyAction) => {
      return state.set("user", fromJS(action.payload));
    },
    [LOGOUT]: (state, action: AnyAction) => {
      return state.set("user", fromJS({}));
    }
  },
  fromJS({ user: {} })
);
/**
 * 设置表格数据
 */
const tableDataResource = handleActions<any>(
  {
    [SETTABLEDATASOURCE]: (
      state,
      action: Action<{ data: any; formData: any; status: boolean }>
    ) => {
      if (action.payload.status) {
        return state.set("dataResource", fromJS(action.payload));
      } else {
        const params = action.payload;
        params.formData = state.get("dataResource").get("formData");
        return state.set("dataResource", fromJS(params));
      }
    }
  },
  fromJS({ dataResource: {} })
);
/**
 * 设置机构列表
 */
const orgList = handleActions<any>(
  {
    [SETORGLIST]: (state, action: AnyAction) => {
      return state.set("orgList", fromJS(action.payload));
    }
  },
  fromJS({ orgList: [] })
);
/**
 * redux-immutable提供一个combineReducers()函数，
 * 将stroe中最外层的reducer中的state转化为immutable对象
 * （这里涉及到reducer的拆分，拆分用到了与redux中同名的combineReducers()方法
 */
export default combineReducers({
  loginOrLogoutReducer,
  tableDataResource,
  orgList
});
