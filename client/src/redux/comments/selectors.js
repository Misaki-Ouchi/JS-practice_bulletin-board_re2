import { createSelector } from "reselect";

const commentsSelector = (state) => state.comments

export const getComments = createSelector(
  [commentsSelector],
  state => state.list
)
