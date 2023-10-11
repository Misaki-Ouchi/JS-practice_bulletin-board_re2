export const Comments_Up = "Comments_Up"
export const commentsUpAction = (useState) => {
  return {
    type: "Comments_Up",
    payload: {
      comments: useState.comments
      // id: useState.id,
      // title_id: useState.title_id,
      // name: useState.name,
      // email: useState.email,
      // message: useState.message,
      // time: useState.time
    }
  }
}
