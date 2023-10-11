import { commentsUpAction } from "./actions";

export const commentsUp = () => {
  return async (dispatch, getState) => {
    const url = "http://localhost:3000/api/get/comments";

    const response = await fetch(url)
      .then((res) => res.json())
      .catch(() => null);

    dispatch(
      commentsUpAction({
        comments: response
      })
    );
  };
};
