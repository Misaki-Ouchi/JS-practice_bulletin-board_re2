import { logInAction } from "./actions";

export const LogIn = (email, password) => {
  return async (dispatch, getState) => {
    const state = getState();
    const isLoggedIn = state.users.isLoggedIn;

    if (!isLoggedIn) {
      const url = 'http://localhost:3000/api/get/users'

      const response = await fetch(url)
        .then((res) => res.json())
        .catch(() => null);
      
      const userId = response[1].user_id
      const userName = response[1].name

      dispatch(
        logInAction({
          isLoggedIn: true,
          userId: userId,
          userName: userName,
        })
      );

      console.log(userId)
    }
  };
};
