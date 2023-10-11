import { createSelector } from "reselect";

const usersSelector = (state) => state.users

// storeで管理しているstateを参照する関数
// reselectというnpmモジュールを使用
export const getUserId = createSelector(
  [usersSelector],
  state => state.userId
)

export const getUserName = createSelector(
  [usersSelector],
  state => state.userName
)
