import { createSelector } from "reselect";

const updateSelector = (state) => state.posts

export const getUpdate = createSelector(
  [updateSelector],
  state => state.isPosted
)
