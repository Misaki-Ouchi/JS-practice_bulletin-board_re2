import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import Header from "./Header";
import WriteNewTitle from "./WriteNewTitle";
import ThreadTitles from "./ThreadTitles";
import ThreadsAreas from "./ThreadsAreas";
import ThreadComments from "./ThreadComments";
import NewComments from "./NewComments";
import ShowNewComments from "./ShowNewComments";
import SideMenus from "./SideMenus";
import Footer from "./Footer";

export const Comments = createContext();
export const Titles = createContext();

// 投稿時に、titlesの数を取得して+1をboard_idとしてcommentsに格納

// titlesの最後のID取得（titlesLength）→新タイトルのIDの値
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
    <>
      <Header />
      <main>
        <SideMenus />
        <WriteNewTitle />
        <Comments.Provider value={comments}>
          <Titles.Provider value={titles}>
            <ThreadTitles />
            <ThreadsAreas count="4" />
          </Titles.Provider>
        </Comments.Provider>
      </main>
      <Footer />
    </>
  );
};

export default App;
