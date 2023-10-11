export const titlesUp = "titlesUp"
export const titlesUpAction = (userState) => {
  return {
    type: "titlesUp",
    payload: {
      id: userState.id,
      title: userState.title,
      count: userState.count,
      post_time:userState.post_time
    }
  }
}
