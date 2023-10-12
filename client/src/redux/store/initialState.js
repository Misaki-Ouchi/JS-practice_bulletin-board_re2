const initialState = {
  users: {
    isLoggedIn: false,
    userId: "",
    userName: "ゲスト",
    userEmail: ""
  },
  posts: {
    isPosted: false
  },
  comments: {
    list: []
  },
  titles: {
    list: []
  },
  likes: {
    isLikedUp: false,
    list: []
  },
}

export default initialState
