import React, { useState, useEffect, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Router from "./Router";
import { postsReturnAction } from "./redux/posts/actions";
import { likedUpReturnAction } from "./redux/likes/actions";
import { fetchComments } from "./redux/comments/operations";
import { getComments } from "./redux/comments/selectors";
import Dummy from "./dummy";

export const Comments = createContext();
export const Titles = createContext();
export const Likes = createContext();

const App = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state); // storeのstateを保存
  const comments1 = getComments(selector)

  const isPosted = selector.posts.isPosted;
  const isLiked = selector.likes.isLiked;

  const [comments, setComments] = useState([]);
  const [titles, setTitles] = useState([]);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    dispatch(fetchComments)
  },[])
  console.log(comments1)

  // 投稿データ取得
  useEffect(() => {
    if (isPosted) {
      axios
        .get("http://localhost:3000/api/get/comments")
        .then((res) => setComments(res.data))
        .catch((error) => console.log(error))
        .then(dispatch(postsReturnAction()))
        .then(console.log(isPosted))
    }
  }, [isPosted, dispatch]);

  // タイトル一覧データ取得
  useEffect(() => {
    if (isPosted) {
      axios
        .get("http://localhost:3000/api/get/titles")
        .then((res) => setTitles(res.data))
        .catch((error) => console.log(error))
        .then(dispatch(postsReturnAction()));
    }
  }, [isPosted, dispatch]);

  // お気に入り情報取得
  useEffect(() => {
    if (isLiked) {
      axios
        .get("http://localhost:3000/api/get/likes")
        .then((res) => setLikes(res.data))
        .catch((error) => console.log(error))
        .then(dispatch(likedUpReturnAction()));
    }
  }, [isLiked, dispatch]);

  return (
    <>
    <Comments.Provider value={comments1}>
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
