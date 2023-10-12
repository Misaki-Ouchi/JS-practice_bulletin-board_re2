import React, { useState, useEffect, useCallback, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Router from "./Router";
import { postsReturnAction } from "./redux/posts/actions";
// import { likedUpReturnAction } from "./redux/likes/actions";
import { fetchComments } from "./redux/comments/operations";
import { getComments } from "./redux/comments/selectors";

export const Comments = createContext();
export const Titles = createContext();
export const Likes = createContext();

const App = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state); // storeのstateを保存
  const comments = getComments(selector)

  const [isPosted, setIsPosted] = useState(selector.posts.isPosted);
  // const isPosted = selector.posts.isPosted;
  // const isLiked = selector.likes.isLiked;

  const [titles, setTitles] = useState([]);
  const [likes, setLikes] = useState([]);

  // 投稿データ取得
  useEffect(() => {
    dispatch(fetchComments())
  },[dispatch])


  // タイトル一覧データ取得
  useEffect(() => {
    // if (isPosted) {
      axios
        .get("http://localhost:3000/api/get/titles")
        .then((res) => setTitles(res.data))
        .catch((error) => console.log(error))
        // .then(dispatch(postsReturnAction()));
    // }
  }, []);

  // お気に入り情報取得
  useEffect(() => {
    // if (isLiked) {
      axios
        .get("http://localhost:3000/api/get/likes")
        .then((res) => setLikes(res.data))
        .catch((error) => console.log(error))
        // .then(dispatch(likedUpReturnAction()));
    // }
  }, []);

  return (
    <>
    <Comments.Provider value={comments}>
      <Titles.Provider value={titles}>
        <Likes.Provider value={likes}>
          <Router />
        </Likes.Provider>
      </Titles.Provider>
    </Comments.Provider>
    </>
  );
};

export default App;
