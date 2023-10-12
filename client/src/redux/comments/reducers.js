import * as Actions from "./actions";
import initialState from "../store/initialState";

export const CommentsReducer = (state = initialState.comments, action) => {
  switch (action.type) {
    case Actions.FETCH_COMMENTS:
      return {
        ...state,
        list: [...action.payload]
        // スプレッド構文にすることでメモリ情報が書き変わって更新を検知
      };
    default:
      return state;
  }
};
