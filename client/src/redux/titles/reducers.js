import * as Actions from "./actions";
import initialState from "../store/initialState";

export const TitlesReducer = (state = initialState.titles, action) => {
  switch (action.type) {
    case Actions.FETCH_TITLES:
      return {
        ...state,
        list: [...action.payload]
      };
    default:
      return state;
  }
};
