import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import Router from "./Router";

export const Comments = createContext();
export const Titles = createContext();
export const Likes = createContext();

const App = () => {
  const [comments, setComments] = useState([]);
  const [titles, setTitles] = useState([]);
  const [likes, setLikes] = useState([]);
  // 投稿データ取得
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/get/comments")
      .then((res) => setComments(res.data))
      .catch((error) => console.log(error));
  }, [setComments]);
  // タイトル一覧データ取得
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/get/titles")
      .then((res) => setTitles(res.data))
      .catch((error) => console.log(error));
  }, [setTitles]);
  // お気に入り情報取得
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/get/likes")
      .then((res) => setLikes(res.data))
      .catch((error) => console.log(error));
  }, [setLikes]);

  return (
    <Comments.Provider value={comments}>
      <Titles.Provider value={titles}>
        <Likes.Provider value={likes}>
          <Router />
        </Likes.Provider>
      </Titles.Provider>
    </Comments.Provider>
  );
};

export default App;
