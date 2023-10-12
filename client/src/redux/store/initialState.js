const initialState = {
  users: {
    isLoggedIn: false,
    userId: "",
    userName: "ゲスト"
  },
  posts: {
    isPosted: true
  },
  likes: {
    isLikedUp: true
  },
  comments: {
    list: []
  },
  // titles: {
  //   id: "",
  //   title: "",
  //   count: "",
  //   post_time: ""
  // },
  // likes: {
  //   id: "",
  //   user_id: "",
  //   title_id: ""
  // },
}

export default initialState
