import { createSelector } from "reselect";

const usersSelector = (state) => state.users

export const getUserId = createSelector(
  [usersSelector],
  state => state.userId
)

export const getUserName = createSelector(
  [usersSelector],
  state => state.userName
)

export const getUserEmail = createSelector(
  [usersSelector],
  state => state.userEmail
)
