export const FETCH_LIKES = "FETCH_LIKES"
export const fetchLikesAction = (likes) => {
  return {
    type: "FETCH_LIKES",
    payload: likes
  }
}

export const LIKES_UP = "LIKES_UP"
export const likesUpAction = (date) => {
  return {
    type: "LIKES_UP",
    payload: {
      isLikedUp: true
    }
  }
}

export const LIKES_UP_RETURN = "LIKES_UP_RETURN"
export const likedUpReturnAction = (userState) => {
  return {
    type: "LIKES_UP_RETURN",
    payload: {
      isLikedUp: false
    }
  }
}
