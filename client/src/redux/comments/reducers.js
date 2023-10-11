import * as Actions from "./actions";
import initialState from "../store/initialState";

export const CommentsReducer = (state = initialState.comments, action) => {
  switch (action.type) {
    case Actions.Comments_Up:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
