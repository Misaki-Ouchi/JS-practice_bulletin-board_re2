import { createSelector } from "reselect";

const usersSelector = (state) => state.users

// storeで管理しているstateを参照する関数
export const getUserId = createSelector(
  [usersSelector],
  state => state.userId
)

export const getUserName = createSelector(
  [usersSelector],
  state => state.userName
)
