export const likesUp = "likesUp"
export const likesUpAction = (userState) => {
  return {
    type: "likesUp",
    payload: {
      id: userState.id,
      user_id: userState.user_id,
      title_id: userState.title_id
    }
  }
}
