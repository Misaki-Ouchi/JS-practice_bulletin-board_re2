import { createSelector } from "reselect";

const titlesSelector = (state) => state.titles

export const getTitles = createSelector(
  [titlesSelector],
  state => state.list
)
