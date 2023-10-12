import * as Actions from "./actions"; // actionを全てインポート
import initialState from "./../store/initialState";

// 第一引数にstate、第二引数にactionがreturnした値
export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.LOG_IN: // ActionsのTypeに応じてstateをどう変更するか決める
      return {
        ...state,
        ...action.payload,
      };
    case Actions.LOG_OUT:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
