export const Posts = "Posts"
export const postsAction = (userState) => {
  return {
    type: "Posts",
    payload: {
      isPosted: true
    }
  }
}

export const Posts_Return = "Posts_Return"
export const postsReturnAction = (userState) => {
  return {
    type: "Posts_Return",
    payload: {
      isPosted: false
    }
  }
}
