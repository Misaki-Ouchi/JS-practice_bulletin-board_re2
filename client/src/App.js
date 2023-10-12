import React, { useState, useEffect, createContext, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Router from "./Router";
// import { postsReturnAction } from "./redux/posts/actions";
// import { likedUpReturnAction } from "./redux/likes/actions";
import { fetchComments } from "./redux/comments/operations";
import { fetchTitles } from "./redux/titles/operations";
import { fetchLikes } from "./redux/likes/operations";
import { getComments } from "./redux/comments/selectors";
import { getTitles } from "./redux/titles/selectors";
import { getLikes } from "./redux/likes/selectors";

export const Comments = createContext();
export const Titles = createContext();
export const Likes = createContext();

const App = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state); // storeのstateを保存
  const comments = getComments(selector)
  const titles = getTitles(selector)
  const likes = getLikes(selector)

  const [isPosted, setIsPosted] = useState(selector.posts.isPosted);
  // const isPosted = selector.posts.isPosted;
  // const isLiked = selector.likes.isLiked;

  // 投稿データ取得
  useEffect(() => {
    dispatch(fetchComments())
  },[dispatch])
  
  // タイトル一覧データ取得
  useEffect(() => {
    dispatch(fetchTitles())
  },[dispatch])
  
  // お気に入り情報取得
  useEffect(() => {
    dispatch(fetchLikes())
  },[dispatch])


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
