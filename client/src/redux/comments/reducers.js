import * as Actions from "./actions";
import initialState from "../store/initialState";

export const CommentsReducer = (state = initialState.comments, action) => {
  switch (action.type) {
    case Actions.FETCH_COMMENTS:
      return {
        ...state,
        // スプレッド構文にすることでメモリ情報が書き変わって更新を検知
        list: [...action.payload]
      };
    default:
      return state;
  }
};
