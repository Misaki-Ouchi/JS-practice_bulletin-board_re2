const initialState = {
  users: {
    isLoggedIn: false,
    userId: "",
    userName: "ゲスト"
  },
  comments: {
    comments: ""
    // id: "",
    // title_id: "",
    // name: "",
    // email: "",
    // message: "",
    // time: ""
  },
  titles: {
    id: "",
    title: "",
    count: "",
    post_time: ""
  },
  likes: {
    id: "",
    user_id: "",
    title_id: ""
  },
}

export default initialState
