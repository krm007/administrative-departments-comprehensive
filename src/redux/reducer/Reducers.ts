import { fromJS } from "immutable";
import { AnyAction } from "redux";
import { handleActions } from "redux-actions";
import { combineReducers } from "redux-immutable";
import { LOGIN, LOGOUT, SETTABLEDATASOURCE } from "../ActionTypes";

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
const tableDataResource = handleActions<any>(
  {
    [SETTABLEDATASOURCE]: (state, action: AnyAction) => {
      return state.set("dataResource", fromJS(action.payload));
    }
  },
  fromJS({ dataResource: [] })
);
/**
 * redux-immutable提供一个combineReducers()函数，
 * 将stroe中最外层的reducer中的state转化为immutable对象
 * （这里涉及到reducer的拆分，拆分用到了与redux中同名的combineReducers()方法
 */
export default combineReducers({
  loginOrLogoutReducer,
  tableDataResource
});
