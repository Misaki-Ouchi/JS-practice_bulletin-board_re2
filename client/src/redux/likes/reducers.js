import * as Actions from "./actions";
import initialState from "../store/initialState";

export const LikesReducer = (state = initialState.likes, action) => {
  switch (action.type) {
    case Actions.FETCH_LIKES:
      return {
        ...state,
        list: [...action.payload],
      };
    case Actions.LIKES_UP:
      return {
        ...state,
        ...action.payload
      };
    case Actions.LIKES_UP_RETURN:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
