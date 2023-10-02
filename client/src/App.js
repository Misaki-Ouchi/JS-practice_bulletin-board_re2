import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import MainPage from "./MainPage";

export const Comments = createContext();
export const Titles = createContext();

const App = () => {
  const [comments, setComments] = useState([]);
  const [titles, setTitles] = useState([]);
  // 投稿データ取得
  useEffect(() => {
    const url = "http://localhost:3000/api/get/comments";
    axios
      .get(url)
      .then((res) => setComments(res.data))
      .catch((error) => console.log(error));
  }, [setComments]);
  // タイトル一覧データ取得
  useEffect(() => {
    const url = "http://localhost:3000/api/get/titles";
    axios
      .get(url)
      .then((res) => setTitles(res.data))
      .catch((error) => console.log(error));
  }, [setTitles]);

  return (
    <Comments.Provider value={comments}>
      <Titles.Provider value={titles}>
        <MainPage />
      </Titles.Provider>
    </Comments.Provider>
  );
};

export default App;
