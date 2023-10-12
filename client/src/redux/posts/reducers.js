import * as Actions from "./actions";
import initialState from "./../store/initialState";

export const PostsReducer = (state = initialState.posts, action) => {
  switch (action.type) {
    // case Actions.Update:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };

    case Actions.Posts:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.Posts_Return:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
