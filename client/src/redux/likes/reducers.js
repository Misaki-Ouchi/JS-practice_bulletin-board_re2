import * as Actions from "./actions";
import initialState from "../store/initialState";

export const LikesReducer = (state = initialState.likes, action) => {
  switch (action.type) {
    case Actions.LikesUp:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
