import React, { useEffect, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import Router from "./Router";

import { postsReturnAction } from "./redux/posts/actions";
import { fetchComments } from "./redux/comments/operations";
import { fetchTitles } from "./redux/titles/operations";
import { fetchLikes } from "./redux/likes/operations";
import { likedUpReturnAction } from "./redux/likes/actions";
import { getComments } from "./redux/comments/selectors";
import { getTitles } from "./redux/titles/selectors";
import { getLikes } from "./redux/likes/selectors";
import { getUpdate } from "./redux/posts/selectors";

export const Comments = createContext();
export const Titles = createContext();
export const Likes = createContext();

const App = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state); // storeのstateを保存
  const comments = getComments(selector);
  const titles = getTitles(selector);
  const likes = getLikes(selector);
  const isPosted = getUpdate(selector);
  const isLikedUp = selector.likes.isLikedUp;

  // 投稿データ取得
  useEffect(() => {
    dispatch(fetchComments());
    dispatch(postsReturnAction());
  }, [isPosted, dispatch]);

  // タイトル一覧データ取得
  useEffect(() => {
    dispatch(fetchTitles());
    dispatch(postsReturnAction());
  }, [isPosted, dispatch]);

  // お気に入り情報取得
  useEffect(() => {
    dispatch(fetchLikes());
    dispatch(likedUpReturnAction());
  }, [isLikedUp, dispatch]);

  return (
    <>
      {comments.length !== 0 && titles.length !== 0 && (
        <Comments.Provider value={comments}>
          <Titles.Provider value={titles}>
            <Likes.Provider value={likes}>
              <Router />
            </Likes.Provider>
          </Titles.Provider>
        </Comments.Provider>
      )}
    </>
  );
};

export default App;
