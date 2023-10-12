export const LikesUp = "LikesUp"
export const likesUpAction = (userState) => {
  return {
    type: "LikesUp",
    payload: {
      isLiked: true
      // id: userState.id,
      // user_id: userState.user_id,
      // title_id: userState.title_id
    }
  }
}

export const LikesUp_Return = "LikesUp_Return"
export const likedUpReturnAction = (userState) => {
  return {
    type: "LikesUp_Return",
    payload: {
      isLiked: false
    }
  }
}
