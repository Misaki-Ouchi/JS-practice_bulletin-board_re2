export const LOG_IN = "LOG_IN"
export const logInAction = (userState) => {
  return {
    type: "LOG_IN",
    payload: {
      isLoggedIn: true,
      userId: userState.userId,
      userName: userState.userName
    }
  }
}

export const LOG_OUT = "LOG_OUT"
export const logOutAction = (userState) => {
  return {
    type: "LOG_OUT",
    payload: {
      isLoggedIn: false,
      userId: "",
      userName: "ゲスト"
    }
  }
}
